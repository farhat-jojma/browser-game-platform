import { NextResponse } from "next/server";

const supportedLocales = ["en", "fr", "es", "de", "it", "pt"];
const defaultLocale = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Si on n'est pas sur la racine "/", on laisse passer
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Détecter la locale du navigateur
  const acceptLang = request.headers.get("accept-language");
  let locale = defaultLocale;

  if (acceptLang) {
    const acceptedLanguages = acceptLang
      .split(",")
      .map(lang => lang.split(";")[0].toLowerCase())
      .map(lang => lang.split("-")[0]); // ex: "fr-FR" → "fr"

    const matchedLocale = acceptedLanguages.find(lang =>
      supportedLocales.includes(lang)
    );

    if (matchedLocale) {
      locale = matchedLocale;
    }
  }

  // Rediriger vers la locale détectée (ou par défaut)
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

// Appliquer le middleware seulement à la racine "/"
export const config = {
  matcher: ["/"],
};
