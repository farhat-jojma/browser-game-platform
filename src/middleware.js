import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "es", "de", "it", "pt", "hi"], // ✅ ajouté
  defaultLocale: "en"
});

export const config = {
  matcher: ["/", "/(en|fr|es|de|it|pt|hi)/:path*"] // ✅ ajouté
};
