/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.gamesonlinegratis.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,
  generateIndexSitemap: true,
  exclude: ['/404', '/_not-found'],

  // ⚡ Ici on définit les routes manuellement si besoin
  additionalPaths: async (config) => {
    const result = [];

    // tes sections principales
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/privacy-policy',
      '/terms-of-service',
      '/search',
    ];

    // locales que tu supportes
    const locales = ['en', 'fr', 'es', 'de', 'pt', 'it', "hi"]; // ✅ ajouté 'hi' pour Hindi

    staticPages.forEach((page) => {
      locales.forEach((locale) => {
        result.push({
          loc: `${config.siteUrl}/${locale}${page === '/' ? '' : page}`,
          changefreq: 'daily',
          priority: page === '/' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: locales.map((alt) => ({
            href: `${config.siteUrl}/${alt}${page === '/' ? '' : page}`,
            hreflang: alt,
          })),
        });
      });
    });

    return result;
  },
};
