/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://medvaultservice.onrender.com/api/:path*", // backend target
      },
    ];
  },
};

export default nextConfig;
