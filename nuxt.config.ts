// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {name: "layout", mode: "out-in"}
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  modules: ["@pinia/nuxt", "@nuxt/image"],
  css: ["@/assets/css/main.css"],
  srcDir: "src/",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  logLevel: "info",
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: "NuxtLink",
        externalRelAttribute: "noopener noreferrer",
        activeClass: "nuxt-link-active",
        exactActiveClass: "nuxt-link-exact-active",
        prefetchedClass: undefined,
        trailingSlash: undefined,
      },
    },
  },
});
