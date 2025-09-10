"use client";
import { useEffect, useState } from "react";
import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
