// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const anoSpan = document.getElementById("ano") || document.getElementById("ano2");
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  const savedTheme = localStorage.getItem("ong-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const btn = document.getElementById("themeToggle");
    if (btn) btn.setAttribute("aria-pressed", "true");
  }

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark-mode");
      themeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
      localStorage.setItem("ong-theme", isDark ? "dark" : "light");
    });
  }
  
  if (window.Router && typeof window.Router.loadPage === "function") {
    window.Router.loadPage();
    document.addEventListener("click", window.Router.handleLinkClick);
  }
});

window.addEventListener("popstate", function () {
  if (window.Router && typeof window.Router.loadPage === "function") {
    window.Router.loadPage();
  }
});

