export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Browser Game Platform. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
