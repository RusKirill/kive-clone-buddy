const testimonials = [
  {
    quote: "How. Can. This. Be?",
    name: "Chris Averill",
    title: "Founder of Oliiv",
  },
  {
    quote: "Now, I can produce high-end, consistent content instantly without huge costs or delays.",
    name: "Sandro Cohn",
    title: "Founder of Cyel",
  },
  {
    quote: "It allows me to produce consistent, high-quality content for all communication channels.",
    name: "Francois Pouria",
    title: "Founder of Dubai Beach Boy",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-24">
      <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-16">
        Trusted by brands world wide
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col items-center text-center gap-4">
            <p className="text-foreground italic text-lg leading-relaxed">"{t.quote}"</p>
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
