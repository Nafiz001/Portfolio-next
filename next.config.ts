import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Serve the static portfolio (public/site) directly at "/" so the URL bar never
  // shows /site/index.html. The only Next.js route left is /admin.
  async rewrites() {
    // beforeFiles so this wins over the app/page.tsx fallback route for "/".
    return {
      beforeFiles: [{ source: '/', destination: '/site/index.html' }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
