import productPerfume from "@/assets/product-perfume.jpg";
import featureBag from "@/assets/feature-bag.jpg";
import featurePerfumeAloe from "@/assets/feature-perfume-aloe.jpg";
import featureGirlJacket from "@/assets/feature-girl-jacket.jpg";
import featureVar1 from "@/assets/feature-variation-1.jpg";
import featureVar2 from "@/assets/feature-variation-2.jpg";
import featureVar3 from "@/assets/feature-variation-3.jpg";
import featureVar4 from "@/assets/feature-variation-4.jpg";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24 space-y-32">
      {/* Feature 1 — Kive-style split layout */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-4">
          Превращайте идеи в визуалы
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
          Инструмент для креативных задач любой нагрузки.
        </p>

        <div className="grid md:grid-cols-[1fr_0.8fr] gap-0 rounded-2xl overflow-hidden bg-secondary/30 border border-border/50">
          {/* Left — Hero result image */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <img
              src={featureGirlJacket}
              alt="Результат генерации"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right — Chat-like interface */}
          <div className="flex flex-col justify-center p-5 md:p-6 gap-4 bg-secondary/60">
            {/* Chat prompt bubble */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">AI</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full mb-1.5">
                    <span>⚡</span>
                    <span>АВТО</span>
                  </div>
                  <p className="text-sm text-foreground">
                    22-летняя девушка в @Shearling Jacket Black
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">AI</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full mb-1.5">
                    <span>🎨</span>
                    <span>Портрет</span>
                  </div>
                  <p className="text-sm text-foreground">
                    24-летняя девушка в @Athletic mesh tank
                  </p>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50">
              <span className="text-muted-foreground text-sm">↑</span>
              <span className="text-sm text-muted-foreground">Попробуйте с вашим продуктом</span>
            </div>
          </div>
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
