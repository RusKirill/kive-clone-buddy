import categoryFashion from "@/assets/category-fashion.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryHygiene from "@/assets/category-hygiene.jpg";
import categoryFurniture from "@/assets/category-furniture.jpg";

const categories = [
  { name: "Мода и одежда", image: categoryFashion },
  { name: "Уход за кожей", image: categorySkincare },
  { name: "Гигиена", image: categoryHygiene },
  { name: "Мебель и интерьер", image: categoryFurniture },
];

const CategoriesSection = () => {
  return (
    <section className="px-4 py-24">
      <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-12">
        Здесь каждый продукт выглядит лучше
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.name} className="relative group overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 text-sm font-medium text-foreground">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
