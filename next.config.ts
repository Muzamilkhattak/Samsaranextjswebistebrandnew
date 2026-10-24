import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/about/before&afterresults',
        destination: '/about/before-and-after',
      },
      {
        source: '/about/before%26afterresults',
        destination: '/about/before-and-after',
      },
      {
        source: '/before&afterresults',
        destination: '/about/before-and-after',
      },
    ];
  },
};

export default nextConfig;
