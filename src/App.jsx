import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import SoftSkills from "./components/Skills/SoftSkills.jsx";
import TechSkills from "./components/Skills/TechSkills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react/jsx-runtime";
import { RESUME } from "./assets/data/resume.js";
import { CONTACT } from "./assets/data/data.js";
import FilterContextProvider from "./components/Skills/store/filter-context.jsx";

export default function App() {
  
  return (
    <Fragment>
      <Header />
      <Menu />
      <Projects projects={RESUME.projects} />
      <Experience jobExperiences={RESUME.jobExperience} />
      <Education education={RESUME.education} certifications={RESUME.certifications} />
      <SoftSkills />
      <FilterContextProvider>
        <TechSkills />
      </FilterContextProvider>
      <Footer contact={CONTACT}/>
    </Fragment>
  );
}
