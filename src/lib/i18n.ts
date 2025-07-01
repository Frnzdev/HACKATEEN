import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Caminhos atualizados para apontar para a pasta 'idioms'
import en from '../idioms/en.json';
import es from '../idioms/es.json';
import fr from '../idioms/fr.json';
import pt from '../idioms/pt.json';
import ar from '../idioms/ar.json';
import zh from '../idioms/zh.json'; 

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  pt: { translation: pt },
  ar: { translation: ar },
  zh: { translation: zh },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', 
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;