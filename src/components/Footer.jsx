const footerLinks = [
  {
    title: "Mission",
    items: ["About", "Research", "Roadmap"]
  },
  {
    title: "Technology",
    items: ["AI Stack", "Datasets", "APIs"]
  },
  {
    title: "Connect",
    items: ["Discord", "GitHub", "Community"]
  }
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center text-white/70 backdrop-blur-2xl md:flex-row md:text-left">
        <div className="flex-1 space-y-3">
          <p className="font-display text-2xl font-semibold text-white">Orion Vision</p>
          <p className="text-sm text-white/60">
            AI-powered satellite intelligence for the next era of space exploration.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-6 text-sm sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-[0.35em] text-cosmic-200">{group.title}</p>
              <ul className="mt-3 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-white/60 transition hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-[0.65rem] uppercase tracking-[0.5em] text-white/40">
        © {new Date().getFullYear()} Orion Vision Labs
      </p>
    </footer>
  );
};

export default Footer;

