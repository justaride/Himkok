/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {},
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/pdfs/:path*',
                destination: '/pdfs/:path*',
            },
        ];
    },
};

export default nextConfig;
