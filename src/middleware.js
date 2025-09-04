import { NextResponse } from 'next/server';

const supportedLocales = ['en', 'fr', 'es', 'de', 'it', 'pt']; // Ajoutez ici toutes vos locales supportées
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Si la requête n'est pas pour la racine, ne rien faire
  if (pathname !== '/') {
    return NextResponse.next();
  }

  // Récupérer la locale du navigateur
  const acceptLang = request.headers.get('accept-language');
  let locale = defaultLocale;

  if (acceptLang) {
    const acceptedLanguages = acceptLang.split(',').map(lang => lang.split(';')[0].toLowerCase());
    const matchedLocale = acceptedLanguages.find(lang => supportedLocales.includes(lang));
    if (matchedLocale) {
      locale = matchedLocale;
    }
  }

  // Rediriger vers la locale détectée ou par défaut
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

// Configurer le matcher pour que le middleware s'applique uniquement à la racine
export const config = {
  matcher: '/',
};
