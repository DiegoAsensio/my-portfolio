import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "dieasensio@gmail.com",
      href: "mailto:dieasensio@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Diego Asensio",
      href: "https://www.linkedin.com/in/diego-asensio/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "DiegoAsensio",
      href: "https://github.com/DiegoAsensio",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl md:text-5xl text-center mb-16 text-gradient"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Location */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://goo.gl/maps/79RaGLpAiAqF8ytd9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                <p className="font-display font-semibold">Buenos Aires, Argentina</p>
              </div>
            </motion.a>

            {links.map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-full bg-gradient-primary text-primary-foreground">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-display font-semibold text-sm">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
