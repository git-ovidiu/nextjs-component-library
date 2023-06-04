const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  future: {
    webpack5: true, // Enable Webpack 5
  },
  experimental: {
    modern: true, // Enable modern script deployment strategy
    polyfillsOptimization: true, // Optimize polyfills
  },
};

module.exports = nextConfig;
