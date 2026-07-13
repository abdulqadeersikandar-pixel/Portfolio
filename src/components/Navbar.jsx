import { personal } from "../data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-base sm:text-lg tracking-tight whitespace-nowrap">
          <span className="text-text">{personal.name.split(" ").slice(0, -1).join(" ")}</span>{" "}
          <span className="gradient-text">{personal.name.split(" ").slice(-1)}</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-text-muted">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="hover:text-cyan transition-colors">
              <span className="text-purple-light">{`0${i + 1}.`}</span> {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-purple-light/30 px-4 py-2 text-sm font-mono text-text hover:border-cyan hover:text-cyan transition-colors"
        >
          say hello
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full border border-purple-light/20 flex items-center justify-center text-text-muted hover:text-cyan hover:border-cyan/40 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden text-text"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-2xl px-6 py-5 flex flex-col gap-4 font-mono text-sm">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-text-muted hover:text-cyan">
              <span className="text-purple-light">{`0${i + 1}.`}</span> {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-cyan">
            say hello →
          </a>
        </div>
      )}
    </motion.header>
  );
}
