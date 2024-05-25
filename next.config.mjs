/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'madrimov.uz'
			}
		]
	}
};

export default nextConfig;
