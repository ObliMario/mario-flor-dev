import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

function Menu() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
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
          <Link className="brand" to="/">
            <img src={logo} className="App-logo" alt="React Logo" />
          </Link>

          {/* Main Navigation - Columna del contenido */}
          <nav
            id="main-nav"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            onClick={(e) => e.target.closest("a") && setMenuOpen(false)}
          >
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
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              aria-label={t("menu.toggle")}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
            </button>
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
