const ElmWrapped = 
    { init: obj => {
        const app = Elm.Main.init(
            { node: obj.node
            , flags: 
                { url: location.href
                , localStorage: myToString(localStorage)
                , cookies: document.cookie
                , flagsFromHorizon: myToString(obj.flags)
                }
            });
        app.ports.setLocalStorageItem.subscribe(keyValue => {
            localStorage.setItem(keyValue[0], keyValue[1]);
            app.ports.localStorageFromJsToElm.send(myToString(localStorage));
        });
        window.addEventListener('storage', event => {
            if (event.storageArea === localStorage) {
                app.ports.localStorageFromJsToElm.send(myToString(localStorage));
            }
        }, false);
        window.addEventListener('popstate', () => {
            app.ports.stringFromJsToElm.send( myToString({ url: location.href }) );
        });
        return {
                send : dataAsString => { app.ports.stringFromJsToElm.send( myToString(dataAsString) ) },
                receive : app.ports.stringFromElmToJs 
            };
        }
    }
    
const myToString = value => String(JSON.stringify(value))