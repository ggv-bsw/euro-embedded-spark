import { Link, type LinkProps } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLanguagePrefix";

type LocalizedLinkProps = Omit<LinkProps, "to"> & { to: string };

export default function LocalizedLink({ to, ...rest }: LocalizedLinkProps) {
  const localize = useLocalizedPath();
  return <Link {...rest} to={localize(to)} />;
}
