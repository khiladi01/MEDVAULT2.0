/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://medvault2-0.onrender.com/api/:path*", // backend target
      },
    ];
  },
};

export default nextConfig;
