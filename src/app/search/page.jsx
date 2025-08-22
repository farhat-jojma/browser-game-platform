import SimpleGameCard from "../components/SimpleGameCard";
import data from "../../data/games.json";

/** Normalize string (lowercase + strip diacritics) */
const norm = (s = "") =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

/** Section aliases (en + fr) */
const SECTION_ALIASES = {
  featured:  ["featured", "à la une", "a la une"],
  new:       ["new", "nouveaux", "nouveau"],
  trending:  ["trending", "trending now", "tendance", "tendances"],
  updated:   ["updated", "mise a jour", "mise à jour", "maj"],
  originals: ["originals", "originaux", "originales"],
};

/** Build a reverse lookup for section id by free-text query */
function resolveSectionId(query) {
  const q = norm(query);
  for (const [id, aliases] of Object.entries(SECTION_ALIASES)) {
    if (aliases.some((a) => q.includes(norm(a)))) return id;
  }
  return null;
}

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q ?? "").trim();

  const gamesMap = data?.games ?? {};
  const sections = data?.sections ?? {};
  const all = Object.entries(gamesMap).map(([slug, g]) => ({
    id: slug,
    url: `/game/${slug}`,
    title: g.title,
    image: g.image,
    genre: g.genre,
    tags: g.tags || [], // optional in games.json
  }));

  if (!q) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-extrabold">Search</h1>
        <p className="text-white/70">Type something in the search bar to find games.</p>
      </div>
    );
  }

  const nq = norm(q);

  // If user typed something like "tendances" or "mise à jour", include that section
  const matchedSectionId = resolveSectionId(q);
  const sectionSet = matchedSectionId ? new Set(sections[matchedSectionId] || []) : new Set();

  // Try to infer a genre from query (e.g. "arcade", "puzzle")
  const genreCandidates = new Set(
    all.map((g) => norm(String(g.genre || ""))).filter(Boolean)
  );
  const inferredGenres = Array.from(genreCandidates).filter((g) => g && (nq === g || nq.includes(g)));

  // Scoring function: higher = more relevant
  const scoreOf = (g) => {
    const t = norm(g.title);
    const s = norm(g.id);
    const gg = norm(String(g.genre || ""));
    const tags = (g.tags || []).map(norm);

    let score = 0;
    if (t.startsWith(nq)) score += 6;
    if (t.includes(nq))   score += 4;
    if (s.includes(nq))   score += 3;
    if (gg.includes(nq))  score += 3;

    // If query hints a known genre, boost those
    if (inferredGenres.some((ig) => gg === ig)) score += 4;

    // Tags light boost
    if (tags.some((tag) => tag.includes(nq))) score += 2;

    // If matched section aliases, boost members of that section
    if (sectionSet.has(g.id)) score += 5;

    return score;
  };

  // Keep anything that matches at least something
  const results = all
    .map((g) => ({ ...g, _score: scoreOf(g) }))
    .filter((g) => g._score > 0)
    .sort((a, b) => b._score - a._score || a.title.localeCompare(b.title));

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">Results for “{q}”</h1>
          <p className="text-white/60 text-sm">
            {matchedSectionId && <>Includes section: <span className="text-white/80 capitalize">{matchedSectionId}</span>{inferredGenres.length ? " • " : ""}</>}
            {inferredGenres.length > 0 && <>Genre match: <span className="text-white/80 capitalize">{inferredGenres[0]}</span></>}
          </p>
        </div>
        <div className="text-white/60 text-sm">{results.length} result{results.length === 1 ? "" : "s"}</div>
      </header>

      {results.length > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {results.map(({ _score, ...g }) => (
            <SimpleGameCard key={g.id} game={g} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 p-8 text-center">
          <div className="text-2xl mb-2">🔎</div>
          <p className="text-white/70">No games matched your search.</p>
        </div>
      )}
    </div>
  );
}
