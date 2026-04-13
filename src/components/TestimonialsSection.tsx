const testimonials = [
  {
    quote: "Это просто невероятно. Качество на уровне студийной съёмки.",
    name: "Анна Кузнецова",
    title: "Основатель бренда LUMA",
  },
  {
    quote: "Теперь я создаю контент для маркетплейсов мгновенно — без огромных затрат и задержек.",
    name: "Дмитрий Соколов",
    title: "Основатель MODIST",
  },
  {
    quote: "Наконец-то единый стиль визуала для всех каналов — от Wildberries до Telegram.",
    name: "Мария Иванова",
    title: "Бренд-менеджер SILKY",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-24">
      <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-16">
        Нам доверяют бренды по всей России
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col items-center text-center gap-4">
            <p className="text-foreground italic text-lg leading-relaxed">«{t.quote}»</p>
            <div>
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
