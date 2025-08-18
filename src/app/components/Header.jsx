"use client";

export default function Header({ onToggleSidebar, isSidebarOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 bg-[#121622]/95 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Toggle button */}
        <button
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Hide sidebar" : "Show sidebar"}
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5 transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo + title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          <span className="font-semibold">Browser Game Platform</span>
        </div>

        {/* Right spacer */}
        <div className="w-10" />
      </div>
    </header>
  );
}
