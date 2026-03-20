import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isDE = i18n.language === "de";

  const handleSwitch = () => {
    const { pathname, search, hash } = location;

    let newPath: string;
    if (isDE) {
      // Remove /de prefix
      newPath = pathname.replace(/^\/de(\/|$)/, "/");
    } else {
      // Add /de prefix
      newPath = `/de${pathname}`;
    }

    navigate(`${newPath}${search}${hash}`);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="text-sm font-medium px-3"
      aria-label={isDE ? "Switch to English" : "Auf Deutsch wechseln"}
    >
      {isDE ? "EN" : "DE"}
    </Button>
  );
}
