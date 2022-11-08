import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { posts } from "./blogdata";
import { Container } from "./Container";


function BlogPage() {
  return (
    <Container>
      <h1>Projects (click on them for more info!) </h1>

      <ul className="blog-ul">
        {posts.map((post) => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
      <Outlet />
    </Container>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <NavLink to={`/blog/${post.slug}`}>{post.title}</NavLink>
    </li>
  );
}

export { BlogPage };
