import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-mono rounded transition-colors duration-300 ${
            i18n.language === lang.code
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-primary'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.name}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;