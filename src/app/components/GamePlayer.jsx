// src/app/components/GamePlayer.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GamePlayer({ src, title, coverSrc }) {
  const router = useRouter();
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const [status, setStatus] = useState("checking"); // 'checking' | 'ok' | 'missing'
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // Prevent page scroll when game is active
  useEffect(() => {
    if (!gameActive || !loaded || !started) return;

    const preventScroll = (e) => {
      // Prevent all scrolling when game is active
      e.preventDefault();
    };

    const preventKeyScroll = (e) => {
      const scrollKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'
      ];
      
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    // Prevent scroll via wheel, touch, and keyboard
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventKeyScroll, { passive: false });
    
    // Also prevent scrolling on the body
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('keydown', preventKeyScroll);
      document.body.style.overflow = '';
    };
  }, [gameActive, loaded, started]);

  // Track when game area is active
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !loaded || !started) return;

    const handleMouseEnter = () => setGameActive(true);
    const handleMouseLeave = () => setGameActive(false);
    const handleFocus = () => setGameActive(true);
    
    // Handle clicks outside the game area to deactivate
    const handleDocumentClick = (e) => {
      if (!container.contains(e.target)) {
        setGameActive(false);
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('focus', handleFocus);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('focus', handleFocus);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [loaded, started]);

  // HEAD check to avoid loading your 404 in the iframe
  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    setStarted(false);
    setLoaded(false);
    setGameActive(false);

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

  const handleGameClick = () => {
    setGameActive(true);
  };

  return (
    <div className="w-full">
      {/* === TOP TOOLBAR === */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="text-xs text-white/60">
          {gameActive && loaded && started && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Game controls active - Click outside to scroll page
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setGameActive(false);
              setReloadKey((k) => k + 1);
            }}
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
      </div>

      {/* === PLAYER FRAME === */}
      <div
        ref={containerRef}
        className={`relative w-full rounded-xl overflow-hidden border bg-black aspect-video transition-all duration-200 ${
          gameActive && loaded && started 
            ? 'border-violet-500 ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20' 
            : 'border-white/10'
        }`}
        tabIndex={0}
        onClick={handleGameClick}
      >
        {/* IFRAME (only after Play Now) */}
        {status === "ok" && started && (
          <iframe
            ref={iframeRef}
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

              <h3 className="text-2xl font-extrabold">Oops! We can't load this game</h3>
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

      {/* Instructions */}
      {loaded && started && (
        <div className="mt-2 text-xs text-white/50 text-center">
          Hover over the game or click to activate controls. Click outside the game area to scroll the page.
        </div>
      )}
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