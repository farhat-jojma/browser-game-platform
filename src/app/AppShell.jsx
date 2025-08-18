"use client";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0c0f14] text-gray-100">
      {/* Full-width fixed header */}
      <Header
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
        isSidebarOpen={sidebarOpen}
      />

      {/* Push content below the fixed header (h-14 = 56px) */}
      <div className="pt-14">
        <div className="relative flex">
          {/* Sidebar (mobile + desktop) */}
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main content */}
          <div className="flex-1 min-h-[calc(100vh-56px)] px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
