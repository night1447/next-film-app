/** @type {import('next').NextConfig} */
<<<<<<< HEAD
// const nextConfig = {
//     reactStrictMode: true,
//     i18n: {
//         locales: ['en', 'ru'],
//         defaultLocale: 'ru',
//         localeDetection: true,
//     }
// }
//
// module.exports = nextConfig
=======
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    localeDetection: true,
  }
}
>>>>>>> main

const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        localeDetection: true,
    }
})