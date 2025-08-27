// src/app/components/Header.jsx
"use client";

import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header({ onToggleSidebar, isSidebarOpen }) {
  const [bgOpacity, setBgOpacity] = useState(0.95);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const minOpacity = 0.2;
      const maxOpacity = 0.95;
      const clamped = Math.min(window.scrollY, maxScroll);
      const opacityRange = maxOpacity - minOpacity;
      const nextOpacity = maxOpacity - (clamped / maxScroll) * opacityRange;
      setBgOpacity(nextOpacity);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-14 sm:h-16 backdrop-blur border-b border-border transition-colors duration-300"
      style={{ backgroundColor: `hsl(var(--background) / ${bgOpacity})` }}
    >
      {/* Mobile Header - Shows hamburger button */}
      <MobileHeader 
        onToggleSidebar={onToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        bgOpacity={bgOpacity}
      />
      
      {/* Desktop Header - Shows hamburger button + search */}
      <DesktopHeader 
        onToggleSidebar={onToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        bgOpacity={bgOpacity}
      />
    </header>
  );
}