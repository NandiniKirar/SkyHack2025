const solutionCards = [
  {
    title: "Terrain Intelligence",
    detail: "Classify vegetation, deserts, glaciers, and infrastructure in near real-time using fusion of RGB, NIR, and SAR bands."
  },
  {
    title: "Climate Signal Radar",
    detail: "Track heat islands, aerosols, ocean temperatures, and extreme weather signatures before they escalate."
  },
  {
    title: "Risk & Anomaly Watch",
    detail: "Detect floods, fires, illegal construction, and orbital debris with configurable alerts and audit logs."
  }
];

const Solutions = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <header className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">Solutions</p>
        <h1 className="font-display text-5xl text-white">Modules built for modern mission teams</h1>
        <p className="text-white/70">
          Combine the modules you need—each shares the same neon interface, APIs, and security layer.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {solutionCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 p-6 shadow-[0_20px_60px_rgba(2,0,40,0.6)]"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-cosmic-100">{card.title}</p>
            <p className="mt-3 text-white/75">{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel space-y-4 p-8">
        <p className="text-xs uppercase tracking-[0.45em] text-cosmic-100">Deployment Options</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="font-semibold text-white">Secure Cloud</p>
            <p className="text-sm text-white/70">Managed deployments hardened for government workloads.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Private Region</p>
            <p className="text-sm text-white/70">Run Orion Vision inside your preferred sovereign data region.</p>
          </div>
          <div>
            <p className="font-semibold text-white">On-Prem</p>
            <p className="text-sm text-white/70">Air-gapped clusters with GPU orchestration for sensitive missions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;


