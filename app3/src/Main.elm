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



-- About unmounting
--
-- https://gist.github.com/supermario/4c2615806c6c561a16edf5dd7208a759


type alias Model =
    { counter : Int
    , user : Maybe String
    , language : String
    , url : String
    , lightMode : Bool
    , fromJsHistory : List String
    , localStorage : List ( String, String )
    , cookies : List ( String, String )
    , string : String
    , navigator : Maybe Navigator
    }


type alias Navigator =
    { language : String
    , languages : List String
    , appVersion : Maybe String
    , platform : String
    , userAgent : String
    , vendor : Maybe String
    }


codecNavigator : Codec.Codec Navigator
codecNavigator =
    Codec.object Navigator
        |> Codec.field "language" .language Codec.string
        |> Codec.field "languages" .languages (Codec.list Codec.string)
        |> Codec.optionalNullableField "appVersion" .appVersion Codec.string
        |> Codec.field "platform" .platform Codec.string
        |> Codec.field "userAgent" .userAgent Codec.string
        |> Codec.optionalNullableField "vendor" .vendor Codec.string
        |> Codec.buildObject


codecModel : Codec.Codec Model
codecModel =
    Codec.object Model
        |> Codec.field "counter" .counter Codec.int
        |> Codec.field "user" .user (Codec.maybe Codec.string)
        |> Codec.field "language" .language Codec.string
        |> Codec.field "url" .url Codec.string
        |> Codec.field "lightMode" .lightMode Codec.bool
        |> Codec.field "fromJsHistory" .fromJsHistory (Codec.list Codec.string)
        |> Codec.field "localStorage" .localStorage (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.field "cookies" .cookies (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.field "string" .string Codec.string
        |> Codec.field "navigator" .navigator (Codec.maybe codecNavigator)
        |> Codec.buildObject


type alias FlagUser =
    { user : Maybe String }


type alias FlagLanguage =
    { language : Maybe String }


type alias FlagUrl =
    { url : String }


type alias FlagLightMode =
    { lightMode : Bool }


codecFlagUser : Codec.Codec FlagUser
codecFlagUser =
    Codec.object FlagUser
        |> Codec.field "user" .user (Codec.maybe Codec.string)
        |> Codec.buildObject


codecFlagLanguage : Codec.Codec FlagLanguage
codecFlagLanguage =
    Codec.object FlagLanguage
        |> Codec.field "language" .language (Codec.maybe Codec.string)
        |> Codec.buildObject


codecFlagUrl : Codec.Codec FlagUrl
codecFlagUrl =
    Codec.object FlagUrl
        |> Codec.field "url" .url Codec.string
        |> Codec.buildObject


codecFlagLightMode : Codec.Codec FlagLightMode
codecFlagLightMode =
    Codec.object FlagLightMode
        |> Codec.field "lightMode" .lightMode Codec.bool
        |> Codec.buildObject


updateUser : String -> { a | user : Maybe String } -> { a | user : Maybe String }
updateUser string model =
    string
        |> Codec.decodeString codecFlagUser
        |> (\res ->
                case res of
                    Ok flag ->
                        { model | user = flag.user }

                    Err _ ->
                        model
           )


updateLanguage : String -> { a | language : String } -> { a | language : String }
updateLanguage string model =
    string
        |> Codec.decodeString codecFlagLanguage
        |> (\res ->
                case res of
                    Ok flag ->
                        { model | language = Maybe.withDefault defaultLanguage flag.language }

                    Err _ ->
                        model
           )


updateUrl : String -> { a | url : String } -> { a | url : String }
updateUrl string model =
    string
        |> Codec.decodeString codecFlagUrl
        |> (\res ->
                case res of
                    Ok flag ->
                        { model | url = flag.url }

                    Err _ ->
                        model
           )


updateLightMode : String -> { a | lightMode : Bool } -> { a | lightMode : Bool }
updateLightMode string model =
    string
        |> Codec.decodeString codecFlagLightMode
        |> (\res ->
                case res of
                    Ok flag ->
                        { model | lightMode = flag.lightMode }

                    Err _ ->
                        model
           )


type alias Flags =
    { url : String
    , localStorage : String
    , cookies : String
    , lightMode : Bool
    , flagsFromHorizon : String
    , navigator : String
    }


defaultLanguage : String
defaultLanguage =
    "en-US"


init : Flags -> ( Model, Cmd msg )
init flags =
    ( { counter = 0
      , user = Nothing
      , language = defaultLanguage
      , url = flags.url
      , lightMode = flags.lightMode
      , fromJsHistory = []
      , localStorage = parseLocalStorage flags.localStorage
      , cookies = parseCookies flags.cookies
      , string = "String to Host"
      , navigator = Result.toMaybe (Codec.decodeString codecNavigator flags.navigator)
      }
        |> updateFlags flags.flagsFromHorizon
    , stringFromElmToJs "mounted"
    )


type alias SubModel a =
    { a
        | language : String
        , lightMode : Bool
        , url : String
        , user : Maybe String
    }


updateFlags : String -> SubModel a -> SubModel a
updateFlags string model =
    model
        |> updateUser string
        |> updateLanguage string
        |> updateUrl string
        |> updateLightMode string


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
    = NoOp
    | Unmount ()
    | ChangeCounter Int
    | ChangeSyncedCounter Int
    | StringFromJsToElm String
    | LocalStorageFromJsToElm String
    | ChangeString String
    | SendString String


syncedCounterKeyName : String
syncedCounterKeyName =
    "syncedCounter"


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        Unmount _ ->
            ( model, Cmd.none )

        ChangeString string ->
            ( { model | string = string }, Cmd.none )

        SendString string ->
            ( model, stringFromElmToJs string )

        ChangeCounter int ->
            ( { model | counter = int }, Cmd.none )

        ChangeSyncedCounter int ->
            ( model, setLocalStorageItem ( syncedCounterKeyName, String.fromInt int ) )

        StringFromJsToElm string ->
            ( { model | fromJsHistory = string :: model.fromJsHistory }
                |> updateFlags string
            , Cmd.none
            )

        LocalStorageFromJsToElm string ->
            ( { model | localStorage = parseLocalStorage string }, Cmd.none )


attrsButton : List (Attribute msg)
attrsButton =
    [ Border.rounded 5
    , Background.color <| rgb 0.9 0.9 0.9
    , width <| px 40
    , height <| px 40
    ]


attrsLink : List (Attribute msg)
attrsLink =
    [ Font.color <| rgb 0 0 0.8
    , Font.underline
    ]


view : Model -> Html.Html Msg
view model =
    let
        syncedCounter : Int
        syncedCounter =
            model.localStorage
                |> Dict.fromList
                |> Dict.get syncedCounterKeyName
                |> Maybe.andThen String.toInt
                |> Maybe.withDefault 0
    in
    layout [ padding 20, Font.size 16, Font.family [] ] <|
        column [ spacing 20, width fill ]
            [ row
                [ paddingEach { top = 0, right = 0, bottom = 20, left = 0 }
                , width fill
                ]
                [ paragraph [ Font.size 20 ]
                    [ text "Microfrontend POC 0.5 - "
                    , text
                        (model.url
                            |> Url.fromString
                            |> Maybe.andThen .fragment
                            |> Maybe.withDefault "Home"
                            |> (\name ->
                                    if String.isEmpty name then
                                        "Home"

                                    else
                                        name
                               )
                        )
                    ]
                , row [ alignRight, spacing 20 ]
                    [ el [] <|
                        text
                            ((if model.lightMode then
                                "Light"

                              else
                                "Dark"
                             )
                                ++ " mode"
                            )
                    , el [] <| text model.language
                    , el [] <| text <| Maybe.withDefault "Sign in" model.user
                    ]
                ]
            , row [ spacing 40, width fill ]
                [ column [ spacing 10, alignTop ]
                    [ link attrsLink { url = "#", label = text "Home" }
                    , link attrsLink { url = "#page1", label = text "Page 1" }
                    , link attrsLink { url = "#page2", label = text "Page 2" }
                    ]
                , column [ width fill, spacing 20 ]
                    [ wrappedRow [ spacing 20 ]
                        [ viewCounter "Counter" model.counter ChangeCounter
                        , viewCounter "Synced counter" syncedCounter ChangeSyncedCounter
                        ]
                    , row [ spacing 10, width fill ]
                        [ Input.text [ width fill, height <| px 42 ] { onChange = ChangeString, text = model.string, placeholder = Nothing, label = Input.labelHidden "" }
                        , Input.button [ Background.color <| rgb 0.8 0.8 0.8, height <| px 42, padding 10, Border.rounded 5 ] { label = text "Send to Host", onPress = Just <| SendString model.string }
                        ]
                    , paragraph [] [ text "Model" ]
                    , Input.multiline [ width fill, Border.rounded 5 ]
                        { onChange = \_ -> NoOp
                        , text = Codec.encodeToString 4 codecModel model
                        , placeholder = Nothing
                        , label = Input.labelHidden ""
                        , spellcheck = False
                        }
                    ]
                ]
            ]


viewCounter : String -> Int -> (Int -> msg) -> Element msg
viewCounter name counter msg =
    column [ spacing 5 ]
        [ paragraph [ Font.size 13 ] [ text name ]
        , row
            [ spacing 10
            , padding 10
            , Background.color <| rgb255 18 147 216
            , Border.rounded 10
            ]
            [ Input.button attrsButton { label = el [ Font.size 30, centerX, moveUp 2 ] <| text "-", onPress = Just <| msg (counter - 1) }
            , el [ Font.size 20, Font.color <| rgb 1 1 1, width <| px 60, Font.center ] <| text <| String.fromInt counter
            , Input.button attrsButton { label = el [ Font.size 30, centerX, moveUp 2 ] <| text "+", onPress = Just <| msg (counter + 1) }
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ unmount Unmount
        , stringFromJsToElm StringFromJsToElm
        , localStorageFromJsToElm LocalStorageFromJsToElm
        ]


port stringFromElmToJs : String -> Cmd msg


port stringFromJsToElm : (String -> msg) -> Sub msg


port localStorageFromJsToElm : (String -> msg) -> Sub msg


port setLocalStorageItem : ( String, String ) -> Cmd msg



-- UNMOUNT LOGIC


port unmount : (() -> msg) -> Sub msg


type alias Model_ =
    Maybe Model


main : Program Flags Model_ Msg
main =
    Browser.element
        { init = init_
        , view = view_
        , update = update_
        , subscriptions = subscriptions_
        }


init_ : Flags -> ( Maybe Model, Cmd msg )
init_ flags =
    init flags
        |> Tuple.mapFirst Just


update_ : Msg -> Model_ -> ( Model_, Cmd msg )
update_ msg model_ =
    case model_ of
        Just model ->
            case msg of
                Unmount () ->
                    ( Nothing, stringFromElmToJs "unmounted" )

                _ ->
                    update msg model
                        |> Tuple.mapFirst Just

        Nothing ->
            ( model_, Cmd.none )


view_ : Model_ -> Html.Html Msg
view_ model_ =
    case model_ of
        Just model ->
            view model

        Nothing ->
            Html.text ""


subscriptions_ : Model_ -> Sub Msg
subscriptions_ model_ =
    case model_ of
        Just model ->
            subscriptions model

        Nothing ->
            Sub.none
