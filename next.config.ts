import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ['en', 'ru', 'kk'],  
    defaultLocale: 'en',     
  },
};

// next.config.ts
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
};

export default nextConfig;
