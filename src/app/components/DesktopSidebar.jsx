// src/app/components/DesktopSidebar.jsx
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

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
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

export default function DesktopSidebar({ isOpen, desktopInGrid = false }) {
  return (
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
  );
}