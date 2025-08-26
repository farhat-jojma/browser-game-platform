// src/app/components/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../data/games.json"; // adjust the relative path if needed

// Labels/icons for known sections
const SECTION_META = {
  featured:    { label: "Featured",   icon: "⭐" },
  new:         { label: "New",        icon: "✨" },
  trending:    { label: "Trending",   icon: "🔥" },
  updated:     { label: "Updated",    icon: "🆙" },
  originals:   { label: "Originals",  icon: "🟣" },

  // game categories
  multiplayer: { label: "2 Player",   icon: "👫" },
  action:      { label: "Action",     icon: "⚔️" },
  adventure:   { label: "Adventure",  icon: "🧭" },
  sports:      { label: "Sports",     icon: "🏅" },
  driving:     { label: "Driving",    icon: "🚗" },
  racing:      { label: "Racing",     icon: "🏎️" },
  arcade:      { label: "Arcade",     icon: "🕹️" },
  puzzle:      { label: "Puzzle",     icon: "🧩" },
  shooter:     { label: "Shooter",    icon: "🎯" },
  brain:       { label: "Brain",      icon: "🧠" },
  merge:       { label: "Merge",      icon: "➕" },
  stack:       { label: "Stack",      icon: "🧱" },
  platformer:  { label: "Platformer", icon: "🎮" },
  strategy:    { label: "Strategy",   icon: "♟️" },
  rpg:         { label: "RPG",        icon: "🗺️" },
  physics:     { label: "Physics",    icon: "🧪" },
  retro:       { label: "Retro",      icon: "📼" },
  kids:        { label: "Kids",       icon: "🧒" }
};

// Build items from games.json sections
function buildItems() {
  const sections = data?.sections ?? {};
  const has = (id) => Array.isArray(sections[id]) && sections[id].length > 0;

  const items = [{ label: "Home", icon: "🏠", href: "/" }];

  if (has("new"))      items.push({ label: SECTION_META.new.label,      icon: SECTION_META.new.icon,      href: "/section/new" });
  if (has("featured")) items.push({ label: SECTION_META.featured.label, icon: SECTION_META.featured.icon, href: "/section/featured" });
  if (has("trending")) items.push({ label: SECTION_META.trending.label, icon: SECTION_META.trending.icon, href: "/section/trending" });
  if (has("updated"))  items.push({ label: SECTION_META.updated.label,  icon: SECTION_META.updated.icon,  href: "/section/updated" });
  if (has("originals"))items.push({ label: SECTION_META.originals.label,icon: SECTION_META.originals.icon,href: "/section/originals" });

  items.push({ divider: true });

  // show the rest in this order (only if present in games.json)
  const order = [
    "multiplayer", "action", "adventure", "sports",
    "driving", "racing", "arcade", "puzzle", "shooter",
    "brain", "platformer", "strategy", "rpg",
    "physics", "retro", "kids", "merge", "stack"
  ];

  for (const key of order) {
    if (has(key)) {
      const { label, icon } = SECTION_META[key] || { label: key, icon: "📁" };
      items.push({ label, icon, href: `/section/${key}` });
    }
  }

  return items;
}

export default function Sidebar({ isOpen, onClose, desktopInGrid = false }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 lg:hidden transition-opacity bg-black/40 dark:bg-black/50
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile drawer - ICON ONLY VERSION */}
      <div
        className={`fixed top-14 left-0 z-50 h-[calc(100vh-56px)] w-16
          bg-card text-foreground border-r border-border overflow-y-auto overscroll-contain sidebar-scroll
          lg:hidden transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MobileNav />
      </div>

      {/* Desktop sidebar (slides in/out on desktop based on isOpen) */}
      <aside
        className={`${
          desktopInGrid
            ? "hidden lg:block lg:sticky lg:top-14 lg:h-[calc(100vh-56px)] w-64 " +
              "bg-card text-foreground border-r border-border overflow-y-auto overscroll-contain sidebar-scroll " +
              "lg:transform lg:transition-transform lg:duration-200 " +
              (isOpen ? "lg:translate-x-0" : "lg:-translate-x-full")
            : "hidden"
        }`}
      >
        <DesktopNav />
      </aside>
    </>
  );
}

// Mobile Navigation - Icons only
function MobileNav() {
  const pathname = usePathname();
  const items = buildItems();

  return (
    <nav className="px-1 py-3">
      {items.map((it, idx) =>
        it.divider ? (
          <div key={`div-${idx}`} className="my-2 border-t border-border mx-2" />
        ) : (
          <Link
            key={it.href}
            href={it.href}
            className={`flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-lg transition group relative
              ${isActive(pathname, it.href) 
                ? "bg-black/10 dark:bg-white/10" 
                : "hover:bg-black/5 dark:hover:bg-white/5"}`}
            title={it.label} // Tooltip for accessibility
          >
            <span className="text-xl">{it.icon}</span>
            
            {/* Tooltip on hover */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
                           whitespace-nowrap z-50 dark:bg-gray-100 dark:text-gray-900">
              {it.label}
            </div>
          </Link>
        )
      )}
    </nav>
  );
}

// Desktop Navigation - Full labels
function DesktopNav() {
  const pathname = usePathname();
  const items = buildItems();

  return (
    <nav className="px-2 py-3">
      {items.map((it, idx) =>
        it.divider ? (
          <div key={`div-${idx}`} className="my-2 border-t border-border" />
        ) : (
          <Link
            key={it.href}
            href={it.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
              ${isActive(pathname, it.href) ? "bg-black/10 dark:bg-white/10" : "hover:bg-black/5 dark:hover:bg-white/5"}`}
          >
            <span className="text-xl">{it.icon}</span>
            <span className="text-sm">{it.label}</span>
          </Link>
        )
      )}
    </nav>
  );
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}