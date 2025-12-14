import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 01",
    title: "Upload Satellite Image",
    description: "Upload raw satellite or astronomy data.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
  },
  {
    step: "Step 02",
    title: "AI/ML Processing",
    description: "Models classify terrain, anomalies, and climate features.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
  {
    step: "Step 03",
    title: "Result Visualization",
    description: "Get clean, interactive visual output.",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop"
  }
];

const SystemWorkflow = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-8">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">How Our System Works</p>
        <h2 className="font-display text-4xl text-white">From orbit data to insight</h2>
        <p className="text-white/70">
          Transform multi-spectral inputs into mission-ready intelligence.
        </p>
      </div>
      <div className="glass-panel overflow-hidden p-8">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.5em] text-white/50">{step.step}</p>
                <h3 className="mt-4 font-display text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <span className="md:absolute md:right-[-18px] md:top-1/2 md:h-px md:w-9 md:bg-gradient-to-r md:from-white/0 md:via-white/60 md:to-white/0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemWorkflow;

