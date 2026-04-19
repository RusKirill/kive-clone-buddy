import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-closeit.png";

const Navbar = () => {
  const navItems: { label: string; to: string }[] = [
    { label: "Возможности", to: "/#features" },
    { label: "Цены", to: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Closeit" className="h-9" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
          Войти
        </a>
        <Button variant="outline" size="sm" className="rounded-full text-sm">
          Начать
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
