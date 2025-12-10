import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    REQUEST_EMAIL: process.env.REQUEST_EMAIL,
    CAPTCHA_CLIENT: process.env.CAPTCHA_CLIENT,
    CAPTCHA_SERVER: process.env.CAPTCHA_SERVER,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }

};

export default nextConfig;
