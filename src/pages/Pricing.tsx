import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  generations: string;
  price: number;
  perGeneration: string;
  bullets: string[];
  cta: string;
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    generations: "10 генераций",
    price: 199,
    perGeneration: "19.9 ₽ за генерацию",
    bullets: ["10 генераций", "Все AI-модели", "Выбор поз и фонов", "Скачивание в HD"],
    cta: "Выбрать",
  },
  {
    name: "Pro",
    generations: "50 генераций",
    price: 799,
    perGeneration: "16 ₽ за генерацию",
    bullets: [
      "50 генераций",
      "Все AI-модели",
      "Выбор поз и фонов",
      "Скачивание в HD",
      "Приоритетная очередь",
    ],
    cta: "Выбрать",
    recommended: true,
  },
  {
    name: "Business",
    generations: "200 генераций",
    price: 2499,
    perGeneration: "12.5 ₽ за генерацию",
    bullets: [
      "200 генераций",
      "Все AI-модели",
      "Выбор поз и фонов",
      "Скачивание в HD",
      "Приоритетная очередь",
      "Поддержка 24/7",
    ],
    cta: "Выбрать",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground">
              Цены
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Тарифы на любой вкус — попробуйте{" "}
              <em className="not-italic font-calligraphy text-primary text-[2em] align-middle">
                бесплатно
              </em>
              !
            </p>
          </div>

          {/* Plans */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div key={plan.name} className="relative flex">
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    "w-full flex flex-col rounded-3xl p-8 border bg-card transition-colors",
                    plan.recommended
                      ? "border-primary/60 shadow-[0_0_0_1px_hsl(var(--primary)/0.4)] md:scale-[1.03]"
                      : "border-border",
                  )}
                >
                  <h3 className="text-3xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-muted-foreground">{plan.generations}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-6xl font-semibold text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-2xl text-muted-foreground ml-1">₽</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.perGeneration}</p>

                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.recommended ? "default" : "secondary"}
                    size="lg"
                    className="mt-8 w-full rounded-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-32 text-center">
            <h3 className="text-3xl md:text-4xl font-medium text-foreground">
              Остались{" "}
              <em className="not-italic font-calligraphy text-primary text-[1.6em] align-middle">
                вопросы
              </em>
              ?
            </h3>
            <p className="mt-4 text-muted-foreground">
              Напишите нам — поможем подобрать тариф под ваш бренд.
            </p>
            <Button size="lg" className="mt-8 rounded-full px-8">
              Связаться с нами
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
