import { STOCK_DEMO } from './booking-demo-stock.mjs';

// A database view and its item drawer share the same inventory conversation.
export function renderInventoryBody({ text, number, icon, updated, detail, shortDay, avatar }) {
  const rows = [
    ['tip', 'HF-T01', updated ? STOCK_DEMO.remaining : STOCK_DEMO.before, 'piece'],
    ['gloves', 'GL-M02', 48, 'boxUnit'],
    ['gauze', 'GZ-003', 120, 'piece'],
    ['cleanser', 'CL-004', 18, 'bottle'],
    ['serum', 'SR-005', 12, 'bottle'],
    ['sunscreen', 'SP-006', 24, 'bottle'],
    ['cotton', 'CT-007', 16, 'boxUnit'],
    ['mask', 'MK-008', 60, 'piece'],
    ['disinfectant', 'DS-009', 10, 'bottle'],
    ['spatula', 'ST-010', 200, 'piece'],
    ['headband', 'HB-011', 36, 'piece'],
    ['wipes', 'WP-012', 22, 'boxUnit'],
  ];
  const table = `<div class="inventory-table-scroll"><table class="inventory-table"><colgroup><col class="inventory-col-item"><col class="inventory-col-stock"><col class="inventory-col-unit"><col class="inventory-col-sku"><col class="inventory-col-category"><col class="inventory-col-updated"></colgroup><thead><tr>${['item', 'inStock', 'unit', 'sku', 'category', 'updated'].map(key => `<th scope="col">${text(key)}</th>`).join('')}</tr></thead><tbody>${rows.map(([key, sku, count, unit], index) => {
    const label = `<span class="inventory-item-label">${icon('box')}<span>${text(key)}</span></span>`;
    return `<tr${index === 0 ? ` class="stock-row${detail ? ' is-open' : ''}" data-target="stock-row" data-source-highlight="73"` : ''}><td>${index === 0 ? `<button type="button" class="inventory-item-open" data-inventory-open aria-label="${text('tip')}" aria-expanded="${detail}">${label}</button>` : label}</td><td class="stock-quantity">${index === 0 && updated ? `<del>${number(STOCK_DEMO.before)}</del> ` : ''}<strong>${number(count)}</strong></td><td>${text(unit)}</td><td><bdi>${sku}</bdi></td><td>${text('supplies')}</td><td>${index === 0 && updated ? `<span class="inventory-updated">${text('justNow')}</span>` : '—'}</td></tr>`;
  }).join('')}</tbody></table></div>`;
  const itemDetail = detail ? `<aside class="inventory-detail-pane" aria-label="${text('tip')}">
    <header class="inventory-detail-heading"><button type="button" class="inventory-back" data-inventory-close aria-label="${text('inventory')}" title="${text('inventory')}">${icon('back')}</button><span>${text('item')}</span><bdi>HF-T01</bdi></header>
    <div class="inventory-detail-content">
      <div class="inventory-item-title"><span class="inventory-item-symbol">${icon('box')}</span><h3>${text('tip')}</h3></div>
      <div class="inventory-item-stock"><div><span>${text('inStock')}</span><strong>${number(updated ? STOCK_DEMO.remaining : STOCK_DEMO.before)} <small>${text('piece')}</small></strong></div><span>${text('supplies')}</span></div>
      <section class="inventory-movement"><div class="inventory-movement-heading"><h4>${text('stockMovement')}</h4><span dir="ltr">−${number(STOCK_DEMO.used)}</span></div>
        <dl><div><dt>${text('recordedBy')}</dt><dd>${text('nurse')}</dd></div><div><dt>${text('customer')}</dt><dd class="inventory-customer">${avatar('mia')}<span>${text('customerName')}</span></dd></div><div><dt>${text('appointment')}</dt><dd>${text('treatment')}<small>${shortDay}</small></dd></div></dl>
        <button type="button" class="inventory-source" data-target="stock-source"><span>${icon('arrow')}${text('sourceMessage')}</span><strong>${text('teamMember')} · ${text('ops')}</strong><span>${text('usedItem')}</span></button>
      </section>
    </div>
  </aside>` : '';
  return `<div class="inventory-body inventory-layout${detail ? ' inventory-detail-open' : ''}"><div class="inventory-main"><div class="database-toolbar"><span class="database-tab">${icon('box')}${text('database')}</span><span class="inventory-search">${icon('search')}${text('item')}</span></div>${table}<div class="inventory-footer">${text('stockItems', { count: number(rows.length) })}</div></div>${itemDetail}</div>`;
}
