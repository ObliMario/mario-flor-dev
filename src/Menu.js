import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

function Menu() {
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

const routes = [];
routes.push({ path: "/", text: "Home" });
routes.push({ path: "/blog", text: "Projects" });
routes.push({ path: "/profile", text: "Profile" });

export { Menu };
