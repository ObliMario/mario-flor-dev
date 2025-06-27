import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const routes = [
    { path: "/", text: t("menu.home") },
    { path: "/blog", text: t("menu.projects") },
    { path: "/profile", text: t("menu.profile") }
  ];

  return (
    <nav>
      <div className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="header-menu">
          {routes.map((route) => (
            <div key={route.path}>
              <NavLink
                key={route.path}
                style={({ isActive }) => ({
                  color: isActive ? "cyan" : "white",
                })}
                to={route.path}
                end
              >
                {route.text}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export { Menu };
