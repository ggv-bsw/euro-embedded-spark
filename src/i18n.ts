import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "de"],
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    returnObjects: true,
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: true,
    },
    interpolation: {
      // React already escapes all output — double-escaping breaks rendered text.
      // See: https://react.i18next.com/latest/i18next-instance
      escapeValue: false,
    },
  });

export default i18n;
