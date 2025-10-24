// src/BlogPage.js
import React from "react";
import { Outlet } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";

export function BlogPage() {
  return (
    <>
      <ProjectsPage />
      <Outlet />
    </>
  );
}
