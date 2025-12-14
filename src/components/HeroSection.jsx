import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThreeDEarth from "./ThreeDEarth.jsx";

const stats = [
  { label: "Datasets", value: "12+" },
  { label: "Models", value: "4" },
  { label: "Latency", value: "<120ms" }
];

const HeroSection = () => {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[0.65rem] uppercase tracking-[0.5em] text-cosmic-100">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
          SATELLITE AI SUITE
        </span>
        <div className="relative">
          <span className="absolute -inset-10 rounded-[48px] bg-gradient-to-r from-cosmic-600/40 via-cyan-400/30 to-purple-500/30 blur-[70px]" />
          <h1 className="relative font-display text-[3.2rem] leading-tight text-white sm:text-[4rem] lg:text-[4.8rem]">
            Decode Earth from Orbit with <span className="glow-text">AI/ML Vision</span>
          </h1>
        </div>
        <p className="text-base text-white/80">
          Ultra-fast, multi-spectral intelligence for space-grade decision making.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/classifier" className="glow-button transition hover:scale-105">
            Open Classifier
          </Link>
          <a
            href="#why-space"
            className="rounded-full border border-white/20 px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:bg-white/10"
          >
            Explore Mission
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="neo-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="glass-panel relative overflow-hidden p-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 opacity-60" />
        <ThreeDEarth />
      </motion.div>
    </section>
  );
};

export default HeroSection;


