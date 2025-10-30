import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    REQUEST_EMAIL: process.env.REQUEST_EMAIL,
    CAPTCHA_CLIENT: process.env.CAPTCHA_CLIENT,
    CAPTCHA_SERVER: process.env.CAPTCHA_SERVER,
  }
};

export default nextConfig;
