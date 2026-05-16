import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { Section } from "./About.jsx";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="text-gradient">something.</span>
        </>
      }
      description="Have an idea, an internship or just want to say hi? My inbox is always open."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "shreya.bhat@example.com",
              href: "mailto:shreya.bhat@example.com",
            },
            {
              Icon: Linkedin,
              label: "LinkedIn",
              value: "/in/shreya-mohan-bhat",
              href: "https://linkedin.com",
            },
            {
              Icon: Github,
              label: "GitHub",
              value: "@shreyamohanbhat",
              href: "https://github.com",
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="glow-border flex items-center gap-4 rounded-2xl glass p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-azure/20 text-violet">
                <c.Icon size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="text-sm font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glow-border relative overflow-hidden rounded-3xl glass-strong p-7"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-azure/20 blur-3xl" />
          <div className="relative space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-violet/60 focus:outline-none focus:ring-2 focus:ring-violet/30"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet to-azure px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
            >
              {sent ? (
                <>
                  <Check size={16} /> Sent — talk soon ✦
                </>
              ) : (
                <>
                  Send Message{" "}
                  <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-violet/60 focus:outline-none focus:ring-2 focus:ring-violet/30"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 border-t border-border pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted-foreground">
          Designed and developed by{" "}
          <span className="text-gradient font-semibold">Shreya Mohan Bhat</span>.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — Crafted with care
        </p>
      </div>
    </footer>
  );
}
