import "./Footer.css";
import { t } from "react-intlayer";

export default function Footer({ contact }) {
  const section_title = t({
    en: "Contact",
    "fr-CA": "Contact",
    es: "Contacto",
    "pt-BR": "Contato"
  });

  return (
    <footer id="contact">
      <h1>{section_title}</h1>
      <div className="social">
        <ul>
          {contact && contact.map((cont, index) => <li key={cont.title || index}>
            <a href={cont.url} title={cont.title} target="_blank">
              {cont.img}
            </a>
          </li>)}
        </ul>
      </div>
    </footer>
  );
};
