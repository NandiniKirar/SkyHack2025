import HeroSection from "../components/HeroSection.jsx";
import WhyItMatters from "../components/WhyItMatters.jsx";
import SystemWorkflow from "../components/SystemWorkflow.jsx";
import { Link } from "react-router-dom";

const systemPillars = [
  {
    title: "Ingest & Cleanse",
    description: "Auto-harmonize projections, remove clouds, and normalize metadata.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=600&fit=crop"
  },
  {
    title: "AI Interpretation",
    description: "Neural networks classify terrain and detect anomalies across spectral bands.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
  },
  {
    title: "Actionable Delivery",
    description: "Insights render as maps, timelines, and API hooks for synchronized workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  }
];

const capabilityHighlights = [
  { 
    title: "Live Constellation Monitor", 
    detail: "Track multiple satellites with <120ms latency.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
  },
  { 
    title: "Explainable Decisions", 
    detail: "Predictions include spectral fingerprints and confidence scores.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
  },
  { 
    title: "Collaboration Layer", 
    detail: "Share annotations and export to mission briefs instantly.",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop"
  }
];

const Home = () => {
  return (
    <div className="space-y-24">
      <HeroSection />
      <WhyItMatters />
      <SystemWorkflow />

      <section className="mx-auto max-w-6xl space-y-10 rounded-[40px] border border-white/15 bg-white/5 p-10 backdrop-blur-2xl">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">How Orion Vision Works</p>
          <h2 className="font-display text-4xl text-white">From photons to intelligence</h2>
          <p className="text-white/70">
            Automated satellite analytics with full control and rapid iteration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {systemPillars.map((pillar) => (
            <article key={pillar.title} className="glass-panel h-full overflow-hidden bg-gradient-to-br from-white/10 via-transparent to-white/5">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-cosmic-100">{pillar.title}</p>
                <p className="mt-3 text-white/75">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">Mission extras</p>
          <h2 className="font-display text-4xl text-white">Control room for orbital analysts</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {capabilityHighlights.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-cosmic-500/10 via-transparent to-purple-600/10 shadow-[0_20px_80px_rgba(3,0,30,0.5)]"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-cosmic-100">{card.title}</p>
                <p className="mt-3 text-white/75">{card.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[40px] border border-white/15 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-10 text-center backdrop-blur-3xl shadow-[0_30px_90px_rgba(3,0,20,0.7)]">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Ready to launch</p>
        <h3 className="font-display text-4xl text-white">
          Upload orbital data & receive <span className="glow-text">instant insights</span>
        </h3>
        <p className="text-white/70">
          Drag imagery, preview payloads, and get predictions in seconds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/classifier" className="glow-button text-white">
            Try the classifier
          </Link>
          <a
            href="mailto:mission@orion.vision"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white/70 transition hover:bg-white/10"
          >
            Talk to us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

