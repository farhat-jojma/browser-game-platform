"use client";

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations, useLocale } from "next-intl";

export default function MobileHeader({ onToggleSidebar, isSidebarOpen }) {
  const t = useTranslations("header");
  const locale = useLocale(); // 👈 récupère la locale active

  return (
    <div className="lg:hidden flex items-center justify-between h-full px-4 sm:px-6 gap-3">
      {/* Toggle */}
      <button
        onClick={onToggleSidebar}
        aria-label={isSidebarOpen ? t("sidebar.hide") : t("sidebar.show")}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition shrink-0 dark:hover:bg-white/5 hover:bg-black/5"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Logo → inclut la locale */}
      <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
        <span className="text-2xl">🎮</span>
        <span className="font-semibold text-base">{t("brand")}</span>
      </Link>

      {/* Right actions */}
      <div className="flex items-center gap-1">
        <ThemeToggle />
      </div>
    </div>
  );
}
