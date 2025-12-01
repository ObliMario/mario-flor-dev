import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate } from "react-router-dom";
import { posts } from "../blogdata";
import { getYoutubeId, getYoutubeThumbnail, isYoutubeUrl, createYoutubeThumbnailProps } from "../utils/youtube";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Estados de filtros desde URL
  const categoryFilter = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";
  const sortBy = searchParams.get("sort") || "newest";

  // Categorías disponibles
  const categories = useMemo(() => {
    const allCategories = new Set();
    posts.forEach(post => {
      post.category.forEach(cat => allCategories.add(cat.trim()));
    });
    return ["all", ...Array.from(allCategories).sort()];
  }, []);

  // Proyectos filtrados y ordenados
  const filteredProjects = useMemo(() => {
    let filtered = posts;

    // Filtro por mostrar/ocultar (mostrar por defecto si no está definido)
    filtered = filtered.filter(post => post.mostrar !== false);

    // Filtro por categoría
    if (categoryFilter !== "all") {
      filtered = filtered.filter(post => 
        post.category.some(cat => cat.trim() === categoryFilter)
      );
    }

    // Filtro por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(post => {
        const title = t(`${post.i18nKey}.title`).toLowerCase();
        const desc = t(`${post.i18nKey}.description` || "").toLowerCase();
        return title.includes(searchQuery.toLowerCase()) || 
               desc.includes(searchQuery.toLowerCase());
      });
    }

    // Ordenamiento
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return posts.indexOf(b) - posts.indexOf(a);
        case "oldest":
          return posts.indexOf(a) - posts.indexOf(b);
        case "alphabetical":
          return t(`${a.i18nKey}.title`).localeCompare(t(`${b.i18nKey}.title`));
        default:
          return 0;
      }
    });

    return filtered;
  }, [categoryFilter, searchQuery, sortBy, t]);

  // Actualizar URL cuando cambien los filtros
  const updateFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  // Manejar clic en proyecto - navegar directamente a la página del proyecto
  const handleProjectClick = (project) => {
    navigate(`/blog/${project.slug}`);
  };

  return (
    <div className="projects-page">
      {/* Encabezado */}
      <div className="projects-header">
        <div className="container">
          <h1 className="projects-title">{t("projects.title")}</h1>
          <p className="projects-subtitle">{t("projects.subtitle")}</p>
        </div>
      </div>

      {/* Barra de filtros */}
      <div className="projects-filters">
        <div className="container">
          <div className="filters-row">
            {/* Filtros de categoría */}
            <div className="filter-group">
              <div className="filter-chips" role="tablist">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-chip ${categoryFilter === category ? "active" : ""}`}
                    onClick={() => updateFilters({ category })}
                    role="tab"
                    aria-pressed={categoryFilter === category}
                  >
                    {category === "all" ? t("projects.filters.all") : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Búsqueda */}
            <div className="filter-group">
              <div className="search-box">
                <input
                  type="text"
                  placeholder={t("projects.filters.search")}
                  value={searchQuery}
                  onChange={(e) => updateFilters({ search: e.target.value })}
                  className="search-input"
                />
              </div>
            </div>

            {/* Ordenamiento */}
            <div className="filter-group">
              <select
                value={sortBy}
                onChange={(e) => updateFilters({ sort: e.target.value })}
                className="sort-select"
              >
                <option value="newest">{t("projects.filters.newest")}</option>
                <option value="oldest">{t("projects.filters.oldest")}</option>
                <option value="alphabetical">{t("projects.filters.alphabetical")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="projects-content">
        <div className="container">
          <div className="projects-layout">
            {/* Grid de proyectos */}
            <div className="projects-grid">
              {filteredProjects.length === 0 ? (
                <div className="empty-state">
                  <h3>{t("projects.empty.title")}</h3>
                  <p>{t("projects.empty.description")}</p>
                  <button 
                    className="button button--primary"
                    onClick={() => updateFilters({ category: "all", search: "" })}
                  >
                    {t("projects.empty.reset")}
                  </button>
                </div>
              ) : (
                filteredProjects.map(project => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// Componente de tarjeta de proyecto
function ProjectCard({ project, onClick }) {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);

  // Determinar la fuente de la imagen
  const getImageSource = useMemo(() => {
    // Prioridad 1: Imagen local si existe
    if (project.image) {
      return {
        src: project.image,
        alt: t(`${project.i18nKey}.title`),
        isYoutube: false
      };
    }

    // Prioridad 2: Miniatura de YouTube si tiene YTlink
    if (project.YTlink && isYoutubeUrl(project.YTlink)) {
      const youtubeProps = createYoutubeThumbnailProps(project.YTlink, t(`${project.i18nKey}.title`));
      if (youtubeProps) {
        return youtubeProps;
      }
    }

    // Fallback: placeholder
    return {
      src: "https://via.placeholder.com/400x225/1a1f2e/60a5fa?text=Project",
      alt: t(`${project.i18nKey}.title`),
      isYoutube: false
    };
  }, [project.image, project.YTlink, project.i18nKey, t]);

  // Manejar carga de imagen
  useEffect(() => {
    setImageSrc(getImageSource.src);
    setImageError(false);
  }, [getImageSource.src]);

  // Manejar error de imagen
  const handleImageError = () => {
    if (getImageSource.isYoutube && getImageSource.fallbackSrc) {
      // Si es YouTube y falla maxres, intentar hqdefault
      setImageSrc(getImageSource.fallbackSrc);
    } else {
      // Fallback final a placeholder
      setImageSrc("https://via.placeholder.com/400x225/1a1f2e/60a5fa?text=Project");
      setImageError(true);
    }
  };

  return (
    <div 
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="project-card__media">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={getImageSource.alt}
            loading="lazy"
            decoding="async"
            onError={handleImageError}
            onLoad={() => setImageError(false)}
          />
        )}
        {getImageSource.isYoutube && (
          <div className="project-card__youtube-indicator" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">
          {t(`${project.i18nKey}.title`)}
        </h3>
        <p className="project-card__desc">
          {t(`${project.i18nKey}.description` || "")}
        </p>
        <div className="project-card__stack">
          {project.category.map(tech => (
            <span key={tech} className="chip chip--sm">{tech}</span>
          ))}
        </div>
        <div className="project-card__actions">
          {project.linkGithub && (
            <a 
              href={project.linkGithub} 
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.buttons.viewGitHub")}
            </a>
          )}
          {project.YTlink && (
            <a 
              href={project.YTlink} 
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.buttons.viewDemo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

