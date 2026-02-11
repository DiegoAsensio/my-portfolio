import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Job {
  company: string;
  role: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
}

const jobs: Job[] = [
  {
    company: "Luxury Presence",
    role: { es: "Desarrollador Front End", en: "Front End Developer" },
    period: "2022 - 2026",
    description: {
      es: "Desarrollo interfaces web con React JS orientadas a agentes y agencias inmobiliarias, creando experiencias intuitivas y escalables. Implemento diseños responsive utilizando Flexbox y media queries, asegurando compatibilidad cross-browser en distintos dispositivos. Trabajo en la optimización de performance, accesibilidad (WCAG) y SEO on-page, y colaboro estrechamente con diseñadores y desarrolladores backend para integrar funcionalidades y mantener una experiencia visual consistente.",
      en: "I developed web interfaces using React JS for real estate agents and agencies, building intuitive and scalable user experiences. I implemented responsive designs using Flexbox and media queries, ensuring cross-browser compatibility across devices. I worked on website optimization in terms of performance, accessibility (WCAG), and on-page SEO, and collaborated closely with designers and backend developers to integrate features while maintaining visual consistency.",
    },
  },
  {
    company: "EY (Ernst & Young)",
    role: { es: "Ingeniero DevOps", en: "DevOps Engineer" },
    period: "2021 - 2022",
    description: {
      es: "Participé en la automatización y unificación de procesos de desarrollo, optimizando los flujos de trabajo del equipo. Implementé la integración y despliegue continuo de código mediante pipelines CI/CD, asegurando entregas más rápidas y confiables. Además, realicé el mantenimiento y la gestión de aplicaciones en entornos productivos, garantizando estabilidad, rendimiento y correcta resolución de incidencias.",
      en: "I was involved in the automation and unification of development processes, improving team workflows and efficiency. I implemented continuous integration and deployment through CI/CD pipelines, ensuring faster and more reliable releases. Additionally, I handled the maintenance and management of applications in production environments, focusing on stability, performance, and incident resolution.",
    },
  },
  {
    company: "Freelance",
    role: { es: "Desarrollador Web Freelance", en: "Freelance Web Developer" },
    period: "2019 - 2021",
    description: {
      es: "Desarrollo de sitios web a medida para clientes. Ecommerce, landing pages y portfolios con HTML, CSS, JavaScript.",
      en: "Custom website development for clients. E-commerce, landing pages and portfolios with HTML, CSS, JavaScript.",
    },
  },
];

const ExperienceSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 text-gradient"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background z-10" />

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{job.period}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg">{job.company}</h3>
                  <p className="text-sm text-secondary font-medium mb-3">{job.role[lang]}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.description[lang]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
