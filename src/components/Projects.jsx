import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./About.jsx";

const projects = [
  {
    title: "E-Learning Platform for Musicians",
    desc: "Interactive learning platform with structured resources and an intuitive, expressive UX for music students.",
    stack: ["React", "Node", "MongoDB", "UX"],
    featured: true,
    hue: "from-violet/40 via-rose/20 to-azure/20",
  },
  {
    title: "Course Chatbot",
    desc: "Conversational assistant that answers academic and course-related queries with grounded responses.",
    stack: ["Python", "LangGraph", "LLM", "REST"],
    hue: "from-azure/40 to-violet/20",
  },
  {
    title: "University Management System",
    desc: "Java-based management system implementing core OOP concepts — students, courses, faculty, exams.",
    stack: ["Java", "OOP", "JDBC"],
    hue: "from-rose/30 to-violet/30",
  },
  {
    title: "KCET Rank Predictor",
    desc: "Prediction tool that analyses admission possibilities across colleges based on rank and category.",
    stack: ["Python", "ML", "Pandas"],
    hue: "from-violet/40 to-azure/30",
  },
  {
    title: "Sign Language Translator",
    desc: "ML-powered translator that recognises sign language gestures in real time to bridge communication gaps.",
    stack: ["Python", "OpenCV", "TensorFlow","LSTM"],
    hue: "from-azure/30 to-rose/30",
  },
  {
    title: "Wordle Clone",
    desc: "Polished browser-based Wordle game with crisp animations and keyboard-first interactions.",
    stack: ["JavaScript", "HTML", "CSS"],
    hue: "from-rose/40 to-violet/20",
  },
];

function Thumb({ hue, title }) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${hue}`}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 flex items-end p-5">
        <div className="font-display text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
          {title.split(" ").slice(0, 3).join(" ")}
        </div>
      </div>
      <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}

function Card({ p, large }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`glow-border group relative flex flex-col overflow-hidden rounded-3xl glass p-5 ${
        large ? "md:p-8" : ""
      }`}
    >
      <Thumb hue={p.hue} title={p.title} />
      <div className="mt-5 flex flex-1 flex-col">
        <h3
          className={`font-display font-semibold leading-tight ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {p.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
            large ? "md:text-base" : ""
          }`}
        >
          {p.desc}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
          >
            <Github size={12} /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-azure px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Live Demo <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={
        <>
          Things I've <span className="text-gradient">built.</span>
        </>
      }
      description="A mix of AI tools, full-stack platforms and playful experiments — each one a chance to learn something new."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="lg:row-span-2">
          <Card p={featured} large />
        </div>
        {rest.slice(0, 2).map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {rest.slice(2).map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}
