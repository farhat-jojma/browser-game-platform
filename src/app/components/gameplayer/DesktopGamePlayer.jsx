// src/app/components/GamePlayerDesktop.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GamePlayerDesktop({ src, title, coverSrc }) {
  const router = useRouter();
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const [status, setStatus] = useState("checking"); // 'checking' | 'ok' | 'missing'
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // === Disable page scroll when game is active ===
  useEffect(() => {
    if (!gameActive || !loaded || !started) return;

    const preventScroll = (e) => e.preventDefault();
    const preventKeyScroll = (e) => {
      const scrollKeys = [
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
        "PageUp", "PageDown", "Home", "End", " ", "Spacebar"
      ];
      if (scrollKeys.includes(e.key)) e.preventDefault();
    };

    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventKeyScroll, { passive: false });
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventKeyScroll);
      document.body.style.overflow = "";
    };
  }, [gameActive, loaded, started]);

  // === Track when game area is active ===
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !loaded || !started) return;

    const handleMouseEnter = () => setGameActive(true);
    const handleMouseLeave = () => setGameActive(false);
    const handleFocus = () => setGameActive(true);
    const handleDocumentClick = (e) => {
      if (!container.contains(e.target)) setGameActive(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("focus", handleFocus);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("focus", handleFocus);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [loaded, started]);

  // === Check if game exists (local only) ===
  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    setStarted(false);
    setLoaded(false);
    setGameActive(false);

    const isExternal = src.startsWith("http");

    if (isExternal) {
      // ✅ skip HEAD check for external URLs
      setStatus("ok");
      return;
    }

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

  const handleGameClick = () => setGameActive(true);

  return (
    <div className="w-full">
      {/* === TOP TOOLBAR === */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="text-xs text-muted-foreground">
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
                       rounded-md transition bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <span>↻</span> Reload
          </button>
          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium
                       rounded-md transition bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
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
            ? "border-violet-500 ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20"
            : "border-white/10"
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

        {/* === Overlays === */}
        {status === "checking" && (
          <Overlay coverSrc={coverSrc}>
            <Card title={title} subtitle="Checking game files…" />
          </Overlay>
        )}

        {status === "ok" && !started && (
          <Overlay coverSrc={coverSrc}>
            <Card
              title={title}
              subtitle="Ready when you are."
              cta={
                <button
                  onClick={() => setStarted(true)}
                  className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition shadow-lg text-white font-semibold"
                >
                  Play Now
                </button>
              }
            />
          </Overlay>
        )}

        {status === "ok" && started && !loaded && (
          <Overlay coverSrc={coverSrc}>
            <Card title={title} subtitle="Loading…" />
          </Overlay>
        )}

        {status === "missing" && (
          <Overlay coverSrc={coverSrc}>
            <Card
              title={title}
              subtitle="Oops! We can't load this game"
              cta={
                <div className="flex flex-col gap-3">
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
              }
            />
          </Overlay>
        )}
      </div>

      {loaded && started && (
        <p className="mt-2 text-xs text-muted-foreground text-center">
          Hover over the game or click to activate controls.  
          Click outside the game area to scroll the page.
        </p>
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
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/20" />
      <div className="absolute inset-0 grid place-items-center p-4">
        {children}
      </div>
    </div>
  );
}

function Card({ title, subtitle, cta }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 p-5 shadow-2xl text-center text-slate-900">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-700">{subtitle}</p>}
      {cta && <div className="mt-5">{cta}</div>}
    </div>
  );
}