/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true ,
    // autorise les images distantes depuis picsum.photos
    domains: ["picsum.photos"],
  },
};

