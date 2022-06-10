import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from "./lang/en.json";
import translationFR from "./lang/fr.json";
import translationES from "./lang/es.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "fr",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
