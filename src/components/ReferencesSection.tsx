import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Reference {
  name: string;
  role: string;
  image: string;
  textKey: string;
}

const references: Reference[] = [
  {
    name: "Victoria Pedrazza",
    role: "DevOps Engineer - EY",
    image: "https://diegoasensio.netlify.app/static/media/Victoria.2d1834401b418eb7ceaf.png",
    textKey: "ref.victoria",
  },
  {
    name: "Paula Gimenez Heit",
    role: "Customer Service - VN Global",
    image: "https://diegoasensio.netlify.app/static/media/Paula.4604f0b8c910bdfcf780.png",
    textKey: "ref.paula",
  },
  {
    name: "Laura Asensi",
    role: "DevOps Engineer - EY",
    image: "https://diegoasensio.netlify.app/static/media/laura.6ae14762e1249d985276.jpg",
    textKey: "ref.laura",
  },
];

const ReferencesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="references" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-2"
        >
          {t("references.subtitle")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 text-gradient"
        >
          {t("references.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {references.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
            >
              <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t(ref.textKey)}"
              </p>
              <img
                src={ref.image}
                alt={ref.name}
                className="w-14 h-14 rounded-full object-cover mx-auto mb-3"
                loading="lazy"
              />
              <h4 className="font-display font-semibold text-sm">{ref.name}</h4>
              <p className="text-xs text-muted-foreground">{ref.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
