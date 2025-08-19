"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SimpleGameCard from "./SimpleGameCard";

export default function GameCarouselRow({ title, items, viewMoreHref }) {
  const scrollerRef = useRef(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(false);

  // pointer-drag to scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false, startX = 0, startScroll = 0;
    const onDown = (e) => {
      isDown = true;
      startX = "touches" in e ? e.touches[0].pageX : e.pageX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!isDown) return;
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      el.scrollLeft = startScroll - (x - startX);
    };
    const onUp = () => {
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

  // update arrow enabled states
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

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    // estimate card width incl. gap (Tailwind gap-4 => 16px)
    const card = el.querySelector("[data-card]");
    const delta = (card?.clientWidth || 260) + 16;
    el.scrollBy({ left: dir * delta * 3, behavior: "smooth" }); // 3 cards per click
  };

  return (
    <section className="relative">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        {viewMoreHref && (
          <Link href={viewMoreHref} className="text-sm text-white/70 hover:text-white">
            View more
          </Link>
        )}
      </div>

      {/* edge fade + hidden scrollbar */}
      <div className="relative edge-fade">
        {/* scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab pb-1"
          role="region"
          aria-label={`${title} carousel`}
        >
          {items.map((game) => (
            <div
              key={game.id || game.slug}
              data-card
              className="snap-start shrink-0 w-[260px]" // card width
            >
              <SimpleGameCard game={game} />
            </div>
          ))}
        </div>

        {/* arrows */}
        <Arrow side="left"  show={canL} onClick={() => scrollByCards(-1)} />
        <Arrow side="right" show={canR} onClick={() => scrollByCards(1)} />
      </div>
    </section>
  );
}

function Arrow({ side, show, onClick }) {
  return (
    <button
      aria-label={`${side === "left" ? "Previous" : "Next"} games`}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-1" : "right-1"
      } p-2 rounded-full bg-black/60 hover:bg-black/70 border border-white/10 shadow-lg transition
         disabled:opacity-0 disabled:pointer-events-none`}
      disabled={!show}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {side === "left" ? (
          <path d="M15 19L8 12l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
