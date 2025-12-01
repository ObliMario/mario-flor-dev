/* Create a list of pseudo-posts with title, slug and content
 * 
 * Para agregar imágenes a un proyecto, puedes usar:
 * - image: "url" - Para una sola imagen (retrocompatibilidad)
 * - images: ["url1", "url2", ...] - Para múltiples imágenes (galería)
 * 
 * Si defines 'images', se mostrará una galería. Si solo defines 'image', 
 * se mostrará como una imagen única. Si defines ambos, se prioriza 'images'.
 * 
 * Para mostrar/ocultar proyectos:
 * - mostrar: true - El proyecto se mostrará en la lista (por defecto)
 * - mostrar: false - El proyecto se ocultará de la lista pero seguirá existiendo
 */
import logo from "./logo.svg";

const posts = [];
posts.push({
  i18nKey: "blog.posts.website",
  slug: "website",
  imgcss: "blog-logo",
  image: logo,
  category: ["React"],
  mostrar: true,
});
posts.push({
  i18nKey: "blog.posts.AI-Game",
  slug: "AI-Game",
  YTlink: "https://youtu.be/hoGYSWDP73g",
  YTID: "hoGYSWDP73g",
  category: ["Unity / C#", "AI"],
  mostrar: true,
});
posts.push({
  i18nKey: "blog.posts.jellygame",
  slug: "jellygame",
  YTlink: "https://youtu.be/pBdRLonhN_k",
  YTID: "pBdRLonhN_k",
  category: ["Unity / C#"],
  mostrar: true,
});
posts.push({
  i18nKey: "blog.posts.pacman",
  slug: "pacman",
  YTlink: "https://youtu.be/p_NJqCJ2Fts",
  YTID: "p_NJqCJ2Fts",
  category: ["Unity / C#"],
  linkGithub: "https://github.com/ObliMario/PACMAN.git",
  mostrar: true,
});
posts.push({
  i18nKey: "blog.posts.evo",
  slug: "evo",
  YTlink: "https://youtu.be/7uEtePL5Ci4",
  YTID: "7uEtePL5Ci4",
  category: ["Unity / C#"],
  mostrar: false, // Evolution Game - oculto
});
posts.push({
  i18nKey: "blog.posts.DSEncryption",
  slug: "DSEncryption",
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/DSE.png",
  category: ["C"],
  linkGithub: "https://github.com/ObliMario/DS_EncryptionSystem.git",
  mostrar: true,
});

posts.push({
  i18nKey: "blog.posts.quiz",
  slug: "quiz",
  YTlink: "https://youtu.be/bEyFS7pfzKg",
  YTID: "bEyFS7pfzKg",
  category: ["Python", "Mobile App"],
  mostrar: false, // Quiz Program - oculto
});

posts.push({
  i18nKey: "blog.posts.halloraki",
  slug: "halloraki",
  YTlink: "https://youtu.be/-pZRJMEHaOQ",
  YTID: "-pZRJMEHaOQ",
  category: ["Flutter / Dart", "Mobile App"],
  // Imagen principal para la tarjeta del proyecto
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/feature_graphic.png",
  // Galería de imágenes para la página de detalle
  images: [
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_0.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_1.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_2.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_3.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_4.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_5.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/halloraki/HalloRaki_6.jpg"
  ],
  linkPlayStore: "https://play.google.com/store/apps/details?id=com.oblistudios.halloraki",
  mostrar: true,
});
posts.push({
  i18nKey: "blog.posts.florgame",
  slug: "florgame-vr",
  YTlink: "https://youtu.be/SywrReqCmrA",
  YTID: "SywrReqCmrA",
  category: ["Unity / C#", "VR"],
  mostrar: true,
  // Imagen principal para la tarjeta del proyecto
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/projects/florgamevr/available.png",
  // Galería de imágenes para la página de detalle
  images: [
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/florgamevr/flor_1.png",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/florgamevr/flor_2.jpg",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/florgamevr/flor_3.png",
    "https://marioflordev.s3.us-west-2.amazonaws.com/projects/florgamevr/flor_4.jpg"
  ]
});
posts.push({
  i18nKey: "blog.posts.warehouse",
  slug: "warehouse-SQL",
  image: "https://marioflordev.s3.us-west-2.amazonaws.com/High+Level+Architecture.png",
  category: ["Data Engineering", "SQL"],
  imgcss: "Warehouse-image",
  linkGithub: "https://github.com/ObliMario/sql-data-warehause-project.git",
  mostrar: false, // SQL Warehouse - oculto
});


export { posts };
