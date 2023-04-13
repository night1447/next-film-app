/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
	experimental: {
		appDir: true,
	},
});

module.exports = nextConfig;
