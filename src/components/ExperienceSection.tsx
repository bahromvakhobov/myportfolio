import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = t("experience.jobs", { returnObjects: true });
  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("experience.title")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("experience.heading")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue z-10 mt-2" />

              <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                <div className="glass border-glow p-6">
                  <span className="text-xs font-mono text-primary/70">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-accent mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-left">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div id="education">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mt-8"
          >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {t("education.title")}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {t("education.cards", { returnObjects: true }).map((card: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass border-glow p-8"
              >
                <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-accent mt-1">{card.institution}</p>
                <p className="text-sm text-muted-foreground font-mono mt-2">
                  {card.period}
                </p>
                {card.description && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                )}
                {card.points && (
                  <ul className="mt-4 space-y-2 text-left">
                    {card.points.map((point: string, pi: number) => (
                      <li
                        key={pi}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
