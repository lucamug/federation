let app;
const handleString = (string) => {
    console.log(`Received by the host: "${string}"`)
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
        // Object can be sent this way. Only valid object will be considered.
        // `null` will be ignored.
        app.send(null);
        // `language` is a valid key
        app.send({ language: "it-IT" });
        // An object can contain multiple keys. Is values are set to `null`,
        // a default value will be used.
        app.send({ language: null, user: null });
        // A value will be overwritten if sent multiple times
        app.send({ user: "yoko.sato" });
        // Invalid keys or invalid values will be ignored
        app.send({ a: "1", b: "2" });
    }
}
const unmount = () => {
    if (app) {
        app.unmount()
        app.receive.unsubscribe(handleString);
        app = null;
    }
}
