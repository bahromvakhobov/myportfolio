import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = t("projects.featured", { returnObjects: true });
  const additionalProjects = t("projects.additional", { returnObjects: true });
  return (
    <section id="projects" className="relative py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("projects.title")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("projects.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass border-glow p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <ul className="space-y-2 mb-6">
                {project.description.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("projects.exploreMore")}</p>
            <h3 className="text-3xl md:text-4xl font-bold">
              {t("projects.additionalTitlePart1")} <span className="text-gradient">{t("projects.additionalTitlePart2")}</span>
            </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {additionalProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass border-glow p-6 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1 flex-shrink-0"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Vakhobov"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn-solid inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <Github size={20} />
            {t("projects.viewAllButton")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
