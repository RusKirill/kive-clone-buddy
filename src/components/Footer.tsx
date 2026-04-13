import logo from "@/assets/logo-closeit.png";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Closeit" className="h-5" />
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Условия</a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Конфиденциальность</a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
      </div>
      <a href="#" className="text-xs text-primary hover:underline">Начать</a>
    </footer>
  );
};

export default Footer;
