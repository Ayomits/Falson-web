// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  plugins: [
    {
      src: `@/plugins/directives`,
      mode: "client",
    },
  ],
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
