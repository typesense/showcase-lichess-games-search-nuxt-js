// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    public: {
      PUBLIC_TYPESENSE_SEARCH_ONLY: process.env.TYPESENSE_READ_ONLY_API_KEY,
      PUBLIC_TYPESENSE_HOST: process.env.PUBLIC_TYPESENSE_HOST,
      PUBLIC_TYPESENSE_PORT: process.env.PUBLIC_TYPESENSE_PORT,
      PUBLIC_TYPESENSE_PROTOCOL: process.env.PUBLIC_TYPESENSE_PROTOCOL,
    },
  },
});
