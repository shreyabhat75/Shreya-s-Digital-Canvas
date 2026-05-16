import { motion } from "framer-motion";
import { Music2, BookOpen, Flower2, PenLine } from "lucide-react";
import { Section } from "./About.jsx";

const items = [
  {
    Icon: Music2,
    title: "Singing",
    desc: "Finished junior in Hindustani music — voice as instrument from classical riyaaz to spontaneous covers.",
    accent: "from-rose/40 to-violet/30",
  },
  {
    Icon: BookOpen,
    title: "Reading",
    desc: "Fiction, philosophy, and the occasional design essay before bed.",
    accent: "from-azure/40 to-violet/20",
  },
  {
    Icon: Flower2,
    title: "Mandala Art",
    desc: "Slow, intricate ink work — patience as a creative practice.",
    accent: "from-violet/40 to-rose/30",
  },
  {
    Icon: PenLine,
    title: "Blogging",
    desc: "Writing about engineering, art and the in-between.",
    accent: "from-azure/30 to-rose/30",
  },
];

export function Creative() {
  return (
    <Section
      id="creative"
      eyebrow="Beyond Code"
      title={
        <>
          The <span className="text-gradient">creative</span> side.
        </>
      }
      description="The non-engineering practices that keep my engineering soft, expressive and human."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, rotate: -1 }}
            className={`glow-border relative aspect-[3/4] overflow-hidden rounded-3xl glass p-6 bg-gradient-to-br ${it.accent}`}
          >
            <div className="absolute inset-0 bg-background/40" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl glass-strong text-foreground">
                <it.Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
