import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Inline English translations to eliminate the network waterfall
// (HTML → JS → locale JSON). Other languages still load via HTTP backend.
import enCommon from "@/../public/locales/en/common.json";
import enIndex from "@/../public/locales/en/index.json";

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
    partialBundledLanguages: true,
    resources: {
      en: {
        common: enCommon,
        index: enIndex,
      },
    },
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
      escapeValue: false,
    },
  });

export default i18n;
