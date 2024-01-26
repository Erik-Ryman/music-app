/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
