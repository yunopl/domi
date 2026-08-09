function formatDate(iso, lang) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function renderUpdates() {
  const list = document.getElementById("timeline");
  const empty = document.getElementById("timeline-empty");
  if (!list) return;

  const lang = getLang();
  const sorted = [...UPDATES].sort((a, b) => (a.date < b.date ? 1 : -1));

  if (sorted.length === 0) {
    list.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  list.innerHTML = sorted
    .map((u) => {
      const title = lang === "pl" ? u.title_pl : u.title_en;
      const body = lang === "pl" ? u.body_pl : u.body_en;
      return `
        <article class="update-entry">
          <div class="update-date">${formatDate(u.date, lang)}</div>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderUpdates);
document.addEventListener("langchange", renderUpdates);
