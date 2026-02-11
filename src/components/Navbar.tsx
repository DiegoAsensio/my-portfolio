import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["about", "experience", "portfolio", "references", "contact"];

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-display font-bold text-xl text-gradient">
          DA
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-muted"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left py-2 px-4 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
