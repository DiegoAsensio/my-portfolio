import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  descKey: string;
  image: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Ink Master",
    descKey: "project.inkmaster",
    image: "https://i.ibb.co/V01gtK96/Captura-de-pantalla-2025-07-31-115014.png",
    url: "https://diegotatua.netlify.app/",
    tags: ["JavaScript"],
  },
  {
    name: "My Tech",
    descKey: "project.mytech",
    image: "https://i.ibb.co/gMmNwhLx/mytech.png",
    url: "https://my-tech.infinityfreeapp.com/index.php?sec=home",
    tags: ["PHP"],
  },
  {
    name: "Matienzo",
    descKey: "project.matienzo",
    image: "https://i.ibb.co/4MtjFFM/matienzo.png",
    url: "https://tiendamatienzo.netlify.app/",
    tags: ["JavaScript"],
  },
  {
    name: "Historia Argentina",
    descKey: "project.historia",
    image: "https://i.ibb.co/WW3wSR43/historia.png",
    url: "https://historiaargentina.netlify.app/",
    tags: ["JavaScript"],
  },
  {
    name: "Tercer Tiempo",
    descKey: "project.tercertiempo",
    image: "https://i.ibb.co/67t38gzQ/3t.png",
    url: "https://3tiempo.netlify.app/",
    tags: ["JavaScript"],
  },
  {
    name: "Perfect Shoes",
    descKey: "project.perfectshoes",
    image: "https://i.ibb.co/cSVK4RcZ/shoes.png",
    url: "https://e-commerce-asensio.web.app/",
    tags: ["React"],
  },
  {
    name: "Music Visualizer",
    descKey: "project.musicvisualizer",
    image: "https://i.ibb.co/NdLHJsf0/music.png",
    url: "https://visualizemusic.netlify.app/",
    tags: ["React"],
  },
  {
    name: "Portfolio Fotógrafa",
    descKey: "project.portfoliofotografa",
    image: "https://i.ibb.co/k2tF7GmX/portfolio-fotografa.png",
    url: "https://catadoradeframbuesas.netlify.app/",
    tags: ["React"],
  },
];

const allTags = ["JavaScript", "React", "PHP"];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-12 text-gradient"
        >
          {t("portfolio.title")}
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["all", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === tag
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag === "all" ? t("portfolio.all") : tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("portfolio.viewWeb")}
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg">{project.name}</h3>
                    <div className="flex gap-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{t(project.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
