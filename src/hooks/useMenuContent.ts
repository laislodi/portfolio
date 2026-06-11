import { configuration, type Locale } from "intlayer";
import { useLocale, useIntlayer } from "react-intlayer";

export const useMenuContent = () => {
  const content = useIntlayer("menu_content");
  const { locale, setLocale } = useLocale();
  const { locales, defaultLocale } = configuration.internationalization;
  const currentLocale: Locale = locale ?? defaultLocale;

  return { content, currentLocale, setLocale, locales };
};
