/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

module.exports = {
    ...nextTranslate({
        reactStrictMode: true,
        i18n: {
            locales: ['en', 'ru'],
            defaultLocale: 'ru',
            localeDetection: true,
        },
    }),
    images: {
        domains: ['st.kp.yandex.net'],
    },
};
