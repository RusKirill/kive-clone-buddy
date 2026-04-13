import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="px-4 py-32 text-center">
      <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6">
        Ready to <em className="not-italic text-primary">transform</em> your product content?
      </h2>
      <p className="text-muted-foreground mb-10 text-lg">
        Start creating stunning product shots today. From $20/mo.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="lg" className="rounded-full px-8">
          View pricing
        </Button>
        <Button size="lg" className="rounded-full px-8">
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
