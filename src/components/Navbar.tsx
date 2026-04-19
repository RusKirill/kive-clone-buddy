import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-closeit.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Closeit" className="h-9" />
      </Link>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
        >
          Войти
        </a>
export default Navbar;
