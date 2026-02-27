"use client";
import { motion } from "framer-motion";
import { skills } from "../data/data";
import { Code2, Terminal, Database, Users } from "lucide-react";
import type { SkillItem } from "@/types/Portfolio";

const icons = {
  "Languages": <Code2 size={20} />,
  "Development & Deployment": <Terminal size={20} />,
  "Technologies & Concepts": <Database size={20} />,
  "Soft Skills": <Users size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            Technical <span className="text-muted-foreground">Toolkit</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup: SkillItem, idx: number) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-muted/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {icons[skillGroup.category as keyof typeof icons] || <Code2 size={20} />}
              </div>
              <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-background/50 border border-white/5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
