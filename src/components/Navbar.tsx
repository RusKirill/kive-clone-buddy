import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = ["Features", "Discover", "Pricing", "Customers", "Enterprise"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
          <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-lg font-semibold text-foreground">Kive</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
          Log in
        </a>
        <Button variant="outline" size="sm" className="rounded-full text-sm">
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
