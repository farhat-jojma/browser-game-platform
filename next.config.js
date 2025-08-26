// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ✅ active le static export
  images: {
    unoptimized: true // ✅ évite l’Image Optimization de Next (non supportée par Pages)
  }
};

module.exports = nextConfig;
