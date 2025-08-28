// src/app/components/GamePlayer.jsx
"use client";
import { useEffect, useState } from "react";
import GamePlayerDesktop from "./DesktopGamePlayer";
import GamePlayerMobile from "./MobileGamePlayer";

export default function GamePlayer({ src, title, coverSrc }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileUA || (isTouchDevice && isSmallScreen));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Render the appropriate component based on device type
  if (isMobile) {
    return <GamePlayerMobile src={src} title={title} coverSrc={coverSrc} />;
  }

  return <GamePlayerDesktop src={src} title={title} coverSrc={coverSrc} />;
}