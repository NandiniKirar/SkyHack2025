const highlights = [
  {
    title: "Mission",
    description: "Deliver a cinematic command interface that translates multi-spectral data into intelligence faster than any manual workflow."
  },
  {
    title: "Why It Matters",
    description: "Earth and deep-space archives grow by terabytes per orbit. Without interpretation, agencies miss climate warnings, defense signals, and scientific discoveries."
  },
  {
    title: "Our Stack",
    description: "Radiometric calibration, transformer-based fusion, explainable inference, and neon-clear visual layers designed for operators."
  }
];

const About = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <header className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">About Orion Vision</p>
        <h1 className="font-display text-5xl text-white">Interpreting orbit-scale data with confidence</h1>
        <p className="text-white/70">
          We are a multidisciplinary team of space analysts, designers, and ML engineers who believe satellite intelligence should feel immersive, not
          intimidating.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="glass-panel h-full bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-cosmic-100">{item.title}</p>
            <p className="mt-3 text-white/75">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel space-y-4 p-8">
        <p className="text-xs uppercase tracking-[0.45em] text-cosmic-100">Future Goals</p>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Deploy edge-ready models that run directly on satellites and high-altitude UAVs.</li>
          <li>Open collaborative sandboxes so agencies can remix our workflows with custom models.</li>
          <li>Partner with observatories to blend astronomical feeds with Earth intelligence for holistic monitoring.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;


