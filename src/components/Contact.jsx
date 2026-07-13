import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import { personal } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-purple-light mb-3 text-center">// contact</p>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold mb-6 text-center max-w-2xl mx-auto">
          Let's build something <span className="gradient-text">worth shipping.</span>
        </h2>
        <p className="text-text-muted text-center max-w-md mx-auto mb-12">
          Open to {personal.looking.join(", ").toLowerCase()}. Reach out any time.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass gradient-border rounded-2xl p-8 max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center group-hover:text-cyan transition-colors">
              <Mail size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-text-muted font-mono">Email</p>
              <p className="text-sm truncate group-hover:text-cyan transition-colors">{personal.email}</p>
            </div>
          </a>

          <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center group-hover:text-cyan transition-colors">
              <Phone size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-text-muted font-mono">Phone</p>
              <p className="text-sm group-hover:text-cyan transition-colors">{personal.phone}</p>
            </div>
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center group-hover:text-cyan transition-colors">
              <GithubIcon size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-text-muted font-mono">GitHub</p>
              <p className="text-sm truncate group-hover:text-cyan transition-colors">abdulqadeersikandar-pixel</p>
            </div>
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center group-hover:text-cyan transition-colors">
              <LinkedinIcon size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-text-muted font-mono">LinkedIn</p>
              <p className="text-sm truncate group-hover:text-cyan transition-colors">abdulqadeersikandar</p>
            </div>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <footer className="mt-20 pt-8 border-t border-purple-light/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} {personal.name}. Built with React &amp; Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-cyan transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-cyan transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href={personal.instagram} target="_blank" rel="noreferrer" className="text-text-muted hover:text-cyan transition-colors">
              <InstagramIcon size={18} />
            </a>
          </div>
        </footer>
      </Reveal>
    </section>
  );
}
