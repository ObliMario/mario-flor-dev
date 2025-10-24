// src/components/Hero.jsx
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow">{t("home.hero.eyebrow")}</p>
          <h1 className="hero__title">
            {t("home.hero.title")} <span className="grad">{t("home.hero.name")}</span>.
          </h1>
          <p className="hero__subtitle">
            {t("home.hero.subtitle")}
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#featured">
              {t("home.hero.buttonProjects")}
            </a>
            <a className="button button--ghost" href="/#/profile">
              {t("home.hero.buttonAbout")}
            </a>
          </div>

          <ul className="tech-list" aria-label={t("home.hero.techLabel")}>
            <li className="chip">React</li>
            <li className="chip">TypeScript</li>
            <li className="chip">Node.js</li>
            <li className="chip">C# / Unity</li>
            <li className="chip">AWS</li>
          </ul>
        </div>

        <div className="hero__visual">
          {/* Tu imagen de perfil desde AWS S3 */}
          <div className="visual__stage">
            <div className="visual__glow" aria-hidden="true"></div>
            <img
              className="visual__img"
              src="https://marioflordev.s3.us-west-2.amazonaws.com/cvImage.jpeg"
              alt="Mario Flor"
              onError={(e) => { e.currentTarget.src = "/logo.svg"; e.currentTarget.alt = "React Logo"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
