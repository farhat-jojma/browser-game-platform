// src/app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Browser Game Platform. All rights reserved.
        <div className="mt-2 space-x-4">
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
