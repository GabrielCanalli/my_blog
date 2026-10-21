import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Início",
    posts: "Postagens",
    tags: "Etiquetas",
    about: "Sobre",
    archives: "Arquivo",
    search: "Pesquisar",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado em",
    sharePostIntro: "Compartilhar esta postagem:",
    sharePostOn: "Compartilhar esta postagem no {{platform}}",
    sharePostViaEmail: "Compartilhar via e-mail",
    tagLabel: "Etiquetas",
    backToTop: "Voltar ao topo",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Postagem anterior",
    nextPost: "Próxima postagem",
  },
  pagination: {
    prev: "Anterior",
    next: "Próximo",
    page: "Página",
  },
  home: {
    socialLinks: "Redes Sociais",
    featured: "Destaques",
    recentPosts: "Postagens Recentes",
    allPosts: "Todas as Postagens",
  },
  footer: {
    copyright: "Direitos autorais",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos os artigos com a etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas as etiquetas utilizadas nas postagens.",

    postsTitle: "Postagens",
    postsDesc: "Todos os artigos publicados.",

    archivesTitle: "Arquivo",
    archivesDesc: "Todos os artigos arquivados.",

    searchTitle: "Pesquisar",
    searchDesc: "Pesquisar artigo...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    toggleTheme: "Alternar tema",
    searchPlaceholder: "Buscar postagens...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a próxima página",
  },
  notFound: {
    title: "404 Não Encontrado",
    message: "Página Não Encontrada",
    goHome: "Voltar para o início",
  },
} satisfies UIStrings;
