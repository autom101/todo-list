const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  watch: false,
  watchOptions: {
    ignored: "**/node_modules",
  },
  entry: {
    dom: "./src/js/dom.js",
    todo: "./src/js/to-dos.js",
    project: "./src/js/projects.js",
    programLogic: "./src/js/program-logic.js",
    index: "./src/js/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-do List",
    }),
  ],
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
