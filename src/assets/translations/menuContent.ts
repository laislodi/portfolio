import { t, type Dictionary } from "intlayer";

interface MenuOption {
  title: string,
  href: string
}

interface MenuContent {
  menuList: MenuOption[]
}

export default {
  key: "menu_content",
  content: {
    menuList: [
      {
        title: t({
          en: "Portfolio",
          "fr-CA": "Portfolio",
          es: "Cartera",
          "pt-BR": "Portfólio"
        }), 
        href: "#"
      }, {
        title: t({
          en: "Projects",
          "fr-CA": "Projets",
          es: "Proyectos",
          "pt-BR": "Projetos"
        }),
        href: "#projects"
      }, {
        title: t({
          en: "Experience",
          "fr-CA": "Expérience",
          es: "Experience",
          "pt-BR": "Experiência"
        }),
        href: "#experience"
      }, {
        title: t({
          en: "Education",
          "fr-CA": "Études",
          es: "Educación",
          "pt-BR": "Educação"
        }),
        href: "#education"
      }, {
        title: t({
          en: "Soft Skills",
          "fr-CA": "Compétences Générales",
          es: "Habilidades blandas",
          "pt-BR": "Habilidades interpessoais"
        }),
        href: "#soft-skills"
      }, {
        title: t({
          en: "Tech Skills",
          "fr-CA": "Compétences Techniques",
          es: "Habilidades Técnicas",
          "pt-BR": "Habilidades Técnicas"
        }),
        href: "#tech-skills"
      }, {
        title: t({
          en: "Contact",
          "fr-CA": "Contact",
          es: "Contacto",
          "pt-BR": "Contato"
        }),
        href: "#contact"
      }
    ]
  }
} satisfies Dictionary<MenuContent>;
