const path = require("path");

const properPath = path.resolve(__dirname, "../");

module.exports = {
  context: properPath,
  entry: {
    main: "src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/static/"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  resolve: {
    extensions: [".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      assets: path.resolve(__dirname, "../assets"),
      web: path.resolve(__dirname, "../web"),
      node_modules: path.resolve(__dirname, "../node_modules"),
      src: path.resolve(__dirname, "../src"),
      actions: path.resolve(__dirname, "../src/actions"),
      components: path.resolve(__dirname, "../src/components"),
      containers: path.resolve(__dirname, "../src/containers"),
      constants: path.resolve(__dirname, "../src/constants"),
      selectors: path.resolve(__dirname, "../src/selectors"),
      types: path.resolve(__dirname, "../src/types")
    }
  }
};
