"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

function MobileSearchModal({ open, onClose }) {
  const t = useTranslations("header.search");
  const locale = useLocale();
  const router = useRouter();

  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  const go = () => {
    const query = q.trim();
    if (!query) return;
    router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    setQ("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80">
  <div className="relative w-11/12 max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-lg p-6">
    {/* Bouton fermer */}
    <button
      onClick={onClose}
      className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
    >
      <X className="w-6 h-6" />
    </button>

    {/* Titre */}
    <h2 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-gray-100">
      {t("title", { default: "Search" })}
    </h2>

    {/* Input */}
    <input
      ref={inputRef}
      autoFocus
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && go()}
      placeholder={t("placeholder")}
      className="w-full rounded-lg border px-4 py-3 text-base bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Bouton */}
    <button
      onClick={go}
      className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-base font-medium transition"
    >
      {t("button", { default: "Search" })}
    </button>
  </div>
</div>

  );
}

export default function MobileHeader({ onToggleSidebar, isSidebarOpen }) {
  const t = useTranslations("header");
  const locale = useLocale();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
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

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center shrink-0">
          <Image src="/logo.png" alt="Logo" height={30} width={90} />
        </Link>

        {/* Search Button → ouvre la modal */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex-1 max-w-xl mx-2 rounded-lg border px-3 py-1.5 text-sm text-gray-500 dark:text-gray-300 bg-secondary dark:bg-gray-800"
        >
          {t("placeholder")}
        </button>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Modal plein écran */}
      <MobileSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
