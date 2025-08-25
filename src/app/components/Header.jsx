"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";


export default function Header({ onToggleSidebar, isSidebarOpen }) {
  const [bgOpacity, setBgOpacity] = useState(0.95);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const minOpacity = 0.2;
      const maxOpacity = 0.95;
      const clamped = Math.min(window.scrollY, maxScroll);
      const opacityRange = maxOpacity - minOpacity;
      const nextOpacity = maxOpacity - (clamped / maxScroll) * opacityRange;
      setBgOpacity(nextOpacity);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-14 backdrop-blur border-b border-white/5 transition-colors duration-300"
      style={{ backgroundColor: `rgba(18, 22, 34, ${bgOpacity})` }}
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 gap-3">
        {/* Toggle */}
        <button
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition shrink-0"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🎮</span>
          <span className="font-semibold">Browser Game Platform</span>
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
    </header>
  );
}

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
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
        🔍
      </span>
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder="Search games, genres, sections…"
        className="w-full rounded-full bg-white/5 ring-1 ring-white/10 focus:ring-white/20 outline-none py-2 pl-9 pr-20 text-sm placeholder-white/50"
      />
      <button
        onClick={go}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm rounded-full bg-white/10 hover:bg-white/20"
      >
        Search
      </button>
    </div>
  );
}
