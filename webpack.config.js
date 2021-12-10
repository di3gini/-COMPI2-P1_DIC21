const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      path: false,
      fs: false,
    },
    alias: {
      Gramatica: path.resolve(__dirname, "dist/Gramatica/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};