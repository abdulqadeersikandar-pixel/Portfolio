import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { personal } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

const bootLines = [
  "$ whoami",
  "> Abdul Qadeer Sikandar — Full Stack Web Developer",
  "$ status --current",
  "> 5th Semester, BS Software Engineering @ University of Gujrat",
  "$ availability --check",
  "> open for Remote / Frontend / Full-Stack Internships & Freelance",
];

export default function Hero() {
  const { displayed, lineIndex, done } = useTypewriter(bootLines, { speed: 16, lineDelay: 200 });

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden">
      <div className="orb w-[420px] h-[420px] bg-purple top-[-100px] left-[-120px]" />
      <div className="orb w-[360px] h-[360px] bg-cyan bottom-[-80px] right-[-100px]" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Terminal boot signature */}
        <div className="glass rounded-xl px-5 py-4 mb-10 max-w-xl font-mono text-[13px] sm:text-sm leading-relaxed shadow-2xl shadow-purple/5">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-text-muted text-xs">bash — portfolio.sh</span>
          </div>
          {bootLines.map((line, i) => (
            <div key={i} className={line.startsWith(">") ? "text-cyan pl-4" : "text-purple-light"} style={{ minHeight: "1.4em" }}>
              {displayed[i]}
              {i === lineIndex && !done && <span className="animate-pulse">▊</span>}
            </div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Building clean, <span className="gradient-text">production-ready</span> web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-text-muted max-w-xl text-base sm:text-lg"
        >
          {personal.title}. Based in {personal.location}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full px-6 py-3 font-medium text-sm bg-gradient-to-r from-purple to-cyan text-white hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-3 font-medium text-sm border border-purple-light/30 hover:border-cyan hover:text-cyan transition-colors"
          >
            Get In Touch
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm border border-purple-light/30 hover:border-cyan hover:text-cyan transition-colors"
          >
            <Download size={16} /> CV
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-muted hover:text-cyan transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-cyan transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={personal.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-text-muted hover:text-cyan transition-colors">
              <InstagramIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-cyan transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
