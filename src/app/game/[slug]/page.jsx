import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../../data/games.json";

export async function generateStaticParams() {
  // optional, helps prebuild pages for all slugs
  return Object.keys(data.games).map((slug) => ({ slug }));
}

export default function GamePage({ params }) {
  const { slug } = params;
  const game = data.games[slug];
  if (!game) return notFound();

  // pick some "more games"
  const moreGames = Object.entries(data.games)
    .filter(([key]) => key !== slug)
    .slice(0, 8)
    .map(([key, g]) => ({ slug: key, ...g }));

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{game.title}</h1>
        <span className="text-sm text-white/60">{game.genre}</span>
      </div>

      {/* Layout: player (left) + more games (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Player area */}
        <div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[#0f131d] border border-white/10">
            {/* blurred cover as backdrop */}
            <Image
              src={game.image}
              alt=""
              fill
              className="object-cover scale-110 blur-lg opacity-30"
              priority
            />
            {/* centered "loading" UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
              <div className="text-3xl font-extrabold drop-shadow">{game.title}</div>

              {/* fake progress bar */}
              <div className="w-4/5 max-w-xl h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-1/2 bg-violet-500 animate-pulse rounded-full" />
              </div>
              <p className="text-sm text-white/70">Decompressing files...</p>
            </div>
          </div>

          {/* action bar (placeholders) */}
          <div className="mt-3 flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm rounded-lg bg-white/5 hover:bg-white/10">Like</button>
            <button className="px-3 py-1.5 text-sm rounded-lg bg-white/5 hover:bg-white/10">Comment</button>
            <button className="px-3 py-1.5 text-sm rounded-lg bg-white/5 hover:bg-white/10">Fullscreen</button>
          </div>

          {/* Description */}
          <section className="mt-6">
            <h2 className="text-lg font-semibold mb-2">About {game.title}</h2>
            <p className="text-white/75 leading-relaxed">{game.description}</p>
          </section>
        </div>

        {/* Right rail: more games */}
        <aside className="lg:sticky lg:top-20 h-max">
          <h3 className="text-sm font-semibold text-white/70 uppercase mb-3">More games</h3>
          <div className="space-y-2">
            {moreGames.map((g) => (
              <Link
                key={g.slug}
                href={`/game/${g.slug}`}
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition"
              >
                <div className="relative w-24 min-w-24 aspect-video rounded-md overflow-hidden bg-white/5">
                  <Image src={g.image} alt={g.title} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-medium leading-tight truncate">{g.title}</div>
                  <div className="text-xs text-white/50">{g.genre}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
