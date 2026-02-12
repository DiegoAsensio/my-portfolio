import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const techStack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Bootstrap", "SASS", "Git", "Firebase", "PHP", "MySQL",
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 text-gradient"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 scale-105 opacity-40" />
              <img
                src="https://diegoasensio.netlify.app/static/media/headshot.9ea607457830f118d063.jpeg"
                alt="Diego Asensio"
                className="relative w-64 h-64 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            <div className="flex gap-6 mt-4">
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-2xl text-primary">4 años</p>
                <p className="text-sm text-muted-foreground">{t("about.experience")}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-2xl text-secondary">24+</p>
                <p className="text-sm text-muted-foreground">{t("about.projects")}</p>
              </div>
            </div>
          </motion.div>

          {/* Description + stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>

            <div>
              <h3 className="font-display font-semibold text-xl mb-4">{t("about.stack")}</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
