#!/usr/bin/env node
// https://discourse.elm-lang.org/t/what-i-ve-learned-about-minifying-elm-code/7632

const fs = require("fs");
const esbuild = require("esbuild");

const pureFuncs = [ "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"];

const elmCode = fs.readFileSync("temp/build-elm.js", "utf8");
const wrapperCode = fs.readFileSync("src/elm-wrapper.js", "utf8");

// Remove IIFE.
const newElmCode =
  "var scope = window;" +
  elmCode.slice(elmCode.indexOf("{") + 1, elmCode.lastIndexOf("}"));

const result = esbuild.transformSync(newElmCode + wrapperCode, {
  minify: true,
  pure: pureFuncs,
  target: "es6",
  // This enables top level minification, and re-adds an IIFE.
  format: "iife"
});


fs.writeFileSync("src/elm.js", result.code);
