"use client";
import { useRef, useState } from "react";

export default function GamePlayer({ src, title }) {
  const containerRef = useRef(null);
  const [reloadKey, setReloadKey] = useState(0);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.();
  };

  return (
    <div ref={containerRef} className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black aspect-video">
      {/* The game */}
      <iframe
        key={reloadKey}
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; gamepad; pointer-lock; cross-origin-isolated"
        // sandbox is optional; omit for local files. If you ever load remote games, consider:
        // sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups"
      />

      {/* Controls */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => setReloadKey((k) => k + 1)}
          className="px-2.5 py-1.5 text-xs rounded-md bg-white/10 hover:bg-white/20"
        >
          ↻ Reload
        </button>
        <button
          onClick={toggleFullscreen}
          className="px-2.5 py-1.5 text-xs rounded-md bg-white/10 hover:bg-white/20"
        >
          ⤢ Fullscreen
        </button>
      </div>
    </div>
  );
}
