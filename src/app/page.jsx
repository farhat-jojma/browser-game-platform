import SimpleGameCard from "./components/SimpleGameCard";
import data from "../data/games.json";

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
      return { id: slug, url: `/game/${slug}`, ...g }; // title, image, genre...
    })
    .filter(Boolean);
}

// Build sections from JSON if provided; else auto-split all games
function buildSections(json) {
  const games = json?.games ?? {};

  // If you have a "sections" block in games.json, use it.
  // {
  //   "games": { ... },
  //   "sections": {
  //     "featured": ["snakegame","spidergame"],
  //     "new": ["neon-rider","sticky"]
  //   }
  // }
  if (json?.sections && typeof json.sections === "object") {
    return Object.entries(json.sections).map(([id, slugs]) => ({
      id,
      title: id === "featured" ? "Featured" : id === "new" ? "New" : id,
      items: slugsToItems(slugs, games),
    }));
  }

  // Fallback: show whatever exists
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
        <section key={section.id}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <a
              href={`/section/${section.id}`}
              className="text-sm text-white/70 hover:text-white"
            >
              View more
            </a>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {section.items.length > 0 ? (
              section.items.map((game) => (
                <SimpleGameCard key={game.id} game={game} />
              ))
            ) : (
              <p className="text-white/50 col-span-full">
                No games in this section yet.
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
