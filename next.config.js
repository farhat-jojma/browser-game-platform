const createNextIntlPlugin = require("next-intl/plugin");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// 👉 Wrap with both plugins
module.exports = withBundleAnalyzer(
  withNextIntl({
    output: "export",

    trailingSlash: true,
    images: {
      unoptimized: true,
      domains: ["picsum.photos"],
    },

    webpack: (config, { isServer }) => {
      // Ignore Moment.js locales (saves ~20MB)
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        })
      );

      // Disable webpack cache to prevent large cache files
      config.cache = false;

      if (!isServer) {
        config.optimization.splitChunks = {
          chunks: "all",
          minSize: 20000,
          maxSize: 250000, // ensure files stay <25MB
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            radix: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix-ui',
              chunks: 'all',
              priority: 20,
            },
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              chunks: 'all',
              priority: 20,
            },
          },
        };
      }

      return config;
    },

    // HTTPS config for dev
    ...(process.env.NODE_ENV === "development" &&
      (() => {
        const keyPath = path.join(process.cwd(), "localhost-key.pem");
        const certPath = path.join(process.cwd(), "localhost.pem");
        if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
          return {
            serverOptions: {
              https: {
                key: fs.readFileSync(keyPath),
                cert: fs.readFileSync(certPath),
              },
            },
          };
        }
        return {};
      })()),
  })
);
