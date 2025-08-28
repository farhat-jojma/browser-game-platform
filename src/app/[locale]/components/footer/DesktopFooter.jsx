"use client";

import { useTranslations, useLocale } from "next-intl";

export default function DesktopFooter() {
  const t = useTranslations("footer");
  const locale = useLocale(); // ✅ récupérer locale
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Copyright and branding */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {t("copyright", { year })}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              {t("slogan")}
            </p>
          </div>

          {/* Links + Socials */}
          <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-6">
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                href={`/${locale}/privacy-policy`}  // ✅ corrigé
              >
                {t("links.privacy")}
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                href={`/${locale}/terms-of-service`}  // ✅ corrigé
              >
                {t("links.terms")}
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                href={`/${locale}/contact`}  // ✅ corrigé
              >
                {t("links.contact")}
              </a>
              <a
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                href={`/${locale}/about`}  // ✅ corrigé
              >
                {t("links.about")}
              </a>
            </div>
            <div className="ml-6 pl-6 border-l-2 border-foreground/30 flex items-center space-x-4">
              {/* tes icônes sociales */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
