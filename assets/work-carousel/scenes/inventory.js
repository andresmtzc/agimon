const carton = (x, y, moving = false, number = 0) => `
  <g ${moving ? `class="inventory-out inventory-out-${number}" opacity="0" style="transform-box:fill-box;transform-origin:center"` : ''}>
    <g transform="translate(${x} ${y})">
      <path d="M-23 30 0 43 25 29 3 16Z" fill="#061e18" opacity=".24"/>
      <path d="M-22 0 0 13 0 38-22 25Z" fill="#c8b58a"/>
      <path d="M0 13 22 0 22 25 0 38Z" fill="#aa936b"/>
      <path d="M0-13 22 0 0 13-22 0Z" fill="#e3d6b8"/>
      <path d="M-5-10 2-14 23-2 17 2Z" fill="#f3ead5" opacity=".9"/>
      <path d="M17 2 23-2 23 24 17 28Z" fill="#d6c6a4"/>
      <path d="m-16 14 10 6m-10-1 6 4" fill="none" stroke="#74694f" stroke-width="1.4" stroke-linecap="round"/>
    </g>
  </g>`;

const cartons = Array.from({ length: 20 }, (_, i) => {
  const row = Math.floor(i / 5);
  const col = i % 5;
  return carton(70 + col * 65 + row * 14, 263 + row * 39, i === 3 || i === 4, i);
}).join('');

export default {
  id: 'inventory',
  label: 'Inventory',
  title: 'Every little thing, accounted for.',
  description: 'Two boxes out. Stock up to date. Keep the everyday movements in order.',
  background: '#173f35',
  ink: '#f4f4e7',
  markup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" role="img" aria-label="Twenty neatly arranged cartons become eighteen as two boxes leave and the stock count updates." font-family="Lausanne, Arial, sans-serif">
    <g class="inventory-count-old" opacity="0" style="transform-box:fill-box;transform-origin:center">
      <text x="29" y="193" fill="#f5f3ea" font-size="145" font-weight="600" letter-spacing="-10">20</text>
    </g>
    <g class="inventory-count-new" style="transform-box:fill-box;transform-origin:center">
      <text x="29" y="193" fill="#f5f3ea" font-size="145" font-weight="600" letter-spacing="-10">18</text>
    </g>
    <text x="219" y="187" fill="#c4d9c7" font-size="24" letter-spacing="-.5">boxes</text>
    <g class="inventory-minus" style="transform-box:fill-box;transform-origin:center">
      <circle cx="383" cy="140" r="37" fill="#f5df72"/>
      <text x="383" y="152" text-anchor="middle" fill="#173f35" font-size="35" font-weight="600" letter-spacing="-1">−2</text>
    </g>
    <path d="M37 224H443" stroke="#8bb4a1" stroke-opacity=".32"/>
    <g class="inventory-cartons">${cartons}</g>
    <circle cx="41" cy="449" r="3" fill="#8ed1a6"/>
    <text x="53" y="453" fill="#bdd3c6" font-family="Inter, Arial, sans-serif" font-size="11" letter-spacing=".3">Available stock</text>
    <path d="m411 449 8 5 18-12" fill="none" stroke="#8ed1a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  motion: [
    {
      selector: '.inventory-count-old',
      keyframes: [
        { offset: 0, opacity: 1, transform: 'translateY(0px)' },
        { offset: .29, opacity: 1, transform: 'translateY(0px)' },
        { offset: .37, opacity: 0, transform: 'translateY(-25px)' },
        { offset: .90, opacity: 0, transform: 'translateY(25px)' },
        { offset: .98, opacity: 1, transform: 'translateY(0px)' },
        { offset: 1, opacity: 1, transform: 'translateY(0px)' },
      ],
    },
    {
      selector: '.inventory-count-new',
      keyframes: [
        { offset: 0, opacity: 0, transform: 'translateY(25px)' },
        { offset: .30, opacity: 0, transform: 'translateY(25px)' },
        { offset: .39, opacity: 1, transform: 'translateY(0px)' },
        { offset: .86, opacity: 1, transform: 'translateY(0px)' },
        { offset: .94, opacity: 0, transform: 'translateY(-25px)' },
        { offset: 1, opacity: 0, transform: 'translateY(25px)' },
      ],
    },
    {
      selector: '.inventory-minus',
      keyframes: [
        { offset: 0, opacity: 0, transform: 'scale(.7) rotate(-15deg)' },
        { offset: .15, opacity: 0, transform: 'scale(.7) rotate(-15deg)' },
        { offset: .23, opacity: 1, transform: 'scale(1.09) rotate(6deg)' },
        { offset: .28, opacity: 1, transform: 'scale(1) rotate(0deg)' },
        { offset: .85, opacity: 1, transform: 'scale(1) rotate(0deg)' },
        { offset: .94, opacity: 0, transform: 'scale(.7) rotate(-15deg)' },
        { offset: 1, opacity: 0, transform: 'scale(.7) rotate(-15deg)' },
      ],
    },
    ...[3, 4].map((number, i) => ({
      selector: `.inventory-out-${number}`,
      keyframes: [
        { offset: 0, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .20 + i * .035, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .32 + i * .035, opacity: 1, transform: 'translate(45px, -45px) rotate(8deg)' },
        { offset: .42 + i * .035, opacity: 0, transform: 'translate(100px, -80px) rotate(15deg)' },
        { offset: .88, opacity: 0, transform: 'translate(0px, 16px) rotate(0deg)' },
        { offset: .98, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: 1, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
      ],
    })),
  ],
};
