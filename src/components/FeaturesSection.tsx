import productPerfume from "@/assets/product-perfume.jpg";
import featureBag from "@/assets/feature-bag.jpg";
import featurePerfumeAloe from "@/assets/feature-perfume-aloe.jpg";

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24 space-y-32">
      {/* Feature 1: Turn ideas into assets */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-4">
          Turn ideas into assets
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
          AI that helps small teams handle high creative workloads.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img src={productPerfume} alt="Product shot" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={featureBag} alt="Bag product shot" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={featurePerfumeAloe} alt="Perfume with aloe" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
          <img src={productPerfume} alt="Product variant" className="rounded-xl w-full aspect-square object-cover" loading="lazy" />
        </div>
      </div>

      {/* Feature 2: Stunningly accurate */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground mb-4">
          Stunningly accurate generation
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          AI that integrates products and follows instructions with incredible precision
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
            <img src={featurePerfumeAloe} alt="Accurate generation" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs text-muted-foreground">@Kive Scent 50ml</p>
              <p className="text-xs text-foreground">fresh aloe vera leaves, natural ingredients, spa atmosphere</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
            <img src={featureBag} alt="Bag generation" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-xs text-muted-foreground">@Boxy Leather Bag</p>
              <p className="text-xs text-foreground">held by woman in botanical garden, full figure shot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3: Workflow */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
          Your workflow in one place
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Create, edit, manage and collaborate in one tab.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <img src={productPerfume} alt="Workflow 1" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
          <img src={featureBag} alt="Workflow 2" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
          <img src={featurePerfumeAloe} alt="Workflow 3" className="rounded-xl w-full aspect-[3/4] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
