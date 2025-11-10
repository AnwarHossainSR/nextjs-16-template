import Link from 'next/link';

export default function MainFooter() {
  const currentYear = 2025;
  
  return (
    <footer className="w-full py-8 bg-[--card] border-t border-[--border]">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-full">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-[--foreground] font-poppins">
            NextBoiler
          </span>
          <span className="text-sm text-[(--muted-foreground)]">
            © {currentYear} All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="/docs"
            className="text-sm text-[--muted-foreground] hover:text-[--primary] transition-colors duration-200"
          >
            Documentation
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-[--muted-foreground] hover:text-[--primary] transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-[--muted-foreground] hover:text-[--primary] transition-colors duration-200"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
