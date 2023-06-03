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
    asyncToPromises: true, // Enable async/await transformation
    optimizeFonts: true, // Optimize font loading
    optimizeImages: true, // Optimize image loading
    optimizeCss: true, // Optimize CSS
    scrollRestoration: true, // Enable scroll restoration
  },
};

module.exports = nextConfig;
