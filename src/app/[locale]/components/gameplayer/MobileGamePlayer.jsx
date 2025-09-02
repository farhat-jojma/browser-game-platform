"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function GamePlayerMobile({ src, title, coverSrc }) {
  const router = useRouter();
  const t = useTranslations("gameplayer");
    const locale = useLocale();


  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const [status, setStatus] = useState("checking"); // 'checking' | 'ok' | 'missing'
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // === Mobile-specific: Prevent page scroll when game is active ===
  useEffect(() => {
    if (!gameActive || !loaded || !started) return;

    const preventScroll = (e) => {
      // More aggressive scroll prevention for mobile
      e.preventDefault();
      e.stopPropagation();
    };

    // Prevent touch scrolling on mobile
    document.addEventListener("touchstart", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("touchend", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    
    // Lock body scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("touchstart", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("touchend", preventScroll);
      document.removeEventListener("wheel", preventScroll);
      
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [gameActive, loaded, started]);

  // === Mobile-specific: Track when game area is active ===
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !loaded || !started) return;

    const handleTouchStart = () => setGameActive(true);
    const handleTouchEnd = (e) => {
      // Check if touch ended outside the game area
      const rect = container.getBoundingClientRect();
      const touch = e.changedTouches[0];
      if (
        touch.clientX < rect.left ||
        touch.clientX > rect.right ||
        touch.clientY < rect.top ||
        touch.clientY > rect.bottom
      ) {
        setGameActive(false);
      }
    };

    const handleDocumentClick = (e) => {
      if (!container.contains(e.target)) setGameActive(false);
    };

    container.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
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

  // Mobile-specific fullscreen handling
  const [isIOSFullscreen, setIsIOSFullscreen] = useState(false);

const toggleFullscreen = () => {
  const el = containerRef.current;
  if (!el) return;

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    document.body.classList.toggle("ios-no-scroll");
    el.classList.toggle("ios-fullscreen");
    setIsIOSFullscreen((prev) => !prev);
  } else {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen?.();
    }
  }
};



  const handleGameTouch = () => setGameActive(true);

  return (
    <div className="w-full">
      {/* === TOP TOOLBAR === */}
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-muted-foreground">
          {gameActive && loaded && started && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {t("toolbar.controlsActiveMobile")}
            </div>
          )}
        </div>
        <div className="flex gap-2 justify-center sm:justify-end">
          <button
            onClick={() => {
              setGameActive(false);
              setReloadKey((k) => k + 1);
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <span>↻</span> {t("toolbar.reload")}
          </button>
          <button
            onClick={toggleFullscreen}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <span>⤢</span> {t("toolbar.fullscreen")}
          </button>
        </div>
      </div>

      {/* === PLAYER FRAME === */}
      <div
  ref={containerRef}
  className={`relative w-full rounded-xl overflow-hidden border bg-black transition-all duration-200 ${
    gameActive && loaded && started
      ? "border-violet-500 ring-2 ring-violet-500/30 shadow-lg shadow-violet-500/20"
      : "border-white/10"
  } ${!isIOSFullscreen ? "aspect-video" : "ios-fullscreen"}`}
  style={!isIOSFullscreen ? { aspectRatio: "16/9", minHeight: "250px", maxHeight: "70vh" } : {}}
  onTouchStart={handleGameTouch}
>

        {/* IFRAME */}
        {status === "ok" && started && (
          <iframe
            ref={iframeRef}
            key={reloadKey}
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; gamepad; pointer-lock; cross-origin-isolated"
            allowFullScreen
            webkitallowfullscreen="true"
            onLoad={() => setLoaded(true)}
          />
        )}

        {/* Overlays */}
        {status === "checking" && (
          <MobileOverlay coverSrc={coverSrc}>
            <MobileCard title={title} subtitle={t("overlay.checking")} />
          </MobileOverlay>
        )}
        {status === "ok" && !started && (
          <MobileOverlay coverSrc={coverSrc}>
            <MobileCard
              title={title}
              subtitle={t("overlay.ready")}
              cta={
                <button
                  onClick={() => setStarted(true)}
                  className="w-full px-6 py-4 rounded-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 transition shadow-lg text-white font-semibold text-lg"
                >
                  {t("cta.play")}
                </button>
              }
            />
          </MobileOverlay>
        )}
        {status === "ok" && started && !loaded && (
          <MobileOverlay coverSrc={coverSrc}>
            <MobileCard title={title} subtitle={t("overlay.loading")} />
          </MobileOverlay>
        )}
        {status === "missing" && (
          <MobileOverlay coverSrc={coverSrc}>
            <MobileCard
              title={title}
              subtitle={t("overlay.error")}
              cta={
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => setReloadKey((k) => k + 1)}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 font-medium"
                  >
                    {t("cta.tryAgain")}
                  </button>
                  <button
                    onClick={() => router.back()}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-black/10 font-medium"
                  >
                    {t("cta.goBack")}
                  </button>
                  <Link
                    href={`/${locale}`}
                    className="w-full px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white text-center font-medium"
                  >
                    {t("cta.browse")}
                  </Link>
                </div>
              }
            />
          </MobileOverlay>
        )}
      </div>

      {loaded && started && (
        <p className="mt-3 text-sm text-muted-foreground text-center px-4">
          {t("hint.mobile")}
        </p>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */

function MobileOverlay({ coverSrc, children }) {
  return (
    <div className="absolute inset-0">
      {coverSrc && (
        <img
          src={coverSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-md opacity-65 brightness-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/20" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}

function MobileCard({ title, subtitle, cta }) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md border border-black/10 p-6 shadow-2xl text-center text-slate-900">
      <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-slate-700 text-sm sm:text-base">{subtitle}</p>}
      {cta && <div className="mt-6">{cta}</div>}
    </div>
  );
}
