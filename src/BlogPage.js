// src/BlogPage.js
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";

export function BlogPage() {
  const { slug } = useParams();
  // Si hay un slug en la ruta, mostrar solo el BlogPost (Outlet)
  // Si no hay slug, mostrar ProjectsPage
  const showProjectsPage = !slug;

  return (
    <>
      {showProjectsPage && <ProjectsPage />}
      <Outlet />
    </>
  );
}
