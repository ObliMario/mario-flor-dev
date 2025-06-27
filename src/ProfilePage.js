import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "./Container";
import { works } from "./workdata";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("profile.name")}</h1>

      <div className="profilePic">
        <img
          src="https://marioflordev.s3.us-west-2.amazonaws.com/cdimage+(3).jfif"
          alt="ProfilePicture"
          width="200"
        />
        <div className="tool-tip">
          <p>{t("profile.s3Note")}</p>
        </div>
      </div>

      <p>{t("profile.email")}</p>

      <h2>{t("profile.aboutTitle")}</h2>
      <div className="container-data">
        {t("profile.about", { returnObjects: true }).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2>{t("profile.summaryTitle")}</h2>
      <div className="container-data">
        <p>{t("profile.summary")}</p>
      </div>

      <h2>{t("profile.skillsTitle")}</h2>
      <div className="container-data skills-data">
        <ul>
          {t("profile.skills", { returnObjects: true }).map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <h2>{t("profile.workTitle")}</h2>
      {works.map((work) => (
        <WorkData key={work.inicio} work={work} />
      ))}

      <h2>{t("profile.educationTitle")}</h2>
      {t("profile.education", { returnObjects: true }).map((edu, i) => (
        <div className="container-data" key={i}>
          <h2>{edu.title}</h2>
          <h3>{edu.place}</h3>
          <p>{edu.date}</p>
          {Array.isArray(edu.description) ? (
            <ul>
              {edu.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          ) : (
            <ul>
              <li>{edu.description}</li>
            </ul>
          )}
        </div>
      ))}
    </Container>
  );
}

function WorkData({ work }) {
  const { t } = useTranslation();

  return (
    <div className="container-data work-data">
      <Row>
        <h2>{work.company}</h2>
      </Row>
      <Row>
        <Col>
          <p>{t(work.positionKey)}</p>
          <h5>{work.location}</h5>
          {work.inicio} - {work.fin}
        </Col>
        <Col>
          <ul>
            {t(work.tareasKey, { returnObjects: true }).map((tarea, i) => (
              <li key={i}>{tarea}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <h2>.</h2>
      </Row>
    </div>
  );
}

export { ProfilePage };
