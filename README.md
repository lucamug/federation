# Module Federation

## How to use

Run the following commands in the root directory.

```bash
yarn
yarn start
```

`app1`, `app2` and `app3` are independently deployed apps:

- `app1`: http://localhost:3001 (React)
- `app2`: http://localhost:3002 (React)
- `app3`: http://localhost:3003 (Elm)

Check out this link below for more examples:

[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)

## Notes by Luca

To avoid issues with Netskope

export NODE_TLS_REJECT_UNAUTHORIZED=0; npm install --save elm-webpack-loader

Instal `elm-watch` with

```
npm install -g elm-watch@1.2.0-beta.3
```

Install Elm globally with

```
npm install -g @lydell/elm
```

### To develop the Elm app

```
cd app3
elm-watch hot
```

This will start a server at http://localhost:8002/public/index-for-elm-watch.html

Run `cmd/build` from app3 to generate a new elm.js file.

Note that Elm use `this` to expose the global `Elm` variable, instead of `window`.

This get solved with `app3/cmd/minify-elm.js`.
See https://discourse.elm-lang.org/t/what-i-ve-learned-about-minifying-elm-code/7632

# Instructions

To start Elm as microfrontend use the global variable `ElmMFE` instead of `Elm`.

For example:

```JavaScript
Elm.Main.init();
```

`init` can be called without any argument, in this case default values will be used and the Elm application will be appended to the body element.

## Flags


It is more likely that some argument is used and the call to `init` is assigned to a variable for future interactions:

```JavaScript
app = Elm.Main.init({
    node: node,
    flags: {
        language: 'ja-JP',
        user: 'taro.tanaka'
    }
});
```

`flags` are values to be passed at start so that the Elm application knows these value as soon as possible.

The same values can also be passed later, either because they were not available at initialization time or because they changed while the Elm app is active.

To do so you can pass these values using `send`:

```JavaScript
// Only valid values will be considered.
// `null`, for example, will be ignored.
app.send(null);

// `language` is a valid key
app.send({ language: "it-IT" });

// An object can contains multiple key/value pairs.
// 'null' as value is taken in consideration, case by case.
app.send({ language: null, user: null });

// Invalid keys will be ignored.
// Invalid type of values will be considered `null`
app.send({ a: "1", user: 2 });

// A value will be overwritten if sent multiple times
app.send({ user: "yoko.sato" });
```

This demo supports there 4 keys:

```
user
language
url
lightMode
```

Note that `url` and `lightMode` are managed by the Elm app already, so use them only if you need to overwrite the default behaviour, otherwise you can ignore them.

## Receiving data

The app can communicate to the host script if the host script subscribe to the `receive` event:

```JavaScript
const handleString = (string) => {
    console.log(`Received by the host: "${string}"`)
}
// This subscription is useful to receive data from the Elm application
app.receive.subscribe(handleString);
```

## Unmounting

When the host remove the Elm app from the page it should first unmount it:

```JavaScript
app.unmount()
// Next line is only necessary if previously there was a subscription to the `receive` event.
app.receive.unsubscribe(handleString);
app = null;
```

This is how all the code can fit together. `mount()` and `unmount()` can be called to start and stop the Elm app:

```JavaScript
let app;
const handleString = string => {
    console.log(`Received by the host: "${string}"`)
}
const changeLanguage = language => {
    app.send({ language: language });
}
const mount = () => {
    if (!app) {
        app = ElmMFE.Main.init({
          flags: 
            { user: "megumi.suzuki"
            , language: "en-GB"
            }
        });
        app.receive.subscribe(handleString);
    }
}
const unmount = () => {
    if (app) {
        app.unmount()
        app.receive.unsubscribe(handleString);
        app = null;
    }
}
const changeLanguage = language => {
    app.send({ language: language });
}

// To start
mount();
// To change language
changeLanguage("it-IT");
// To stop
unmount();
```






