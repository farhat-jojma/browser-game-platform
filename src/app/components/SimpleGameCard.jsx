"use client";
import Image from "next/image";
import Link from "next/link";

/** Gradient + text color per genre (badge) */
const GENRE_BADGE = {
  Arcade:      "from-amber-300   to-amber-500   text-black",
  Puzzle:      "from-sky-300     to-sky-500     text-black",
  Racing:      "from-fuchsia-300 to-fuchsia-500 text-black",
  Driving:     "from-emerald-300 to-emerald-500 text-black",
  Multiplayer: "from-violet-300  to-violet-600  text-white",
  Sports:      "from-orange-300  to-orange-500  text-black",
  Action:      "from-rose-300    to-rose-500    text-black",
  Adventure:   "from-indigo-300  to-indigo-600  text-white",
  Shooter:     "from-red-300     to-red-500     text-black",
  Brain:       "from-lime-300    to-lime-500    text-black",
  Merge:       "from-teal-300    to-teal-500    text-black",
  Stack:       "from-cyan-300    to-cyan-500    text-black",
  Platformer:  "from-yellow-300  to-yellow-500  text-black",
  Strategy:    "from-slate-300   to-slate-600   text-white",
  Retro:       "from-pink-300    to-pink-500    text-black",
  Kids:        "from-green-300   to-green-500   text-black",
  Bike:        "from-green-300   to-green-500   text-black",
};

/** Hover border color per genre (inside overlay) */
const GENRE_BORDER = {
  Arcade:      "border-amber-400",
  Puzzle:      "border-sky-400",
  Racing:      "border-fuchsia-400",
  Driving:     "border-emerald-400",
  Multiplayer: "border-violet-500",
  Sports:      "border-orange-400",
  Action:      "border-rose-400",
  Adventure:   "border-indigo-500",
  Shooter:     "border-red-400",
  Brain:       "border-lime-400",
  Merge:       "border-teal-400",
  Stack:       "border-cyan-400",
  Platformer:  "border-yellow-400",
  Strategy:    "border-slate-400",
  Retro:       "border-pink-400",
  Kids:        "border-green-400",
  Bike:        "border-green-400",
};

function badgeGradientFor(genre) {
  if (!genre) return "from-amber-300 to-amber-500 text-black";
  if (GENRE_BADGE[genre]) return GENRE_BADGE[genre];
  const k = Object.keys(GENRE_BADGE).find(
    (x) => x.toLowerCase() === String(genre).toLowerCase()
  );
  return k ? GENRE_BADGE[k] : "from-amber-300 to-amber-500 text-black";
}
function borderClassFor(genre) {
  if (!genre) return "border-amber-400";
  if (GENRE_BORDER[genre]) return GENRE_BORDER[genre];
  const k = Object.keys(GENRE_BORDER).find(
    (x) => x.toLowerCase() === String(genre).toLowerCase()
  );
  return k ? GENRE_BORDER[k] : "border-amber-400";
}

export default function SimpleGameCard({ game }) {
  const href = game.url ?? `/game/${game.id || game.slug}`;
  const badgeText = game.badge ?? game.genre;
  const gradient  = game.badgeColor || badgeGradientFor(game.badgeGenre ?? game.genre);
  const borderClr = game.badgeBorder || borderClassFor(game.badgeGenre ?? game.genre);

  return (
    <Link href={href} className="group block">
      {/* OUTER: subtle base ring (neutral) */}
      <div className="relative rounded-xl ring-1 ring-white/10 transition-colors duration-300">
        {/* INNER: content + clipping */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Image */}
          <div className="relative aspect-[16/9] w-full bg-white/5">
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          </div>

          {/* FULL 4-side border overlay on hover (matches badge color) */}
          <div
            className={[
              "pointer-events-none absolute inset-0 rounded-xl",
              "border-2 opacity-0 transition-opacity duration-200",
              "group-hover:opacity-100",
              borderClr,
            ].join(" ")}
          />

          {/* Genre/Badge — hides on hover */}
          {badgeText && (
            <span
              className={`pointer-events-none absolute left-1 top-1 sm:left-1.5 sm:top-1.5
                          rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none
                          shadow-sm ring-1 ring-black/10 bg-gradient-to-b ${gradient}
                          transition-opacity duration-200 group-hover:opacity-0`}
            >
              {badgeText}
            </span>
          )}

          {/* Simple title on hover bottom-left */}
          <div className="pointer-events-none absolute bottom-2 left-3">
            <span
              className="text-white font-semibold drop-shadow-md
                         opacity-0 translate-y-[2px]
                         transition duration-200
                         group-hover:opacity-100 group-hover:translate-y-0"
            >
              {game.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
