import presetTerracotta from "@/assets/preset-terracotta.jpg";
import presetSnakes from "@/assets/preset-snakes.jpg";
import presetCobalt from "@/assets/preset-cobalt.jpg";
import presetStone from "@/assets/preset-stone.jpg";
import presetCentella from "@/assets/preset-centella.jpg";

const presets = [
  { name: "Змеи", image: presetSnakes },
  { name: "Терракота", image: presetTerracotta },
  { name: "Кобальт", image: presetCobalt },
  { name: "Каменный выступ", image: presetStone },
  { name: "Центелла", image: presetCentella },
  { name: "Змеи", image: presetSnakes },
  { name: "Терракота", image: presetTerracotta },
  { name: "Кобальт", image: presetCobalt },
  { name: "Каменный выступ", image: presetStone },
  { name: "Центелла", image: presetCentella },
];

const PresetsSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="px-4 max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-4 text-center">
          Создавайте быстрее с пресетами
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-2">
          Стили в один клик для вашей индустрии. От студийной чистоты до editorial-драмы.
        </p>
        <p className="text-center">
          <a href="#" className="text-sm text-primary hover:underline">Смотреть все пресеты →</a>
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-scroll-left w-max">
          {[...presets, ...presets].map((preset, i) => (
            <div key={i} className="relative group w-48 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer">
              <img
                src={preset.image}
                alt={preset.name}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-foreground bg-secondary/70 backdrop-blur-sm px-2 py-1 rounded-md">
                  Использовать
                </span>
                <p className="text-sm font-medium text-foreground mt-1">{preset.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresetsSection;
