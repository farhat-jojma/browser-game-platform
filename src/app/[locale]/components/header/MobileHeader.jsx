"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";
import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 dark:bg-black/70 h-screen">
      <div
        className="relative w-11/12 max-w-md rounded-2xl 
                   bg-white dark:bg-gray-900 border border-[#8b5cf6]/40 
                   animate-glow overflow-hidden"
      >
        {/* Barre gradient en haut */}
        <div className="h-2 w-full bg-gradient-to-r from-[#8b5cf6] via-[#7c3aed] to-[#3b82f6]" />

        <div className="p-6">
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            aria-label="Close search modal"
            className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-[#8b5cf6] transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Titre */}
          <h2 className="text-lg font-semibold text-center mb-5 text-gray-900 dark:text-white">
            <span className="text-[#8b5cf6]">🔍</span>{" "}
            {t("title", { default: "Search Games" })}
          </h2>

          {/* Input */}
          <input
            ref={inputRef}
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && go()}
            placeholder={t("placeholder")}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-base 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
          />

          {/* Bouton */}
          <button
            onClick={go}
            className="mt-6 w-full bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] 
                       hover:opacity-90 text-white rounded-xl py-3 text-base font-medium transition"
          >
            {t("button", { default: "Search" })}
          </button>
        </div>
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
        {/* Menu burger */}
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
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={29}
            className="h-[80px] w-auto"
          />
        </Link>

        {/* Bouton Search → reste toujours visible */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex-1 max-w-xl mx-2 flex items-center gap-2 rounded-lg border 
                     border-gray-300 dark:border-gray-600 
                     px-3 py-1.5 text-sm 
                     bg-white dark:bg-gray-800 
                     text-gray-700 dark:text-gray-200 
                     placeholder-gray-500 dark:placeholder-gray-400 
                     hover:bg-gray-50 dark:hover:bg-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
        >
          {t("search.placeholder")}
        </button>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Modal */}
      <MobileSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
