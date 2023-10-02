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
        
        const handleStorageEvents = event => {
            if (event.storageArea === obj.window.localStorage) {
                app.ports.localStorageFromJsToElm.send(myToString(obj.window.localStorage));
            }
        };

        const handlePopstateEvents = () => {
            app.ports.stringFromJsToElm.send( myToString({ url: obj.window.document.location.href }) );
        };

        const handleChangeMode = event => {
            app.ports.stringFromJsToElm.send( myToString({ lightMode: event.matches ? false : true }) );
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
        
        // Susbscription
        obj.window.addEventListener('storage', handleStorageEvents, false);
        obj.window.addEventListener('popstate', handlePopstateEvents, false);
        obj.window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChangeMode);        
        app.ports.setLocalStorageItem.subscribe(handleSetLocalStorageItemEvent);

        return {
            send : dataAsString => { app.ports.stringFromJsToElm.send( myToString(dataAsString) ) },
            receive : app.ports.stringFromElmToJs,
            unmount : () => {

                // Unsusbscription
                obj.window.removeEventListener('storage', handleStorageEvents, false);
                obj.window.removeEventListener('popstate', handlePopstateEvents, false);
                obj.window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChangeMode);        
                app.ports.setLocalStorageItem.unsubscribe(handleSetLocalStorageItemEvent);

                // Kill the Elm app
                app.ports.unmount.send(null);
                app = null;

            }
        }
    }
}}