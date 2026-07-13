import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 sm:py-32">
      <Reveal>
        <p className="font-mono text-sm text-purple-light mb-3">// tech-stack</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-14">
          Tools I reach for.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.06}>
            <div className="glass rounded-2xl p-6 h-full hover:border-cyan/30 transition-colors">
              <h3 className="font-mono text-xs text-cyan mb-4 tracking-wide uppercase">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-text-muted bg-bg-elevated border border-purple-light/10 rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
