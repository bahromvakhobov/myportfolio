import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TypingAnimation from "./TypingAnimation";
import EarthScene from "./Earth";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">

              {t("hero.greeting")}
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="text-foreground">{t("hero.name")}</span>
              <br />
              <span className="text-gradient">{t("hero.surname")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">{t("hero.title")}

            </p>
            <div className="text-base md:text-lg text-muted-foreground mb-10 h-8">
              <TypingAnimation
                texts={t("hero.typingTexts", { returnObjects: true })}
                />

            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="neon-btn-solid text-center">
                {t("hero.viewProjects")}
              </a>
              <a href="#contact" className="neon-btn text-foreground text-center">
                {t("hero.contactMe")}
              </a>
            </div>
          </motion.div>
          
          <motion.div
            style={{ rotateX, rotateY }}
            className="flex-shrink-0"
            >
            <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <EarthScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;