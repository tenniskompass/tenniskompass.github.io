import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Entfernen sobald tenniskompass.de eingerichtet ist
  basePath: '/tenniskompass',
};

export default nextConfig;
