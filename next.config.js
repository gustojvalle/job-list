/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withFonts(nextConfig);

