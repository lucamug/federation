window.ElmMFE = 
{ Main: {
    init: obj => {
        
        obj = obj || {};
        obj.window = obj.window || window;
        obj.elm = obj.elm || obj.window.Elm;
        obj.node = obj.node || obj.window.document.body.appendChild(obj.window.document.createElement("div"));

        const myToString = value => String(obj.window.JSON.stringify(value));
        
        const handleSetLocalStorageItemEvent = keyValue => {
            obj.window.localStorage.setItem(keyValue[0], keyValue[1]);
            app.ports.localStorageFromJsToElm.send(myToString(obj.window.localStorage));
        };
        
        const handleStorage = event => {
            if (event.storageArea === obj.window.localStorage) {
                app.ports.localStorageFromJsToElm.send(myToString(obj.window.localStorage));
            }
        };

        const handlePopstate = () => {
            app.ports.stringFromJsToElm.send( myToString({ url: obj.window.document.location.href }) );
        };

        const handleChangeMode = event => {
            if (typeof event.detail === 'string') {
                app.ports.stringFromJsToElm.send( myToString({ lightMode: event.detail === "dark" ? false : true }) );
            } else {
                app.ports.stringFromJsToElm.send( myToString({ lightMode: !event.matches }) );
            }
        }
        
        const handleChangeUser = event => {
            app.ports.stringFromJsToElm.send( myToString({ user: event.detail }) );
        }

        const handleChangeLanguage = event => {
            app.ports.stringFromJsToElm.send( myToString({ language: event.detail }) );
        }

        let lightMode = true;
        if (obj.window.matchMedia && obj.window.matchMedia('(prefers-color-scheme: dark)').matches) {
            lightMode = false;
        }
        
        let app = obj.elm.Main.init({
            node: obj.node,
            flags: 
                { url: obj.window.location.href
                , localStorage: myToString(obj.window.localStorage)
                , cookies: obj.window.document.cookie
                , lightMode : lightMode
                , flagsFromHorizon: myToString(obj.flags)
                , navigator: myToString(
                    { language : navigator?.language
                    , languages : navigator?.languages
                    , appVersion : navigator?.appVersion
                    , platform : navigator?.platform
                    , userAgent : navigator?.userAgent
                    , vendor : navigator?.vendor
                    }
                )}
        });
        
        // Add Event Listeners
        obj.window.addEventListener('storage', handleStorage, false);
        obj.window.addEventListener('popstate', handlePopstate, false);
        obj.window.addEventListener('changeUser', handleChangeUser, false);
        obj.window.addEventListener('changeLanguage', handleChangeLanguage, false);
        obj.window.addEventListener('changeMode', handleChangeMode, false);
        obj.window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChangeMode);        
        app.ports.setLocalStorageItem.subscribe(handleSetLocalStorageItemEvent);

        return {
            send : dataAsString => { app.ports.stringFromJsToElm.send( myToString(dataAsString) ) },
            receive : app.ports.stringFromElmToJs,
            unmount : () => {

                // Remove Event Listeners
                obj.window.removeEventListener('storage', handleStorage, false);
                obj.window.removeEventListener('popstate', handlePopstate, false);
                obj.window.removeEventListener('changeUser', handleChangeUser, false);
                obj.window.removeEventListener('changeLanguage', handleChangeLanguage, false);
                obj.window.removeEventListener('changeMode', handleChangeMode, false);
                obj.window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChangeMode);        
                app.ports.setLocalStorageItem.unsubscribe(handleSetLocalStorageItemEvent);

                // Kill the Elm app
                app.ports.unmount.send(null);
                app = null;

            }
        }
    }
}}