import { Locales, type IntlayerConfig } from "intlayer";


const config: IntlayerConfig = {
  content: {
    fileExtensions: ["src/assets/translations/*Content.ts"]
  },
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH_CANADA,
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;
