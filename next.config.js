const createNextIntlPlugin = require("next-intl/plugin");
const Critters = require("critters-webpack-plugin");

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  output: "standalone",

  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"],
  },

  // ✅ Add webpack customization for Critters
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new Critters({
          preload: "swap",   // Preload critical CSS with <link rel="preload">
          compress: true,    // Minify critical CSS
          pruneSource: true, // Remove inlined CSS from external stylesheet
        })
      );
    }
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
