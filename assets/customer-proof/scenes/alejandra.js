const spring = 'cubic-bezier(.18,.8,.2,1)';
const center = 'transform-box:fill-box;transform-origin:center';
const growthArrow = 'M40 344C117 344 170 325 239 256L221 238H274V291L256 273C186 343 124 368 40 368Z';

export default {
  id: 'alejandra',
  markup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400" role="img" aria-label="Fifteen percent sales growth, a rising jade arrow and Dra. Alejandra Campuzano's selected portrait." font-family="Lausanne, Arial, sans-serif">
    <defs>
      <clipPath id="ale-photo-crop"><rect x="313" y="209" width="126" height="139" rx="2"/></clipPath>
      <filter id="ale-shadow" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="8" stdDeviation="5" flood-color="#294c34" flood-opacity=".12"/></filter>
      <linearGradient id="ale-ribbon-fill" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#2f9d86"/><stop offset="1" stop-color="#65cdb5"/></linearGradient>
    </defs>
    <rect width="480" height="400" fill="#e8efe2"/>
    <text x="31" y="35" font-family="Inter, Arial, sans-serif" font-size="12" letter-spacing="2" fill="#64715d">A LITTLE HELP. MORE POSSIBILITY.</text>
    <g class="ale-number" style="${center}">
      <text x="19" y="190" fill="#193e31" font-size="188" letter-spacing="-13" font-weight="600">15<tspan font-size="100" dx="9" dy="-12">%</tspan></text>
    </g>
    <path d="M32 213H278" stroke="#b5c6ac"/>
    <text x="32" y="240" fill="#64715d" font-family="Inter, Arial, sans-serif" font-size="12" letter-spacing="2.4">MORE SALES</text>
    <g class="ale-arrow" style="transform-box:fill-box;transform-origin:12% 90%" filter="url(#ale-shadow)">
      <path d="${growthArrow}" transform="translate(0 7)" fill="#167a60"/>
      <path d="${growthArrow}" fill="url(#ale-ribbon-fill)"/>
      <path d="M43 346C118 346 171 327 239 258L225 240H272" fill="none" stroke="#b6ead0" stroke-opacity=".65" stroke-width="1.5"/>
    </g>
    <g class="ale-photo" style="transform:rotate(7deg);${center}" filter="url(#ale-shadow)">
      <rect x="303" y="199" width="146" height="174" rx="2" fill="#fcfaf3"/>
      <image href="./assets/dra-alejandra-card.jpg" x="313" y="209" width="126" height="139" preserveAspectRatio="xMidYMid slice" clip-path="url(#ale-photo-crop)"/>
      <path d="M356 359h40" stroke="#b4b69d" stroke-width="2" stroke-linecap="round"/>
      <path d="M350 189 399 191 397 212 349 210Z" fill="#c6d2b1" fill-opacity=".8"/>
    </g>
    <g class="ale-plus" style="${center}">
      <circle cx="405" cy="98" r="33" fill="#f4dc78"/>
      <path d="M405 85v26m-13-13h26" stroke="#193e31" stroke-width="3" stroke-linecap="round"/>
    </g>
    <path d="M33 384H446" stroke="#b5c6ac" stroke-width=".8"/>
  </svg>`,
  motion: [
    { selector: '.ale-arrow', keyframes: [
      { offset: 0, transform: 'translateY(3px) scaleY(.94)', easing: spring },
      { offset: .2, transform: 'translateY(3px) scaleY(.94)', easing: spring },
      { offset: .36, transform: 'translateY(-2px) scaleY(1.025)', easing: spring },
      { offset: .46, transform: 'translate(0, 0) scale(1)', easing: spring },
      { offset: .82, transform: 'translate(0, 0) scale(1)', easing: spring },
      { offset: 1, transform: 'translateY(3px) scaleY(.94)' },
    ] },
    { selector: '.ale-photo', keyframes: [
      { offset: 0, transform: 'rotate(7deg) translateY(0)', easing: spring },
      { offset: .25, transform: 'rotate(7deg) translateY(0)', easing: spring },
      { offset: .4, transform: 'rotate(4deg) translateY(-6px)', easing: spring },
      { offset: .54, transform: 'rotate(7deg) translateY(0)', easing: spring },
      { offset: 1, transform: 'rotate(7deg) translateY(0)' },
    ] },
    { selector: '.ale-plus', keyframes: [
      { offset: 0, transform: 'scale(1) rotate(0deg)', easing: spring },
      { offset: .27, transform: 'scale(1) rotate(0deg)', easing: spring },
      { offset: .4, transform: 'scale(1.12) rotate(90deg)', easing: spring },
      { offset: .51, transform: 'scale(1) rotate(90deg)', easing: spring },
      { offset: .85, transform: 'scale(1) rotate(90deg)', easing: spring },
      { offset: 1, transform: 'scale(1) rotate(90deg)' },
    ] },
  ],
};
