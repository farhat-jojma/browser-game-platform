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

  // HTTPS configuration for development (optional if cert files exist)
  ...(process.env.NODE_ENV === 'development' && (() => {
    const keyPath = path.join(process.cwd(), 'localhost-key.pem');
    const certPath = path.join(process.cwd(), 'localhost.pem');
    const hasKey = fs.existsSync(keyPath);
    const hasCert = fs.existsSync(certPath);
    if (!hasKey || !hasCert) {
      return {};
    }
    return {
      serverOptions: {
        https: {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath),
        },
      },
    };
  })()),
});
