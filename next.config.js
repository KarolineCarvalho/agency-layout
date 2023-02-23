/** @type {import('next').NextConfig} */
//const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/styles/main.scss";`,
  },
};

module.exports = nextConfig;
