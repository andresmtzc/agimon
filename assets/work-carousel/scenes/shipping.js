const barcode = Array.from({ length: 29 }, (_, i) => {
  const width = [1.5, 3, 1, 2.5, 1.5, 1][i % 6];
  return `<rect x="${i * 4.15}" y="0" width="${width}" height="22" fill="#243b30"/>`;
}).join('');

export default {
  id: 'shipping',
  label: 'Shipping',
  title: 'Ready for the next stop.',
  description: 'The parcel, the details, the tracking. Bring every little piece together.',
  background: '#d9e9dd',
  ink: '#283c2c',
  markup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" role="img" aria-label="An address label settles onto a parcel while its tracking slip comes into place." font-family="Lausanne, Arial, sans-serif">
    <path d="M47 117C74 89 120 94 140 121" stroke="#b5a75f" stroke-width="1.6" fill="none" stroke-dasharray="4 7" stroke-linecap="round"/>
    <g class="shipping-spark" style="transform-box:fill-box;transform-origin:center">
      <path d="M397 117v24m-12-12h24m-20-8 16 16m-16 0 16-16" stroke="#45623f" stroke-width="2" stroke-linecap="round"/>
    </g>
    <ellipse cx="237" cy="382" rx="153" ry="25" fill="#aa9445" opacity=".15"/>
    <g class="shipping-parcel" style="transform-box:fill-box;transform-origin:center">
      <path d="M91 207 238 285 390 204 243 132Z" fill="#e9c791"/>
      <path d="M91 207 238 285 238 402 91 321Z" fill="#c69d64"/>
      <path d="M238 285 390 204 390 321 238 402Z" fill="#b1844b"/>
      <path d="m91 207 147 78 152-81" fill="none" stroke="#8c6839" stroke-opacity=".35"/>
      <path d="m154 168 25-12 149 77-26 14Z" fill="#f2dfb5"/>
      <path d="m302 247 26-14v117l-26 14Z" fill="#d3b483"/>
      <path d="m118 274 24 13m-24-4 16 9" fill="none" stroke="#8d6c43" stroke-width="2" stroke-linecap="round"/>
      <path d="m117 309 0-16m-5 3 5-3 5 8m7 17v-16m-5 3 5-3 5 8" fill="none" stroke="#785c39" stroke-width="1.5" stroke-linejoin="round"/>
      <g class="shipping-label" style="transform-box:fill-box;transform-origin:center">
        <path d="m228 163 115 57-69 37-114-59Z" fill="#785c39" opacity=".15" transform="translate(0 4)"/>
        <path d="m228 163 115 57-69 37-114-59Z" fill="#fffdf0"/>
        <g transform="matrix(.69 .35 -.69 .37 228 175)">
          <text x="0" y="0" fill="#243b30" font-family="Inter, Arial, sans-serif" font-size="9" font-weight="600" letter-spacing="1">TO: MIA</text>
          <path d="M0 12h87M0 20h66" stroke="#748071" stroke-width="2"/>
          <g transform="translate(0 28)">${barcode}</g>
        </g>
      </g>
    </g>
    <g class="shipping-slip" style="transform-box:fill-box;transform-origin:center">
      <g transform="translate(29 118) rotate(-8 95 36)">
        <rect x="0" y="5" width="187" height="75" rx="6" fill="#8a7639" opacity=".12"/>
        <rect width="187" height="75" rx="6" fill="#f7f6ed"/>
        <circle cx="24" cy="24" r="10" fill="#d9ebe0"/>
        <path d="m20 24 3 3 5-6" fill="none" stroke="#30775c" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="43" y="28" fill="#344c39" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="500">Tracking attached</text>
        <text x="15" y="57" fill="#66735f" font-family="Inter, Arial, sans-serif" font-size="10" letter-spacing="2">AG 2048 7391</text>
        <path d="m161 49 6 0m-2-3 3 3-3 3" stroke="#5d745e" stroke-width="1.3" fill="none"/>
      </g>
    </g>
    <text x="35" y="451" fill="#5d633d" font-family="Inter, Arial, sans-serif" font-size="11" letter-spacing=".3">All shipping details, ready to go</text>
    <path d="M412 444h28m-7-7 7 7-7 7" stroke="#486141" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  motion: [
    {
      selector: '.shipping-parcel',
      keyframes: [
        { offset: 0, transform: 'translateY(15px) scale(.96)' },
        { offset: .18, transform: 'translateY(0px) scale(1)' },
        { offset: .84, transform: 'translateY(0px) scale(1)' },
        { offset: 1, transform: 'translateY(15px) scale(.96)' },
      ],
      options: { easing: 'ease-in-out' },
    },
    {
      selector: '.shipping-label',
      keyframes: [
        { offset: 0, opacity: 0, transform: 'translate(30px, -100px) rotate(12deg)' },
        { offset: .12, opacity: 0, transform: 'translate(30px, -100px) rotate(12deg)' },
        { offset: .22, opacity: 1, transform: 'translate(15px, -55px) rotate(6deg)' },
        { offset: .34, opacity: 1, transform: 'translate(0px, 2px) rotate(-1deg)' },
        { offset: .40, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .84, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .96, opacity: 0, transform: 'translate(0px, -25px) rotate(-5deg)' },
        { offset: 1, opacity: 0, transform: 'translate(30px, -100px) rotate(12deg)' },
      ],
    },
    {
      selector: '.shipping-slip',
      keyframes: [
        { offset: 0, opacity: 0, transform: 'translate(-30px, 15px) rotate(-5deg)' },
        { offset: .39, opacity: 0, transform: 'translate(-30px, 15px) rotate(-5deg)' },
        { offset: .49, opacity: 1, transform: 'translate(2px, -2px) rotate(1deg)' },
        { offset: .55, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .84, opacity: 1, transform: 'translate(0px, 0px) rotate(0deg)' },
        { offset: .95, opacity: 0, transform: 'translate(0px, -10px) rotate(2deg)' },
        { offset: 1, opacity: 0, transform: 'translate(-30px, 15px) rotate(-5deg)' },
      ],
    },
    {
      selector: '.shipping-spark',
      keyframes: [
        { offset: 0, opacity: .2, transform: 'scale(.65) rotate(0deg)' },
        { offset: .35, opacity: .2, transform: 'scale(.65) rotate(0deg)' },
        { offset: .48, opacity: 1, transform: 'scale(1.15) rotate(45deg)' },
        { offset: .58, opacity: .6, transform: 'scale(1) rotate(45deg)' },
        { offset: .86, opacity: .6, transform: 'scale(1) rotate(45deg)' },
        { offset: 1, opacity: .2, transform: 'scale(.65) rotate(90deg)' },
      ],
    },
  ],
};
