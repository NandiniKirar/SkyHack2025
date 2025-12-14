import { motion } from "framer-motion";

const ImagePreview = ({ previewUrl, fileName, onClear }) => {
  if (!previewUrl) return null;

  return (
    <motion.div
      className="glass-panel p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Preview</p>
          <p className="text-sm text-white/80">{fileName}</p>
        </div>
        <button
          className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:bg-white/10"
          onClick={() => onClear?.()}
          type="button"
        >
          Reset
        </button>
      </div>
      <div className="relative mt-4 overflow-hidden rounded-[26px] border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] opacity-60" />
        <img
          src={previewUrl}
          alt="Selected satellite imagery preview"
          className="relative h-64 w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_30%,transparent_70%)] mix-blend-screen" />
      </div>
    </motion.div>
  );
};

export default ImagePreview;

