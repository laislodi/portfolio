import { useIntlayer, t } from "react-intlayer";

export const useProjectsContent = () => {
  const content = useIntlayer("projects_content");
  const checkCode = t({ en: "Check the code!", "fr-CA": "Regarde ça!" });
  const tryIt = t({ en: "Try it!", "fr-CA": "Essaye le!" });
  const screenshotsLabel = t({ en: "Screenshots", "fr-CA": "Captures d'écran" });

  return { content, checkCode, tryIt, screenshotsLabel };
};
