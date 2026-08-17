import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Zhenxun</span>
          <div className="flex items-center gap-4">
            <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="mailto:hello@zhenxun.dev" className="hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
