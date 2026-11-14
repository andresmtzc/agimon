// A reported reply count, presented as an editorial illustration. The topic
// slips are illustrative; they are not a reconstruction of customer messages.
const ease = 'cubic-bezier(.22,.72,.18,1)';
const center = 'transform-box:fill-box;transform-origin:center';
const slips = [
  { label: 'Hours', x: 37, y: 207, turn: -4, color: '#a689ba' },
  { label: 'Location', x: 47, y: 264, turn: 1, color: '#89639f' },
  { label: 'Orders', x: 54, y: 321, turn: -2, color: '#633c7c' },
];

const paper = slips.map((slip, i) => `
  <g transform="translate(${slip.x} ${slip.y}) rotate(${slip.turn} 129 23)">
    <g class="truly-slip-${i}" style="${center}">
      <rect x="1" y="5" width="259" height="46" rx="8" fill="#43254d" opacity=".10"/>
      <path d="M8 0H251Q259 0 259 8V38Q259 46 251 46H8Q0 46 0 38V8Q0 0 8 0Z" fill="#fbf7f1"/>
      <g class="truly-question-${i}" opacity="0">
        <circle cx="232" cy="23" r="12" fill="none" stroke="#9c86a6" stroke-width="1.5"/>
        <text x="232" y="29" text-anchor="middle" font-size="18" fill="#7e618b">?</text>
        <text x="21" y="31" font-size="23" letter-spacing="-.35" fill="#604d69">${slip.label}</text>
      </g>
      <g class="truly-answer-${i}" style="${center}">
        <path d="M8 0H251Q259 0 259 8V38Q259 46 251 46H8Q0 46 0 38V8Q0 0 8 0Z" fill="${slip.color}"/>
        <text x="21" y="31" font-size="23" letter-spacing="-.35" fill="#fff9fb">${slip.label}</text>
        <g class="truly-tick-${i}" style="${center}">
          <circle cx="232" cy="23" r="12" fill="#fff9fb" fill-opacity=".16"/>
          <path d="m226 23 4 4 8-9" fill="none" stroke="#fff9fb" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>
    </g>
  </g>`).join('');

const seal = Array.from({length: 40}, (_, i) => {
  const angle = i * Math.PI / 20 - Math.PI / 2;
  const radius = i % 2 ? 33 : 38;
  return `${i ? 'L' : 'M'}${(325 + Math.cos(angle) * radius).toFixed(2)} ${(324 + Math.sin(angle) * radius).toFixed(2)}`;
}).join(' ') + 'Z';

export default {
  id: 'truly',
  background: '#eee5ef',
  ink: '#43254d',
  markup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400" role="img" aria-label="La Truly: 1,326 automatic replies. Three illustrated question slips settle into a stack of answered replies beside the customer portrait." font-family="Lausanne, Arial, sans-serif">
    <defs>
      <clipPath id="truly-photo-crop"><rect x="0" y="0" width="102" height="113" rx="2"/></clipPath>
    </defs>
    <rect width="480" height="400" fill="#eee5ef"/>
    <g class="truly-count" style="${center}">
      <text x="21" y="148" fill="#43254d" font-size="124" font-weight="600" letter-spacing="-8">1,326</text>
    </g>
    <text x="33" y="178" fill="#74577e" font-family="Inter, Arial, sans-serif" font-size="12" letter-spacing="1.65">AUTOMATIC REPLIES</text>
    ${paper}
    <g transform="translate(338 214) rotate(9 58 65)">
      <g class="truly-photo" style="${center}">
        <rect x="-7" y="-5" width="119" height="139" rx="4" fill="#43254d" opacity=".11"/>
        <rect x="-8" y="-9" width="118" height="138" rx="3" fill="#fffaf3"/>
        <image href="./assets/la-truly-card.jpg" x="0" y="0" width="102" height="113" preserveAspectRatio="xMidYMid slice" clip-path="url(#truly-photo-crop)"/>
        <path d="M22-19 74-15 72-1 21-4Z" fill="#dbc4e6" opacity=".8"/>
      </g>
    </g>
    <g class="truly-seal" style="${center}">
      <path d="${seal}" fill="#f7df82"/>
      <circle cx="325" cy="324" r="26" fill="none" stroke="#806329" stroke-width="1" opacity=".45"/>
      <path d="m312 324 9 9 18-20" fill="none" stroke="#513c28" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path d="M34 379H446" fill="none" stroke="#b8a2c1" stroke-width=".8"/>
  </svg>`,
  motion: [
    {
      selector: '.truly-count',
      keyframes: [
        {offset: 0, transform: 'translateY(0) scale(1)'},
        {offset: .53, transform: 'translateY(0) scale(1)', easing: ease},
        {offset: .6, transform: 'translateY(-2px) scale(1.012)', easing: ease},
        {offset: .71, transform: 'translateY(0) scale(1)'},
        {offset: 1, transform: 'translateY(0) scale(1)'},
      ],
    },
    ...slips.flatMap((slip, i) => {
      const delay = i * .075;
      return [
        {
          selector: `.truly-slip-${i}`,
          keyframes: [
            {offset: 0, transform: `translate(${-18 + i * 9}px, ${-9 + i * 8}px) rotate(${-4 + i * 5}deg)`, easing: ease},
            {offset: .14 + delay, transform: `translate(${-18 + i * 9}px, ${-9 + i * 8}px) rotate(${-4 + i * 5}deg)`, easing: ease},
            {offset: .25 + delay, transform: 'translate(0, -5px) rotate(0deg)', easing: ease},
            {offset: .31 + delay, transform: 'translate(0, 0) rotate(0deg)', easing: ease},
            {offset: .84, transform: 'translate(0, 0) rotate(0deg)', easing: ease},
            {offset: 1, transform: `translate(${-18 + i * 9}px, ${-9 + i * 8}px) rotate(${-4 + i * 5}deg)`},
          ],
        },
        {
          selector: `.truly-question-${i}`,
          keyframes: [
            {offset: 0, opacity: 1},
            {offset: .17 + delay, opacity: 1},
            {offset: .23 + delay, opacity: 0},
            {offset: .84, opacity: 0},
            {offset: .94, opacity: 1},
            {offset: 1, opacity: 1},
          ],
        },
        {
          selector: `.truly-answer-${i}`,
          keyframes: [
            {offset: 0, opacity: 0, transform: 'scale(1)'},
            {offset: .17 + delay, opacity: 0, transform: 'scale(1)', easing: ease},
            {offset: .24 + delay, opacity: 1, transform: 'scale(1)', easing: ease},
            {offset: .3 + delay, opacity: 1, transform: 'scale(1)'},
            {offset: .84, opacity: 1, transform: 'scale(1)'},
            {offset: .94, opacity: 0, transform: 'scale(1)'},
            {offset: 1, opacity: 0, transform: 'scale(1)'},
          ],
        },
        {
          selector: `.truly-tick-${i}`,
          keyframes: [
            {offset: 0, opacity: 0, transform: 'scale(.5) rotate(-22deg)'},
            {offset: .21 + delay, opacity: 0, transform: 'scale(.5) rotate(-22deg)', easing: ease},
            {offset: .28 + delay, opacity: 1, transform: 'scale(1.15) rotate(4deg)', easing: ease},
            {offset: .34 + delay, opacity: 1, transform: 'scale(1) rotate(0deg)'},
            {offset: .84, opacity: 1, transform: 'scale(1) rotate(0deg)'},
            {offset: .94, opacity: 0, transform: 'scale(.5) rotate(-22deg)'},
            {offset: 1, opacity: 0, transform: 'scale(.5) rotate(-22deg)'},
          ],
        },
      ];
    }),
    {
      selector: '.truly-photo',
      keyframes: [
        {offset: 0, transform: 'translate(0, 0) rotate(0deg)', easing: ease},
        {offset: .39, transform: 'translate(0, 0) rotate(0deg)', easing: ease},
        {offset: .49, transform: 'translate(0, -4px) rotate(-2deg)', easing: ease},
        {offset: .63, transform: 'translate(0, 0) rotate(0deg)', easing: ease},
        {offset: 1, transform: 'translate(0, 0) rotate(0deg)'},
      ],
    },
    {
      selector: '.truly-seal',
      keyframes: [
        {offset: 0, opacity: 0, transform: 'scale(1.3) rotate(-18deg)'},
        {offset: .44, opacity: 0, transform: 'scale(1.3) rotate(-18deg)', easing: ease},
        {offset: .52, opacity: 1, transform: 'scale(.94) rotate(3deg)', easing: ease},
        {offset: .57, opacity: 1, transform: 'scale(1) rotate(0deg)'},
        {offset: .84, opacity: 1, transform: 'scale(1) rotate(0deg)'},
        {offset: .94, opacity: 0, transform: 'scale(1.08) rotate(8deg)'},
        {offset: 1, opacity: 0, transform: 'scale(1.3) rotate(-18deg)'},
      ],
    },
  ],
};
