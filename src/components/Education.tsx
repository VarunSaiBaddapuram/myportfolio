"use client";
import { motion } from "framer-motion";
import { education, certifications } from "../data/data";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
            >
              Academic Background
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold tracking-tight mb-12"
            >
              Education
            </motion.h2>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl hover:bg-muted/50 transition-all group"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-20">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <BookOpen size={14} />
                      <p>{edu.field}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <p>{edu.period}</p>
                    </div>
                    <div className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold inline-block">
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
            >
              Continuous Learning
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold tracking-tight mb-12"
            >
              Certifications
            </motion.h2>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl hover:bg-muted/50 transition-all group flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
