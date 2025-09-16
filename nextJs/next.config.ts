import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  }
};

export default nextConfig;
