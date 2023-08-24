/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn2.thecatapi.com",
      "30.media.tumblr.com",
      "27.media.tumblr.com",
      "24.media.tumblr.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
