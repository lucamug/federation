module Helpers exposing (..)

import Codec


defaultLanguage : String
defaultLanguage =
    "en-US"


defaultToken : String
defaultToken =
    "Token not available"


type alias FlagUser =
    { user : Maybe String }


type alias FlagLanguage =
    { language : Maybe String }


type alias FlagUrl =
    { url : String }


type alias FlagLightMode =
    { lightMode : Bool }


type alias FlagToken =
    { token : String }


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


codecFlagToken : Codec.Codec FlagToken
codecFlagToken =
    Codec.object FlagToken
        |> Codec.field "token" .token Codec.string
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


updateToken : String -> { a | token : String } -> { a | token : String }
updateToken string model =
    string
        |> Codec.decodeString codecFlagToken
        |> (\res ->
                case res of
                    Ok flag ->
                        { model | token = flag.token }

                    Err _ ->
                        model
           )
