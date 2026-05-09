import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Render deploys via `next start`; standalone keeps the server self-contained.
  output: "standalone",

  // Silence the "multiple lockfiles" workspace-root warning. The repo's
  // own package-lock.json lives here.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Image optimization for /public/photos/* webp assets and any future
  // remote images. Sized to match the photo factory's 1200/1920/2400 outputs.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2400],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
