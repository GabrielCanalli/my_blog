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
  // Propriedades essenciais exigidas pelos componentes do AstroPaper v6:
  url: "https://my-blog-amber-one.vercel.app/",
  lang: "pt-BR",
  dir: "ltr" as const,
  description: "Diário de escrita e bastidores da criação dos meus livros e também para comentar sobre coisas que eu gosto e da minha vida pessoal",
  timezone: "America/Sao_Paulo",
  googleVerification: "",
};

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

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/Canalli171",
    linkTitle: `${SITE.title} no Github`,
    active: true,
  },
];

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?text=",
    linkTitle: "Compartilhar via WhatsApp",
    active: true,
  },
  {
    name: "X",
    url: "https://x.com/intent/post?url=",
    linkTitle: "Compartilhar no X",
    active: true,
  },
];

export const posts = {
  postPerIndex: SITE.postPerIndex,
  postPerPage: SITE.postPerPage,
  perPage: SITE.postPerPage, // Suporte para ambos os nomes de propriedade
  scheduledPostMargin: SITE.scheduledPostMargin,
};

export const features = {
  editPost: SITE.editPost,
  showArchives: SITE.showArchives,
  lightAndDarkMode: SITE.lightAndDarkMode,
  search: "pagefind" as const,
  showBackButton: true,
  dynamicOgImage: false,
};

const config = {
  site: SITE,
  locale: LOCALE,
  logoImage: LOGO_IMAGE,
  socials: SOCIALS,
  shareLinks: SHARE_LINKS,
  posts,
  features,
};

export default config;
