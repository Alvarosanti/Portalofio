/** @type {import('nextJs').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		domains: [ 'res.cloudinary.com' ]
	},
	reactStrictMode: false
};

module.exports = nextConfig;
