import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Cria a pasta "out" para o Render
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no modo estático
  },
};

export default nextConfig;