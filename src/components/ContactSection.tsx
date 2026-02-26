import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xojnrqaz");
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{t("contact.title")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("contact.heading")}
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass border-glow p-8 md:p-12 space-y-6"
          >
            {state.succeeded ? (
              <div className="text-center py-8">
                <p className="text-lg text-primary">{t("contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground font-mono mb-2 block">{t("contact.form.name")}</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground font-mono mb-2 block">{t("contact.form.email")}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground font-mono mb-2 block">{t("contact.form.message")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="neon-btn-solid w-full py-4 text-lg disabled:opacity-50">
                  {state.submitting ? t("contact.form.sending") : t("contact.form.sendButton")}
                </button>
              </form>
            )}
          </motion.div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/Vakhobov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:vakhobovbahrom@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} />
              {t("contact.location")}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground font-mono">
          {t("contact.footer")}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
