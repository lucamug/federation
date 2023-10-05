const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3003,
  },
  output: {
    publicPath: "auto",
    globalObject: "this",
  },
  module: {
    rules: [],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./elm": "./src/elm",
        "./starter": "./src/starter",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
