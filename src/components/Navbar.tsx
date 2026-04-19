import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-closeit.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Closeit" className="h-9" />
      </Link>

      <div className="flex items-center gap-6">
        <Button variant="outline" size="sm" className="rounded-full text-sm">
          Начать
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
