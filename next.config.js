
/** @type {import("next").NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
