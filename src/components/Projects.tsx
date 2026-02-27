"use client";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";
import type { ProjectItem} from "../types/Portfolio"

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tight"
            >
              Selected <span className="text-muted-foreground">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-muted-foreground"
          >
            A collection of full-stack applications focused on solving real-world 
            problems with modern technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project: ProjectItem, idx: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 glass p-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/${project.title}/1200/800`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                    <Sparkles size={12} /> Featured Project
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="text-xs font-medium text-muted-foreground">{project.period}</span>
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-muted/50 rounded-full text-xs font-semibold flex items-center gap-2 border border-white/5"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-1 text-primary">
                        <Code2 size={14} />
                      </div>
                      <p>{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
