import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageLayout() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const target = pathname.startsWith("/de/") || pathname === "/de" ? "de" : "en";
    if (i18n.language !== target) {
      i18n.changeLanguage(target);
    }
    document.documentElement.lang = target;
  }, [pathname, i18n]);

  return <Outlet />;
}
