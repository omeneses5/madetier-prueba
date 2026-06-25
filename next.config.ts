import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/madetier-prueba",
  assetPrefix: "/madetier-prueba",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
