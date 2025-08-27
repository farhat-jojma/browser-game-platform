export default function MobileFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto px-4 py-4">
        {/* Main content */}
        <div className="text-center space-y-3">
          {/* Copyright */}
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              © {new Date().getFullYear()} Browser Game Platform
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              All rights reserved
            </p>
          </div>
          {/* Divider */}
          <div className="mx-auto my-1.5 h-px w-24 bg-border/70"></div>
          {/* Social - compact */}
          <div className="mt-1 flex items-center justify-center space-x-4 text-muted-foreground/70">
            <a aria-label="Twitter" href="#" className="hover:text-foreground transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.07l-6.704 7.66 7.874 11.84h-6.16l-4.822-6.3-5.518 6.3H2.955l7.162-8.19L2.5 2.25h6.32l4.36 5.77 5.064-5.77Zm-1.077 19.5h1.7L7.92 4.123H6.1l11.067 17.627Z"/>
              </svg>
            </a>
            <a aria-label="Instagram" href="#" className="hover:text-foreground transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.785 1.043 4.92 4.92 0 0 1 1.043 1.785c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.043 1.785 4.92 4.92 0 0 1-1.785 1.043c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.785-1.043 4.92 4.92 0 0 1-1.043-1.785c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.043-1.785A4.92 4.92 0 0 1 5.394 1.3c.457-.163 1.257-.347 2.427-.403C9.087 2.175 9.467 2.163 12 2.163Zm0 1.62c-3.16 0-3.532.012-4.78.069-1.027.047-1.585.218-1.956.363-.492.191-.843.42-1.213.79-.37.37-.599.72-.79 1.213-.145.371-.316.929-.363 1.956-.057 1.248-.069 1.62-.069 4.78s.012 3.532.069 4.78c.047 1.027.218 1.585.363 1.956.191.492.42.843.79 1.213.37.37.72.599 1.213.79.371.145.929.316 1.956.363 1.248.057 1.62.069 4.78.069s3.532-.012 4.78-.069c1.027-.047 1.585-.218 1.956-.363.492-.191.843-.42 1.213-.79.37-.37.599-.72.79-1.213.145-.371.316-.929.363-1.956.057-1.248.069-1.62.069-4.78s-.012-3.532-.069-4.78c-.047-1.027-.218-1.585-.363-1.956-.191-.492-.42-.843-.79-1.213a3.3 3.3 0 0 0-1.213-.79c-.371-.145-.929-.316-1.956-.363-1.248-.057-1.62-.069-4.78-.069Zm0 3.675a4.542 4.542 0 1 1 0 9.084 4.542 4.542 0 0 1 0-9.084Zm0 1.62a2.922 2.922 0 1 0 0 5.844 2.922 2.922 0 0 0 0-5.844Zm5.77-3.03a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/>
              </svg>
            </a>
            <a aria-label="Facebook" href="#" className="hover:text-foreground transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 9H16l.5-3h-3V4.5c0-.866.176-1.2 1.4-1.2H16V0h-2.1C10.9 0 10 1.343 10 4.1V6H8v3h2v9h3.5V9Z"/>
                </svg>
              </a>
            <a aria-label="GitHub" href="#" className="hover:text-foreground transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.393 7.868 10.91.575.106.786-.25.786-.556 0-.274-.01-1.17-.016-2.123-3.2.695-3.878-1.363-3.878-1.363-.523-1.328-1.278-1.682-1.278-1.682-1.044-.714.08-.699.08-.699 1.155.081 1.763 1.186 1.763 1.186 1.027 1.76 2.694 1.252 3.35.957.104-.744.402-1.252.73-1.54-2.555-.29-5.242-1.278-5.242-5.687 0-1.256.448-2.284 1.183-3.09-.119-.29-.512-1.46.112-3.043 0 0 .965-.309 3.164 1.18.917-.255 1.9-.382 2.878-.386.978.004 1.961.131 2.88.386 2.197-1.489 3.161-1.18 3.161-1.18.626 1.583.233 2.753.114 3.043.737.806 1.182 1.834 1.182 3.09 0 4.42-2.692 5.393-5.256 5.677.413.355.78 1.053.78 2.123 0 1.532-.014 2.766-.014 3.145 0 .309.208.668.792.554C20.213 21.39 23.5 17.086 23.5 12 23.5 5.648 18.352.5 12 .5Z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
          
          {/* Links - single line, centered */}
          <div className="flex items-center justify-center whitespace-nowrap">
            <a 
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 active:bg-muted" 
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a 
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 active:bg-muted" 
              href="/privacy-policy"
            >
              Terms of Service
            </a>
            <a 
              className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 active:bg-muted" 
              href="/contact"
            >
              Contact Us
            </a>
            <a 
                className="inline-block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground active:text-foreground transition-colors duration-200 rounded-lg hover:bg-muted/50 active:bg-muted" 
                href="/about"
            >
              About
            </a>
          </div>
        </div>
        
        {/* Bottom spacing for mobile navigation */}
        <div className="h-2"></div>
      </div>
    </footer>
  );
}