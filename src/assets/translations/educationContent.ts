import { t, type Dictionary } from "intlayer";

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

interface EducationContent {
  educationTitle: string,
  education: EducationType[],
  certificationTitle: string,
  certifications: CertificateType[]
}

export default {
  key: "education_content",
  content: {
    educationTitle: t({
      en: "Education",
      "fr-CA": "Éducation"
    }),
    education: [
      {
        institution: "Universidade Federal do Espirito Santo",
        course: t({
          en: "Computer Engineering",
          "fr-CA": "Génie informatique"
        }),
        location: {
          city: "Sao Mateus",
          state: "ES",
          country: "Brazil"
        },
        type: t({
          en: "Bachelor",
          "fr-CA": "Baccalauréat",
        }),
        year: 2015
      },
      {
      institution: "Centro Federal de Educacao Tecnologica do Espirito Santo",
      course: t({
        en: "High School",
        "fr-CA": "École Secondaire"
      }),
      location: {
        city: "Colatina",
        state: "ES",
        country: "Brazil"
      },
      type: "High School",
      year: 2005
    }],
    certificationTitle: "Certifications",
    certifications: [
      {
      name: "React Hooks",
      issuedBy: "LinkedIn",
      issued: {
        month: "Aug",
        year: 2023
      },
      credentialUrl: "https://www.linkedin.com/learning/certificates/85605d8117f54829b8833b034c762716b88a7704ca2e787a7825710a89cacfb0",
      skills: ["React Hooks"]
    },
    {
      name: "Confluence Fundamentals Badge",
      issuedBy: "Atlassian",
      issued: {
        month: "Oct",
        year: 2022
      },
      credentialUrl: "https://university.atlassian.com/student/award/iELLkE5prTcrsZ3u1P6CkEEn",
      skills: []
    },
    {
      name: "Jira Fundamentals Badge",
      issuedBy: "Atlassian",
      issued: {
        month: "Oct",
        year: 2022
      },
      credentialUrl: "https://university.atlassian.com/student/award/E426T7iu9h4MpkEej3QKURNV",
      skills: []
    },
    {
      name: "HTML Avançado",
      issuedBy: "United Latino Students Association",
      issued: {
        month: "Mar",
        year: 2015
      },
      credentialID: "98F26A38-0F6A-487D-A380-45B5B86A210F",
      skills: []
    }]
  }
} satisfies Dictionary<EducationContent>;
