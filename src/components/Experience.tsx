"use client";
import { motion } from "framer-motion";
import { experience } from "../data/data";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
          >
            Career Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            Professional <span className="text-muted-foreground">Journey</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-12 rounded-[2rem] hover:bg-muted/50 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-xl text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                  <span className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-white/5">
                    <Calendar size={16} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-white/5">
                    <MapPin size={16} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <div className="mt-1 text-primary group-hover/item:scale-125 transition-transform">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
