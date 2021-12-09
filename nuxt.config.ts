import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    "~/assets/css/destyle.css",
    "~/assets/css/common.scss"
  ],
  buildModules: [
    "@nuxtjs/style-resources",
  ],
})
