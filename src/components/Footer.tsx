const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
          <path d="M4 4L12 20L20 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium text-foreground">Kive</span>
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
