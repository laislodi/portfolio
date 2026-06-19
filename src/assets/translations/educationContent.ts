import { t, type Dictionary } from "intlayer";
import { Level, type LevelKey } from "../languageLevel";

interface EducationType {
  institution: string,
  course: string,
  location: {
    city: string,
    state: string,
    country: string,
  },
  type: string,
  year: number
}

interface CertificateType {
  name: string,
  issuedBy: string,
  issued: {
    month: string,
    year: number
  }
  credentialUrl?: string,
  credentialID?: string,
  skills: string[]
}

interface SkillLabels {
  reading: string,
  writing: string,
  speaking: string,
  listening: string,
  overall: string
}

interface LanguageType {
  name: string,
  reading: LevelKey,
  writing: LevelKey,
  speaking: LevelKey,
  listening: LevelKey,
  overall: LevelKey
}

interface EducationContent {
  educationTitle: string,
  education: EducationType[],
  certificationTitle: string,
  certifications: CertificateType[],
  languagesTitle: string,
  levelLabels: Record<LevelKey, string>,
  skillLabels: SkillLabels,
  languages: LanguageType[]
}

export default {
  key: "education_content",
  content: {
    educationTitle: t({
      en: "Education",
      "fr-CA": "Études",
      es: "Educación",
      "pt-BR": "Educação"
    }),
    education: [
      {
        institution: "Universidade Federal do Espírito Santo",
        course: t({
          en: "Computer Engineering",
          "fr-CA": "Génie informatique",
          es: "Ingeniería Informática",
          "pt-BR": "Engenharia de Computação"
        }),
        location: { city: "Sao Mateus", state: "ES", country: "Brazil" },
        type: t({
          en: "Bachelor",
          "fr-CA": "Baccalauréat",
          es: "Licenciatura",
          "pt-BR": "Bacharelado"
        }),
        year: 2015
      },
      {
        institution: "Centro Federal de Educação Tecnológica do Espírito Santo",
        course: t({
          en: "High School",
          "fr-CA": "École secondaire",
          es: "Escuela secundaria",
          "pt-BR": "Ensino Médio"
        }),
        location: { city: "Colatina", state: "ES", country: "Brazil" },
        type: "High School",
        year: 2005
      }
    ],
    certificationTitle: t({
      en: "Certifications",
      "fr-CA": "Certificacions",
      es: "Certificaciones",
      "pt-BR": "Certificações"
    }),
    certifications: [
      {
        name: "React Hooks",
        issuedBy: "LinkedIn",
        issued: { month: "Aug", year: 2023 },
        credentialUrl: "https://www.linkedin.com/learning/certificates/85605d8117f54829b8833b034c762716b88a7704ca2e787a7825710a89cacfb0",
        skills: ["React Hooks"]
      },
      {
        name: "Confluence Fundamentals Badge",
        issuedBy: "Atlassian",
        issued: { month: "Oct", year: 2022 },
        credentialUrl: "https://university.atlassian.com/student/award/iELLkE5prTcrsZ3u1P6CkEEn",
        skills: []
      },
      {
        name: "Jira Fundamentals Badge",
        issuedBy: "Atlassian",
        issued: { month: "Oct", year: 2022 },
        credentialUrl: "https://university.atlassian.com/student/award/E426T7iu9h4MpkEej3QKURNV",
        skills: []
      },
      {
        name: "HTML Avançado",
        issuedBy: "United Latino Students Association",
        issued: { month: "Mar", year: 2015 },
        credentialID: "98F26A38-0F6A-487D-A380-45B5B86A210F",
        skills: []
      }
    ],
    languagesTitle: t({
      en: "Languages",
      "fr-CA": "Langues",
      es: "Idiomas",
      "pt-BR": "Idiomas"
    }),
    levelLabels: {
      [Level.BASIC]:          t({ en: "Basic",          "fr-CA": "Basique",         es: "Principiante", "pt-BR": "Básico"         }),
      [Level.INTERMEDIATE]:   t({ en: "Intermediate",   "fr-CA": "Intermédiaire",   es: "Intermedio",   "pt-BR": "Intermediário"  }),
      [Level.CONVERSATIONAL]: t({ en: "Conversational", "fr-CA": "Conversationnel", es: "Elemental",    "pt-BR": "Conversational" }),
      [Level.PROFICIENT]:     t({ en: "Proficient",     "fr-CA": "Maîtrise",        es: "Competente",   "pt-BR": "Avançado"       }),
      [Level.FLUENT]:         t({ en: "Fluent",         "fr-CA": "Couramment",      es: "Eficaz",       "pt-BR": "Fluente"        }),
      [Level.NATIVE]:         t({ en: "Native",         "fr-CA": "Natif",           es: "Nativo",       "pt-BR": "Nativo"         }),
    },
    skillLabels: {
      reading:   t({ en: "Reading",   "fr-CA": "Lecture",             es: "Lectura",              "pt-BR": "Leitura"              }),
      writing:   t({ en: "Writing",   "fr-CA": "Écriture",            es: "Escritura",            "pt-BR": "Escrita"              }),
      speaking:  t({ en: "Speaking",  "fr-CA": "Expression orale",    es: "Expresión oral",       "pt-BR": "Fala"                 }),
      listening: t({ en: "Listening", "fr-CA": "Compréhension orale", es: "Comprensión auditiva", "pt-BR": "Compreensão auditiva" }),
      overall:   t({ en: "Overall",   "fr-CA": "Général",             es: "General",              "pt-BR": "Geral"                }),
    },
    languages: [
      {
        name: t({ en: "English",    "fr-CA": "Anglaise",  es: "Inglés",    "pt-BR": "Inglês"    }),
        reading: Level.FLUENT, writing: Level.FLUENT, speaking: Level.FLUENT,
        listening: Level.FLUENT, overall: Level.FLUENT,
      },
      {
        name: t({ en: "Portuguese", "fr-CA": "Portugais", es: "Portugués", "pt-BR": "Português" }),
        reading: Level.NATIVE, writing: Level.NATIVE, speaking: Level.NATIVE,
        listening: Level.NATIVE, overall: Level.NATIVE,
      },
      {
        name: t({ en: "Spanish",    "fr-CA": "Espagnol",  es: "Español",   "pt-BR": "Espanhol"  }),
        reading: Level.PROFICIENT, writing: Level.PROFICIENT, speaking: Level.PROFICIENT,
        listening: Level.PROFICIENT, overall: Level.PROFICIENT,
      },
      {
        name: t({ en: "French",     "fr-CA": "Français",  es: "Francés",   "pt-BR": "Francês"   }),
        reading: Level.INTERMEDIATE, writing: Level.INTERMEDIATE, speaking: Level.INTERMEDIATE,
        listening: Level.INTERMEDIATE, overall: Level.INTERMEDIATE,
      },
      {
        name: t({ en: "Italian",    "fr-CA": "Italien",   es: "Italiano",  "pt-BR": "Italiano"  }),
        reading: Level.INTERMEDIATE, writing: Level.BASIC, speaking: Level.BASIC,
        listening: Level.BASIC, overall: Level.BASIC,
      },
    ]
  }
} satisfies Dictionary<EducationContent>;
