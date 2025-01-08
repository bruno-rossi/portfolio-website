import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
  /* other config options */
};

export default nextConfig;
