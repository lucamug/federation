const MSSP = 
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
        return { sendData : dataAsString => { app.ports.stringFromJsToElm.send( myToString(dataAsString) ) } };
        }
    }
    
const myToString = value => String(JSON.stringify(value))