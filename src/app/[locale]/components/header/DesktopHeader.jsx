"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher"; // 👈 ajoute ton switcher

function HeaderSearch() {
  const t = useTranslations("header.search");
  const locale = useLocale();
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  const go = () => {
    const query = q.trim();
    if (!query) return;
    router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    inputRef.current?.blur();
  };

  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">
        🔍
      </span>
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder={t("placeholder")}
        className="w-full rounded-full ring-1 outline-none py-2 pl-9 pr-20 text-sm bg-secondary ring-border focus:ring-2 focus:ring-ring placeholder-black/50 dark:placeholder-white/50"
      />
      <button
        onClick={go}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm rounded-full dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20"
      >
        {t("button")}
      </button>
    </div>
  );
}

export default function DesktopHeader({ onToggleSidebar, isSidebarOpen }) {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <div className="hidden lg:flex items-center justify-between h-full px-8 gap-3">
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

      {/* Logo */}
      <Link href={`/${locale}`} className="flex items-center shrink-0">
        <Image src="/logo.png" alt="Logo" height={30} width={90} />
      </Link>

      {/* Search */}
      <div className="flex-1 max-w-xl mx-2">
        <HeaderSearch />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <LanguageSwitcher /> {/* 👈 ajouté ici */}
        <ThemeToggle />
      </div>

      <div className="w-10 shrink-0" />
    </div>
  );
}
