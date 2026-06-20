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

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
  const metrics = report.report_type === "alex_project_task_table"
    ? [
      ["Coincidencias", summary.matched_count],
      ["En tabla", summary.returned_count],
      ["Abiertos", summary.open_count],
      ["Vencidos", summary.overdue_count],
      ["Sin fecha", summary.without_date_count],
    ]
    : [
      ["Total NORCE", summary.norce_total],
      ["Total Chomo", summary.chomo_total],
      ["Gran Total", summary.grand_total],
    ];
  summaryEl.innerHTML = metrics.map(([label, value]) => `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong>${report.report_type === "alex_project_task_table" ? Number(value || 0).toLocaleString("es-MX") : formatMoney(value)}</strong>
    </div>
  `).join("");
  summaryEl.hidden = false;
}

function formatCell(value, column) {
  if (column.type === "money") return formatMoney(value);
  if (column.type === "percent") return formatPercent(value);
  if (column.type === "datetime") return value ? formatDate(value) : "";
  if (column.type === "number") return Number(value || 0).toLocaleString("es-MX");
  return String(value ?? "");
}

function renderTable(report) {
  const columns = Array.isArray(report.columns) ? report.columns : [];
  const rows = Array.isArray(report.rows) ? report.rows : [];
  const totals = report.totals && typeof report.totals === "object" ? report.totals : null;
  const thead = `
    <thead>
      <tr>
        ${columns.map(column => `<th class="${column.rail ? `rail-${column.rail}` : ""}">${escapeHtml(column.label)}</th>`).join("")}
      </tr>
    </thead>
  `;
  const bodyRows = rows.map(row => `
    <tr>
      ${columns.map(column => {
        const rawValue = column.key === "unit"
          ? row.unit
          : column.key === "ownership_pct"
            ? row.ownership_pct
            : row.values?.[column.key];
        const className = column.type === "long_text" ? "long-text" : column.type === "status" ? "status-cell" : "";
        return `<td class="${className}">${escapeHtml(formatCell(rawValue, column))}</td>`;
      }).join("")}
    </tr>
  `).join("");
  const totalRow = totals ? `
    <tr class="total-row">
      ${columns.map(column => {
        if (column.key === "unit") return "<td>TOTAL</td>";
        if (column.key === "ownership_pct") return "<td>100.00%</td>";
        return `<td>${escapeHtml(formatCell(totals[column.key] || 0, column))}</td>`;
      }).join("")}
    </tr>
  ` : "";
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
      report.report_type === "alex_project_task_table" && report.filters
        ? `Filtros: ${escapeHtml([
          ...(report.filters.statuses || []),
          report.filters.due_mode && report.filters.due_mode !== "any" ? report.filters.due_mode : "",
          ...(report.filters.areas || []),
          ...(report.filters.encargados || []),
        ].filter(Boolean).join(" · ") || "todos")}`
        : "",
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
