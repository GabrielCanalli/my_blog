export const SITE = {
  website: "https://my-blog-amber-one.vercel.app/",
  author: "Gabriel Canalli Barbosa",
  profile: "https://github.com/Canalli171",
  desc: "Diário de escrita e bastidores da criação dos meus livros e também para comentar sobre coisas que eu gosto e da minha vida pessoal",
  title: "Gabriel Canalli MY BLOG",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  editPost: {
    enabled: false,
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/posts/",
    text: "Suggest Changes",
    appendFilePath: true,
  },
} as const;

export const LOCALE = {
  lang: "pt-BR",
  timeZone: "America/Sao_Paulo",
  units: "week",
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  label: "Gabriel Canalli",
  width: 40,
  height: 40,
};
