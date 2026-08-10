/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // typedRoutes: true
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
};

export default nextConfig;
