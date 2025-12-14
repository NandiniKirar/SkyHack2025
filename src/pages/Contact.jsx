const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <header className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">Contact</p>
        <h1 className="font-display text-5xl text-white">Coordinate with the Orion Vision team</h1>
        <p className="text-white/70">
          Tell us about your mission objectives, timelines, and datasets. We respond within one business day.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        <section className="glass-panel space-y-4 p-6">
          <p className="text-xs uppercase tracking-[0.45em] text-cosmic-100">Mission Desk</p>
          <p className="text-white">mission@orion.vision</p>
          <p className="text-white/70">+1 (415) 555-1200</p>
          <p className="text-white/60">San Francisco & Remote Ops</p>
        </section>

        <form className="glass-panel space-y-6 p-8">
          <label className="block text-sm font-semibold text-white/80">
            Name
            <input
              type="text"
              placeholder="Commander Jane Doe"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-cyan-300 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-semibold text-white/80">
            Email
            <input
              type="email"
              placeholder="mission@agency.gov"
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-cyan-300 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-semibold text-white/80">
            Mission details
            <textarea
              rows={5}
              placeholder="Share sensors, AOIs, and desired outputs..."
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-cyan-300 focus:outline-none"
            />
          </label>
          <button type="button" className="glow-button w-full text-white">
            Send transmission
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


