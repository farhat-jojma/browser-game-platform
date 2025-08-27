// src/app/components/DesktopHeader.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";

function HeaderSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  const go = () => {
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    // optional blur:
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
        placeholder="Search games, genres, sections…"
        className="w-full rounded-full ring-1 outline-none py-2 pl-9 pr-20 text-sm bg-secondary ring-border focus:ring-2 focus:ring-ring placeholder-black/50 dark:placeholder-white/50"
      />
      <button
        onClick={go}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm rounded-full dark:bg-white/10 dark:hover:bg-white/20 bg-black/10 hover:bg-black/20"
      >
        Search
      </button>
    </div>
  );
}

export default function DesktopHeader({ onToggleSidebar, isSidebarOpen, bgOpacity }) {
  return (
    <div className="hidden lg:flex items-center justify-between h-full px-8 gap-3">
      {/* Toggle - Only visible on desktop */}
      <button
        onClick={onToggleSidebar}
        aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition shrink-0 dark:hover:bg-white/5 hover:bg-black/5"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <span className="text-2xl">🎮</span>
        <span className="font-semibold text-base">Browser Game Platform</span>
      </Link>

      {/* Search -> only routes to /search */}
      <div className="flex-1 max-w-xl mx-2">
        <HeaderSearch />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1">
        <ThemeToggle />
      </div>

      <div className="w-10 shrink-0" />
    </div>
  );
}