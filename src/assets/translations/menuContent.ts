import { t, type Dictionary } from "intlayer";

interface MenuOption {
  title: string,
  href: string
}

interface MenuContent {
  title: string,
  menuList: MenuOption[]
}

export default {
  key: "menu_content",
  content: {
    title: t({
      en: "Full Stack Developer",
      "fr-CA": "Développeuse Full Stack"
    }),
    menuList: [
      {
        title: t({
          en: "Portfolio",
          "fr-CA": "Portefeuille"
        }), 
        href: t({
          en: "#",
          "fr-CA": "#"
        })
      }, {
        title: t({en: "Projects", "fr-CA": "Projets"}), 
        href: "#projects"
      }, {
        title: t({en: "Experience", "fr-CA": "Expérience"}), 
        href: "#experience"
      }, {
        title: t({en: "Education", "fr-CA": "Éducation"}), 
        href: "#education"
      }, {
        title: t({en: "Soft Skills", "fr-CA": "Compétences générales"}), 
        href: "#soft-skills"
      }, {
        title: t({en: "Tech Skills", "fr-CA": "Compétences techniques"}), 
        href: "#tech-skills"
      }, {
        title: t({en: "Contact", "fr-CA": "Contact"}), 
        href: "#contact"
      }
    ]
  }
} satisfies Dictionary<MenuContent>;
