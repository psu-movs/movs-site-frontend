/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'helios.psu.ru',
                port: '',
                pathname: '**',
            }
        ]
    }
};

module.exports = nextConfig;