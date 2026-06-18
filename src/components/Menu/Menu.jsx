import { useState, useRef, useEffect } from "react";
import { configuration } from "intlayer";
import { useLocale, useIntlayer } from "react-intlayer";
import "./Menu.css";

const LOCALE_META = {
  en:      { flagCode: "us", label: "English" },
  "fr-CA": { flagCode: "ca", label: "Français - Canada" },
  es:      { flagCode: "es", label: "Español" },
  "pt-BR": { flagCode: "br", label: "Português - Brasil" },
};

function FlagImg({ flagCode, alt }) {
  return (
    <img
      src={`https://hatscripts.github.io/circle-flags/flags/${flagCode}.svg`}
      srcSet={`https://hatscripts.github.io/circle-flags/flags/${flagCode}.svg 2x`}
      width="20"
      height="15"
      alt={alt}
      className="locale-flag-img"
    />
  );
}

export default function Menu() {
  const content = useIntlayer("menu_content");
  const { locale, setLocale } = useLocale();
  const { internationalization } = configuration;
  const { locales, defaultLocale } = internationalization;
  const currentLocale = locale ?? defaultLocale;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentMeta = LOCALE_META[currentLocale] ?? { flagCode: "un", label: currentLocale };

  return (
    <>
      <div className="menu">
        <div className="locale-selector" ref={dropdownRef}>
          <button
            className="locale-trigger"
            onClick={() => setOpen(o => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Select language"
          >
            <FlagImg flagCode={currentMeta.flagCode} alt={currentMeta.label} />
          </button>
          {open && (
            <ul className="locale-dropdown" role="listbox">
              {locales.map(loc => {
                const meta = LOCALE_META[loc] ?? { flagCode: "un", label: loc };
                return (
                  <li key={loc} role="option" aria-selected={loc === currentLocale}>
                    <button
                      className={`locale-option${loc === currentLocale ? " locale-option--active" : ""}`}
                      onClick={() => { setLocale(loc); setOpen(false); }}
                    >
                      <FlagImg flagCode={meta.flagCode} alt={meta.label} />
                      <span className="locale-label">{meta.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <ul className="menu-list">
          {content.menuList.map((menuOption, index) => {
            const hrefValue = menuOption.href?.key || menuOption.href;
            return (
              <li key={`menu-${index}`} className="menu-option">
                <a href={hrefValue}>{menuOption.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
