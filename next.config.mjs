/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/music-app",
  assetPrefix: "/music-app/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bxuirbxogqpfocuhhufx.supabase.co",
        pathname: "**",
      },
    ],
    domains: ["bxuirbxogqpfocuhhufx.supabase.co"],
  },
  experimental: {
    outputFileTracing: true,
  },

  output: "export",
};

export default nextConfig;
