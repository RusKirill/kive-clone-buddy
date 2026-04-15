import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center min-h-[70vh] md:min-h-screen px-4 pt-20 overflow-hidden hero-bg"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex flex-col items-start max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.05] max-w-2xl text-left">
          ИИ-визуалы для вашего бренда
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg text-left">
          Создавайте стильные продуктовые фото и визуалы за секунды.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
