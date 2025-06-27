import React from "react";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("home.title")}</h1>
      <p>{t("home.intro")}</p>
      <p>{t("home.more")}</p>
      <p>{t("home.contact")}</p>
      <p>{t("home.thanks")}</p>
      <p>{t("home.signature")}</p>
    </Container>
  );
}

export { HomePage };
