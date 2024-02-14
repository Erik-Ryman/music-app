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
  // Add this configuration
  output: {
    fileTraceDirectory: ".next/output-file-traces",
  },
};

export default nextConfig;
