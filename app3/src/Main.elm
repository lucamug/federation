port module Main exposing (main)

import Browser
import Codec
import Dict
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Json.Decode
import Url


type alias Model =
    { counter : Int
    , user : Maybe String
    , language : String
    , url : String
    , fromJsHistory : List String
    , localStorage : List ( String, String )
    , cookies : List ( String, String )
    }


codecModel : Codec.Codec Model
codecModel =
    Codec.object Model
        |> Codec.field "counter" .counter Codec.int
        |> Codec.field "user" .user (Codec.maybe Codec.string)
        |> Codec.field "language" .language Codec.string
        |> Codec.field "url" .url Codec.string
        |> Codec.field "fromJsHistory" .fromJsHistory (Codec.list Codec.string)
        |> Codec.field "localStorage" .localStorage (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.field "cookies" .cookies (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.buildObject


type alias FlagsFromHorizon =
    { user : Maybe String
    , language : Maybe String
    }


defaultFlagsFromHorizon : FlagsFromHorizon
defaultFlagsFromHorizon =
    { user = Nothing
    , language = Nothing
    }


codecFlagsFromHorizon : Codec.Codec FlagsFromHorizon
codecFlagsFromHorizon =
    Codec.object FlagsFromHorizon
        |> Codec.optionalNullableField "user" .user Codec.string
        |> Codec.optionalNullableField "language" .language Codec.string
        |> Codec.buildObject


type alias Flags =
    { url : String
    , localStorage : String
    , cookies : String
    , flagsFromHorizon : String
    }


defaultLanguage : String
defaultLanguage =
    "en-US"


init : Flags -> ( Model, Cmd msg )
init flags =
    let
        flagsFromHorizon : FlagsFromHorizon
        flagsFromHorizon =
            flags.flagsFromHorizon
                |> Codec.decodeString codecFlagsFromHorizon
                |> Result.withDefault defaultFlagsFromHorizon
    in
    ( { counter = 0
      , user = flagsFromHorizon.user
      , language = Maybe.withDefault defaultLanguage flagsFromHorizon.language
      , url = flags.url
      , fromJsHistory = []
      , localStorage = parseLocalStorage flags.localStorage
      , cookies = parseCookies flags.cookies
      }
    , Cmd.none
    )


parseLocalStorage : String -> List ( String, String )
parseLocalStorage string =
    string
        |> Json.Decode.decodeString (Json.Decode.keyValuePairs Json.Decode.string)
        |> Result.withDefault []


parseCookies : String -> List ( String, String )
parseCookies string =
    string
        |> String.split ";"
        |> List.map
            (\item ->
                case String.split "=" item of
                    [ key, value ] ->
                        ( unsafePercentageDecode (String.trim key), unsafePercentageDecode value )

                    _ ->
                        ( "error_no_equal_sign", unsafePercentageDecode item )
            )


unsafePercentageDecode : String -> String
unsafePercentageDecode string =
    string
        |> Url.percentDecode
        |> Maybe.withDefault string


type Msg
    = ChangeCounter1 Int
    | ChangeCounter2 Int
    | StringFromJsToElm String
    | LocalStorageFromJsToElm String
    | NoOp


syncedCounterKeyName : String
syncedCounterKeyName =
    "syncedCounter"


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        ChangeCounter1 int ->
            ( { model | counter = int }, Cmd.none )

        ChangeCounter2 int ->
            -- ( { model | counter = model.counter + 1 }, Cmd.none )
            ( model, setLocalStorageItem ( syncedCounterKeyName, String.fromInt int ) )

        -- Decrement ->
        --     ( { model | counter = model.counter - 1 }, Cmd.none )
        StringFromJsToElm string ->
            let
                flagsFromHorizon : FlagsFromHorizon
                flagsFromHorizon =
                    string
                        |> Codec.decodeString codecFlagsFromHorizon
                        |> Result.withDefault defaultFlagsFromHorizon
                        |> Debug.log "xxx"
            in
            ( { model
                | fromJsHistory = string :: model.fromJsHistory
                , user =
                    case flagsFromHorizon.user of
                        Just user ->
                            Just user

                        Nothing ->
                            model.user
                , language =
                    case flagsFromHorizon.language of
                        Just language ->
                            language

                        Nothing ->
                            model.language
              }
            , Cmd.none
            )

        LocalStorageFromJsToElm string ->
            ( { model | localStorage = parseLocalStorage string }, Cmd.none )


buttonAttrs : List (Attribute msg)
buttonAttrs =
    [ Border.rounded 5
    , Background.color <| rgb 0.9 0.9 0.9
    , width <| px 40
    , height <| px 40
    ]


view : Model -> Html.Html Msg
view model =
    let
        syncedCounter =
            model.localStorage
                |> Dict.fromList
                |> Dict.get syncedCounterKeyName
                |> Maybe.andThen String.toInt
                |> Maybe.withDefault 0
    in
    layout [ padding 20, Font.size 16, Font.family [] ] <|
        column [ spacing 20, width fill ]
            [ paragraph [ Font.size 20 ] [ text "Microfrontend POC" ]
            , wrappedRow [ spacing 20 ]
                [ viewCounter model.counter ChangeCounter1
                , viewCounter syncedCounter ChangeCounter2
                ]
            , paragraph [ Font.size 20 ] [ text "Model" ]
            , Input.multiline [ width fill, Border.rounded 5 ]
                { onChange = \_ -> NoOp
                , text = Codec.encodeToString 4 codecModel model
                , placeholder = Nothing
                , label = Input.labelHidden ""
                , spellcheck = False
                }
            ]


viewCounter : Int -> (Int -> msg) -> Element msg
viewCounter counter msg =
    row
        [ spacing 10
        , padding 10
        , Background.color <| rgb255 18 147 216
        , Border.rounded 10
        ]
        [ Input.button buttonAttrs { label = el [ Font.size 30, centerX, moveUp 2 ] <| text "-", onPress = Just <| msg (counter - 1) }
        , el [ Font.size 20, Font.color <| rgb 1 1 1, width <| px 60, Font.center ] <| text <| String.fromInt counter
        , Input.button buttonAttrs { label = el [ Font.size 30, centerX, moveUp 2 ] <| text "+", onPress = Just <| msg (counter + 1) }
        ]


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions =
            \_ ->
                Sub.batch
                    [ stringFromJsToElm StringFromJsToElm
                    , localStorageFromJsToElm LocalStorageFromJsToElm
                    ]
        }


port stringFromJsToElm : (String -> msg) -> Sub msg


port localStorageFromJsToElm : (String -> msg) -> Sub msg


port setLocalStorageItem : ( String, String ) -> Cmd msg
