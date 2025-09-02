"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher"; // 👈 ajoute ton switcher

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";



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
    <div className="relative w-full">
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder={t("placeholder")}
        className="w-full rounded-lg ring-1 outline-none py-1.5 pl-3 pr-9 text-sm bg-secondary ring-border focus:ring-2 focus:ring-ring placeholder-black/50 dark:placeholder-white/50"
      />
      <button
        onClick={go}
        aria-label={t("button")}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
      >
        🔍
      </button>
    </div>
  );
}



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
    </div>
  );
}
