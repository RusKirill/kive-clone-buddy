import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Billing = "yearly" | "monthly";

interface Plan {
  name: string;
  priceMonthly: number | null;
  priceYearly: number | null;
  customLabel?: string;
  intro?: string;
  bullets: string[];
  cta: string;
  recommended?: boolean;
  highlight?: string;
}

const plans: Plan[] = [
  {
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    bullets: ["Просмотр вдохновения", "Ограниченная генерация", "5 досок"],
    cta: "Выбрать план",
  },
  {
    name: "Basic",
    priceMonthly: 1490,
    priceYearly: 1190,
    intro: "Всё из Free, плюс",
    bullets: [
      "Генерация ИИ-фото и видео",
      "Инструменты ИИ-редактирования",
      "10 000 элементов в библиотеке",
      "3 пользователя",
    ],
    cta: "Выбрать план",
    highlight: "1 000 кредитов в месяц",
  },
  {
    name: "Pro",
    priceMonthly: 6990,
    priceYearly: 5490,
    intro: "Всё из Basic, плюс",
    bullets: [
      "5x использования",
      "Обучение стиля бренда",
      "Безлимит ИИ-продуктов",
      "50 000 элементов в библиотеке",
      "10 пользователей",
    ],
    cta: "Выбрать план",
    recommended: true,
    highlight: "5 000 кредитов в месяц",
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    customLabel: "По запросу",
    intro: "Всё из Pro, плюс",
    bullets: [
      "Кастомные лимиты",
      "Кастомные ИИ-пресеты",
      "Персональный онбординг",
      "Выделенная поддержка",
      "Расширенная безопасность",
    ],
    cta: "Связаться с нами",
  },
];

const compareRows: { label: string; values: [string, string, string, string] }[] = [
  { label: "Кредиты", values: ["40 при подтверждении email", "1 000/мес", "5 000/мес", "По запросу"] },
  { label: "Генерация фото", values: ["~6", "~100", "~500", "По запросу"] },
  { label: "Генерация видео", values: ["—", "~40", "~200", "По запросу"] },
  { label: "Редактирование фото", values: ["—", "~100", "~500", "По запросу"] },
  { label: "Апскейл фото", values: ["—", "~100", "~500", "По запросу"] },
  { label: "Апскейл видео", values: ["—", "~25", "~125", "По запросу"] },
  { label: "Элементов в библиотеке", values: ["0", "10 000", "50 000", "По запросу"] },
  { label: "Досок", values: ["5", "Безлимит", "Безлимит", "Безлимит"] },
  { label: "Пользователей", values: ["1", "3", "10", "По запросу"] },
  { label: "Обучение стиля бренда", values: ["—", "—", "✓", "✓"] },
  { label: "Приоритетная поддержка", values: ["—", "—", "✓", "✓"] },
  { label: "Расширенная безопасность", values: ["—", "—", "—", "✓"] },
];

const formatPrice = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;

const Pricing = () => {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-foreground">
              Цены
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Один инструмент с ИИ — попробуйте <em className="not-italic font-calligraphy text-primary text-[1.6em] align-middle">бесплатно</em>.
            </p>

            {/* Billing toggle */}
            <div className="mt-10 inline-flex items-center p-1 rounded-full bg-secondary border border-border">
              <button
                onClick={() => setBilling("yearly")}
                className={cn(
                  "px-5 py-2 text-sm rounded-full transition-colors",
                  billing === "yearly"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Годовая (-25%)
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={cn(
                  "px-5 py-2 text-sm rounded-full transition-colors",
                  billing === "monthly"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                Помесячная
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => {
              const price =
                plan.priceMonthly === null
                  ? null
                  : billing === "yearly"
                    ? plan.priceYearly!
                    : plan.priceMonthly;

              return (
                <div key={plan.name} className="relative">
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground font-medium">
                        Рекомендуем
                      </span>
                    </div>
                  )}
                  <div
                    className={cn(
                      "h-full flex flex-col rounded-2xl p-6 border bg-card transition-colors",
                      plan.recommended
                        ? "border-primary/60 shadow-[0_0_0_1px_hsl(var(--primary)/0.4)]"
                        : "border-border",
                    )}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-3xl font-medium text-foreground">{plan.name}</h3>
                      {price !== null ? (
                        <div className="text-right">
                          <span className="text-3xl font-medium text-foreground">
                            {formatPrice(price)}
                          </span>
                          <span className="text-sm text-muted-foreground">/мес</span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">{plan.customLabel}</span>
                      )}
                    </div>

                    {price !== null && price > 0 && billing === "yearly" && (
                      <p className="mt-1 text-xs text-muted-foreground">При оплате за год</p>
                    )}

                    {plan.highlight && (
                      <div className="mt-5 px-4 py-3 rounded-lg bg-secondary/60 border border-border text-sm text-foreground">
                        {plan.highlight}
                      </div>
                    )}

                    {plan.intro && (
                      <p className="mt-5 text-sm text-muted-foreground">{plan.intro}</p>
                    )}

                    <ul className="mt-4 space-y-3 flex-1">
                      {plan.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                          <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.recommended ? "default" : "secondary"}
                      className="mt-6 w-full rounded-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compare plans */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground">Сравнение тарифов</h2>

            <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/40">
                    <th className="text-left font-medium text-muted-foreground px-6 py-4 w-[30%]">
                      Возможности
                    </th>
                    {["Free", "Basic", "Pro", "Enterprise"].map((n) => (
                      <th key={n} className="text-left font-medium text-foreground px-6 py-4">
                        {n}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={cn(
                        "border-t border-border",
                        i % 2 === 1 && "bg-secondary/20",
                      )}
                    >
                      <td className="px-6 py-4 text-muted-foreground">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="px-6 py-4 text-foreground/90">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ-ish footer CTA */}
          <div className="mt-32 text-center">
            <h3 className="text-3xl md:text-4xl font-medium text-foreground">
              Остались <em className="not-italic font-calligraphy text-primary text-[1.6em] align-middle">вопросы</em>?
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
