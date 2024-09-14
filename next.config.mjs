import bundleAnalyzer from '@next/bundle-analyzer';
import nextPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/chat",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "https", hostname: "**" }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp", "onnxruntime-node"]
  }
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const withPWA = nextPWA({
  dest: "public"
});

// Apply the wrappers and export the config
export default withBundleAnalyzer(withPWA(nextConfig));