export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[10px] font-bold">
              Z
            </div>
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zhenxun</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/zhenxun00" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="mailto:hello@zhenxun.dev" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
