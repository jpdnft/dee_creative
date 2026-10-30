import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingIncludes: {
    "/api/design-library-images/*": ["./assets/design-library/**/*.webp"],
  },
};

export default nextConfig;
