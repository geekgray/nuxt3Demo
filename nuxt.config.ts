// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: [
      '~/server/index.ts'
    ]
  },
  runtimeConfig: {
    // MONGO_URI: process.env.MONGO_URI,
    // JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  },
})
