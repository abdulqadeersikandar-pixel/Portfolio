import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import { projects, additionalProjects, additionalProjectsRepo } from "../data";

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="glass gradient-border rounded-2xl overflow-hidden h-full flex flex-col"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-purple-light/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-text-muted truncate">{project.id}</span>
        </div>

        <div className="aspect-video bg-bg-elevated overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-xl mb-1.5">{project.name}</h3>
          <p className="text-text-muted text-sm mb-4">{project.tagline}</p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.features.map((f) => (
              <span key={f} className="text-xs font-mono text-cyan bg-cyan/5 border border-cyan/15 rounded-md px-2 py-1">
                {f}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan transition-colors"
            >
              <GithubIcon size={16} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan transition-colors"
            >
              <ExternalLink size={16} /> Live
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-purple-light mb-3">// featured-work</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-14">
          Projects worth a closer look.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={(i % 3) * 0.08} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <a
          href={additionalProjectsRepo}
          target="_blank"
          rel="noreferrer"
          className="block glass rounded-2xl p-6 hover:border-cyan/30 transition-colors group"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-xs text-purple-light">// also-shipped</p>
            <span className="text-xs font-mono text-text-muted group-hover:text-cyan transition-colors">
              view repo →
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {additionalProjects.map((p) => (
              <span key={p} className="text-sm text-text-muted border border-purple-light/10 rounded-full px-3 py-1.5">
                {p}
              </span>
            ))}
          </div>
        </a>
      </Reveal>
    </section>
  );
}
