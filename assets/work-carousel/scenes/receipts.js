export default {
  id:'receipts', label:'Receipts', title:'Every receipt. In its place.',
  description:'Gathered, organized, ready to review.', background:'#eeeae1', ink:'#343b32',
  markup:`<svg viewBox="0 0 480 480" role="img" aria-label="Scattered payment receipts form an organized stack, ready for review." xmlns="http://www.w3.org/2000/svg">
  <defs><filter id="receipt-shadow" x="-70%" y="-50%" width="240%" height="230%"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#55513e" flood-opacity=".13"/></filter><pattern id="receipt-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#c4bfb1"/></pattern></defs>
  <rect x="42" y="43" width="396" height="391" fill="url(#receipt-grid)" opacity=".6"/>
  <g class="receipt-back" style="transform-origin:240px 237px" filter="url(#receipt-shadow)">
    <path d="M124 98h231v282l-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-11-8Z" fill="#d8dfce"/>
    <path d="M149 139h118m-118 17h175m-175 18h175m-175 135h175m-175 18h175" stroke="#a9b79c" stroke-width="3"/>
  </g>
  <g class="receipt-middle" style="transform-origin:240px 237px" filter="url(#receipt-shadow)">
    <path d="M126 72h230v294l-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8-10 8-10-8Z" fill="#f5df72"/>
    <text x="150" y="110" font-size="13" font-family="Inter,Arial,sans-serif" fill="#8c7828">PAYMENT RECEIPT</text><path d="M150 127h110m-110 23h174m-174 22h174m-174 143h174" stroke="#c9b249" stroke-width="3"/>
  </g>
  <g class="receipt-front" style="transform-origin:240px 230px" filter="url(#receipt-shadow)">
    <path d="M119 55h242v320l-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8-11 8-11-8Z" fill="#fffef7"/>
    <text x="240" y="93" text-anchor="middle" fill="#334c3d" font-family="Inter,Arial,sans-serif" font-size="10" letter-spacing="2.5">PAYMENT RECEIPT</text>
    <circle cx="240" cy="127" r="13" fill="none" stroke="#88a994" stroke-width="1.2"/><path d="M234 127h12m-6-6v12" stroke="#88a994" stroke-width="1.2"/>
    <text x="240" y="187" text-anchor="middle" fill="#294d39" font-family="Lausanne,Arial,sans-serif" font-size="47" font-weight="600" letter-spacing="-2">$120.00</text>
    <path d="M142 211h196" stroke="#c8cec1" stroke-dasharray="4 4"/>
    <g font-family="Inter,Arial,sans-serif" font-size="11" fill="#7c8377"><text x="143" y="239">FROM</text><text x="143" y="265">RECEIVED</text><text x="337" y="239" text-anchor="end" fill="#354f3d">Mia L.</text><text x="337" y="265" text-anchor="end" fill="#354f3d">Today, 10:42</text></g>
    <path d="M143 290h194" stroke="#d2d6ca"/>
    <g fill="#61715e"><path d="M162 312h2v25h-2zm5 0h4v25h-4zm8 0h2v25h-2zm5 0h1v25h-1zm5 0h4v25h-4zm8 0h2v25h-2zm5 0h3v25h-3zm7 0h1v25h-1zm4 0h4v25h-4zm7 0h2v25h-2zm6 0h1v25h-1zm4 0h3v25h-3zm6 0h2v25h-2zm6 0h4v25h-4zm7 0h1v25h-1zm4 0h3v25h-3zm6 0h2v25h-2zm6 0h4v25h-4zm8 0h1v25h-1zm4 0h2v25h-2zm5 0h4v25h-4zm8 0h2v25h-2zm5 0h1v25h-1zm5 0h3v25h-3zm7 0h4v25h-4zm8 0h2v25h-2zm5 0h1v25h-1"/></g>
  </g>
  <g class="receipt-stamp" style="transform-origin:248px 397px">
    <rect x="113" y="369" width="271" height="55" rx="27.5" fill="#e3eddf" stroke="#38694b" stroke-width="1.3"/>
    <circle cx="142" cy="397" r="9" stroke="#38694b" stroke-width="1.5" fill="none"/><path d="M142 391v6l4 3" stroke="#38694b" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <text x="164" y="403" fill="#38694b" font-family="Lausanne,Arial,sans-serif" font-weight="600" font-size="18">Ready for review</text>
  </g></svg>`,
  motion:[
    {selector:'.receipt-back',keyframes:[{transform:'translate(-46px, 10px) rotate(-24deg)',offset:0},{transform:'translate(-46px, 10px) rotate(-24deg)',offset:.1},{transform:'translate(0px, 0px) rotate(-8deg)',offset:.4},{transform:'translate(0px, 0px) rotate(-8deg)',offset:.82},{transform:'translate(-46px, 10px) rotate(-24deg)',offset:1}],options:{easing:'ease-in-out'}},
    {selector:'.receipt-middle',keyframes:[{transform:'translate(36px, -5px) rotate(21deg)',offset:0},{transform:'translate(36px, -5px) rotate(21deg)',offset:.16},{transform:'translate(0px, 0px) rotate(6deg)',offset:.43},{transform:'translate(0px, 0px) rotate(6deg)',offset:.84},{transform:'translate(36px, -5px) rotate(21deg)',offset:1}],options:{easing:'ease-in-out'}},
    {selector:'.receipt-front',keyframes:[{transform:'translateY(-12px) rotate(-4deg)',offset:0},{transform:'translateY(0px) rotate(0deg)',offset:.46},{transform:'translateY(0px) rotate(0deg)',offset:.85},{transform:'translateY(-12px) rotate(-4deg)',offset:1}],options:{easing:'ease-in-out'}},
    {selector:'.receipt-stamp',keyframes:[{opacity:0,transform:'translateY(10px) scale(1.13) rotate(-5deg)',offset:0},{opacity:0,transform:'translateY(10px) scale(1.13) rotate(-5deg)',offset:.42},{opacity:1,transform:'translateY(0px) scale(.98) rotate(-5deg)',offset:.5},{opacity:1,transform:'translateY(0px) scale(1) rotate(-5deg)',offset:.54},{opacity:1,transform:'translateY(0px) scale(1) rotate(-5deg)',offset:.85},{opacity:0,transform:'translateY(10px) scale(1.13) rotate(-5deg)',offset:1}]}
  ]
};
