import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // With a static export, Next.js can be deployed and hosted on any web server that can serve HTML/CSS/JS static assets.
  images: { unoptimized: true },
};

export default nextConfig;
