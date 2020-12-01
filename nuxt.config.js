export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    mode: "universal",

    head: {
        title: 'nuxt-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
            },
            {
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
            }
        ]
    },
    serverMiddleware: [
        { path: '/api', handler: '~/api/index.js' },
    ],

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/global-styles.scss'
    ],


    //You will have to add this new object if it doesn't exist already
    styleResources: {
        scss: ['./assets/styles/*.scss']
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/vee-validate', ssr: false },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: [
        '~/components',
        { path: '~/components/nav/', prefix: 'Nav' },
        { path: '~/components/fourColumns/', prefix: 'FourColumns' }

    ],


    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ["vee-validate/dist/rules"],
    },
    router: {
        linkActiveClass: 'active'
    },
    axios: {
        baseURL: 'http://elskiba.eu/cms', // Used as fallback if no runtime config is provided
        credentials: false
    },
}
