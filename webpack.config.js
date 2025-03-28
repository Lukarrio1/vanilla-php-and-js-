const path = require("path");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // change to 'production' for minified output
};
