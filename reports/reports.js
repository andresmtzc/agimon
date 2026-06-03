const SUPABASE_URL = "https://xiooucmfmftuqemhlmpd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WnR9lmgM8CAFskD6TtWTZg_2Q0ACtaZ";

const titleEl = document.getElementById("report-title");
const metaEl = document.getElementById("report-meta");
const summaryEl = document.getElementById("summary");
const tableWrapEl = document.getElementById("table-wrap");
const tableEl = document.getElementById("report-table");
const emptyEl = document.getElementById("empty-state");

function tokenFromLocation() {
  const hashMatch = window.location.hash.match(/\/r\/([^/?#]+)/);
  if (hashMatch) return decodeURIComponent(hashMatch[1]);
  const params = new URLSearchParams(window.location.search);
  return params.get("token") || params.get("t") || "";
}

function formatMoney(value) {
  const amount = Number(value || 0);
  return amount.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(value) {
  const amount = Number(value || 0);
  return `${amount.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}%`;
}

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function setEmpty(message) {
  titleEl.textContent = "Reporte no disponible";
  metaEl.textContent = "";
  emptyEl.hidden = false;
  summaryEl.hidden = true;
  tableWrapEl.hidden = true;
  emptyEl.querySelector("p").textContent = message;
}

async function loadReport(token) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_public_report`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ report_token: token }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const rows = await response.json();
  return Array.isArray(rows) ? rows[0] : rows;
}

function renderSummary(report) {
  const summary = report.summary || {};
  const metrics = [
    ["Total NORCE", summary.norce_total],
    ["Total Chomo", summary.chomo_total],
    ["Gran Total", summary.grand_total],
  ];
  summaryEl.innerHTML = metrics.map(([label, value]) => `
    <div class="metric">
      <span>${label}</span>
      <strong>${formatMoney(value)}</strong>
    </div>
  `).join("");
  summaryEl.hidden = false;
}

function renderTable(report) {
  const columns = Array.isArray(report.columns) ? report.columns : [];
  const rows = Array.isArray(report.rows) ? report.rows : [];
  const totals = report.totals || {};
  const thead = `
    <thead>
      <tr>
        ${columns.map(column => `<th class="${column.rail ? `rail-${column.rail}` : ""}">${column.label}</th>`).join("")}
      </tr>
    </thead>
  `;
  const bodyRows = rows.map(row => `
    <tr>
      ${columns.map(column => {
        if (column.key === "unit") return `<td>${row.unit}</td>`;
        if (column.key === "ownership_pct") return `<td>${formatPercent(row.ownership_pct || 0)}</td>`;
        return `<td>${formatMoney(row.values?.[column.key] || 0)}</td>`;
      }).join("")}
    </tr>
  `).join("");
  const totalRow = `
    <tr class="total-row">
      ${columns.map(column => {
        if (column.key === "unit") return "<td>TOTAL</td>";
        if (column.key === "ownership_pct") return "<td>100.00%</td>";
        return `<td>${formatMoney(totals[column.key] || 0)}</td>`;
      }).join("")}
    </tr>
  `;
  tableEl.innerHTML = `${thead}<tbody>${bodyRows}${totalRow}</tbody>`;
  tableWrapEl.hidden = false;
}

async function main() {
  const token = tokenFromLocation();
  if (!token) {
    setEmpty("Este enlace no incluye token de reporte.");
    return;
  }
  try {
    const row = await loadReport(token);
    if (!row?.payload) {
      setEmpty("El reporte expiró, fue revocado o no existe.");
      return;
    }
    const report = row.payload;
    titleEl.textContent = row.title || report.title || "Reporte Agimon";
    metaEl.innerHTML = [
      report.month ? `Mes: ${report.month}` : "",
      row.generated_at ? `Generado: ${formatDate(row.generated_at)}` : "",
      row.expires_at ? `Expira: ${formatDate(row.expires_at)}` : "",
    ].filter(Boolean).join("<br>");
    emptyEl.hidden = true;
    renderSummary(report);
    renderTable(report);
  } catch (error) {
    setEmpty("No pude cargar el reporte. Intenta pedir uno nuevo en Agimon.");
  }
}

main();
