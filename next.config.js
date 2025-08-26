/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: {
    // autorise les images distantes depuis picsum.photos
    domains: ["picsum.photos"],
  },
};
