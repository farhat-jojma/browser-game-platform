/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true ,
    // autorise les images distantes depuis picsum.photos
    domains: ["picsum.photos"],
  },
};

