// src/components/FeaturedProjects.jsx
import { useTranslation } from "react-i18next";

export default function FeaturedProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("home.featured.projects.ai.title"),
      desc: t("home.featured.projects.ai.desc"),
      stack: [t("tech.unity"), t("tech.csharp")],
      href: "/#/blog/AI-Game",
      img: "/images/projects/ai-agent.jpg",
    },
    {
      title: t("home.featured.projects.jelly.title"),
      desc: t("home.featured.projects.jelly.desc"),
      stack: [t("tech.js"), t("tech.canvas")],
      href: "/#/blog/jellygame",
      img: "/images/projects/jelly.jpg",
    },
    {
      title: t("home.featured.projects.vr.title"),
      desc: t("home.featured.projects.vr.desc"),
      stack: [t("tech.unity"), t("tech.vr")],
      href: "/#/blog/florgame-vr",
      img: "/images/projects/vr.jpg",
    },
  ];

  return (
    <section id="featured" className="featured">
      <div className="container">
        <h2 className="section-title">{t("home.featured.title")}</h2>
        <div className="featured__grid">
          {projects.map((p) => (
            <a key={p.title} className="project-card" href={p.href}>
              <div className="project-card__media">
                <img 
                  src={p.img} 
                  alt="" 
                  onError={(e) => { 
                    e.currentTarget.src = `https://via.placeholder.com/400x300/1a1f2e/60a5fa?text=${encodeURIComponent(p.title)}`; 
                  }} 
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <ul className="stack">
                  {p.stack.map((s) => <li key={s} className="chip chip--sm">{s}</li>)}
                </ul>
                <span className="project-card__cta">{t("home.featured.cta")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
