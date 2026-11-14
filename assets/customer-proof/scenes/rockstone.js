// A single reported Saturday, expressed as a sales total rather than fabricated orders.
// Keep the amount visible throughout the loop; the paper and photo do the moving.
const ease = 'cubic-bezier(.2,.72,.2,1)';
const handoff = 'cubic-bezier(.22,.9,.25,1)';

export default {
  id: 'rockstone',
  markup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400" role="img" aria-label="A cream Saturday sales slip shows MX$30,000. A small Away badge and an evening moon sit beside a Rockstone product photograph." font-family="Lausanne, Arial, sans-serif">
    <defs>
      <filter id="rock-paper-shadow" x="-25%" y="-25%" width="160%" height="170%">
        <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#051d16" flood-opacity=".24"/>
      </filter>
      <filter id="rock-photo-shadow" x="-30%" y="-25%" width="170%" height="170%">
        <feDropShadow dx="0" dy="10" stdDeviation="7" flood-color="#071d15" flood-opacity=".32"/>
      </filter>
      <clipPath id="rock-photo-crop"><rect x="318" y="238" width="124" height="130" rx="1"/></clipPath>
      <pattern id="rock-rule-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 19.5H20" stroke="#183f32" stroke-opacity=".035"/>
      </pattern>
    </defs>
    <rect width="480" height="400" fill="#183f35"/>
    <path d="M-60 348C69 252 162 411 302 337S467 251 551 313" fill="none" stroke="#356052" stroke-width="1.2"/>
    <path d="M-68 366C61 270 154 429 294 355S459 269 543 331" fill="none" stroke="#356052" stroke-width="1.2"/>
    <g class="rock-night" style="transform-box:fill-box;transform-origin:center">
      <path d="M433 30a28 28 0 1 0 19 44 25 25 0 0 1-19-44Z" fill="#f0d77b"/>
      <path d="M407 22v8m-4-4h8M462 93v6m-3-3h6" stroke="#f0d77b" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="465" cy="43" r="1.6" fill="#f0d77b"/>
    </g>
    <g class="rock-paper" style="transform:rotate(-6deg);transform-box:fill-box;transform-origin:center" filter="url(#rock-paper-shadow)">
      <path d="M43 48Q43 42 49 42H397Q403 42 403 48V286L391 279 379 286 367 279 355 286 343 279 331 286 319 279 307 286 295 279 283 286 271 279 259 286 247 279 235 286 223 279 211 286 199 279 187 286 175 279 163 286 151 279 139 286 127 279 115 286 103 279 91 286 79 279 67 286 55 279 43 286Z" fill="#f7f3e8"/>
      <path d="M49 42H397Q403 42 403 48V96H43V48Q43 42 49 42Z" fill="#e2e7d6"/>
      <path d="M43 97H403" stroke="#b5c1aa" stroke-width="1"/>
      <text x="67" y="77" fill="#244338" font-size="19" letter-spacing="3.8" font-weight="600">SATURDAY</text>
      <path d="M367 65v14m-7-7h14" stroke="#647967" stroke-width="1.3"/>
      <rect x="43" y="98" width="360" height="176" fill="url(#rock-rule-pattern)"/>
      <text x="66" y="135" fill="#5c7261" font-size="18" letter-spacing="1">MX$</text>
      <text x="58" y="216" fill="#183f35" font-size="91" font-weight="600" letter-spacing="-6.2">30,000</text>
      <path d="M68 235H378" stroke="#b3c1aa" stroke-width="1"/>
      <text x="68" y="259" fill="#5a6f5d" font-size="11" letter-spacing="2.2">ONE EVENING'S SALES</text>
    </g>
    <g class="rock-away" style="transform:rotate(4deg);transform-box:fill-box;transform-origin:center">
      <rect x="37" y="317" width="161" height="49" rx="24.5" fill="#e9d98e"/>
      <circle cx="64" cy="341.5" r="9" fill="none" stroke="#304b36" stroke-width="1.4"/>
      <path d="M64 336v6l4 2" fill="none" stroke="#304b36" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="83" y="347" fill="#304b36" font-size="15" letter-spacing="1.7" font-weight="600">AWAY</text>
      <path d="M159 340h13m-4-4 4 4-4 4" fill="none" stroke="#304b36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="rock-photo" style="transform:rotate(8deg);transform-box:fill-box;transform-origin:center" filter="url(#rock-photo-shadow)">
      <rect x="308" y="228" width="144" height="159" rx="2" fill="#f7f3e8"/>
      <image href="./assets/rockstone-tray.jpg" x="318" y="227" width="124" height="149.5" preserveAspectRatio="xMidYMid slice" clip-path="url(#rock-photo-crop)"/>
      <path d="M363 376h34" stroke="#a0a48e" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M369 217 404 220 401 240 366 237Z" fill="#e4d2a6" fill-opacity=".8"/>
    </g>
    <g class="rock-spark" style="transform-box:fill-box;transform-origin:center">
      <path d="m260 310 5 13 13 5-13 5-5 13-5-13-13-5 13-5Z" fill="#9bc6a9"/>
    </g>
  </svg>`,
  motion: [
    {
      selector: '.rock-paper',
      keyframes: [
        { offset: 0, transform: 'translateY(3px) rotate(-6deg)', easing: ease },
        { offset: .14, transform: 'translateY(-6px) rotate(-4.5deg)', easing: ease },
        { offset: .25, transform: 'translateY(0px) rotate(-6deg)', easing: ease },
        { offset: .72, transform: 'translateY(0px) rotate(-6deg)', easing: ease },
        { offset: .88, transform: 'translateY(-3px) rotate(-6.5deg)', easing: ease },
        { offset: 1, transform: 'translateY(3px) rotate(-6deg)', easing: ease },
      ],
    },
    {
      selector: '.rock-photo',
      keyframes: [
        { offset: 0, transform: 'translate(0px, 2px) rotate(8deg)', easing: handoff },
        { offset: .13, transform: 'translate(0px, 2px) rotate(8deg)', easing: handoff },
        { offset: .27, transform: 'translate(0px, -7px) rotate(4deg)', easing: handoff },
        { offset: .38, transform: 'translate(0px, 0px) rotate(8deg)', easing: ease },
        { offset: .79, transform: 'translate(0px, 0px) rotate(8deg)', easing: ease },
        { offset: 1, transform: 'translate(0px, 2px) rotate(8deg)', easing: ease },
      ],
    },
    {
      selector: '.rock-away',
      keyframes: [
        { offset: 0, transform: 'translateX(0px) rotate(4deg) scale(1)', easing: handoff },
        { offset: .25, transform: 'translateX(0px) rotate(4deg) scale(1)', easing: handoff },
        { offset: .37, transform: 'translateX(-3px) rotate(1deg) scale(1.035)', easing: handoff },
        { offset: .46, transform: 'translateX(0px) rotate(4deg) scale(1)', easing: ease },
        { offset: 1, transform: 'translateX(0px) rotate(4deg) scale(1)', easing: ease },
      ],
    },
    {
      selector: '.rock-night',
      keyframes: [
        { offset: 0, transform: 'translateY(0px) rotate(-3deg)', easing: 'ease-in-out' },
        { offset: .5, transform: 'translateY(-5px) rotate(3deg)', easing: 'ease-in-out' },
        { offset: 1, transform: 'translateY(0px) rotate(-3deg)', easing: 'ease-in-out' },
      ],
    },
    {
      selector: '.rock-spark',
      keyframes: [
        { offset: 0, transform: 'scale(.72) rotate(0deg)', opacity: .5, easing: ease },
        { offset: .33, transform: 'scale(.72) rotate(0deg)', opacity: .5, easing: ease },
        { offset: .44, transform: 'scale(1.1) rotate(90deg)', opacity: 1, easing: ease },
        { offset: .54, transform: 'scale(1) rotate(90deg)', opacity: 1, easing: ease },
        { offset: .85, transform: 'scale(1) rotate(90deg)', opacity: 1, easing: ease },
        { offset: 1, transform: 'scale(.72) rotate(180deg)', opacity: .5, easing: ease },
      ],
    },
  ],
};
