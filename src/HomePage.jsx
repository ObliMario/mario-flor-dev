import React from "react";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Hero />
      <FeaturedProjects />
    </Container>
  );
}

export { HomePage };
