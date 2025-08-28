// src/app/components/Footer.jsx
"use client";
import { useEffect, useState } from "react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
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
    return <MobileFooter />;
  }

  return <DesktopFooter />;
}