// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  modules: ["@pinia/nuxt", "@nuxt/image", "@hebilicious/vue-query-nuxt"],
  css: ["@/assets/css/main.css"],
  srcDir: "src/",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vueQuery: {
    stateKey: "vue-query-nuxt",
    autoImports: [
      "useQuery",
      "useQueries",
      "useInfiniteQuery",
      "useMutation",
      "useIsFetching",
      "useIsMutating",
      "useQueryClient",
    ],
    queryClientOptions: {
      defaultOptions: { queries: { staleTime: 5000 } },
    },
    vueQueryPluginOptions: {},
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
