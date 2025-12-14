import { motion } from "framer-motion";
import starfield from "../assets/starfield.svg";

const orbConfigs = [
  {
    gradient: "from-cosmic-500/70 via-cyan-400/60 to-transparent",
    size: "h-80 w-80",
    position: "top-10 left-[-5%]",
    delay: 0
  },
  {
    gradient: "from-cyan-400/50 via-cosmic-300/60 to-transparent",
    size: "h-[28rem] w-[28rem]",
    position: "top-32 right-[-10%]",
    delay: 0.5
  },
  {
    gradient: "from-pink-400/40 via-cosmic-400/50 to-transparent",
    size: "h-72 w-72",
    position: "bottom-5 left-1/3",
    delay: 1
  },
  {
    gradient: "from-emerald-400/30 via-cyan-300/40 to-transparent",
    size: "h-48 w-48",
    position: "top-1/3 left-16",
    delay: 1.5
  },
  {
    gradient: "from-indigo-500/40 via-purple-400/40 to-transparent",
    size: "h-60 w-60",
    position: "bottom-10 right-1/4",
    delay: 2
  }
];

const BackgroundOrbs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {orbConfigs.map((orb, index) => (
      <motion.span
        key={index}
        className={`absolute ${orb.position} ${orb.size} rounded-full bg-gradient-to-br ${orb.gradient} blur-3xl`}
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ scale: 1.1, opacity: 0.8 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
          delay: orb.delay,
          ease: "easeInOut"
        }}
      />
    ))}
    <motion.div
      className="aurora-ring"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1.1, opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <div
      className="absolute inset-0 opacity-40 mix-blend-screen"
      style={{ backgroundImage: `url(${starfield})`, backgroundSize: "600px 600px", backgroundRepeat: "repeat" }}
    />
  </div>
);

export default BackgroundOrbs;

