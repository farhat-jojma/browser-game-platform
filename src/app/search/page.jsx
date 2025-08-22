import Link from "next/link";
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

  // If query looks like a section name, include that section
  const matchedSectionId = resolveSectionId(q);
  const sectionSet = matchedSectionId ? new Set(sections[matchedSectionId] || []) : new Set();

  // Try to infer a genre from query (e.g. "arcade", "puzzle")
  const genreCandidates = new Set(all.map((g) => norm(String(g.genre || ""))).filter(Boolean));
  const inferredGenres = Array.from(genreCandidates).filter(
    (g) => g && (nq === g || nq.includes(g))
  );

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

    if (inferredGenres.some((ig) => gg === ig)) score += 4; // genre hint boost
    if (tags.some((tag) => tag.includes(nq)))   score += 2; // tag boost
    if (sectionSet.has(g.id))                   score += 5; // section alias boost

    return score;
  };

  const results = all
    .map((g) => ({ ...g, _score: scoreOf(g) }))
    .filter((g) => g._score > 0)
    .sort((a, b) => b._score - a._score || a.title.localeCompare(b.title));

  const total = results.length;

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
        <div className="text-white/60 text-sm">{total} result{total === 1 ? "" : "s"}</div>
      </header>

      {total > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
    {results.map(({ _score, ...g }) => (
      <SimpleGameCard key={g.id} game={g} />
    ))}
  </div>
      ) : (
        <div className="min-h-[calc(100vh-56px)]">
    <NoResultsFull query={q} />
  </div>
      )}
    </div>
  );
}

/* ───────────── Aesthetic empty state ───────────── */

function NoResultsFull({ query }) {
  const suggestions = [
    { label: "Featured", href: "/section/featured" },
    { label: "New", href: "/section/new" },
    { label: "Trending", href: "/section/trending" },
    { label: "Arcade", href: "/section/arcade" },
    { label: "2 Player", href: "/section/multiplayer" },
    { label: "Puzzle", href: "/section/puzzle" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* content centered */}
      <div className="relative h-full w-full flex flex-col items-center justify-center p-6 text-center">
        {/* icon */}
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-white/85" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
            <path d="M20 20l-3.4-3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold">No games found</h2>
        <p className="mt-2 max-w-xl text-white/70">
          We couldn’t find results for <span className="text-white/90">“{query}”</span>. 
          Try another keyword or explore a category below.
        </p>

        {/* actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="/search" className="rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 text-sm">
            Clear search
          </a>
          <a href="/" className="rounded-full px-4 py-2 bg-violet-600 hover:bg-violet-500 text-sm font-semibold">
            Browse all games
          </a>
        </div>

        {/* quick suggestions */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
