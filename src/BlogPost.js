import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./blogdata";
import YouTube from "react-youtube";
import { useTranslation } from "react-i18next";

function BlogPost() {
  const { t } = useTranslation();
  const opts = {
    height: "390",
    width: "640",
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

  return (
    <div>
      <button className="returnBtn" onClick={returnToBlog}>
        Return to blog
      </button>
      <div className="container-data">
        <h1>{t(`${post.i18nKey}.title`)}</h1>
        <p>{t(`${post.i18nKey}.content`)}</p>
        {/* if post.image exists */}
        {post.image && (
          <div className="blogImg">
            {/* Contenedor estático que NO rota */}
            <div className="logo-stage">
              {/* Capa decorativa fija (glow/óvalo) */}
              <div className="logo-bloom" aria-hidden="true"></div>

              {/* ÚNICO elemento que rota */}
              <div className="logo-rotor">
                <img src={post.image} alt="React Logo" className="logo-img" />
              </div>
            </div>
          </div>
        )}
        {/* if post.link exists */}
        {post.YTlink && (
          <div className="blogImg">
            <YouTube videoId={post.YTID} opts={opts} />
            <a href={post.YTlink} target="_blank" rel="noreferrer">
              Link to the project video on Youtube
            </a>
          </div>
        )}
        {/* if post.linkGithub exists */}
        {post.linkGithub && (
          <div className="blogImg">
            <a href={post.linkGithub} target="_blank" rel="noreferrer">
              Link to the project on Github
            </a>
          </div>
        )}
        {/* if post.linkWeb exists */}
      </div>
    </div>
  );
}

export { BlogPost };
