/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    deviceSizes: [342, 500, 780],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};

module.exports = nextConfig;
