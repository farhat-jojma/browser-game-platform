"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../../../data/games.json";
import { useTranslations, useLocale } from "next-intl";

const SECTION_META = {
  featured:    { icon: "⭐" },
  new:         { icon: "✨" },
  trending:    { icon: "🔥" },
  updated:     { icon: "🆙" },
  originals:   { icon: "🟣" },
  multiplayer: { icon: "👫" },
  action:      { icon: "⚔️" },
  adventure:   { icon: "🧭" },
  sports:      { icon: "🏅" },
  driving:     { icon: "🚗" },
  racing:      { icon: "🏎️" },
  arcade:      { icon: "🕹️" },
  puzzle:      { icon: "🧩" },
  shooter:     { icon: "🎯" },
  brain:       { icon: "🧠" },
  merge:       { icon: "➕" },
  stack:       { icon: "🧱" },
  platformer:  { icon: "🎮" },
  strategy:    { icon: "♟️" },
  rpg:         { icon: "🗺️" },
  physics:     { icon: "🧪" },
  retro:       { icon: "📼" },
  kids:        { icon: "🧒" },
  card:        { icon: "🃏" },
  bike:        { icon: "🚲" },
  drawing:     { icon: "🎨" },
  girls:       { icon: "👧" }
};

function buildItems(t, locale) {
  const sections = data?.sections ?? {};
  const has = (id) => Array.isArray(sections[id]) && sections[id].length > 0;

  const items = [
    { label: t("sidebar.home"), icon: "🏠", href: `/${locale}` },
    { label: t("sidebar.allGames") || "All Games", icon: "🌐", href: `/${locale}/games` } // ✅ new
  ];

  const main = ["new", "featured", "trending", "updated", "originals"];
  for (const key of main) {
    if (has(key)) {
      items.push({
        label: t(`sidebar.${key}`),
        icon: SECTION_META[key].icon,
        href: `/${locale}/section/${key}`
      });
    }
  }

  items.push({ divider: true });

  const order = [
    "multiplayer","action","adventure","sports","driving","racing",
    "arcade","puzzle","shooter","brain","platformer","strategy", "girls", 
    "rpg","physics","retro","kids","merge","stack","card","bike","drawing"
  ];
  for (const key of order) {
    if (has(key)) {
      items.push({
        label: t(`sidebar.${key}`),
        icon: SECTION_META[key].icon,
        href: `/${locale}/section/${key}`
      });
    }
  }

  return items;
}

function normalize(path) {
  return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
}

function isActive(pathname, href) {
  const p = normalize(pathname);
  const h = normalize(href);

  if (/^\/[a-z]{2}$/.test(h)) {
    return p === h;
  }

  return p === h || p.startsWith(h + "/");
}



function MobileNav() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale(); // ✅ locale active
  const items = buildItems(t, locale);

  return (
    <nav className="px-1 py-3 overflow-x-hidden bg-background">
      {items.map((it, idx) =>
        it.divider ? (
          <div key={`div-${idx}`} className="my-2 border-t-4 border-border mx-2" />
        ) : (
          <Link
            key={it.href}
            href={it.href}
            className={`flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-lg transition group relative overflow-hidden
              ${isActive(pathname, it.href)
                ? "bg-black/10 dark:bg-white/10"
                : "hover:bg-black/5 dark:hover:bg-white/5"}`}
            title={it.label}
          >
            <span className="text-xl">{it.icon}</span>
            <div className="hidden md:block absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
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

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 lg:hidden transition-opacity bg-black/40 dark:bg-black/50
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-14 left-0 z-50 h-[calc(100vh-56px)] w-16
          bg-card text-foreground border-r border-border overflow-y-auto overflow-x-hidden overscroll-contain sidebar-scroll touch-pan-y
          lg:hidden transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MobileNav />
      </div>
    </>
  );
}
