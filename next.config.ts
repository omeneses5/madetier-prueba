import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/madetier-prueba",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
