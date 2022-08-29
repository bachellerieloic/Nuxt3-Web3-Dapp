// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: [
        '~/assets/global.scss',
        '~/assets/fonts.scss',
        'vuetify/lib/styles/main.sass',
        'mdi/css/materialdesignicons.min.css',
    ],
    buildModules: ['@pinia/nuxt','@vueuse/nuxt',],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        defaultAssets: false,
        treeShake: true,
        font: {
            family: 'Poppins'
        }
    },
    alias: {
        // 'aws-amplify': 'aws-amplify/lib/',
        '@aws-amplify/core': '@aws-amplify/core/lib',
        '@aws-amplify/auth': '@aws-amplify/auth/lib',
        './runtimeConfig': './runtimeConfig.browser',
    },
})
