import { configuration } from "intlayer";
import { useLocale, useIntlayer } from "react-intlayer";
import "./Menu.css";

export default function Menu() {
  const content = useIntlayer("menu_content");
  
  const { locale, setLocale } = useLocale();
  const { internationalization } = configuration;
  const { locales, defaultLocale } = internationalization;
  
  const currentLocale = locale ?? defaultLocale;
  return (<>
      <div className="menu">
        <div className="locale-selector">
          {locales.map(locale => <button
            key={locale}
            onClick={() => setLocale(locale)}
            className={`${locale === currentLocale ? 
              "selected-locale" : "unselected-locale"}`}>
              {locale.toUpperCase()}
          </button>)}
        </div>
        <ul className="menu-list">
          {content.menuList.map((menuOption, index) => (
            <li key={`menu-${index}`} className="menu-option">
              <a href={menuOption.href.key}>{menuOption.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className="back-button">
        <span className="material-icons">
          keyboard_double_arrow_up
        </span>
      </a>
    </>
  );
};
