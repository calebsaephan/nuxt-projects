import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },

    modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    ssr: true,
    nitro: {
        preset: "static",
    },
})
