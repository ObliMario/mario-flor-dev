// src/BlogPage.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { posts } from "./blogdata";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";

// Agrupa posts por categoría
function groupByCategory(posts) {
  return posts.reduce((acc, post) => {
    post.category.forEach(cat => {
      const c = cat.trim();
      if (!acc[c]) acc[c] = [];
      acc[c].push(post);
    });
    return acc;
  }, {});
}

export function BlogPage() {
  const { t } = useTranslation();
  const postsByCat = groupByCategory(posts);

  return (
    <Container>
      {/* contenedor flex de dos columnas */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem"
        }}
      >
        {/* COLUMNA IZQUIERDA: menú */}
        <div
          style={{
            flex: "1 1 30%",
            overflowY: "auto",
            maxHeight: "80vh",
            paddingRight: "1rem",
            borderRight: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          {Object.entries(postsByCat).map(([category, catPosts]) => (
            <div key={category} style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                {category}
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: "1rem", margin: 0 }}>
                {catPosts.map(post => (
                  <li key={post.slug}>
                    <NavLink
                      to={`/blog/${post.slug}`}
                      style={({ isActive }) => ({
                        display: "block",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "4px",
                        background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                        color: "#4FD1C5",
                        textDecoration: "none"
                      })}
                    >
                      {t(`${post.i18nKey}.title`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COLUMNA DERECHA: contenido dinámico */}
        <div style={{ flex: "2 1 70%", paddingLeft: "1rem" }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            {t("blog.title")}
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            {t("blog.instruction")}
          </p>
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
