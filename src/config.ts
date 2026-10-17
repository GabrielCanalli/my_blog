import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
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

export const SOCIALS: SocialObjects = [
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
    href: "https://api.whatsapp.com/send?text=",
    linkTitle: `Compartilhar via WhatsApp`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Compartilhar no X`,
    active: true,
  },
];

export const site = SITE;
export const locale = LOCALE;
export const logoImage = LOGO_IMAGE;
export const socials = SOCIALS;
export const shareLinks = SHARE_LINKS;

export const posts = {
  postPerIndex: SITE.postPerIndex,
  postPerPage: SITE.postPerPage,
  scheduledPostMargin: SITE.scheduledPostMargin,
};

export const features = {
  editPost: SITE.editPost,
};

const config = {
  site: SITE,
  locale: LOCALE,
  logoImage: LOGO_IMAGE,
  socials: SOCIALS,
  shareLinks: SHARE_LINKS,
  posts,
  features,
  ...SITE,
};

export default config;
