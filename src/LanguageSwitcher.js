import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng); // guardar preferencia
  };

  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage("de")}
        className={currentLanguage === "de" ? "active" : ""}
        aria-pressed={currentLanguage === "de"}
      >
        DE
      </button>
      <button 
        onClick={() => changeLanguage("en")}
        className={currentLanguage === "en" ? "active" : ""}
        aria-pressed={currentLanguage === "en"}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage("es")}
        className={currentLanguage === "es" ? "active" : ""}
        aria-pressed={currentLanguage === "es"}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
