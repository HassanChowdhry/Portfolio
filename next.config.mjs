/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "maath",
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
