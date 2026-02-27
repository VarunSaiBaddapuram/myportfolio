"use client";
import { motion } from "framer-motion";
import { competitiveProgramming } from "@/data/data";
import { Trophy, Zap, Target, ExternalLink } from "lucide-react";
import type { CompetitiveProgrammingItem } from "@/types/Portfolio";

export default function CompetitiveProgramming() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
          >
            Problem Solving
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            Competitive <span className="text-muted-foreground">Programming</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitiveProgramming.map((cp: CompetitiveProgrammingItem, idx: number) => (
            <motion.a
              key={cp.platform}
              href={cp.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-muted/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-muted-foreground" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Trophy size={20} />
                </div>
                <h3 className="text-2xl font-bold">{cp.platform}</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Target size={14} /> Rating
                  </span>
                  <span className="text-xl font-bold font-mono">{cp.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Zap size={14} /> Problems
                  </span>
                  <span className="text-xl font-bold font-mono">{cp.problems}</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Streak</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                    {cp.streak}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
