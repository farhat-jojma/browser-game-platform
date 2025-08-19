"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function ThumbCard({ game }) {
  // game = { slug, title, image, url, badge?: "Top rated" | "New" | ... }
  return (
    <Link
      href={game.url ?? `/game/${game.slug}`}
      className="group block relative shrink-0 w-[320px] h-[180px] rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition"
      title={game.title}
      data-card
    >
      {/* image */}
      <img
        src={game.image}
        alt={game.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* hover title gradient */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="pointer-events-none rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 opacity-0 group-hover:opacity-100 transition">
          <div className="text-sm font-semibold truncate">{game.title}</div>
        </div>
      </div>

      {/* small glowing border on hover */}
      <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 transition" />

      {/* optional badge */}
      {game.badge && (
        <span className="absolute left-2 top-2 text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-400 text-black shadow">
          {game.badge}
        </span>
      )}
    </Link>
  );
}

export default function FancyCarouselRow({ title, items, viewMoreHref }) {
  const scrollerRef = useRef(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(false);

  // update arrows visibility
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanL(el.scrollLeft > 8);
      setCanR(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [items?.length]);

  // drag to scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let isDown = false, startX = 0, startScroll = 0, moved = false;

    const onDown = (e) => {
      isDown = true;
      moved = false;
      startX = "touches" in e ? e.touches[0].pageX : e.pageX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!isDown) return;
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      const dx = x - startX;
      if (Math.abs(dx) > 3) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = (e) => {
      // prevent click-through if user dragged
      if (moved) {
        e.preventDefault?.();
        e.stopPropagation?.();
      }
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
    };
  }, []);

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = (card?.clientWidth || 320) + 12; // width + gap
    el.scrollBy({ left: dir * step * 2.5, behavior: "smooth" }); // ~2–3 cards
  };

  return (
    <section className="relative">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        {viewMoreHref && (
          <Link href={viewMoreHref} className="text-sm text-white/70 hover:text-white">
            View more
          </Link>
        )}
      </div>

      <div className="relative">
        {/* left paddle */}
        <EdgePaddle
          side="left"
          show={canL}
          onClick={() => scrollByCards(-1)}
        />
        {/* right paddle */}
        <EdgePaddle
          side="right"
          show={canR}
          onClick={() => scrollByCards(1)}
        />

        {/* scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar scroll-smooth cursor-grab pr-2"
          role="region"
          aria-label={`${title} carousel`}
        >
          {items.map((g) => (
            <ThumbCard key={g.slug || g.id} game={g} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EdgePaddle({ side, show, onClick }) {
  // gradient vertical paddle with chevron like the screenshot
  const base = "absolute top-0 bottom-0 w-11 z-10 flex items-center justify-center";
  const pos = side === "left" ? "left-0" : "right-0";
  const grad =
    side === "left"
      ? "bg-gradient-to-r from-black/60 via-black/30 to-transparent"
      : "bg-gradient-to-l from-black/60 via-black/30 to-transparent";
  return (
    <button
      aria-label={side === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className={`${base} ${pos} ${grad} border border-transparent hover:border-white/10
                  transition ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {side === "left" ? (
          <path d="M15 19L8 12l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
