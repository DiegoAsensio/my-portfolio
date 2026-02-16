import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Nav
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.portfolio": "Portfolio",
    "nav.references": "Referencias",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Diego Asensio",
    "hero.role": "Desarrollador Web Front End",
    "hero.cta": "Descargar CV",

    // About
    "about.title": "Sobre Mí",
    "about.experience": "Experiencia",
    "about.experienceValue": "5+ años trabajando",
    "about.projects": "Proyectos",
    "about.projectsValue": "14+ Proyectos Terminados",
    "about.description": "Hola soy Diego Asensio de Argentina. Siempre estoy en búsqueda de nuevos retos en un equipo de desarrollo, donde pueda aportar valor desde mi experiencia y conocimiento dentro del área de Front-End, además complementar con seguir aprendiendo día a día.",
    "about.stack": "Mi stack de tecnologías",

    // Experience
    "experience.title": "Experiencia Laboral",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.all": "Todos",
    "portfolio.viewWeb": "Ver Web",

    // Projects descriptions
    "project.inkmaster": "Página profesional para un tatuador con galería de trabajos y sección de contacto. Desarrollada con HTML5, CSS3 y JavaScript. Responsive y optimizada para SEO.",
    "project.mytech": "Ecommerce de productos tecnológicos con carrito de compras. PHP y MySQL para la base de datos. Totalmente responsive y optimizado.",
    "project.matienzo": "Ecommerce de mates con carrito de compras y formulario con EmailJS. Productos cargados via fetch. Responsive y optimizado.",
    "project.historia": "Página informativa sobre la historia argentina desde la época colonial hasta la actualidad. HTML, CSS y JavaScript. Responsive y SEO optimizado.",
    "project.tercertiempo": "Web para escuela de fútbol con sistema de puntos automático. Conectada a Google Sheets API como base de datos en tiempo real.",
    "project.taskflowpro": "TaskFlow Pro - App web de gestión de tareas tipo Kanban con React, Zustand y drag & drop. Incluye tableros, filtros, métricas y modo oscuro.",
    "project.musicvisualizer": "Aplicación web que analiza audio en tiempo real con visualizaciones inmersivas. React y Web Audio API con 4 modos de visualización a 60 FPS.",
    "project.portfoliofotografa": "Portfolio de fotógrafa con galería de imágenes y formulario de contacto. Desarrollado con React y EmailJS. Responsive y optimizado.",

    // References
    "references.title": "Referencias",
    "references.subtitle": "Comentarios de personas con las que trabajé",
    "ref.victoria": "Tuve la suerte de trabajar con Diego por un tiempo, gran compañero de trabajo y de aprendizaje, demostró un excelente desempeño como profesional y como persona!",
    "ref.paula": "Diego trabaja muy bien en equipo, es productivo, aprende rápido y mejora sus habilidades día a día. Excelente puntualidad, responsable y amable. Fue una gran experiencia haber trabajado a su lado.",
    "ref.laura": "Tuve el placer de trabajar con Diego y siempre ha demostrado disposición para ayudar y aprender. Ha trabajado en proyectos de calidad y aprende muy rápido. ¡Un gran miembro del equipo!",

    // Contact
    "contact.title": "Contactame",
    "contact.location": "Ubicación",
    "contact.viewMap": "Ver el mapa",
    "contact.sendMessage": "Enviar Mensaje",
  },
  en: {
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    "nav.references": "References",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Diego Asensio",
    "hero.role": "Front End Web Developer",
    "hero.cta": "Download CV",

    "about.title": "About Me",
    "about.experience": "Experience",
    "about.experienceValue": "5+ years working",
    "about.projects": "Projects",
    "about.projectsValue": "14+ Finished Projects",
    "about.description": "Hi, I'm Diego Asensio from Argentina. I'm always looking for new challenges in a development team, where I can add value from my experience and knowledge in the Front-End area, while continuing to learn every day.",
    "about.stack": "My tech stack",

    "experience.title": "Work Experience",

    "portfolio.title": "Portfolio",
    "portfolio.all": "All",
    "portfolio.viewWeb": "View Site",

    "project.inkmaster": "Professional page for a tattoo artist with gallery and contact section. Built with HTML5, CSS3 and JavaScript. Responsive and SEO optimized.",
    "project.mytech": "Tech products e-commerce with shopping cart. PHP and MySQL for the database. Fully responsive and optimized.",
    "project.matienzo": "Mate e-commerce with shopping cart and EmailJS contact form. Products loaded via fetch. Responsive and optimized.",
    "project.historia": "Informative page about Argentine history from colonial times to the present. HTML, CSS and JavaScript. Responsive and SEO optimized.",
    "project.tercertiempo": "Football school website with automatic scoring system. Connected to Google Sheets API as a real-time database.",
    "project.taskflowpro": "TaskFlow Pro - Kanban task management web app with React, Zustand and drag & drop. Features boards, filters, metrics and dark mode.",
    "project.musicvisualizer": "Web app that analyzes audio in real time with immersive visualizations. React and Web Audio API with 4 visualization modes at 60 FPS.",
    "project.portfoliofotografa": "Photographer portfolio with image gallery and contact form. Built with React and EmailJS. Responsive and optimized.",

    "references.title": "References",
    "references.subtitle": "Comments from people I worked with",
    "ref.victoria": "I was lucky to work with Diego for a while, a great work and learning partner, he demonstrated excellent performance as a professional and as a person!",
    "ref.paula": "Diego works very well in teams, is productive, learns quickly and improves his skills day by day. Excellent punctuality, responsible and kind. It was a great experience working alongside him.",
    "ref.laura": "I had the pleasure of working with Diego and he has always shown willingness to help and learn. He has worked in quality projects, and he is a very quick learner. A great team member!",

    "contact.title": "Contact Me",
    "contact.location": "Location",
    "contact.viewMap": "View map",
    "contact.sendMessage": "Send Message",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
