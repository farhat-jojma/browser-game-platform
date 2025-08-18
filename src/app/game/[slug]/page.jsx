import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GamePlayer from "../../components/GamePlayer";
import data from "../../../data/games.json";

export async function generateStaticParams() {
  return Object.keys(data?.games ?? {}).map((slug) => ({ slug }));
}

export default function GamePage({ params }) {
  const { slug } = params;
  const game = data?.games?.[slug];
  if (!game) return notFound();

  // ✅ prefer explicit playPath from JSON; fallback to /games/<slug>/index.html
  const playerSrc = game.playPath || `/games/${slug}/index.html`;

  const moreGames = Object.entries(data.games)
    .filter(([s]) => s !== slug)
    .slice(0, 8)
    .map(([s, g]) => ({ slug: s, ...g }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{game.title}</h1>
        <span className="text-sm text-white/60">{game.genre}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-4">
          <GamePlayer src={playerSrc} title={game.title} />
          <section className="mt-2">
            <h2 className="text-lg font-semibold mb-2">About {game.title}</h2>
            <p className="text-white/75 leading-relaxed">{game.description}</p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-20 h-max">
          <h3 className="text-sm font-semibold text-white/70 uppercase mb-3">More games</h3>
          <div className="space-y-2">
            {moreGames.map((g) => (
              <Link key={g.slug} href={`/game/${g.slug}`} className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition">
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
