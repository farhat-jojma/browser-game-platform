import Link from "next/link";
import data from "../data/games.json";
import RowCarousel from "./components/RowCarousel";

// Turn a list of slugs into card props from games.json
function slugsToItems(slugs = [], games = {}) {
  return slugs
    .map((slug) => {
      const g = games[slug];
      if (!g) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(`[pages] Missing game in games.json: ${slug}`);
        }
        return null;
      }
      return { id: slug, url: `/game/${slug}`, ...g };
    })
    .filter(Boolean);
}

// Build sections from JSON if provided; else auto-split all games
function buildSections(json) {
  const games = json?.games ?? {};

  if (json?.sections && typeof json.sections === "object") {
    return Object.entries(json.sections).map(([id, slugs]) => ({
      id,
      title: id === "featured" ? "Featured" : id === "new" ? "New" : id,
      items: slugsToItems(slugs, games),
    }));
  }

  const all = Object.entries(games).map(([slug, g]) => ({
    id: slug,
    url: `/game/${slug}`,
    ...g,
  }));

  return [
    { id: "featured", title: "Featured", items: all.slice(0, 6) },
    { id: "new", title: "New", items: all.slice(6, 12) },
  ];
}

export default function Pages() {
  const sections = buildSections(data);

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <RowCarousel
          key={section.id}
          title={section.title}
          items={section.items}
          viewMoreHref={`/section/${section.id}`}
        />
      ))}
    </div>
  );
}
