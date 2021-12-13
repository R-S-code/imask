import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      '~/components/layout',
      '~/components/pages',
      '~/components/ui'
    ]
  },
  css: [
    "~/assets/css/destyle.css",
    "~/assets/css/common.scss"
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
})
