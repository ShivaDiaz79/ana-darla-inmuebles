const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'src', 'components');
    return config;
  },
};
