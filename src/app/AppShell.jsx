"use client";
import { useEffect, useState } from "react";
import Header from "./[locale]/components/header/Header";
import Sidebar from "./[locale]/components/sidebar/Sidebar";
import Footer from "./[locale]/components/footer/Footer";


export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Open on desktop (lg and up), close on mobile
  useEffect(() => {
    const syncWithViewport = () => {
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024; // lg breakpoint
      setSidebarOpen(isDesktop);
    };
    syncWithViewport();
    window.addEventListener("resize", syncWithViewport);
    return () => window.removeEventListener("resize", syncWithViewport);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed, full-width header */}
      <Header
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
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
