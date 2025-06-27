import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { posts } from "./blogdata";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";

function BlogPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("blog.title")}</h1>
      <h3>{t("blog.instruction")}</h3>
      <div className="container-data">
        <ul className="blog-ul">
          {posts.map((post) => (
            <BlogLink key={post.slug} post={post} />
          ))}
        </ul>
      </div>
      <Outlet />
    </Container>
  );
}

function BlogLink({ post }) {
  const { t } = useTranslation();

  return (
    <li>
      <NavLink className="NavLinkBlog" to={`/blog/${post.slug}`}>
        {t(`${post.i18nKey}.title`)}
      </NavLink>
    </li>
  );
}

export { BlogPage };
