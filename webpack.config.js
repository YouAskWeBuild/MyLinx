const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*.html",
          context: path.resolve(__dirname, "src"),
          force: true,
        },
        {
          from: "*.json",
          context: path.resolve(__dirname, "src"),
          force: true,
        },
      ],
    }),
  ],
};
