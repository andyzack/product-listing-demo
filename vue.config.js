module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/product-listing-demo/" : "/",

  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-svg-loader")
      .loader("vue-loader-v16")
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }]
        }
      });
  }
};
