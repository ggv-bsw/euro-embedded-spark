import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export function useLanguagePrefix() {
  const { i18n } = useTranslation();
  return i18n.language === "de" ? "/de" : "";
}

export function useLocalizedPath() {
  const prefix = useLanguagePrefix();
  return useCallback(
    (path: string) => {
      if (!path.startsWith("/")) return path;
      return `${prefix}${path}`;
    },
    [prefix],
  );
}
