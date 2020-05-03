module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/";`
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
};
