import React, { useState, useEffect, useRef } from "react";
import { Container } from "./Container";
import { works } from "./workdata";
import { useTranslation } from "react-i18next";

function ProfilePage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  // Secciones del CV
  const sections = [
    { id: "about", label: t("profile.aboutTitle") },
    { id: "summary", label: t("profile.summaryTitle") },
    { id: "skills", label: t("profile.skillsTitle") },
    { id: "experience", label: t("profile.workTitle") },
    { id: "education", label: t("profile.educationTitle") },
    { id: "contact", label: "Kontakt" }
  ];

  // Scroll spy para TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="profile-page">
    <Container>
        <div className="profile-layout">
          {/* TOC Sidebar */}
          <aside className="profile-sidebar">
            {/* Profile Mini Card */}
            <div className="profile-mini-card">
              <div className="mini-card-avatar">
        <img
          src="https://marioflordev.s3.us-west-2.amazonaws.com/cvImage.jpeg"
                  alt="Foto de Mario Flor"
                  className="mini-avatar"
                />
              </div>
              <div className="mini-card-info">
                <h2 className="mini-card-name">{t("profile.name")}</h2>
                <p className="mini-card-role">{t("leftBar.title")}</p>
                
                <div className="mini-card-chips">
                  <span className="mini-chip">📍 Deutschland</span>
                  <span className="mini-chip">🌐 DE (C1) • EN (B2) • ES (Nativo)</span>
                  <span className="mini-chip">⏱️ 4+ Jahre Erfahrung</span>
                  <span className="mini-chip">✅ Verfügbar</span>
                </div>

                <div className="mini-card-actions">
                  <a href="mailto:mariofrancisco4d@gmail.com" className="button button--primary button--small">
                    Kontaktieren
                  </a>
                  <a 
                    href="https://marioflordev.s3.us-west-2.amazonaws.com/open_docs/CV-Mario_Flor_P.pdf" 
                    className="button button--ghost button--small" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="CV-Mario_Flor_P.pdf"
                  >
                    CV Download
                  </a>
                </div>
              </div>
            </div>
            
            <nav className="toc-nav" role="navigation" aria-label="CV Navigation">
              <ul className="toc-list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`toc-link ${activeSection === section.id ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        sectionRefs.current[section.id]?.scrollIntoView({ 
                          behavior: "smooth",
                          block: "start"
                        });
                      }}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="profile-content">

            {/* About Section */}
            <section className="profile-section" id="about" ref={(el) => sectionRefs.current.about = el}>
              <h2 className="section-title">{t("profile.aboutTitle")}</h2>
              <div className="section-content">
                <div className="about-text">
                  <p className="about-summary">
                    {t("profile.about", { returnObjects: true })[0]}
                  </p>
                  <div className="about-characteristics">
                    <h3>Was mich auszeichnet:</h3>
                    <ul>
                      <li>Autodidakt mit Leidenschaft für kontinuierliches Lernen</li>
                      <li>Starke Arbeitsmoral: engagiert, präzise und ergebnisorientiert</li>
                      <li>Kollaborative Teamarbeit und effektive Kommunikation</li>
                      <li>Kreativität und Technologie vereinen für innovative Lösungen</li>
                    </ul>
                  </div>
                </div>
                <div className="quick-info-card">
                  <h3>Schnellkontakt</h3>
                  <div className="contact-info">
                    <p><strong>📧 Email:</strong> {t("profile.email")}</p>
                    <p><strong>🌐 LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">Mario Flor</a></p>
                    <p><strong>💻 GitHub:</strong> <a href="#" target="_blank" rel="noopener noreferrer">@ObliMario</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Summary Section */}
            <section className="profile-section" id="summary" ref={(el) => sectionRefs.current.summary = el}>
              <h2 className="section-title">{t("profile.summaryTitle")}</h2>
              <div className="section-content">
                <p className="summary-text">{t("profile.summary")}</p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="profile-section" id="skills" ref={(el) => sectionRefs.current.skills = el}>
              <h2 className="section-title">{t("profile.skillsTitle")}</h2>
              <div className="section-content">
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skill-chips">
                      <span className="skill-chip">React</span>
                      <span className="skill-chip">JavaScript</span>
                      <span className="skill-chip">HTML/CSS</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>Backend</h3>
                    <div className="skill-chips">
                      <span className="skill-chip">C#</span>
                      <span className="skill-chip">Python</span>
                      <span className="skill-chip">C</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>Tools & Frameworks</h3>
                    <div className="skill-chips">
                      <span className="skill-chip">Unity</span>
                      <span className="skill-chip">Flutter</span>
                      <span className="skill-chip">LOVE 2D</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h3>Sprachen</h3>
                    <div className="skill-chips">
                      <span className="skill-chip">Deutsch</span>
                      <span className="skill-chip">Englisch</span>
                      <span className="skill-chip">Spanisch</span>
                    </div>
                  </div>
        </div>
      </div>
            </section>

            {/* Experience Section */}
            <section className="profile-section" id="experience" ref={(el) => sectionRefs.current.experience = el}>
              <h2 className="section-title">{t("profile.workTitle")}</h2>
              <div className="section-content">
                <div className="timeline">
                  {works.map((work, index) => (
                    <ExperienceCard key={work.inicio} work={work} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="profile-section" id="education" ref={(el) => sectionRefs.current.education = el}>
              <h2 className="section-title">{t("profile.educationTitle")}</h2>
              <div className="section-content">
                <div className="education-grid">
                  {t("profile.education", { returnObjects: true }).map((edu, i) => (
                    <EducationCard key={i} education={edu} />
        ))}
      </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="profile-section" id="contact" ref={(el) => sectionRefs.current.contact = el}>
              <h2 className="section-title">Kontakt</h2>
              <div className="section-content">
                <div className="contact-cta">
                  <p className="cta-text">Offen für neue Möglichkeiten und spannende Projekte</p>
                  <div className="cta-actions">
                    <a href="mailto:mariofrancisco4d@gmail.com" className="button button--primary">
                      📧 Email senden
                    </a>
                    <a href="#" className="button button--ghost" target="_blank" rel="noopener noreferrer">
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Container>
      </div>
  );
}

// Componente para tarjetas de experiencia
function ExperienceCard({ work, index }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="experience-card">
          <div className="experience-header">
            <h3 className="company-name">{work.company}</h3>
            <span className="experience-period">{work.inicio} - {work.fin}</span>
          </div>
          <div className="experience-details">
            <h4 className="position-title">{t(work.positionKey)}</h4>
            <p className="location">📍 {work.location}</p>
          </div>
          <div className="experience-tasks">
            <ul className={`task-list ${isExpanded ? "expanded" : ""}`}>
              {t(work.tareasKey, { returnObjects: true }).map((task, i) => (
                <li key={i} className={i >= 2 && !isExpanded ? "hidden" : ""}>
                  {task}
                </li>
          ))}
        </ul>
            {t(work.tareasKey, { returnObjects: true }).length > 2 && (
              <button 
                className="expand-button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={`tasks-${index}`}
              >
                {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para tarjetas de educación
function EducationCard({ education }) {
  const getEducationIcon = (title) => {
    if (title.includes("Universität") || title.includes("Bachelor")) return "🎓";
    if (title.includes("Kurs") || title.includes("CS50")) return "📚";
    if (title.includes("Sprache")) return "🗣️";
    return "📖";
  };

  return (
    <div className="education-card">
      <div className="education-icon">{getEducationIcon(education.title)}</div>
      <div className="education-content">
        <h3 className="education-title">{education.title}</h3>
        <p className="education-place">{education.place}</p>
        <p className="education-date">{education.date}</p>
        <div className="education-achievements">
          {Array.isArray(education.description) ? (
            <ul>
              {education.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p>{education.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProfilePage };