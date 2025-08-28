"use client";

import { useTranslations, useLocale } from "next-intl";

export default function MobileFooter() {
  const t = useTranslations("footer");
  const locale = useLocale(); // ✅ récupérer locale
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto px-4 py-4">
        <div className="text-center space-y-3">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {t("copyright", { year })}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              {t("rights")}
            </p>
          </div>

          <div className="mx-auto my-1.5 h-px w-24 bg-border/70"></div>

          <div className="mt-1 flex items-center justify-center space-x-4 text-muted-foreground/70">
            {/* icônes sociales */}
          </div>

          <div className="flex items-center justify-center whitespace-nowrap flex-wrap">
            <a
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              href={`/${locale}/privacy-policy`}  // ✅ corrigé
            >
              {t("links.privacy")}
            </a>
            <a
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              href={`/${locale}/terms-of-service`}  // ✅ corrigé
            >
              {t("links.terms")}
            </a>
            <a
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              href={`/${locale}/contact`}  // ✅ corrigé
            >
              {t("links.contact")}
            </a>
            <a
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50"
              href={`/${locale}/about`}  // ✅ corrigé
            >
              {t("links.about")}
            </a>
          </div>
        </div>
        <div className="h-2"></div>
      </div>
    </footer>
  );
}
