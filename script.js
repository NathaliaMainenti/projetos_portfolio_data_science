(function () {
  "use strict";

  /* ---------- Ano no rodapé ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Tema claro/escuro ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var iconSun = document.getElementById("iconSun");
  var iconMoon = document.getElementById("iconMoon");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
    } else {
      root.setAttribute("data-theme", "light");
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
    }
  }

  var savedTheme = localStorage.getItem("theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  /* ---------- Nav ativa ao rolar (IntersectionObserver) ---------- */
  var sections = document.querySelectorAll("section[id], header[id]");
  var navItems = document.querySelectorAll("[data-nav]");

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navItems.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach(function (sec) { sectionObserver.observe(sec); });

  /* ---------- Reveal on scroll ---------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- Copiar snippets de código ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var code = btn.parentElement.querySelector("code");
      if (!code) return;
      navigator.clipboard.writeText(code.textContent).then(function () {
        var original = btn.textContent;
        btn.textContent = "Copiado!";
        setTimeout(function () { btn.textContent = original; }, 1800);
      });
    });
  });

  /* ---------- Aviso de link genérico do GitHub ---------- */
  document.querySelectorAll("[data-github-link]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Link do GitHub ainda não configurado. Suba o repositório e atualize o href deste botão.");
      }
    });
  });

  /* ---------- Filtro de projetos por categoria ---------- */
  var filterRow = document.getElementById("projectFilters");
  if (filterRow) {
    var filterPills = filterRow.querySelectorAll(".filter-pill");
    var projectCards = document.querySelectorAll("#projetos .project-card");

    filterRow.addEventListener("click", function (e) {
      var pill = e.target.closest(".filter-pill");
      if (!pill) return;

      filterPills.forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");

      var filter = pill.getAttribute("data-filter");
      projectCards.forEach(function (card) {
        var matches = filter === "todos" || card.getAttribute("data-category") === filter;
        card.classList.toggle("filtered-out", !matches);
      });
    });
  }

  /* ---------- Botão de currículo: só baixa se o PDF existir ---------- */
  document.querySelectorAll("[data-cv-link]").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var href = link.getAttribute("href");
      fetch(href, { method: "HEAD" })
        .then(function (res) {
          if (res.ok) {
            window.location.href = href;
          } else {
            throw new Error("not found");
          }
        })
        .catch(function () {
          alert("Currículo ainda não adicionado. Coloque o PDF em " + href + " para ativar o download.");
        });
    });
  });
})();
