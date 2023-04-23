/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    reactStrictMode: false,
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        localeDetection: true,
    },
})