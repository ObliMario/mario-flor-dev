import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./blogdata";
import YouTube from "react-youtube";
import { useTranslation } from "react-i18next";

function BlogPost() {
  const { t } = useTranslation();
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const navigate = useNavigate();
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
  };

  // Si no se encuentra el post, mostrar mensaje de error
  if (!post) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <button className="button button--ghost project-detail__back" onClick={returnToBlog}>
            ← {t("projects.buttons.backToProjects") || "Back to Projects"}
          </button>
          <div className="project-detail__not-found">
            <h1>Post not found</h1>
            <p>The post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Botón de regreso */}
        <button className="button button--ghost project-detail__back" onClick={returnToBlog}>
          ← {t("projects.buttons.backToProjects") || "Back to Projects"}
        </button>

        {/* Layout de dos columnas */}
        <div className="project-detail__layout">
          {/* Columna principal (izquierda) */}
          <div className="project-detail__main">
            {/* Header con título y tags */}
            <div className="project-detail__header-section">
              <h1 className="project-detail__page-title">
                {t(`${post.i18nKey}.title`)}
              </h1>
              <div className="project-detail__tags">
                {post.category.map(tech => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>
            </div>

            {/* Descripción */}
            <div className="project-detail__description">
              <p>{t(`${post.i18nKey}.content`)}</p>
            </div>

            {/* Botones de acción */}
            <div className="project-detail__actions-section">
              {post.linkPlayStore && (
                <a 
                  href={post.linkPlayStore} 
                  className="button button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.buttons.downloadApp") || "Download App"}
                </a>
              )}
              {post.linkGithub && (
                <a 
                  href={post.linkGithub} 
                  className="button button--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.buttons.viewGitHub")}
                </a>
              )}
              {post.YTlink && (
                <a 
                  href={post.YTlink} 
                  className="button button--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.buttons.viewDemo")}
                </a>
              )}
            </div>
          </div>

          {/* Sidebar de media (derecha) */}
          <div className="project-detail__sidebar">
            {/* Video de YouTube */}
            {post.YTlink && (
              <div className="project-detail__media-item">
                <div className="project-detail__media-label">Video</div>
                <div className="project-detail__video-wrapper">
                  <YouTube videoId={post.YTID} opts={opts} />
                </div>
                <a 
                  href={post.YTlink} 
                  className="project-detail__media-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.buttons.watchOnYoutube") || "Watch on YouTube"} →
                </a>
              </div>
            )}

            {/* Galería de imágenes */}
            {/* Si hay un array de imágenes, mostrar todas */}
            {post.images && post.images.length > 0 && (
              <div className="project-detail__media-item">
                <div className="project-detail__media-label">
                  {t("projects.gallery.title") || "Screenshots"} ({post.images.length})
                </div>
                <div className="project-detail__gallery">
                  {post.images.map((imgSrc, index) => (
                    <div key={index} className="project-detail__gallery-item">
                      <div className="project-detail__image-wrapper">
                        <img 
                          src={imgSrc} 
                          alt={`${t(`${post.i18nKey}.title`)} - ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Imagen única (retrocompatibilidad) - solo si no hay array de imágenes */}
            {!post.images && post.image && (
              <div className="project-detail__media-item">
                <div className="project-detail__media-label">Screenshot</div>
                <div className="project-detail__image-wrapper">
                  <img 
                    src={post.image} 
                    alt={t(`${post.i18nKey}.title`)}
                    className={post.imgcss === "Warehouse-image" ? "Warehouse-image" : ""}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { BlogPost };
