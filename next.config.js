/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    config.resolve.alias["react"] = path.resolve("./node_modules/react");
    return config;
  },
}


module.exports = nextConfig