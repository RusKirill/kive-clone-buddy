import { useState, useEffect, useCallback } from "react";
import catClothing from "@/assets/cat-clothing.png";
import catHauteCouture from "@/assets/cat-haute-couture.jpg";
import catSport from "@/assets/cat-sport.jpg";
import catSkincare from "@/assets/cat-skincare.jpg";
import catPerfume from "@/assets/cat-perfume.jpg";
import catMakeup from "@/assets/cat-makeup.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catDrinks from "@/assets/cat-drinks.jpg";
import catHygiene from "@/assets/cat-hygiene.jpg";
import catFurniture from "@/assets/cat-furniture.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catLifestyle from "@/assets/cat-lifestyle.jpg";

const DURATION = 4000;

const cardSets = [
  [
    { name: "Одежда", image: catClothing },
    { name: "Высокая мода", image: catHauteCouture },
    { name: "Спорт", image: catSport },
  ],
  [
    { name: "Уход за кожей", image: catSkincare },
    { name: "Парфюм", image: catPerfume },
    { name: "Макияж", image: catMakeup },
  ],
  [
    { name: "Сумки", image: catBags },
    { name: "Напитки", image: catDrinks },
    { name: "Гигиена", image: catHygiene },
  ],
  [
    { name: "Мебель", image: catFurniture },
    { name: "Свет и декор", image: catLighting },
    { name: "Образ жизни", image: catLifestyle },
  ],
];

const CategoriesSection = () => {
  const [indices, setIndices] = useState([0, 0, 0, 0]);
  const [progress, setProgress] = useState([0, 0, 0, 0]);

  const advanceCard = useCallback((cardIndex: number) => {
    setIndices((prev) => {
      const next = [...prev];
      next[cardIndex] = (next[cardIndex] + 1) % cardSets[cardIndex].length;
      return next;
    });
    setProgress((prev) => {
      const next = [...prev];
      next[cardIndex] = 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) => {
          const next = p + 50 / DURATION * 100;
          if (next >= 100) {
            setTimeout(() => advanceCard(i), 0);
            return 100;
          }
          return next;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, [advanceCard]);

  // Stagger the start of each card
  useEffect(() => {
    const staggerTimers = cardSets.map((_, i) =>
      setTimeout(() => {
        setProgress((prev) => {
          const next = [...prev];
          next[i] = 0.01;
          return next;
        });
      }, i * 600)
    );
    return () => staggerTimers.forEach(clearTimeout);
  }, []);

  return (
    <section className="px-4 py-24">
      <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-12">
        Здесь ВСЕ выглядит лучше
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {cardSets.map((set, cardIndex) => {
          const cat = set[indices[cardIndex]];
          return (
            <div
              key={cardIndex}
              className="relative group overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-foreground/20 rounded-t-xl overflow-hidden">
                <div
                  className="h-full bg-foreground/80 transition-none"
                  style={{ width: `${progress[cardIndex]}%` }}
                />
              </div>

              {/* Images with crossfade */}
              {set.map((item, itemIndex) => (
                <img
                  key={itemIndex}
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    itemIndex === indices[cardIndex] ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <span className="absolute top-4 left-4 z-10 text-sm font-medium text-foreground">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;