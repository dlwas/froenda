module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/";`
      }
    }
  },

  configureWebpack: {},

  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};