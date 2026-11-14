const handwriting = {
  C: { width: 26, path: 'M23 4C4-6-5 29 19 26' },
  a: { width: 22, path: 'M17 10C3 2-5 27 8 26C15 26 19 14 17 10M18 10L17 27' },
  l: { width: 12, path: 'M8 0C1 10-2 33 10 25' },
  s: { width: 22, path: 'M18 10C8 2-4 14 9 17C27 21 10 35 1 26' },
  u: { width: 23, path: 'M3 9C-4 33 12 33 18 10L18 27' },
  p: { width: 24, path: 'M5 10L2 40M5 17C13-2 28 13 17 24C11 30 5 23 5 23' },
  i: { width: 12, path: 'M6 11L4 27M8 1L8.2 1.2' },
  e: { width: 24, path: 'M3 19C26 21 22-2 8 10C-8 27 12 34 21 25' },
  r: { width: 21, path: 'M3 27L5 10M5 18C9 5 17 8 19 10' },
  F: { width: 29, path: 'M4 30L8 1L27 2M6 14L23 14' },
  '1': { width: 18, path: 'M2 9L13 2L10 30M3 30L17 30' },
  '0': { width: 27, path: 'M18 2C-1-6-7 34 12 31C28 27 30 1 18 2Z' },
};

function handLine(value, x, y, scale = 1) {
  let cursor = 0;
  const paths = [...value].map((letter, index) => {
    if (letter === ' ') { cursor += 14; return ''; }
    const glyph = handwriting[letter];
    const path = `<path d="${glyph.path}" transform="translate(${cursor} ${index % 3 - 1})"/>`;
    cursor += glyph.width;
    return path;
  }).join('');
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="#142e29" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${paths}</g>`;
}

export default {
  id: 'todo',
  label: 'To-Do',
  title: 'Keep the next thing in mind.',
  description: 'A rough reminder becomes a clear, dated item in My to-dos.',
  background: '#f5df72',
  ink: '#142e29',
  markup: `<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A handwritten call supplier reminder becomes a clean checklist item in My to-dos, dated Friday at ten am." font-family="Lausanne, Arial, sans-serif">
    <rect width="480" height="480" fill="#f5df72"/>
    <g class="todo-heading" fill="#142e29" style="transform-box:fill-box;transform-origin:left bottom">
      <text x="34" y="103" font-size="68" font-weight="500" letter-spacing="-3.8">My</text>
      <text x="34" y="172" font-size="68" font-weight="500" letter-spacing="-3.8">to-dos.</text>
      <path d="M36 209H444" stroke="#142e29" stroke-width="1.2" opacity=".45"/>
    </g>
    <g class="todo-item" fill="#142e29" style="transform-box:fill-box;transform-origin:left center">
      <rect x="37" y="248" width="34" height="34" rx="4" fill="none" stroke="#142e29" stroke-width="2"/>
      <text x="94" y="278" font-size="31" font-weight="500" letter-spacing="-1">Call supplier</text>
      <path d="M36 346H444" stroke="#142e29" stroke-width="1.2" opacity=".28"/>
    </g>
    <g class="todo-date" style="transform-box:fill-box;transform-origin:left center">
      <rect x="94" y="294" width="132" height="29" rx="14.5" fill="#142e29"/>
      <circle cx="110" cy="308.5" r="5.5" fill="none" stroke="#f5df72" stroke-width="1.2"/>
      <path d="M110 305v4l2.5 1.5" fill="none" stroke="#f5df72" stroke-width="1.2" stroke-linecap="round"/>
      <text x="124" y="314" fill="#f5f3ea" font-size="14" letter-spacing="-.15">Fri, 10 am</text>
    </g>
    <g class="todo-secondary" fill="#142e29" opacity=".45" style="transform-box:fill-box;transform-origin:left center">
      <rect x="37" y="377" width="34" height="34" rx="4" fill="none" stroke="#142e29" stroke-width="2"/>
      <text x="94" y="406" font-size="29" font-weight="400" letter-spacing="-.7">Order supplies</text>
      <path d="M36 447H444" stroke="#142e29" stroke-width="1.2" opacity=".5"/>
    </g>
    <g class="todo-note" opacity="0" style="transform-box:fill-box;transform-origin:center">
      <path d="M48 129H433V368H48Z" fill="#142e29" opacity=".08"/>
      <path d="M40 120H424V359H40Z" fill="#f5f3ea"/>
      <path d="M40 172H424M40 222H424M40 272H424M40 322H424" stroke="#142e29" stroke-width=".8" opacity=".13"/>
      ${handLine('Call supplier', 66, 185, 1.27)}
      ${handLine('Fri 10', 77, 255, 1.28)}
      <path d="M76 305Q146 297 221 304M88 311Q159 306 211 310" fill="none" stroke="#142e29" stroke-width="2" stroke-linecap="round"/>
      <path d="M328 272c17-20 26-17 23-8s-13 14-20 16m17-4 9-6-2 10" fill="none" stroke="#142e29" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`,
  motion: [
    {
      selector: '.todo-note',
      keyframes: [
        { offset: 0, transform: 'translateY(12px) rotate(-7deg)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .2, transform: 'translateY(0) rotate(-7deg)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .25, transform: 'translateY(-8px) rotate(-5deg)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .38, transform: 'translateY(-38px) rotate(0deg) scale(1.04)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .88, transform: 'translateY(30px) rotate(-7deg)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: 1, transform: 'translateY(12px) rotate(-7deg)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
      ],
    },
    {
      selector: '.todo-heading',
      keyframes: [
        { offset: 0, transform: 'translateY(12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .27, transform: 'translateY(12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .44, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .82, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .94, transform: 'translateY(-12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: 1, transform: 'translateY(12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
      ],
    },
    {
      selector: '.todo-item',
      keyframes: [
        { offset: 0, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .3, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .47, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .82, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .94, transform: 'translateY(-12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: 1, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
      ],
    },
    {
      selector: '.todo-date',
      keyframes: [
        { offset: 0, transform: 'translateY(5px) scale(.92)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .43, transform: 'translateY(5px) scale(.92)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .54, transform: 'translateY(0) scale(1)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .82, transform: 'translateY(0) scale(1)', opacity: 1, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .94, transform: 'translateY(-12px) scale(1)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: 1, transform: 'translateY(5px) scale(.92)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
      ],
    },
    {
      selector: '.todo-secondary',
      keyframes: [
        { offset: 0, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .36, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .52, transform: 'translateY(0)', opacity: .45, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .82, transform: 'translateY(0)', opacity: .45, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: .94, transform: 'translateY(-12px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
        { offset: 1, transform: 'translateY(24px)', opacity: 0, easing: 'cubic-bezier(.2,.7,.2,1)' },
      ],
    },
  ],
};
