import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "ar", "es", "de", "it", "pt", "hi", "th", "bg", "lv", "pl"], // ✅ ajouté
  defaultLocale: "en",
});

export const config = {
  // ✅ Skip static assets (_next, images, fonts, etc.)
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/",
    "/(en|fr|ar|es|de|it|pt|hi|th|bg|lv|pl)/:path*",
  ],
};
