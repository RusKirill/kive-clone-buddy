import { useState, useEffect } from "react";
import categoryFashion from "@/assets/category-fashion.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryHygiene from "@/assets/category-hygiene.jpg";
import categoryFurniture from "@/assets/category-furniture.jpg";

const cardSets = [
  [
    { name: "Одежда", image: categoryFashion },
    { name: "Высокая мода", image: categoryFashion },
    { name: "Спорт", image: categoryFashion },
  ],
  [
    { name: "Уход за кожей", image: categorySkincare },
    { name: "Парфюм", image: categorySkincare },
    { name: "Макияж", image: categorySkincare },
  ],
  [
    { name: "Сумки", image: categoryHygiene },
    { name: "Напитки", image: categoryHygiene },
    { name: "Гигиена", image: categoryHygiene },
  ],
  [
    { name: "Мебель", image: categoryFurniture },
    { name: "Свет и декор", image: categoryFurniture },
    { name: "Образ жизни", image: categoryFurniture },
  ],
];

const CategoriesSection = () => {
  const [indices, setIndices] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timers = cardSets.map((set, cardIndex) =>
      setInterval(() => {
        setIndices((prev) => {
          const next = [...prev];
          next[cardIndex] = (next[cardIndex] + 1) % set.length;
          return next;
        });
      }, 3000 + cardIndex * 800)
    );
    return () => timers.forEach(clearInterval);
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
              <img
                key={cat.name}
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate-fade-in"
              />
              <span className="absolute top-4 left-4 text-sm font-medium text-foreground">
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
