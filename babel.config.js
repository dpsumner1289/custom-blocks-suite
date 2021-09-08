module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        "@babel/preset-react",
        {
          pragma: "wp.element.createElement",
        },
        "@babel/preset-env",
      ],
      "minify",
      "@babel/env",
    ],
    plugins: [["@babel/transform-runtime"]],
  }
}
