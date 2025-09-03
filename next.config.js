const createNextIntlPlugin = require("next-intl/plugin");
const fs = require('fs');
const path = require('path');

const withNextIntl = createNextIntlPlugin(); // ✅ no path needed since we use default ./src/i18n/request.js

module.exports = withNextIntl({
  output: 'standalone',

  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"]
  },

  // HTTPS configuration for development
  ...(process.env.NODE_ENV === 'development' && {
    serverOptions: {
      https: {
        key: fs.readFileSync(path.join(process.cwd(), 'localhost-key.pem')),
        cert: fs.readFileSync(path.join(process.cwd(), 'localhost.pem')),
      },
    },
  }),
});
