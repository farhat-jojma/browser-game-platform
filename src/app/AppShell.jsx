"use client";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0c0f14] text-gray-100">
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
