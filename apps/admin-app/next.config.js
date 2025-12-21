//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use standalone output for microservices deployment
  output: 'standalone',
  // Skip image optimization for easier deployment
  images: {
    unoptimized: true,
  },
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
