import React from "react";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("title")}</h1>
      <p>{t("intro")}</p>
      <p>{t("more")}</p>
      <p>{t("contact")}</p>
      <p>{t("thanks")}</p>
      <p>{t("signature")}</p>
    </Container>
  );
}

export { HomePage };
