// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  experimental: {
    urlImports: ["https://themer.sanity.build/"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
