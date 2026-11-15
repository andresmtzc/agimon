import { STOCK_DEMO } from './booking-demo-stock.mjs';

// The weekly artifact uses the same illustrative studio totals as the chat.
const days = [5, 7, 6, 8, 6];
const arrow = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12 5l-5 5 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const open = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15L15 5M6 5h9v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function chartGlyph() {
  return `<span class="dash-mini-chart" aria-hidden="true">${days.map(value => `<i style="--bar:${value / 8}"></i>`).join('')}</span>`;
}

export function renderDashboardCard({ text }) {
  return `<button type="button" class="dash-artifact" data-dashboard-open aria-label="${text('dashboardOpen')}">
    ${chartGlyph()}
    <span class="dash-artifact-copy"><span>${text('dashboardArtifact')}</span><strong>${text('dashboardTitle')}</strong><small>${text('dashboardPeriod')}</small></span>
    <span class="dash-artifact-open">${open}</span>
  </button>`;
}

export function renderDashboard({ text, number, amount }) {
  const metrics = [
    ['dashboardAppointments', number(32), 'appointments'],
    ['dashboardPayments', amount, 'payments'],
    ['dashboardReview', number(2), 'review'],
    ['dashboardStock', number(STOCK_DEMO.remaining), 'stock'],
  ];
  return `<section class="weekly-dashboard" aria-label="${text('dashboardTitle')}">
    <header class="dash-header">
      <button type="button" class="dash-back" data-dashboard-close aria-label="${text('dashboardClose')}" title="${text('dashboardClose')}">${arrow}</button>
      <div><span class="dash-eyebrow">${text('dashboardArtifact')}</span><h3>${text('dashboardTitle')}</h3></div>
      <span class="dash-period">${text('dashboardPeriod')}</span>
    </header>
    <div class="dash-body">
      <div class="dash-metrics">${metrics.map(([key, value, kind]) => `<div class="dash-metric dash-metric-${kind}"><span>${text(key)}</span><strong><bdi>${value}</bdi></strong></div>`).join('')}</div>
      <div class="dash-charts">
        <section class="dash-activity">
          <div class="dash-section-heading"><h4>${text('dashboardActivity')}</h4><span>${number(32)}</span></div>
          <div class="dash-bar-chart">${days.map((value, index) => `<div class="dash-day"><span class="dash-bar-value">${number(value)}</span><span class="dash-bar-space"><i style="height:${value / 8 * 100}%"></i></span><span class="dash-day-label">${number(16 + index)}</span></div>`).join('')}</div>
        </section>
        <section class="dash-treatments">
          <div class="dash-section-heading"><h4>${text('dashboardTreatments')}</h4></div>
          <div class="dash-treatment-total"><strong>${number(32)}</strong><span>${text('dashboardAppointments')}</span></div>
          <div class="dash-treatment-track" aria-hidden="true"><span></span><i></i></div>
          <div class="dash-treatment-row"><span><i></i>${text('dashboardHydrafacial')}</span><strong>${number(20)}</strong></div>
          <div class="dash-treatment-row dash-treatment-other"><span><i></i>${text('dashboardOther')}</span><strong>${number(12)}</strong></div>
        </section>
      </div>
      <section class="dash-attention">
        <div class="dash-section-heading"><h4>${text('dashboardAttention')}</h4></div>
        <div class="dash-attention-row"><span class="dash-attention-dot"></span><span>${text('dashboardReviewAction')}</span><strong>${number(2)}</strong></div>
        <div class="dash-attention-row dash-stock-note"><span class="dash-attention-dot"></span><span>${text('dashboardStockNote', {used:number(STOCK_DEMO.weeklyUsed),remaining:number(STOCK_DEMO.remaining)})}</span></div>
      </section>
    </div>
  </section>`;
}
