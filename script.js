(() => {
  "use strict";
  const apps = Array.isArray(window.NEOCARE_APPS) ? window.NEOCARE_APPS : [];
  const grid = document.getElementById("toolsGrid");
  const searchInput = document.getElementById("searchInput");
  const filterRow = document.getElementById("filterRow");
  const favoritesToggle = document.getElementById("favoritesToggle");
  const emptyState = document.getElementById("emptyState");
  const resultsLabel = document.getElementById("resultsLabel");
  const toolCount = document.getElementById("toolCount");
  const dialog = document.getElementById("appDialog");
  const dialogContent = document.getElementById("dialogContent");
  let activeFilter = "all";
  let favoritesOnly = false;
  let favorites = new Set();

  try { favorites = new Set(JSON.parse(localStorage.getItem("neocare-favorites") || "[]")); } catch (_) {}

  const categoryNames = {
    crecimiento: "Crecimiento neonatal",
    calculadoras: "Calculadoras clínicas",
    clinica: "Clínica neonatal",
    gestion: "Gestión y datos",
    tecnologia: "Tecnología e IA"
  };
  const statusClass = status => status === "available" ? "status-available" : status === "beta" ? "status-beta" : "status-development";
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));

  function cardTemplate(app) {
    const isFavorite = favorites.has(app.id);
    const safeTitle = escapeHTML(app.title);
    const hasUrl = Boolean(app.url && app.url.trim());
    return `
      <article class="tool-card">
        <div class="card-topline"><span class="card-category">${escapeHTML(app.categoryLabel || categoryNames[app.category] || "Herramienta")}</span>
          <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" data-favorite="${escapeHTML(app.id)}" aria-label="${isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}" aria-pressed="${isFavorite}">${isFavorite ? "★" : "☆"}</button>
        </div>
        <div class="tool-icon icon-${escapeHTML(app.category)}">${escapeHTML(app.icon || "✳")}</div>
        <h3>${safeTitle}</h3>
        <p>${escapeHTML(app.description)}</p>
        <div class="card-bottom"><span class="status ${statusClass(app.status)}"><i></i>${escapeHTML(app.statusLabel || "En desarrollo")}</span>
          <button class="card-link" data-open="${escapeHTML(app.id)}">${hasUrl ? "Abrir herramienta" : "Ver detalles"} <span>↗</span></button>
        </div>
      </article>`;
  }

  function render() {
    const query = searchInput.value.trim().toLocaleLowerCase("es");
    const filtered = apps.filter(app => {
      const categoryMatch = activeFilter === "all" || app.category === activeFilter;
      const text = [app.title, app.description, app.detail, app.categoryLabel, ...(app.tags || [])].join(" ").toLocaleLowerCase("es");
      const queryMatch = !query || text.includes(query);
      const favoriteMatch = !favoritesOnly || favorites.has(app.id);
      return categoryMatch && queryMatch && favoriteMatch;
    });
    grid.innerHTML = filtered.map(cardTemplate).join("");
    emptyState.hidden = filtered.length !== 0;
    toolCount.textContent = String(apps.length);
    resultsLabel.textContent = favoritesOnly ? `Mostrando ${filtered.length} favorito${filtered.length === 1 ? "" : "s"}` : query ? `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}` : `Mostrando ${filtered.length} herramienta${filtered.length === 1 ? "" : "s"}`;
    grid.querySelectorAll("[data-favorite]").forEach(button => button.addEventListener("click", () => toggleFavorite(button.dataset.favorite)));
    grid.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openApp(button.dataset.open)));
  }

  function toggleFavorite(id) {
    if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
    try { localStorage.setItem("neocare-favorites", JSON.stringify([...favorites])); } catch (_) {}
    render();
  }

  function openApp(id) {
    const app = apps.find(item => item.id === id);
    if (!app) return;
    const hasUrl = Boolean(app.url && app.url.trim());
    const refs = (app.references || []).map(ref => `<li>${escapeHTML(ref)}</li>`).join("");
    dialogContent.innerHTML = `
      <div class="dialog-kicker">${escapeHTML(app.categoryLabel || categoryNames[app.category] || "Herramienta")}</div>
      <div class="dialog-icon">${escapeHTML(app.icon || "✳")}</div>
      <h2 id="dialogTitle">${escapeHTML(app.title)}</h2>
      <p class="dialog-description">${escapeHTML(app.detail || app.description)}</p>
      <div class="dialog-status"><span class="status ${statusClass(app.status)}"><i></i>${escapeHTML(app.statusLabel || "En desarrollo")}</span><span>Versión: ${escapeHTML(app.version || "No especificada")}</span></div>
      ${(app.tags || []).length ? `<div class="dialog-tags">${app.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>` : ""}
      ${refs ? `<div class="dialog-references"><h3>Referencias y documentación</h3><ul>${refs}</ul></div>` : ""}
      <div class="dialog-actions">${hasUrl ? `<a class="button button-primary" href="${escapeHTML(app.url)}" target="_blank" rel="noopener noreferrer">Abrir aplicación ↗</a>` : `<span class="dialog-notice">Esta herramienta todavía no tiene una aplicación publicada.</span>`}<button class="button button-outline" data-dialog-fav="${escapeHTML(app.id)}">${favorites.has(app.id) ? "★ En favoritos" : "☆ Agregar a favoritos"}</button></div>
      <p class="dialog-disclaimer">Las herramientas digitales son recursos de apoyo y no reemplazan la evaluación ni el juicio clínico profesional. Verificá siempre las fuentes, unidades y resultados.</p>`;
    dialogContent.querySelector("[data-dialog-fav]").addEventListener("click", () => {
      toggleFavorite(id);
      openApp(id);
    });
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  filterRow.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filterRow.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    render();
  });
  searchInput.addEventListener("input", render);
  favoritesToggle.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    favoritesToggle.classList.toggle("active", favoritesOnly);
    favoritesToggle.setAttribute("aria-pressed", String(favoritesOnly));
    favoritesToggle.textContent = favoritesOnly ? "★ Ver todos" : "☆ Mis favoritos";
    render();
  });
  document.getElementById("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    activeFilter = "all";
    favoritesOnly = false;
    filterRow.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === "all"));
    favoritesToggle.classList.remove("active");
    favoritesToggle.setAttribute("aria-pressed", "false");
    favoritesToggle.textContent = "☆ Mis favoritos";
    render();
  });
  document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  const menuButton = document.getElementById("mobileMenuButton");
  const nav = document.getElementById("mainNav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));

  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); searchInput.focus();
    }
    if (event.key === "Escape" && dialog.open) dialog.close();
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
