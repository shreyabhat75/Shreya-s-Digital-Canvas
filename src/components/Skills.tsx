import { motion } from "framer-motion";
import { Section } from "./About";

const groups = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React.js", "REST APIs"],
  },
  {
    title: "Core Computer Science",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Figma", "LangGraph", "ML Basics"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          A toolkit built for <span className="text-gradient">range.</span>
        </>
      }
      description="From low-level systems to interfaces and AI agents — a stack that lets me move from concept to ship."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glow-border group relative overflow-hidden rounded-3xl glass p-7"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet/0 via-violet/0 to-azure/0 opacity-0 transition-opacity duration-500 group-hover:from-violet/10 group-hover:to-azure/10 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <motion.span
                  key={it}
                  whileHover={{ y: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-foreground/90 transition-colors hover:border-violet/40 hover:bg-violet/10"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
