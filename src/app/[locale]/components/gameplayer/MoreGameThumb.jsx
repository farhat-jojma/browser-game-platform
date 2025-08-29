"use client";
import { useState } from "react";
import Image from "next/image";

const GENRE_GRADIENT = {
  Arcade:      "from-amber-300 to-amber-500",
  Puzzle:      "from-sky-300 to-sky-500",
  Racing:      "from-fuchsia-300 to-fuchsia-500",
  Driving:     "from-emerald-300 to-emerald-500",
  Multiplayer: "from-violet-300 to-violet-600",
  Sports:      "from-orange-300 to-orange-500",
  Action:      "from-rose-300 to-rose-500",
  Adventure:   "from-indigo-300 to-indigo-600",
  Shooter:     "from-red-300 to-red-500",
  Brain:       "from-lime-300 to-lime-500",
  Merge:       "from-teal-300 to-teal-500",
  Stack:       "from-cyan-300 to-cyan-500",
  Platformer:  "from-yellow-300 to-yellow-500",
  Strategy:    "from-slate-300 to-slate-600",
  Retro:       "from-pink-300 to-pink-500",
  Kids:        "from-green-300 to-green-500",
  Bike:        "from-green-300 to-green-500",
  Card:        "from-purple-300 to-purple-500"
};

function gradientForGenre(genre) {
  if (!genre) return "from-amber-300 to-amber-500";
  if (GENRE_GRADIENT[genre]) return GENRE_GRADIENT[genre];
  const k = Object.keys(GENRE_GRADIENT).find(
    (x) => x.toLowerCase() === String(genre).toLowerCase()
  );
  return k ? GENRE_GRADIENT[k] : "from-amber-300 to-amber-500";
}

export default function MoreGameThumb({ image, title, genre }) {
  const [hideImage, setHideImage] = useState(false);

  return (
    <div className="relative w-24 min-w-24 aspect-video rounded-md overflow-hidden bg-white/5">
      <div
        className={[
          "absolute inset-0",
          "bg-gradient-to-b",
          gradientForGenre(genre),
        ].join(" ")}
      />
      {!!image && !hideImage && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          onError={() => setHideImage(true)}
          sizes="96px"
        />
      )}
    </div>
  );
}


