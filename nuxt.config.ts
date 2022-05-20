import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@pinia/nuxt'],
  typescript: {},
  mode: 'static',
  router: {
    base: '/your-github-repository-name/'
  }
});