import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "es", "de", "it", "pt"], // ✅ ajouté
  defaultLocale: "en"
});

export const config = {
  matcher: ["/", "/(en|fr|es|de|it|pt)/:path*"] // ✅ ajouté
};
