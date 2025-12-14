import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="glass-panel flex flex-col items-center gap-6 p-8 text-center">
      <motion.div
        className="relative h-24 w-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      >
        <div className="aurora-ring" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border-2 border-transparent border-t-cyan-300 border-r-purple-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border-2 border-transparent border-b-cyan-200 border-l-pink-300"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </motion.div>
      <div>
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Neural uplink</p>
        <p className="mt-2 text-sm text-white/70">Analyzing multispectral signatures…</p>
      </div>
    </div>
  );
};

export default Loader;

