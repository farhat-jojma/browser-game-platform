// src/app/components/GamePlayer.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GamePlayer({ src, title, coverSrc }) {
  const router = useRouter();
  const containerRef = useRef(null);

  const [status, setStatus] = useState("checking"); // 'checking' | 'ok' | 'missing'
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  // Prevent page scroll while user interacts with the iframe (arrows/space/page keys)
  useEffect(() => {
    const keys = new Set([
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
      "Spacebar",
    ]);
    const handler = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const active =
        el.matches(":hover, :focus-within") ||
        document.activeElement === el ||
        el.contains(document.activeElement);
      if (active && keys.has(e.key)) e.preventDefault();
    };
    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // HEAD check to avoid loading your 404 in the iframe
  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    setStarted(false);
    setLoaded(false);

    fetch(src, { method: "HEAD" })
      .then((res) => !cancelled && setStatus(res.ok ? "ok" : "missing"))
      .catch(() => !cancelled && setStatus("missing"));

    return () => {
      cancelled = true;
    };
  }, [src, reloadKey]);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div className="w-full">
      {/* === TOP TOOLBAR (outside the frame) === */}
      <div className="mb-2 flex items-center justify-end gap-2">
        <button
          onClick={() => setReloadKey((k) => k + 1)}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium
                     rounded-md bg-white/10 hover:bg-white/20 transition"
          aria-label="Reload game"
        >
          <span>↻</span> Reload
        </button>
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium
                     rounded-md bg-white/10 hover:bg-white/20 transition"
          aria-label="Enter fullscreen"
        >
          <span>⤢</span> Fullscreen
        </button>
      </div>

      {/* === PLAYER FRAME === */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black aspect-video"
        tabIndex={-1}
      >
        {/* IFRAME (only after Play Now) */}
        {status === "ok" && started && (
          <iframe
            key={reloadKey}
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; gamepad; pointer-lock; cross-origin-isolated"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        )}

        {/* Overlays */}
        {status === "checking" && (
          <Overlay coverSrc={coverSrc}>
            <Card
              title={title}
              primary={
                <div className="mt-4 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className="h-full w-1/2 bg-violet-500 animate-pulse rounded-full" />
                </div>
              }
              subtitle="Checking game files…"
            />
          </Overlay>
        )}

        {status === "ok" && !started && (
          <Overlay coverSrc={coverSrc}>
            <Card
              title={title}
              cta={
                <button
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full
                             text-base font-semibold bg-violet-600 hover:bg-violet-500
                             transition shadow-lg"
                >
                  Play Now
                </button>
              }
              subtitle="Ready when you are."
            />
          </Overlay>
        )}

        {status === "ok" && started && !loaded && (
          <Overlay coverSrc={coverSrc}>
            <Card
              title={title}
              primary={
                <div className="mt-4 flex items-center justify-center gap-2 text-white/80">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:-.2s]" />
                  <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce" />
                  <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce [animation-delay:.2s]" />
                </div>
              }
              subtitle="Loading…"
            />
          </Overlay>
        )}

        {status === "missing" && (
          <div className="absolute inset-0 grid place-items-center p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 opacity-90" />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-400/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-fuchsia-400/20 blur-3xl rounded-full" />

            <div className="relative w-full max-w-md rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-8 text-center shadow-2xl text-slate-900">
              <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-white/70 ring-1 ring-black/10">
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-slate-800" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M8 10h.01M16 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M8 16c1.2-1 2.6-1.5 4-1.5s2.8.5 4 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-2xl font-extrabold">Oops! We can’t load this game</h3>
              <p className="mt-2 text-slate-700">Please try again, or pick another game.</p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setReloadKey((k) => k + 1)}
                  className="px-4 py-2 rounded-lg bg-white hover:bg-white/90 border border-black/10"
                >
                  ↻ Try again
                </button>
                <button
                  onClick={() => router.back()}
                  className="px-4 py-2 rounded-lg bg-white hover:bg-white/90 border border-black/10"
                >
                  ← Go back
                </button>
                <Link
                  href="/"
                  className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white"
                >
                  Browse games
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Overlay({ coverSrc, children }) {
  return (
    <div className="absolute inset-0">
      {coverSrc && (
        <img
          src={coverSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover
                     scale-105 blur-md opacity-65 brightness-110"
        />
      )}
      {/* light veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/20" />
      <div className="absolute inset-0 grid place-items-center p-4">{children}</div>
    </div>
  );
}

function Card({ title, subtitle, primary, cta }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 p-5 shadow-2xl text-center text-slate-900">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-700">{subtitle}</p>}
      {primary}
      {cta && <div className="mt-5">{cta}</div>}
    </div>
  );
}
