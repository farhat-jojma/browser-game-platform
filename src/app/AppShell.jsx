"use client";
import { useState, useEffect } from "react";
import Header from "./[locale]/components/header/Header";
import Sidebar from "./[locale]/components/sidebar/Sidebar";
import Footer from "./[locale]/components/footer/Footer";

export default function AppShell({ children }) {
  // Start with false to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);

  // Initialize sidebarOpen state synchronously to avoid flash
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === 'undefined') {
      // Server side: default to false to avoid hydration mismatch
      return false;
    }
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      // Mobile: always start collapsed
      return false;
    }
    // Desktop: read from localStorage or default to true
    const savedState = localStorage.getItem('sidebarOpen');
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return true;
  });

  useEffect(() => {
    setIsClient(true);

    // Handle resize events
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024;
      if (isMobileNow) {
        // If switching to mobile, always collapse
        setSidebarOpen(false);
      } else {
        // If switching to desktop, restore saved preference
        const savedState = localStorage.getItem('sidebarOpen');
        if (savedState !== null) {
          setSidebarOpen(JSON.parse(savedState));
        } else {
          setSidebarOpen(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom toggle function that saves to localStorage on desktop
  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      const newState = !prev;

      // Only save to localStorage on desktop
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        localStorage.setItem('sidebarOpen', JSON.stringify(newState));
      }

      return newState;
    });
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    // Render minimal placeholder to avoid sidebar flash
    return <div className="min-h-screen bg-background text-foreground" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed, full-width header */}
      <Header
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={sidebarOpen}
      />

      {/* Push everything under the header (56px) */}
      <div className="pt-14">
        {/* GRID: sidebar + main + footer; sidebar spans rows so it touches footer */}
        <div
          className={`min-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto] 
            ${sidebarOpen ? "lg:grid-cols-[16rem_1fr]" : "lg:grid-cols-[0_1fr]"} 
            grid-cols-1`}
        >
          {/* Desktop sidebar column (spans content + footer) */}
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            desktopInGrid
          />

          {/* Main content (row 1, right column) */}
          <main className="lg:col-start-2 px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>

          {/* Footer (row 2, right column) */}
          <div className="lg:col-start-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}