/** @type {import('next').NextConfig} */
const nextConfig = {
  // Landing page murni statis: tidak ada server runtime yang diekspos,
  // permukaan serangan minimum, caching CDN maksimal.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
