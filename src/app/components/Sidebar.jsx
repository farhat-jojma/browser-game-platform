"use client";

const items = [
  { label: "Home", icon: "🏠", href: "/" },
  { label: "New", icon: "✨", href: "#" },
  { label: "Trending now", icon: "🔥", href: "#" },
  { label: "Updated", icon: "🆙", href: "#" },
  { label: "Originals", icon: "🟣", href: "#" },
  { label: "Multiplayer", icon: "👥", href: "#" },
  { divider: true },
  { label: "2 Player", icon: "👫", href: "#" },
  { label: "Action", icon: "🗡️", href: "#" },
  { label: "Adventure", icon: "🧭", href: "#" },
  { label: "Basketball", icon: "🏀", href: "#" },
  { label: "Bike", icon: "🚴", href: "#" },
  { label: "Car", icon: "🚗", href: "#" },
  { label: "Casual", icon: "🎯", href: "#" },
  { label: "Clicker", icon: "🖱️", href: "#" },
  { label: "Controller", icon: "🎮", href: "#" },
];

export default function Sidebar({ isOpen, onClose, desktopInGrid = false }) {
  return (
    <>
      {/* Mobile overlay + drawer (under header) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div
        className={`fixed top-14 left-0 z-50 h-[calc(100vh-56px)] w-64
          bg-[#0f131d] border-r border-white/5 overflow-y-auto lg:hidden
          transform transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Nav />
      </div>

      {/* Desktop: inside the grid, span both rows so it touches the footer */}
      <aside
        className={`
          ${desktopInGrid ? "hidden lg:block lg:row-span-2 lg:h-full bg-[#0f131d] border-r border-white/5 overflow-y-auto" : "hidden"}
        `}
      >
        <Nav />
      </aside>
    </>
  );
}

function Nav() {
  return (
    <nav className="px-2 py-3">
      {items.map((it, idx) =>
        it.divider ? (
          <div key={`div-${idx}`} className="my-2 border-t border-white/10" />
        ) : (
          <a
            key={it.label}
            href={it.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            <span className="text-xl">{it.icon}</span>
            <span className="text-sm">{it.label}</span>
          </a>
        )
      )}
    </nav>
  );
}
