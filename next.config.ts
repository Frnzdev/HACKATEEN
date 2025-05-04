import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilitar o modo estrito do React (opcional)
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org", "www.thecocktaildb.com"],
  },
  // Outras configurações, se necessário
};

export default nextConfig;
