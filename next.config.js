/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,   // génère un dossier /out
  images: {
    // autorise les images distantes depuis picsum.photos
    domains: ["picsum.photos"],
    unoptimized: true 
  }
};

module.exports = nextConfig;

