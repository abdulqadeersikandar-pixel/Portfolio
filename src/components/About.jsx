import Reveal from "./Reveal";
import { Download } from "lucide-react";
import { about, education, personal } from "../data";

const stats = [
  { label: "CGPA", value: education.cgpa },
  { label: "Semester", value: education.semester },
  { label: "Since", value: education.years.split(" — ")[0] },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-purple-light mb-3">// about-me</p>
      </Reveal>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <Reveal className="md:col-span-3" delay={0.05}>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
            A developer who ships, <span className="gradient-text">not just prototypes.</span>
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">{about}</p>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm bg-gradient-to-r from-purple to-cyan text-white hover:opacity-90 transition-opacity"
          >
            <Download size={16} /> Download CV
          </a>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.15}>
          <div className="glass gradient-border rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-purple to-cyan shrink-0">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full rounded-full object-cover bg-bg-elevated"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold leading-tight truncate">{personal.name}</p>
                <p className="text-xs text-text-muted font-mono truncate">{personal.location}</p>
              </div>
            </div>

            <p className="font-mono text-xs text-text-muted mb-1">{education.school}</p>
            <p className="font-display font-semibold text-lg mb-4">{education.degree}</p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-xl sm:text-2xl font-semibold gradient-text">{s.value}</p>
                  <p className="text-xs text-text-muted mt-1 font-mono">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
