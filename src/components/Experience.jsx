import Reveal from "./Reveal";
import { experience, certifications, languages } from "../data";
import { Award, Languages as LanguagesIcon, FileText, Briefcase } from "lucide-react";

function ExperienceCard({ item, delay }) {
  const isOngoing = item.status === "Ongoing";
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl p-6 h-full hover:border-cyan/30 transition-colors">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <Briefcase size={15} className="text-purple-light shrink-0" />
            <h3 className="font-display font-semibold text-base truncate">{item.org}</h3>
          </div>
          <span
            className={`shrink-0 text-[11px] font-mono px-2 py-0.5 rounded-full ${
              isOngoing ? "text-cyan bg-cyan/10 border border-cyan/25" : "text-text-muted bg-bg-elevated border border-purple-light/10"
            }`}
          >
            {isOngoing && <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan mr-1.5 animate-pulse" />}
            {item.status}
          </span>
        </div>

        <p className="text-sm text-text-muted mb-3">{item.role}</p>

        {item.description && <p className="text-sm text-text-muted mb-4 leading-relaxed">{item.description}</p>}

        {item.responsibilities && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.responsibilities.map((r) => (
              <span key={r} className="text-xs font-mono text-text-muted bg-bg-elevated border border-purple-light/10 rounded-full px-2.5 py-1">
                {r}
              </span>
            ))}
          </div>
        )}

        {"offerLetter" in item &&
          (item.offerLetter ? (
            <a
              href={item.offerLetter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:opacity-80 transition-opacity"
            >
              <FileText size={14} /> View Offer Letter
            </a>
          ) : (
            <p className="text-xs font-mono text-text-muted/50">Offer letter coming soon</p>
          ))}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const clientWork = experience.filter((e) => e.type === "client");
  const internships = experience.filter((e) => e.type === "internship");

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-purple-light mb-3">// experience</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-14">
          Where I've applied it.
        </h2>
      </Reveal>

      {/* Client project */}
      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        {clientWork.slice(0, 1).map((item, i) => (
          <div key={item.org} className="sm:col-span-2">
            <ExperienceCard item={item} delay={i * 0.05} />
          </div>
        ))}
      </div>

      {/* Ongoing internships */}
      <Reveal delay={0.05}>
        <p className="font-mono text-xs text-text-muted uppercase tracking-wide mb-4 mt-10">
          Currently interning at
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {internships.map((item, i) => (
          <ExperienceCard key={item.org} item={item} delay={i * 0.06} />
        ))}
      </div>

      {/* Earlier project-based work + certifications/languages */}
      <div className="grid lg:grid-cols-5 gap-6">
        <Reveal className="lg:col-span-3" delay={0.05}>
          <div className="h-full">
            {clientWork.slice(1).map((item) => (
              <ExperienceCard key={item.org} item={item} delay={0} />
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="glass rounded-2xl p-7 h-full">
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-purple-light" />
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-wide">Certifications</h3>
            </div>
            <ul className="space-y-3 mb-7">
              {certifications.map((c) => (
                <li key={c.name + c.org} className="flex justify-between text-sm gap-3">
                  <span>{c.name}</span>
                  <span className="text-text-muted font-mono text-xs whitespace-nowrap">{c.org}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-4">
              <LanguagesIcon size={16} className="text-purple-light" />
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-wide">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l} className="text-xs font-mono text-cyan bg-cyan/5 border border-cyan/15 rounded-md px-2 py-1">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
