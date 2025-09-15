const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin(); // ✅ i18n plugin

module.exports = withNextIntl({
  output: "standalone",

  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },

  async redirects() {
    return [
      // Redirige toutes les anciennes descriptions vers la bonne page de jeu
      {
        source: "/games/:slug/description",
        destination: "/game/:slug",
        permanent: true, // 301 permanent (SEO-friendly)
      },
    ];
  },
});
