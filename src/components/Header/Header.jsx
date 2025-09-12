import "./Header.css";
import { configuration } from "intlayer";
import { useLocale, useIntlayer } from "react-intlayer";

export default function Header() {
  const content = useIntlayer("header_content");
  
  const { locale, setLocale } = useLocale();
  const { internationalization } = configuration;
  const { locales, defaultLocale } = internationalization;
  
  const currentLocale = locale ?? defaultLocale;
  return (
    <header id="home">
      <div className="locale-selector">
        {locales.map(locale => <button
          key={locale}
          onClick={() => setLocale(locale)}
          className={`${locale === currentLocale ? 
            "selected-locale" : "unselected-locale"}`}>
            {locale.toUpperCase()}
        </button>)}
      </div>
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>{content.name}</h1>
          <h3>{content.title}</h3>
          <p>{content.summary}</p>
          <div className="about-me-buttons">
            <a href="#projects" className="button about-me">{content.aboutMe}</a>
            <a href={content.linkedIn} target="_blank" className="button linkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
};
