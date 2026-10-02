const catalog = document.getElementById("catalog-list");
const filter = document.getElementById("category-filter");
const count = document.getElementById("catalog-count");
const empty = document.getElementById("catalog-empty");

const safeUrl = (value) => {
  try {
    // Разрешаем относительные пути (например assets/mod.jar), чтобы
    // скачивание работало и при открытии сайта локально через file://.
    const raw = String(value ?? "").trim();
    if (!raw) return "#";
    if (/^(https?:|file:)/i.test(raw)) {
      const url = new URL(raw, window.location.href);
      return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : "#";
    }
    if (/^(javascript:|data:|vbscript:)/i.test(raw)) return "#";
    return new URL(raw, window.location.href).href;
  } catch { return "#"; }
};
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, ch => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[ch]));

function renderCatalog() {
  const selected = filter.value;
  const shown = projects.filter(project => {
    const category = String(project.category || "").toLowerCase();
    if (selected !== "all") return category === selected;
    return ["mods", "plugins", "scripts"].includes(category);
  });

  count.textContent = `${String(shown.length).padStart(2, "0")} ${shown.length === 1 ? "PROJECT" : "PROJECTS"}`;
  empty.hidden = shown.length !== 0;
  catalog.innerHTML = shown.map(project => {
const image = project.image
  ? `<img src="${escapeHtml(safeUrl(project.image))}" alt="${escapeHtml(project.title)}" loading="lazy">`
  : "";
    const fallback = (project.links || []).find(link => link.url)?.url || "#";
    const download = project.download || fallback;
    const downloadLabel = project.download ? "Скачать файл" : "Скачать на CurseForge";
    return `<article class="project-card">
      <div class="project-image ${project.image ? "" : "placeholder"}">${image}</div>
      <div class="project-body">
        <div class="project-meta"><span class="project-type">${escapeHtml(project.type || "PROJECT")}</span><span class="project-status">${escapeHtml(project.status || "")}</span></div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-actions">
          <a class="project-link primary-link" href="${escapeHtml(safeUrl(download))}" ${project.download ? 'download' : 'target="_blank" rel="noopener"'}>${downloadLabel} ↗</a>
          ${project.links && project.links.length ? `<a class="project-link" href="${escapeHtml(safeUrl(project.links[0].url))}" target="_blank" rel="noopener">Подробнее ↗</a>` : ""}
        </div>
      </div>
    </article>`;
  }).join("");
}
filter.addEventListener("change", renderCatalog);
document.getElementById("year").textContent = new Date().getFullYear();
renderCatalog();
