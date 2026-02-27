"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              Engineering <span className="italic font-serif">Mindset</span> & <br />
              Passion for <span className="text-muted-foreground">Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am passionate about developing cloud-based and data-driven solutions while 
              continuously learning and improving. My background in Computer Science, 
              specifically in AI and ML, allows me to approach problems with a unique 
              perspective, blending traditional engineering with modern intelligent systems.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold mb-1">2+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Internships</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1">10+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1">1000+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">DSA Problems</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-1">8.2</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">CGPA</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <img
                src="https://picsum.photos/seed/varun/800/800"
                alt="Varun Sai Baddapuram"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
