/* eslint @typescript-eslint/no-var-requires: off */
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const DEMO_PATH = path.resolve(__dirname, "demo");
const DEMO_DIST_PATH = path.resolve(__dirname, "demo_dist");

module.exports = {
  entry: DEMO_PATH,

  output: {
    filename: "bundle.js",
    path: DEMO_DIST_PATH,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(DEMO_PATH, "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
};
