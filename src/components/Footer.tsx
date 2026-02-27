import { personalInfo } from "../data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">
            VARUN<span className="text-muted-foreground">.DEV</span>
          </div>
          
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} {personalInfo.name}. Built with Passion & Precision.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
