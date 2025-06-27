/* Create a list of pseudo-posts with title, slug and content*/
import logo from "./logo.svg";

const posts = [];
posts.push({
  i18nKey: "blog.posts.website",
  slug: "website",
  imgcss: "App-logo",
  image: logo,
});
posts.push({
  i18nKey: "blog.posts.AI-Game",
  slug: "AI-Game",
  YTlink: "https://youtu.be/hoGYSWDP73g",
  YTID: "hoGYSWDP73g",
});
posts.push({
  i18nKey: "blog.posts.jellygame",
  slug: "jellygame",
  YTlink: "https://youtu.be/pBdRLonhN_k",
  YTID: "pBdRLonhN_k",
});
posts.push({
  i18nKey: "blog.posts.pacman",
  slug: "pacman",
  YTlink: "https://youtu.be/p_NJqCJ2Fts",
  YTID: "p_NJqCJ2Fts",
});
posts.push({
  i18nKey: "blog.posts.evo",
  slug: "evo",
  YTlink: "https://youtu.be/7uEtePL5Ci4",
  YTID: "7uEtePL5Ci4",
});
posts.push({
  i18nKey: "blog.posts.DSEncryption",
  slug: "DSEncryption",
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/DSE.png",
});

posts.push({
  i18nKey: "blog.posts.quiz",
  slug: "quiz",
  YTlink: "https://youtu.be/bEyFS7pfzKg",
  YTID: "bEyFS7pfzKg",
});

posts.push({
  i18nKey: "blog.posts.deutschapp",
  slug: "deutschapp",
  YTlink: "https://youtu.be/-pZRJMEHaOQ",
  YTID: "-pZRJMEHaOQ",
});
posts.push({
  
  i18nKey: "blog.posts.arcgame",
  slug: "arcgame",
  YTlink: "https://youtu.be/LgjPBEiC-i4",
  YTID: "LgjPBEiC-i4",
});


export { posts };
