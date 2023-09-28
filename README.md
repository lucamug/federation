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