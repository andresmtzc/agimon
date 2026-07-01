const SUPABASE_URL = "https://xiooucmfmftuqemhlmpd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WnR9lmgM8CAFskD6TtWTZg_2Q0ACtaZ";

const titleEl = document.getElementById("report-title");
const metaEl = document.getElementById("report-meta");
const summaryEl = document.getElementById("summary");
const tableWrapEl = document.getElementById("table-wrap");
const tableEl = document.getElementById("report-table");
const emptyEl = document.getElementById("empty-state");
const taskFiltersEl = document.getElementById("task-filters");
const taskFilterCountEl = document.getElementById("task-filter-count");

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
      ["Vencen hoy", summary.due_today_count],
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

function columnClass(column) {
  const key = String(column?.key || "unknown").replace(/[^a-z0-9_-]/gi, "-").toLowerCase();
  return [
    `col-${key}`,
    column?.rail ? `rail-${column.rail}` : "",
    column?.type === "long_text" ? "long-text" : "",
    column?.type === "status" ? "status-cell" : "",
  ].filter(Boolean).join(" ");
}

function rawCellValue(row, column) {
  if (column.key === "unit") return row.unit;
  if (column.key === "ownership_pct") return row.ownership_pct;
  return row.values?.[column.key];
}

function compareCellValues(left, right, column) {
  const leftEmpty = left === null || left === undefined || left === "";
  const rightEmpty = right === null || right === undefined || right === "";
  if (leftEmpty || rightEmpty) return leftEmpty === rightEmpty ? 0 : (leftEmpty ? 1 : -1);
  if (["number", "money", "percent"].includes(column.type)) return Number(left) - Number(right);
  if (["datetime", "date_text"].includes(column.type)) {
    const leftTime = Date.parse(String(left));
    const rightTime = Date.parse(String(right));
    if (Number.isFinite(leftTime) && Number.isFinite(rightTime)) return leftTime - rightTime;
  }
  if (column.type === "status") {
    const rank = { open: 1, resolved: 2, merged: 3, cancelled: 4 };
    const difference = (rank[String(left).toLowerCase()] || 99) - (rank[String(right).toLowerCase()] || 99);
    if (difference) return difference;
  }
  return String(left).localeCompare(String(right), "es", { sensitivity: "base", numeric: true });
}

function localDateKey(value, timezone) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone || "America/Monterrey",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function addDays(dateKey, days) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + Number(days || 0));
  return date.toISOString().slice(0, 10);
}

function renderEvidenceCell(row, fallbackValue) {
  const items = Array.isArray(row?.meta?.evidence_items) ? row.meta.evidence_items : [];
  if (!items.length) return escapeHtml(fallbackValue);
  const latest = items.at(-1);
  const previous = items.slice(0, -1);
  const formatItem = item => `
    <div class="evidence-item">
      ${item?.media?.original_url ? `
        <a class="evidence-media" href="${escapeHtml(item.media.original_url)}" target="_blank" rel="noopener noreferrer">
          ${item.media.thumbnail_url
            ? `<img src="${escapeHtml(item.media.thumbnail_url)}" alt="Evidence thumbnail" loading="lazy">`
            : `<span>View media</span>`}
        </a>
      ` : ""}
      <div class="evidence-item-meta">${escapeHtml([
        item.sender_name || "",
        item.created_at ? formatDate(item.created_at) : "",
      ].filter(Boolean).join(" · "))}</div>
      <div>${escapeHtml(item.text || "")}</div>
    </div>
  `;
  return `
    ${formatItem(latest)}
    ${previous.length ? `
      <button type="button" class="evidence-toggle" aria-expanded="false">View ${previous.length} more</button>
      <div class="evidence-history" hidden>${previous.map(formatItem).join("")}</div>
    ` : ""}
  `;
}

function renderTable(report) {
  const columns = Array.isArray(report.columns) ? report.columns : [];
  const originalRows = (Array.isArray(report.rows) ? report.rows : []).map((row, index) => ({ row, index }));
  const totals = report.totals && typeof report.totals === "object" ? report.totals : null;
  tableEl.className = report.report_type === "alex_project_task_table" ? "task-table" : "finance-table";
  const colgroup = `<colgroup>${columns.map(column => `<col class="${columnClass(column)}">`).join("")}</colgroup>`;
  const totalRow = totals ? `
    <tr class="total-row">
      ${columns.map(column => {
        if (column.key === "unit") return `<td class="${columnClass(column)}">TOTAL</td>`;
        if (column.key === "ownership_pct") return `<td class="${columnClass(column)}">100.00%</td>`;
        return `<td class="${columnClass(column)}">${escapeHtml(formatCell(totals[column.key] || 0, column))}</td>`;
      }).join("")}
    </tr>
  ` : "";
  let sortKey = null;
  let sortDirection = null;
  const activeDateFilters = new Set();
  const today = localDateKey(report.generated_at, report.timezone);

  const matchesDateFilters = row => {
    if (report.report_type !== "alex_project_task_table" || !activeDateFilters.size) return true;
    const commitmentDate = String(row?.values?.commitment_date || "").slice(0, 10);
    const hasDate = /^\d{4}-\d{2}-\d{2}$/.test(commitmentDate);
    for (const dateFilter of activeDateFilters) {
      if (dateFilter === "no_date" && !hasDate) return true;
      if (!hasDate) continue;
      if (dateFilter === "today" && commitmentDate === today) return true;
      if (dateFilter === "overdue" && commitmentDate < today) return true;
      if (/^\d+$/.test(dateFilter) && commitmentDate >= today && commitmentDate <= addDays(today, Number(dateFilter))) {
        return true;
      }
    }
    return false;
  };

  const render = () => {
    const filteredRows = originalRows.filter(({ row }) => matchesDateFilters(row));
    const sortedRows = [...filteredRows];
    const sortColumn = columns.find(column => column.key === sortKey);
    if (sortColumn && sortDirection) {
      sortedRows.sort((left, right) => {
        const leftValue = rawCellValue(left.row, sortColumn);
        const rightValue = rawCellValue(right.row, sortColumn);
        const leftEmpty = leftValue === null || leftValue === undefined || leftValue === "";
        const rightEmpty = rightValue === null || rightValue === undefined || rightValue === "";
        if (leftEmpty !== rightEmpty) return leftEmpty ? 1 : -1;
        const comparison = compareCellValues(
          leftValue,
          rightValue,
          sortColumn,
        );
        return comparison === 0
          ? left.index - right.index
          : comparison * (sortDirection === "asc" ? 1 : -1);
      });
    }
    const thead = `
      <thead>
        <tr>
          ${columns.map(column => {
            const active = column.key === sortKey && sortDirection;
            const indicator = active ? (sortDirection === "asc" ? "▲" : "▼") : "↕";
            const ariaSort = active ? (sortDirection === "asc" ? "ascending" : "descending") : "none";
            return `<th class="${columnClass(column)}" aria-sort="${ariaSort}"><button type="button" class="sort-button" data-sort-key="${escapeHtml(column.key)}">${escapeHtml(column.label)} <span class="sort-indicator" aria-hidden="true">${indicator}</span></button></th>`;
          }).join("")}
        </tr>
      </thead>
    `;
    const bodyRows = sortedRows.map(({ row }) => {
      const evidenceCount = Number(row?.meta?.new_evidence_count || 0);
      const rowClass = [
        row?.meta?.has_new_evidence ? "has-new-evidence" : "",
      ].filter(Boolean).join(" ");
      return `
        <tr class="${rowClass}">
          ${columns.map(column => {
            const rawValue = rawCellValue(row, column);
            const formattedValue = formatCell(rawValue, column);
            const value = report.report_type === "alex_project_task_table" && column.key === "evidence"
              ? renderEvidenceCell(row, formattedValue)
              : escapeHtml(formattedValue);
            const badge = report.report_type === "alex_project_task_table" && column.key === "folio" && evidenceCount > 0
              ? `<span class="evidence-badge">+${evidenceCount}</span>`
              : "";
            return `<td class="${columnClass(column)}">${value}${badge}</td>`;
          }).join("")}
        </tr>
      `;
    }).join("");
    tableEl.innerHTML = `${colgroup}${thead}<tbody>${bodyRows}${totalRow}</tbody>`;
    tableEl.querySelectorAll(".sort-button").forEach(button => {
      button.addEventListener("click", () => {
        const nextKey = button.dataset.sortKey;
        if (sortKey !== nextKey) {
          sortKey = nextKey;
          sortDirection = "asc";
        } else if (sortDirection === "asc") {
          sortDirection = "desc";
        } else if (sortDirection === "desc") {
          sortKey = null;
          sortDirection = null;
        } else {
          sortDirection = "asc";
        }
        render();
      });
    });
    tableEl.querySelectorAll(".evidence-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const history = button.nextElementSibling;
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        if (history) history.hidden = expanded;
        const count = history?.querySelectorAll(".evidence-item").length || 0;
        button.textContent = expanded ? `View ${count} more` : "Show less";
      });
    });
    if (taskFilterCountEl && report.report_type === "alex_project_task_table") {
      taskFilterCountEl.textContent = `${sortedRows.length} task${sortedRows.length === 1 ? "" : "s"}`;
    }
  };
  if (taskFiltersEl) {
    taskFiltersEl.hidden = report.report_type !== "alex_project_task_table";
    taskFiltersEl.querySelectorAll(".task-filter").forEach(button => {
      button.addEventListener("click", () => {
        const nextFilter = button.dataset.dateFilter || "all";
        if (nextFilter === "all") {
          activeDateFilters.clear();
        } else if (activeDateFilters.has(nextFilter)) {
          activeDateFilters.delete(nextFilter);
        } else {
          activeDateFilters.add(nextFilter);
        }
        taskFiltersEl.querySelectorAll(".task-filter").forEach(item => {
          const itemFilter = item.dataset.dateFilter || "all";
          item.classList.toggle("is-active", itemFilter === "all"
            ? activeDateFilters.size === 0
            : activeDateFilters.has(itemFilter));
        });
        render();
      });
    });
  }
  render();
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
    document.body.classList.toggle("task-report-view", report.report_type === "alex_project_task_table");
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
