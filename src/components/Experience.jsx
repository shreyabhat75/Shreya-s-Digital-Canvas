import { motion } from "framer-motion";
import { Section } from "./About.jsx";

const items = [
  {
    role: "Event Head",
    where: "Aikyam-2026 — National Level IP Conclave",
    note: "Leading end-to-end execution of a national-scale conclave on intellectual property.",
  },
  {
    role: "Content Head",
    where: "Chaaya Club, RVITM",
    note: "Driving narratives, storytelling and content strategy across club initiatives.",
  },
  {
    role: "Core Member",
    where: "Aegis — Cybersecurity Club",
    note: "Collaborating on club initiatives and community learning in cybersecurity.",
  },
  {
    role: "PR Head",
    where: "Coders Club",
    note: "Public relations and outreach for the campus developer community.",
  },
  {
    role: "Student Coordinator",
    where: "MERN Stack Internship — IIT Ropar",
    note: "Coordinated cohort progress and learning experience throughout the internship.",
  },
  {
    role: "Centre Leader & Volunteer",
    where: "U&I Trust",
    note: "Leading volunteer-led education programs for under-resourced learners.",
  },
  {
    role: "Organizer",
    where: "Protatva — State-level Project Expo",
    note: "Helped organize a state-level project expo showcasing student innovation.",
  },
  {
    role: "Session Facilitator",
    where: "Juniors Workshop Series",
    note: "Conducted sessions on Tableau basics and an introduction to ethical hacking.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Leadership"
      title={
        <>
          Building rooms where <span className="text-gradient">people ship.</span>
        </>
      }
      description="A timeline of the communities, conclaves and internships I've helped lead and shape."
    >
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-violet via-azure to-transparent md:left-3" />
        <ul className="space-y-7">
          {items.map((it, i) => (
            <motion.li
              key={it.role + it.where}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative"
            >
              <span className="absolute -left-[22px] top-2 grid h-3 w-3 place-items-center rounded-full bg-violet shadow-[0_0_18px_3px_oklch(0.7_0.21_295/0.6)] md:-left-[26px]" />
              <div className="glow-border rounded-2xl glass p-5 transition-transform hover:-translate-y-0.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold">{it.role}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {it.where}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{it.note}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
