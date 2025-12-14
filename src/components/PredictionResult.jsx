import { motion } from "framer-motion";

const labelsPalette = {
  vegetation: "from-green-400/60 to-emerald-500/40",
  urban: "from-orange-400/60 to-rose-500/40",
  water: "from-blue-400/60 to-cyan-500/40",
  desert: "from-amber-400/60 to-yellow-500/40"
};

const PredictionResult = ({ result }) => {
  if (!result) return null;

  const slug = typeof result.label === "string" ? result.label.toLowerCase() : "";
  const gradient = labelsPalette[slug] ?? "from-cosmic-400/60 to-cyan-500/40";
  const tags = Array.isArray(result.tags) && result.tags.length ? result.tags : ["Simulated", "AI Pipeline"];

  return (
    <motion.div
      className="glass-panel space-y-4 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-xs uppercase tracking-[0.45em] text-white/50">Prediction</p>
      <div className={`relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br ${gradient} px-6 py-8 shadow-glow`}>
        <motion.span
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.45em] text-white/70">Class</p>
          <p className="mt-3 font-display text-4xl capitalize text-white">{result.label}</p>
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/70">
              <span>Confidence</span>
              <span>{result.confidence}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-white via-cyan-200 to-cosmic-300"
                style={{ width: `${Math.min(result.confidence ?? 0, 100)}%` }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/80 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionResult;

