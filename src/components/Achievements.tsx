import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Sparkles, Clock, Target, Award } from "lucide-react";
import { Section } from "./About";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient md:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { Icon: Trophy, n: 10, suffix: "", label: "Top 10 — Inceptrix 2025" },
  { Icon: Target, n: 1, suffix: "x", label: "Smart India Hackathon" },
  { Icon: Clock, n: 5, suffix: "+", label: "24-hour Hackathons" },
  { Icon: Sparkles, n: 2, suffix: "", label: "Hackerrring — Round 2 Selection" },
];

const certs = [
  {
    title: "GCP Professional — Cloud Developer",
    by: "Google Cloud",
    year: "2025",
  },
  {
    title: "Networking Basics",
    by: "Cisco Networking Academy",
    year: "2024",
  },
];

export function Achievements() {
  return (
    <>
      <Section
        id="achievements"
        eyebrow="Achievements"
        title={
          <>
            A few <span className="text-gradient">milestones.</span>
          </>
        }
        description="Hackathons and competitions that shaped how I build, ship and collaborate under pressure."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glow-border relative overflow-hidden rounded-2xl glass p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet/20 blur-2xl" />
              <div className="relative">
                <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-azure/20 text-violet">
                  <s.Icon size={18} />
                </div>
                <div className="mt-5">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="certifications"
        eyebrow="Certifications"
        title={
          <>
            Always <span className="text-gradient">learning.</span>
          </>
        }
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glow-border flex items-start gap-5 rounded-3xl glass p-6"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet/30 to-azure/20 text-violet">
                <Award size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.by}</p>
                <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Issued {c.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
