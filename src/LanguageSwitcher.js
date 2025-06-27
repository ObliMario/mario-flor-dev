import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng); // guardar preferencia
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("es")}>ES</button>
    </div>
  );
}

export default LanguageSwitcher;
