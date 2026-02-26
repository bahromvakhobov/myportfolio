import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "HTML5", "CSS3"],
    color: "primary",
  },
  {
    title: "Frameworks",
    skills: ["Django", "Django REST", "FastAPI", "Bootstrap"],
    color: "primary",
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL"],
    color: "accent",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Linux"],
    color: "accent",
  },
];

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass border-glow p-4 text-center transition-all duration-200 cursor-default hover:border-primary/50"
    >
      <span className="text-sm font-medium text-foreground">{skill}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.categories.programming"),
      skills: ["Python", "JavaScript", "HTML5", "CSS3"],
      color: "primary",
    },
    {
      title: t("skills.categories.frameworks"),
      skills: ["Django", "Django REST", "FastAPI", "Bootstrap"],
      color: "primary",
    },
    {
      title: t("skills.categories.database"),
      skills: ["PostgreSQL", "MySQL"],
      color: "accent",
    },
    {
      title: t("skills.categories.devops"),
      skills: ["Docker", "Git", "GitHub", "Linux"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("skills.title")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("skills.heading")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 font-mono">{`// ${cat.title}`}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
