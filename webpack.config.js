const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: "./src/js/main.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js")
  }
};