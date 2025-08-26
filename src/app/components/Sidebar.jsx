// src/app/components/Sidebar.jsx
"use client";

import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar({ isOpen, onClose, desktopInGrid = false }) {
  return (
    <>
      {/* Mobile Sidebar - Icon only version */}
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
      
      {/* Desktop Sidebar - Full version with labels */}
      <DesktopSidebar isOpen={isOpen} desktopInGrid={desktopInGrid} />
    </>
  );
}