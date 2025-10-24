/* Create a list of pseudo-posts with title, slug and content*/
import logo from "./logo.svg";

const posts = [];
posts.push({
  i18nKey: "blog.posts.website",
  slug: "website",
  imgcss: "blog-logo",
  image: logo,
  category: ["React"],
});
posts.push({
  i18nKey: "blog.posts.AI-Game",
  slug: "AI-Game",
  YTlink: "https://youtu.be/hoGYSWDP73g",
  YTID: "hoGYSWDP73g",
  category: ["Unity / C#", "AI"],
});
posts.push({
  i18nKey: "blog.posts.jellygame",
  slug: "jellygame",
  YTlink: "https://youtu.be/pBdRLonhN_k",
  YTID: "pBdRLonhN_k",
  category: ["Unity / C#"],
});
posts.push({
  i18nKey: "blog.posts.pacman",
  slug: "pacman",
  YTlink: "https://youtu.be/p_NJqCJ2Fts",
  YTID: "p_NJqCJ2Fts",
  category: ["Unity / C#"],
  linkGithub: "https://github.com/ObliMario/PACMAN.git",
});
posts.push({
  i18nKey: "blog.posts.evo",
  slug: "evo",
  YTlink: "https://youtu.be/7uEtePL5Ci4",
  YTID: "7uEtePL5Ci4",
  category: ["Unity / C#"],
});
posts.push({
  i18nKey: "blog.posts.DSEncryption",
  slug: "DSEncryption",
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/DSE.png",
  category: ["C"],
  linkGithub: "https://github.com/ObliMario/DS_EncryptionSystem.git",
});

posts.push({
  i18nKey: "blog.posts.quiz",
  slug: "quiz",
  YTlink: "https://youtu.be/bEyFS7pfzKg",
  YTID: "bEyFS7pfzKg",
  category: ["Python", "Mobile App"],
});

posts.push({
  i18nKey: "blog.posts.deutschapp",
  slug: "deutschapp",
  YTlink: "https://youtu.be/-pZRJMEHaOQ",
  YTID: "-pZRJMEHaOQ",
  category: ["Flutter / Dart", "Mobile App"],
});
posts.push({

  i18nKey: "blog.posts.florgame",
  slug: "florgame-vr",
  YTlink: "https://youtu.be/SywrReqCmrA",
  YTID: "SywrReqCmrA",
  category: ["Unity / C#", "VR"],
});
posts.push({

  i18nKey: "blog.posts.warehouse",
  slug: "warehouse-SQL",
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/High+Level+Architecture.png",
  category: ["Data Engineering", "SQL"],
  imgcss: "Warehouse-image",
  linkGithub: "https://github.com/ObliMario/sql-data-warehause-project.git",
});


export { posts };
