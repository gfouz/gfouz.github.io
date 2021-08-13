export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

 
  router: {
            base: 'gfouz.github.io'
    },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gfouz.github.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
       '~assets/scss/globals/colors.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 
    '~assets/scss/globals/colors.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxt/content',
    '@nuxtjs/style-resources'
  ],
     styleResources: {
    scss: ['./assets/scss/globals/*.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
