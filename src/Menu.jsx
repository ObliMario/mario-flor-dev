import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

function Menu() {
  const { t } = useTranslation();
  const location = useLocation();
  
  const routes = [
    { path: "/", text: t("menu.home") },
    { path: "/blog", text: t("menu.projects") },
    { path: "/profile", text: t("menu.profile") }
  ];

  return (
    <>
      <header className="app-header" role="banner">
        <div className="app-header__inner">
          {/* Brand/Logo - Columna del sidebar */}
          <a className="brand" href="/">
            <img src={logo} className="App-logo" alt="React Logo" />
          </a>

          {/* Main Navigation - Columna del contenido */}
          <nav className="main-nav">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end
                aria-current={location.pathname === route.path ? "page" : undefined}
              >
                {route.text}
              </NavLink>
            ))}
          </nav>

          {/* Actions - Columna de acciones */}
          <div className="actions">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <div className="app-header-spacer" aria-hidden="true" />
    </>
  );
}

export { Menu };
