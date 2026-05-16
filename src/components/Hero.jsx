import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown, Sparkles } from "lucide-react";
import profile from "../assets/profile.jpg";

const resumeFile = new URL("../../Shreya_Mohan_Bhat.pdf", import.meta.url).href;

const badges = [
  { label: "React", x: "8%", y: "20%", d: 0 },
  { label: "AI / ML", x: "82%", y: "18%", d: 0.3 },
  { label: "React.js", x: "12%", y: "72%", d: 0.6 },
  { label: "Figma", x: "85%", y: "70%", d: 0.9 },
  { label: "Python", x: "50%", y: "8%", d: 0.45 },
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20" style={{ background: "var(--gradient-hero)" }} />
      {/* Grid */}
      <div className="absolute inset-0 -z-10 grid-bg animate-grid-pan" />
      {/* Noise */}
      <div className="absolute inset-0 -z-10 noise" />

      {/* Floating blobs */}
      <div
        className="blob animate-float-blob"
        style={{
          top: "-10%",
          left: "-10%",
          width: 500,
          height: 500,
          background: "oklch(0.6 0.22 295 / 0.5)",
        }}
      />
      <div
        className="blob animate-float-blob"
        style={{
          bottom: "-15%",
          right: "-10%",
          width: 600,
          height: 600,
          background: "oklch(0.6 0.2 240 / 0.4)",
          animationDelay: "-6s",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles size={12} className="text-violet" />
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Shreya.</span>
            <br />
            <span className="text-gradient">Shreya's Digital Canvas.</span>
            <br />
            <span className="text-foreground/90">
              Engineer, builder, <em className="not-italic text-gradient">creative</em> problem
              solver.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            I build technology experiences that combine design, intelligence and real-world impact —
            from AI tools to crafted interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-azure px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={resumeFile}
              download="Shreya_Mohan_Bhat.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <FileDown size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:shreyab232@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="ml-2 h-px w-10 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Bengaluru, IN
            </span>
          </motion.div>
        </div>

        {/* Profile image with floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet/40 via-azure/30 to-rose/30 blur-3xl" />
          <div className="glow-border absolute inset-0 rounded-[2rem] glass-strong p-3 animate-pulse-glow">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <img
                src={profile}
                alt="Shreya Mohan Bhat"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Currently
                  </div>
                  <div className="text-sm font-medium">Building w/ AI ✦</div>
                </div>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
              </div>
            </div>
          </div>

          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              style={{ left: b.x, top: b.y }}
              className="absolute"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: b.d,
                }}
                className="glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/90 shadow-lg"
              >
                {b.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
