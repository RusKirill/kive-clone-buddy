import { ArrowUp } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [url, setUrl] = useState("");

  return (
    <section
      className="relative flex items-center min-h-screen px-4 pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 flex flex-col items-start max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.05] max-w-2xl text-left">
          ИИ-визуалы для вашего бренда
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg text-left">
          Создавайте стильные продуктовые фото и визуалы за секунды.
        </p>

        <div className="mt-10 w-full max-w-xl relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Вставьте ссылку на товар для генерации фото"
            className="w-full px-6 py-4 pr-14 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
