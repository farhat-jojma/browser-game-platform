export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-bold">🎮 Browser Game Platform</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/games" className="hover:text-yellow-400">Games</a>
        <a href="/about" className="hover:text-yellow-400">About</a>
        <a href="/contact" className="hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  );
}
