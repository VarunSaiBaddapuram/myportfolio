"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "../data/data";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);
    setError("");
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      setError("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
              Let's build something <br />
              <span className="italic font-serif">extraordinary</span> together.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md">
              Whether you have a question or just want to say hi, I'll try my best 
              to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-xl font-bold hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-xl font-bold hover:text-primary transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                  <p className="text-xl font-bold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              {[
                { icon: <Github size={20} />, href: personalInfo.github },
                { icon: <Linkedin size={20} />, href: personalInfo.linkedin },
                { icon: <Twitter size={20} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
