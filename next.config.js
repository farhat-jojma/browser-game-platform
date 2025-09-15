const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  output: "standalone",

  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },

  async redirects() {
    return [
      // Rediriger les anciennes descriptions vers la vraie page
      {
        source: "/games/:slug/description",
        destination: "/game/:slug",
        permanent: true,
      },

      // Forcer BomberMan → bomberman (exemples spécifiques)
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
      // 👉 Ajoute ici d’autres redirections si tu as des majuscules dans tes URLs
    ];
  },
});
