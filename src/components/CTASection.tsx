import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="px-4 py-32 text-center">
      <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6">
        Готовы <em className="not-italic font-calligraphy text-primary text-[1.35em]">преобразить</em> контент вашего бренда?
      </h2>
      <p className="text-muted-foreground mb-10 text-lg">
        Начните создавать потрясающие визуалы уже сегодня.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="lg" className="rounded-full px-8">
          Тарифы
        </Button>
        <Button size="lg" className="rounded-full px-8">
          Попробовать бесплатно
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
