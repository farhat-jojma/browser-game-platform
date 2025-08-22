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

  // ✅ prevent page scroll while iframe is focused (arrows/space/page keys)
  useEffect(() => {
    const handler = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
        "Spacebar",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      // if the active element is inside our container (the iframe)
      if (el.contains(document.activeElement) && keys.includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Check if the game file exists before rendering the iframe
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
    <div
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black aspect-video"
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold bg-violet-600 hover:bg-violet-500 transition shadow-lg"
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-600/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full" />

          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 w-16 h-16 grid place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-white/80" fill="none">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 10h.01M16 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M8 16c1.2-1 2.6-1.5 4-1.5s2.8.5 4 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-2xl font-extrabold">Oops! We can’t load this game</h3>
            <p className="mt-2 text-white/70">Please try again, or pick another game.</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => setReloadKey((k) => k + 1)} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
                ↻ Try again
              </button>
              <button onClick={() => router.back()} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">
                ← Go back
              </button>
              <Link href="/" className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500">
                Browse games
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Small controls */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={() => setReloadKey((k) => k + 1)} className="px-2.5 py-1.5 text-xs rounded-md bg-white/10 hover:bg-white/20">
          ↻ Reload
        </button>
        <button onClick={toggleFullscreen} className="px-2.5 py-1.5 text-xs rounded-md bg-white/10 hover:bg-white/20">
          ⤢ Fullscreen
        </button>
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
          /* more visible, brighter, a bit less blur */
          className="absolute inset-0 w-full h-full object-cover
                     scale-105 blur-md opacity-65 brightness-110"
        />
      )}
      {/* light veil instead of dark; very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b
                      from-white/20 via-white/10 to-white/20" />
      <div className="absolute inset-0 grid place-items-center p-4">
        {children}
      </div>
    </div>
  );
}

function Card({ title, subtitle, primary, cta }) {
  return (
    <div
      /* light glass card instead of dark */
      className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md
                 border border-black/10 p-5 shadow-2xl text-center text-slate-900"
    >
      <h2 className="text-3xl font-extrabold">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-700">{subtitle}</p>}
      {primary}
      {cta && <div className="mt-5">{cta}</div>}
    </div>
  );
}
