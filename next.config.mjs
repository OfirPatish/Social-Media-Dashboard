/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Add this section for Cloudflare Pages
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.output.webassemblyModuleFilename = "chunks/[id].wasm";
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
      };
    }
    return config;
  },
};

export default nextConfig;
