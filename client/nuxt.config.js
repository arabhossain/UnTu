export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'To-Do App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src : "~/plugins/axios"},
    {src : "~/plugins/mixins"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv'
  ],
  auth: {
    redirect: {
      login: '/login',
      home: '/dashboard',
      logout: false
    },

    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/oauth/token',
            method: 'post',
            propertyName: 'access_token'
          },
          user: {
            url: 'api/user',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  },
  axios: {
    progress: true,
    baseURL: process.env.API_URL_BROWSER,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  },
  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
