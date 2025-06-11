// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pwa: {
    registerType: 'autoUpdate', // Автоматическое обновление service worker
    manifest: {
      name: 'My Nuxt 3 PWA',
      short_name: 'NuxtPWA',
      description: 'My awesome Nuxt 3 Progressive Web App',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    devOptions: {
      enabled: true,
      type: 'module',
    },
    client: {
      installPrompt: true,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@vee-validate/nuxt',
  ],
  css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
});
