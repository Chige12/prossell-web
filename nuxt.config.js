export default {
  mode: 'universal',
  htmlAttrs: {
    prefix: 'og: http://ogp.me/ns#'
  },
  titleTemplate: '%s - ONLINE INTERN CONTEST 2020',
  head: {
    title: 'ONLINE INTERN CONTEST 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'ビジネスコンテスト×インターンシップ。全く新しいオンラインコンテスト。参加学生でチームを結成し、企業からの課題テーマに取り組め！ 1月11日応募締切。#オンコン'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ONLINE INTERN CONTEST 2020'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://prossell.jp' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ONLINE INTERN CONTEST 2020'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ビジネスコンテスト×インターンシップ。全く新しいオンラインコンテスト。参加学生でチームを結成し、企業からの課題テーマに取り組め！ 1月11日応募締切。#オンコン'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://prossell.jp/img/OGP.png'
      }
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/ress.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
    less: [],
    stylus: []
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
