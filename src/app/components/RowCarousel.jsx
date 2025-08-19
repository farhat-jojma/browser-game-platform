"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SimpleGameCard from "./SimpleGameCard";

export default function RowCarousel({ title, items, viewMoreHref }) {
  const scrollerRef = useRef(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(false);

  // show/hide arrows based on scroll position
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

  // drag to scroll (mouse & touch)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let down = false, startX = 0, startScroll = 0;

    const onDown = (e) => {
      down = true;
      startX = "touches" in e ? e.touches[0].pageX : e.pageX;
      startScroll = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!down) return;
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      el.scrollLeft = startScroll - (x - startX);
    };
    const onUp = () => {
      down = false;
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

  const scrollStep = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = (card?.clientWidth || el.clientWidth / 3) + 16; // 16 = gap-4
    el.scrollBy({ left: dir * step * 3, behavior: "smooth" });
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

      <div className="relative">
        <Paddle side="left"  show={canL} onClick={() => scrollStep(-1)} />
        <Paddle side="right" show={canR} onClick={() => scrollStep(1)} />

        {/* Single row; items sized exactly like your old grid by using responsive basis */}
        <div
          ref={scrollerRef}
          className="flex flex-nowrap gap-4 overflow-x-auto hide-scrollbar scroll-smooth cursor-grab pr-2"
        >
          {items.map((game) => (
            <div
              key={game.id || game.slug}
              data-card
              className="
                snap-start shrink-0 min-w-0
                basis-1/2
                sm:basis-1/3
                lg:basis-1/4
                xl:basis-1/6
              "
            >
              <SimpleGameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paddle({ side, show, onClick }) {
  const base = "absolute top-0 bottom-0 w-10 z-10 flex items-center justify-center";
  const pos  = side === "left" ? "left-0" : "right-0";
  const grad =
    side === "left"
      ? "bg-gradient-to-r from-black/60 via-black/30 to-transparent"
      : "bg-gradient-to-l from-black/60 via-black/30 to-transparent";
  return (
    <button
      aria-label={side === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className={`${base} ${pos} ${grad} transition
                  ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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
