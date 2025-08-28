const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin(); // ✅ no path needed since we use default ./src/i18n/request.js

module.exports = withNextIntl({
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["picsum.photos"]
  }
});
