import { motion } from "framer-motion";
import { Code2, Brain, Users, Palette } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative px-5 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-violet" />
            {eyebrow}
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const features = [
  {
    Icon: Code2,
    title: "Development",
    desc: "Crafting performant frontends and full-stack experiences with React, Next.js and beyond.",
  },
  {
    Icon: Brain,
    title: "AI & Innovation",
    desc: "Exploring LangGraph, ML, and intelligent agents to build tools that truly assist humans.",
  },
  {
    Icon: Users,
    title: "Leadership",
    desc: "Heading clubs, conclaves and internships — turning ambitious ideas into shipped events.",
  },
  {
    Icon: Palette,
    title: "Creativity",
    desc: "Bringing artistic sensibility — design, mandala, music — into everything I build.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineering with a <span className="text-gradient">creative pulse.</span>
        </>
      }
      description="I'm an Information Science Engineering student at RV Institute of Technology and Management, passionate about AI, full-stack development and creative technology. I love hackathons, building impactful products, and leading communities."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glow-border group relative overflow-hidden rounded-2xl glass p-6"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet/30 to-azure/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-azure/20 text-violet">
                <f.Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { k: "8.75", v: "CGPA" },
          { k: "93.33%", v: "Class XII" },
          { k: "93.44%", v: "Class X" },
          { k: "2023–27", v: "RVITM, ISE" },
        ].map((s) => (
          <div key={s.v} className="rounded-2xl glass p-5 text-center">
            <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.k}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
