import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const techIcons = ["Python", "Django", "FastAPI", "PostgreSQL", "Docker", "Git", "Linux", "REST"];

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Floating tech labels */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={tech}
          className="absolute text-xs font-mono text-primary/20 pointer-events-none select-none hidden lg:block"
          style={{
            top: `${15 + (i * 11) % 70}%`,
            left: `${5 + (i * 13) % 90}%`,
          }}
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 4 + i * 0.5, delay: i * 0.3 }}
        >
          {`<${tech} />`}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("about.title")}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("about.heading")}
          </h2>
          <div className="glass p-8 md:p-12 text-left space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("about.description2")}
            </p>
            <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("about.location")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
