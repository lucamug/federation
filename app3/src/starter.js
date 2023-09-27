let app;
const handleString = string => {
    console.log(`Received by the host: "${string}"`)
}
const changeLanguage = language => {
    app.send({ language: language });
}
const mount = () => {
    if (!app) {
        // Can also be initialized without arguments with `ElmMFE.Main.init()`
        // and the argument can be pussed later using `send`.
        app = ElmMFE.Main.init({
          flags: 
            { user: "megumi.suzuki"
            , language: "en-GB"
            }
        });
        // This subscription is useful to receive data from the application
        app.receive.subscribe(handleString);
        // Object can be sent this way. Only valid values will be considered.
        // `null`, for example, will be ignored.
        app.send(null);
        // Using an helper function (`language` is a valid key)
        changeLanguage("it-IT");
        // An object can contains multiple key/value pairs.
        // 'null' as value is taken in consideration, case by case.
        app.send({ language: null, user: null });
        // Invalid keys will be ingored.
        // Invalid type of values will be considered `null`
        app.send({ a: "1", user: 2 });
        // A value will be overwritten if sent multiple times
        app.send({ user: "yoko.sato" });

        window.dispatchEvent( new CustomEvent("changeUser", { detail: null }) );
        window.dispatchEvent( new CustomEvent("changeUser", { detail: "yoko.mizuno" }) );
        window.dispatchEvent( new CustomEvent("changeLanguage", { detail: "fr-FR" }) );
        window.dispatchEvent( new CustomEvent("changeMode", { detail: "dark" }) );
        window.dispatchEvent( new CustomEvent("changeMode", { detail: "light" }) );
    }
}
const unmount = () => {
    if (app) {
        app.unmount()
        app.receive.unsubscribe(handleString);
        app = null;
    }
}
