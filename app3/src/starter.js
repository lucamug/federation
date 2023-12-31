window.handleString = string => {
    console.log(`Received by the host: "${string}"`)
}
window.changeLanguage = language => {
    app.send({ language: language });
}
window.mount = (obj) => {
    if (!window.app) {
        // Can also be initialized without arguments with `ElmMFE.Main.init()`
        // and the argument can be pussed later using `send`.
        app = ElmMFE.Main.init({
          node: obj?.node,
          flags: 
            { user: typeof getMemberInfo === 'function' ? getMemberInfo() : null
            , token : typeof getTokenInfo  === 'function' ? getTokenInfo() : null
            , language: typeof getLanguageInfo  === 'function' ? getLanguageInfo() : null
            }
        });
        // This subscription is useful to receive data from the application
        window.app.receive.subscribe(handleString);
        // Object can be sent this way. Only valid values will be considered.
        // `null`, for example, will be ignored.
        window.app.send(null);
        // Using an helper function (`language` is a valid key)
        changeLanguage("it-IT");
        // An object can contains multiple key/value pairs.
        // 'null' as value is taken in consideration, case by case.
        window.app.send({ language: null, user: null });
        // Invalid keys will be ingored.
        // Invalid type of values will be considered `null`
        window.app.send({ a: "1", user: 2 });
        // A value will be overwritten if sent multiple times
        window.app.send({ user: "yoko.sato" });

        window.dispatchEvent( new CustomEvent("changeUser", { detail: null }) );
        window.dispatchEvent( new CustomEvent("changeUser", { detail: "yoko.mizuno" }) );
        window.localStorage.setItem("language","xx-05");
        window.dispatchEvent( new CustomEvent("HOST_APP_UPDATE_LANGUAGE") );
        window.dispatchEvent( new CustomEvent("changeLanguage", { detail: "fr-FR" }) );
        window.dispatchEvent( new CustomEvent("changeMode", { detail: "dark" }) );
        window.dispatchEvent( new CustomEvent("changeMode", { detail: "light" }) );
    }
}
window.unmount = () => {
    if (app) {
        app.unmount()
        app.receive.unsubscribe(handleString);
        app = null;
    }
}
