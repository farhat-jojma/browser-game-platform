const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  output: "standalone",

  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },

  webpack: (config) => {
    // ❌ Remove manual Critters
    return config;
  },

  async redirects() {
    return [
      {
        source: "/games/:slug/description",
        destination: "/game/:slug",
        permanent: true,
      },
      {
        source: "/game/BomberMan",
        destination: "/game/bomberman",
        permanent: true,
      },
      {
        source: "/game/GrannyHero",
        destination: "/game/granny-hero",
        permanent: true,
      },
      {
        source: "/game/SuperPix",
        destination: "/game/super-pix",
        permanent: true,
      },
    ];
  },
});
