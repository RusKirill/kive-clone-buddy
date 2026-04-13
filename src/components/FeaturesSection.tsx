import productPerfume from "@/assets/product-perfume.jpg";
import featureBag from "@/assets/feature-bag.jpg";
import featurePerfumeAloe from "@/assets/feature-perfume-aloe.jpg";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24 space-y-32">
      {/* Feature 1 */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-4">
          Превращайте идеи в визуалы
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
          Инструмент для креативных задач любой нагрузки.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img src={productPerfume} alt="Продуктовое фото" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={featureBag} alt="Фото сумки" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={featurePerfumeAloe} alt="Парфюм с алоэ" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={productPerfume} alt="Вариант продукта" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
        </div>
      </div>

      {/* Feature 2 */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-4">
          Потрясающая точность генерации
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          ИИ точно воспроизводит ваш продукт и следует инструкциям с невероятной детализацией
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
            <img src={featurePerfumeAloe} alt="Точная генерация" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs text-muted-foreground">@Аромат Kive 50мл</p>
              <p className="text-xs text-foreground">свежие листья алоэ вера, натуральные ингредиенты, атмосфера спа</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
            <img src={featureBag} alt="Генерация сумки" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs text-muted-foreground">@Кожаная сумка Boxy</p>
              <p className="text-xs text-foreground">в руках девушки в ботаническом саду, фото в полный рост</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
          Весь рабочий процесс в одном месте
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Создавайте, редактируйте, управляйте и работайте в команде — всё в одной вкладке.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <img src={productPerfume} alt="Рабочий процесс 1" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
          <img src={featureBag} alt="Рабочий процесс 2" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
          <img src={featurePerfumeAloe} alt="Рабочий процесс 3" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
