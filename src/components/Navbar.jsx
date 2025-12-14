import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Classifier", path: "/classifier" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 backdrop-blur-3xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-gradient-to-r from-white/10 via-white/5 to-white/10 px-6 py-5 shadow-[0_15px_60px_rgba(12,8,40,0.55)]">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cosmic-400 via-cyan-400 to-purple-500 font-display text-xl font-semibold shadow-neon"
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            AI
          </motion.span>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">Orion Vision</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Space AI</p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[0.7rem] uppercase tracking-[0.35em] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:bg-gradient-to-r after:from-cyan-400 after:via-sky-300 after:to-fuchsia-500 after:transition after:duration-500 ${
                  isActive
                    ? "text-white after:opacity-100"
                    : "text-white/70 hover:text-white hover:after:opacity-100 after:opacity-0"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="relative flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-cyan-300 hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <motion.span
            key={isMenuOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            className="text-sm font-semibold tracking-[0.4em]"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/40 px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${
                    location.pathname === link.path ? "text-cosmic-200" : "text-white/80"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

