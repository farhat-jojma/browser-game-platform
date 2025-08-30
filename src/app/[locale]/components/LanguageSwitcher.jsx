"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Fonction utilitaire pour remplacer la locale dans l'URL
  function redirectPathname(locale) {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale; // remplace la locale
    return segments.join("/");
  }

  const locales = ["en", "fr", "es", "de", "it", "pt"];

  return (
    <div className="flex gap-2 flex-wrap">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={redirectPathname(locale)}
          className="px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white/10"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
