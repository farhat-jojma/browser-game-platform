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
  bike:        { icon: "🚲" },
  card:        { icon: "🃏" },
  drawing:     { icon: "🎨" }
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
    "arcade","puzzle","shooter","brain","platformer","strategy",
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





function DesktopNav() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale(); // ✅ locale active
  const items = buildItems(t, locale);

  return (
    <nav className="px-2 py-3">
      {items.map((it, idx) =>
        it.divider ? (
          <div key={`div-${idx}`} className="my-2 border-t-4 border-border" />
        ) : (
          <Link
            key={it.href}
            href={it.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
              ${isActive(pathname, it.href)
                ? "bg-black/10 dark:bg-white/10"
                : "hover:bg-black/5 dark:hover:bg-white/5"}`}
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
          ? "hidden lg:block lg:fixed lg:top-14 lg:h-[calc(100vh-56px)] w-64 bg-card text-foreground border-r border-border overflow-y-auto overscroll-contain sidebar-scroll lg:transform lg:transition-transform lg:duration-200 " +
            (isOpen ? "lg:translate-x-0" : "lg:-translate-x-full")
          : "hidden"
      }`}
    >
      <DesktopNav />
    </aside>
  );
}