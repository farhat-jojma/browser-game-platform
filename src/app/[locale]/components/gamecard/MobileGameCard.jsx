"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { badgeGradientFor, borderClassFor } from "./gameCardUtils";

export default function MobileGameCard({ game }) {
  const t = useTranslations("genres");
  const locale = useLocale();

  const href = `/${locale}/game/${game.id || game.slug}`;
  const genre = game.badgeGenre ?? game.genre;

  let badgeText = game.badge;
  if (!badgeText && genre) {
    try {
      badgeText = t(genre.toLowerCase());
    } catch {
      badgeText = genre;
    }
  }

  const gradient = game.badgeColor || badgeGradientFor(genre);
  const borderClr = game.badgeBorder || borderClassFor(genre);

  const [imageError, setImageError] = useState(false);
  const hasImage = Boolean(game.image) && !imageError;

  return (
    <Link href={href} className="group block">
      <div className="relative rounded-lg ring-1 ring-white/10 transition-colors duration-300">
        <div className="relative overflow-hidden rounded-lg">
          {/* ✅ smaller aspect ratio for mobile */}
          <div className="relative aspect-[4/3] w-full">
            {hasImage ? (
              <>
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="50vw"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </>
            ) : (
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-b ${gradient}`}
              />
            )}
          </div>

          <div
            className={[
              "pointer-events-none absolute inset-0 rounded-lg",
              "border opacity-0 transition-opacity duration-200",
              "group-hover:opacity-100",
              borderClr,
            ].join(" ")}
          />

          {badgeText && (
            <span
              className={`absolute left-1 top-1 rounded-full px-2 py-0.5 
                          text-[9px] font-semibold leading-none
                          shadow ring-1 ring-black/10 bg-gradient-to-b ${gradient}
                          group-hover:opacity-0`}
            >
              {badgeText}
            </span>
          )}

          <div className="absolute bottom-1 left-2">
            <span
              className="text-white text-xs font-semibold drop-shadow-md
                         opacity-0 translate-y-[1px]
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
