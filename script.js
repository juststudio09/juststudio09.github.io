const list = document.getElementById("project-list");
const count = document.getElementById("project-count");
const safeUrl = (value) => {
  try { const url = new URL(value, window.location.href); return ["http:", "https:"].includes(url.protocol) ? url.href : "#"; }
  catch { return "#"; }
};
const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, ch => ({
  "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
}[ch]));
count.textContent = `${String(projects.length).padStart(2, "0")} ${projects.length === 1 ? "PROJECT" : "PROJECTS"}`;
list.innerHTML = projects.map(project => {
  const image = project.image ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">` : "";
  const links = (project.links || []).map((link, i) =>
    `<a class="project-link ${i === 0 ? "primary-link" : ""}" href="${escapeHtml(safeUrl(link.url))}" target="_blank" rel="noopener">${escapeHtml(link.label || "Открыть")} ↗</a>`
  ).join("");
  return `<article class="project-card">
    <div class="project-image ${project.image ? "" : "placeholder"}">${image}</div>
    <div class="project-body">
      <div class="project-meta"><span class="project-type">${escapeHtml(project.type || "PROJECT")}</span><span class="project-status">${escapeHtml(project.status || "")}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-actions">${links}</div>
    </div>
  </article>`;
}).join("");
document.getElementById("year").textContent = new Date().getFullYear();
