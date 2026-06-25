import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  basePath: "/madetier-prueba",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
