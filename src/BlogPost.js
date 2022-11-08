import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "./blogdata";
import YouTube from "react-youtube";

function BlogPost() {
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
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {/* if post.image exists */}
        {post.image && (
          <div className="blogImg">
            <img src={post.image} alt="logo" className={post.imgcss} />
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
      </div>
    </div>
  );
}

export { BlogPost };
