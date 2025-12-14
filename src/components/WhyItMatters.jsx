import { motion } from "framer-motion";

const cards = [
  {
    title: "Climate Monitoring",
    description: "Real-time environmental change detection.",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop"
  },
  {
    title: "Terrain Mapping",
    description: "Advanced ML identifies landforms and vegetation.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    title: "Anomaly Detection",
    description: "Detect wildfires, floods, and discrepancies.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop"
  }
];

const WhyItMatters = () => {
  return (
    <section id="why-space" className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">Why Space Data Interpretation Matters</p>
        <h2 className="font-display text-4xl text-white">Elevate orbital intelligence</h2>
        <p className="text-white/70">
          Fast, interpretable results for climate, defense, and exploration decisions.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="neo-card h-full overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-cosmic-100">{card.title}</p>
              <p className="mt-3 text-white/70">{card.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default WhyItMatters;

