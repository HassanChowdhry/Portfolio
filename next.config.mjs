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
  },
  turbopack: {},
};

export default nextConfig;
