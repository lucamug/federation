port module Main exposing (main)

import Browser
import Codec
import Dict
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Helpers
import Html
import Http
import Json.Decode
import Random
import Url
import Uuid


version : String
version =
    "0.5"



-- About unmounting
--
-- https://gist.github.com/supermario/4c2615806c6c561a16edf5dd7208a759


type alias Model =
    { counter : Int
    , response : Maybe (Result String String)
    , user : Maybe String
    , language : String
    , url : String
    , lightMode : Bool
    , fromJsHistory : List String
    , localStorage : List ( String, String )
    , cookies : List ( String, String )
    , stringToHost : String
    , navigator : Maybe Navigator
    , getUrl : String
    , getXClientId : String
    , getXClientVersion : String
    , getXRequestId : String
    , getRiskyWithCredentials : Bool
    , token : String
    }


type EditableField
    = GetUrl String
    | GetXClientId String
    | GetXClientVersion String
    | GetXRequestId String
    | GetRiskyWithCredentials Bool
    | StringToHost String
    | Token String


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
        |> Codec.field "response" .response (Codec.maybe (Codec.result Codec.string Codec.string))
        |> Codec.field "user" .user (Codec.maybe Codec.string)
        |> Codec.field "language" .language Codec.string
        |> Codec.field "url" .url Codec.string
        |> Codec.field "lightMode" .lightMode Codec.bool
        |> Codec.field "fromJsHistory" .fromJsHistory (Codec.list Codec.string)
        |> Codec.field "localStorage" .localStorage (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.field "cookies" .cookies (Codec.list (Codec.tuple Codec.string Codec.string))
        |> Codec.field "stringToHost" .stringToHost Codec.string
        |> Codec.field "navigator" .navigator (Codec.maybe codecNavigator)
        |> Codec.field "getUrl" .getUrl Codec.string
        |> Codec.field "getXClientId" .getXClientId Codec.string
        |> Codec.field "getXClientVersion" .getXClientVersion Codec.string
        |> Codec.field "getXRequestId" .getXRequestId Codec.string
        |> Codec.field "getRiskyWithCredentials" .getRiskyWithCredentials Codec.bool
        |> Codec.field "token" .token Codec.string
        |> Codec.buildObject


httpErrorToString : Http.Error -> String
httpErrorToString httpError =
    case httpError of
        Http.BadBody string ->
            "BadBody " ++ string

        Http.BadStatus int ->
            "BadStatus" ++ String.fromInt int

        Http.BadUrl string ->
            "BadUrl " ++ string

        Http.NetworkError ->
            "NetworkError"

        Http.Timeout ->
            "Timeout"


type alias Flags =
    { url : String
    , localStorage : String
    , cookies : String
    , lightMode : Bool
    , flagsFromHorizon : String
    , navigator : String
    , millis : Int
    }


init : Flags -> ( Model, Cmd msg )
init flags =
    let
        rundomNumber : Int
        rundomNumber =
            -- Ok, not so random
            flags.millis

        currentSeed : Random.Seed
        currentSeed =
            Random.initialSeed rundomNumber

        ( newUuid, newSeed ) =
            Random.step Uuid.uuidGenerator currentSeed
    in
    ( { counter = 0
      , user = Nothing
      , language = Helpers.defaultLanguage
      , url = flags.url
      , lightMode = flags.lightMode
      , fromJsHistory = []
      , localStorage = parseLocalStorage flags.localStorage
      , cookies = parseCookies flags.cookies
      , stringToHost = "String to host"
      , navigator = Result.toMaybe (Codec.decodeString codecNavigator flags.navigator)
      , getUrl = "http://caasper-api.jpe2-caas1-beta1.caas.jpe2z.r-local.net:80/v1/management/users/tenants"
      , token = Helpers.defaultToken -- "Bearer {token}"
      , getXClientId = "portal"
      , getXClientVersion = version
      , getXRequestId = Uuid.toString newUuid
      , getRiskyWithCredentials = False
      , response = Nothing
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
        , token : String
    }


updateFlags : String -> SubModel a -> SubModel a
updateFlags string model =
    model
        |> Helpers.updateUser string
        |> Helpers.updateLanguage string
        |> Helpers.updateUrl string
        |> Helpers.updateLightMode string
        |> Helpers.updateToken string


parseLocalStorage : String -> List ( String, String )
parseLocalStorage string =
    string
        |> Json.Decode.decodeString (Json.Decode.keyValuePairs Json.Decode.string)
        |> Result.withDefault []


parseCookies : String -> List ( String, String )
parseCookies string =
    let
        trimmed : String
        trimmed =
            String.trim string
    in
    if String.isEmpty trimmed then
        []

    else
        trimmed
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
    | SendString
    | ChangeField EditableField
    | SendRequest
    | GetResponse (Result Http.Error String)


syncedCounterKeyName : String
syncedCounterKeyName =
    "syncedCounter"


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        Unmount _ ->
            ( model, Cmd.none )

        SendString ->
            ( model, stringFromElmToJs model.stringToHost )

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

        GetResponse response ->
            ( { model | response = Just (Result.mapError httpErrorToString response) }, Cmd.none )

        SendRequest ->
            let
                request =
                    if model.getRiskyWithCredentials then
                        Http.riskyRequest

                    else
                        Http.request
            in
            ( { model | response = Nothing }
            , request
                { method = "GET"
                , headers =
                    [ Http.header "Authorization" ("Bearer " ++ model.token)
                    , Http.header "X-Client-Id" model.getXClientId
                    , Http.header "X-Client-Version" model.getXClientVersion
                    , Http.header "X-Request-Id" model.getXRequestId
                    ]
                , url = model.getUrl
                , body = Http.emptyBody
                , expect = Http.expectString GetResponse
                , timeout = Nothing
                , tracker = Nothing
                }
            )

        ChangeField editableField ->
            ( case editableField of
                GetUrl string ->
                    { model | getUrl = string }

                Token string ->
                    { model | token = string }

                GetXClientId string ->
                    { model | getXClientId = string }

                GetXClientVersion string ->
                    { model | getXClientVersion = string }

                GetXRequestId string ->
                    { model | getXRequestId = string }

                GetRiskyWithCredentials bool ->
                    { model | getRiskyWithCredentials = bool }

                StringToHost string ->
                    { model | stringToHost = string }
            , Cmd.none
            )


attrsButton : List (Attribute msg)
attrsButton =
    [ Border.rounded 5
    , Background.color <| rgb 0.9 0.9 0.9
    , Font.center
    , height <| px 40
    , paddingXY 15 0
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

        attrsLabel =
            [ width <| px 150 ]

        attrsRow =
            [ paddingEach { top = 0, right = 0, bottom = 0, left = 170 }, spacing 20, width fill ]
    in
    layout [ padding 20, Font.size 16, Font.family [] ] <|
        column [ spacing 20, width fill ]
            [ row
                [ paddingEach { top = 0, right = 0, bottom = 20, left = 0 }
                , width fill
                ]
                [ paragraph [ Font.size 20 ]
                    [ text <| "Microfrontend POC " ++ version ++ " - "
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
            , row [ spacing 20, width fill ]
                [ column
                    [ spacing 10
                    , alignTop
                    , Background.color <| rgb 0.9 0.9 0.9
                    , height fill
                    , padding 20
                    ]
                    [ link attrsLink { url = "#", label = text "Home" }
                    , link attrsLink { url = "#page1", label = text "Page 1" }
                    , link attrsLink { url = "#page2", label = text "Page 2" }
                    ]
                , column [ width fill, spacing 20 ]
                    [ wrappedRow [ spacing 20 ]
                        [ viewCounter "Counter" model.counter ChangeCounter
                        , viewCounter "Synced counter" syncedCounter ChangeSyncedCounter
                        ]
                    , column [ spacing 10, width fill ]
                        [ row [ spacing 10, width fill ]
                            [ Input.text [] { label = Input.labelLeft attrsLabel (text "Url"), onChange = ChangeField << GetUrl, placeholder = Nothing, text = model.getUrl }
                            , Input.button (attrsButton ++ [ width <| px 200 ]) { label = text "Send GET request", onPress = Just SendRequest }
                            ]
                        , row attrsRow
                            [ Input.text [] { label = Input.labelLeft attrsLabel (text "Token"), onChange = ChangeField << Token, placeholder = Nothing, text = model.token }
                            , Input.text [] { label = Input.labelLeft attrsLabel (text "X-Client-Id"), onChange = ChangeField << GetXClientId, placeholder = Nothing, text = model.getXClientId }
                            ]
                        , row attrsRow
                            [ Input.text [] { label = Input.labelLeft attrsLabel (text "X-Client-Version"), onChange = ChangeField << GetXClientVersion, placeholder = Nothing, text = model.getXClientVersion }
                            , Input.text [] { label = Input.labelLeft attrsLabel (text "X-Request-Id"), onChange = ChangeField << GetXRequestId, placeholder = Nothing, text = model.getXRequestId }
                            ]
                        , row (attrsRow ++ [ height <| px 40 ])
                            [ Input.checkbox [ height <| px 20 ]
                                { onChange = ChangeField << GetRiskyWithCredentials
                                , icon = Input.defaultCheckbox
                                , checked = model.getRiskyWithCredentials
                                , label = Input.labelLeft attrsLabel (text "With Credentials")
                                }
                            ]
                        ]
                    , row [ spacing 10, width fill ]
                        [ Input.text [ width fill, height <| px 42 ] { onChange = ChangeField << StringToHost, text = model.stringToHost, placeholder = Nothing, label = Input.labelLeft attrsLabel (text "String to host") }
                        , Input.button (attrsButton ++ [ width <| px 200 ]) { label = text "Send string to host", onPress = Just SendString }
                        ]
                    ]
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


update_ : Msg -> Model_ -> ( Model_, Cmd Msg )
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
