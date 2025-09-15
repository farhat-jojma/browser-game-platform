import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr", "es", "de", "it", "pt", "hi", "th"], // ✅ added Hindi
  defaultLocale: "en",
});

export const config = {
  // ✅ Skip static assets (_next, images, fonts, etc.)
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/",
    "/(en|fr|es|de|it|pt|hi)/:path*",
  ],
};
