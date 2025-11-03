// assets/js/router.js

function getCurrentRoute() {
  const href = window.location.href.toLowerCase();
  const url = new URL(window.location.href);
  const pageParam = url.searchParams.get("page");

  if (pageParam === "projetos") return "projetos";
  if (pageParam === "cadastro") return "cadastro";
  if (pageParam === "home" || pageParam === "" || pageParam === null) {
    return "home";
  }

  if (href.includes("projetos.html")) return "projetos";
  if (href.includes("cadastro.html")) return "cadastro";
  if (href.includes("index.html")) return "home";

  return "notFound";
}

function renderRoute(routeName) {
  const app = document.getElementById("app");
  if (!app) return;

  let html = "";

  switch (routeName) {
    case "home":
      html = window.Templates.home();
      break;
    case "projetos":
      html = window.Templates.projetos();
      break;
    case "cadastro":
      html = window.Templates.cadastro();
      break;
    default:
      html = window.Templates.notFound();
  }

  app.innerHTML = html;

  if (routeName === "cadastro" && window.FormValidator) {
    window.FormValidator.init();
  }
}

function loadPage() {
  const route = getCurrentRoute();
  renderRoute(route);
}

function handleLinkClick(e) {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();

  const href = link.getAttribute("href"); 

  let page = "home";
  if (href.includes("projetos")) page = "projetos";
  else if (href.includes("cadastro")) page = "cadastro";
  else page = "home";

  const base = window.location.pathname;
  const newUrl = `${base}?page=${page}`;

  window.history.pushState({}, "", newUrl);

  loadPage();
}

window.Router = {
  loadPage,
  handleLinkClick
};
