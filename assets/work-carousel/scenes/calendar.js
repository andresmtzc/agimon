export default {
  id: 'calendar',
  label: 'Calendar',
  title: 'Make time for the next customer.',
  description: 'An offered time becomes an appointment, right where it belongs.',
  background: '#f5f3ea',
  ink: '#142e29',
  markup: `<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two offered times give way to a fifteen-hundred consultation settling into Thursday on a weekly calendar." font-family="Lausanne, Arial, sans-serif">
    <rect width="480" height="480" fill="#f5f3ea"/>
    <text x="30" y="49" fill="#142e29" font-size="27" font-weight="500" letter-spacing="-.7">November</text>
    <text x="413" y="47" fill="#142e29" font-size="13" letter-spacing=".8">2026</text>
    <g class="calendar-week" style="transform:rotate(-8deg);transform-box:fill-box;transform-origin:center">
      <g fill="#142e29">
        <text x="-14" y="100" font-size="12" letter-spacing="1.8" opacity=".55">WED</text>
        <text x="166" y="100" font-size="12" letter-spacing="1.8" opacity=".55">THU</text>
        <text x="346" y="100" font-size="12" letter-spacing="1.8" opacity=".55">FRI</text>
        <text x="-20" y="169" font-size="74" font-weight="400" letter-spacing="-4">18</text>
        <text x="160" y="169" font-size="74" font-weight="400" letter-spacing="-4">19</text>
        <text x="340" y="169" font-size="74" font-weight="400" letter-spacing="-4">20</text>
      </g>
      <path d="M-34 190H506M-34 244H506M-34 298H506M-34 352H506M-34 406H506M-34 460H506M146 76V510M326 76V510" stroke="#142e29" stroke-width="1" opacity=".18"/>
      <rect x="-25" y="198" width="163" height="38" rx="3" fill="#dfdfd3"/>
      <path d="M-11 211h63M-11 222h39" stroke="#142e29" stroke-width="2" opacity=".24"/>
      <rect x="334" y="360" width="164" height="38" rx="3" fill="#dfdfd3"/>
      <path d="M349 373h76M349 384h48" stroke="#142e29" stroke-width="2" opacity=".24"/>
      <g class="calendar-appointment" style="transform-box:fill-box;transform-origin:center">
        <rect x="154" y="252" width="164" height="99" rx="4" fill="#65cdb5"/>
        <rect x="154" y="252" width="4" height="99" rx="2" fill="#2f9d86"/>
        <text x="169" y="279" fill="#142e29" font-size="16" font-weight="500" letter-spacing="-.3">Consultation</text>
        <text x="166" y="333" fill="#142e29" font-size="46" font-weight="500" letter-spacing="-2.5">15:00</text>
      </g>
    </g>
    <g class="calendar-time-early" opacity="0" style="transform-box:fill-box;transform-origin:center">
      <rect x="40" y="280" width="174" height="87" rx="5" fill="#142e29"/>
      <text x="62" y="336" fill="#f5f3ea" font-size="43" letter-spacing="-1.7">10:00</text>
    </g>
    <g class="calendar-time-chosen" opacity="0" style="transform-box:fill-box;transform-origin:center">
      <rect x="252" y="197" width="174" height="87" rx="5" fill="#f5df72"/>
      <text x="274" y="253" fill="#142e29" font-size="43" letter-spacing="-1.7">15:00</text>
      <circle cx="423" cy="198" r="17" fill="#142e29"/>
      <path d="m416 198 4 4 9-10" fill="none" stroke="#f5f3ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="calendar-booked" style="transform-box:fill-box;transform-origin:center">
      <circle cx="382" cy="409" r="42" fill="#142e29"/>
      <path d="m364 409 12 12 25-27" fill="none" stroke="#f5df72" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`,
  motion: [
    {
      selector: '.calendar-week',
      keyframes: [
        { offset: 0, transform: 'translateY(15px) rotate(-8deg)', opacity: .55, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .3, transform: 'translateY(15px) rotate(-8deg)', opacity: .55, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .49, transform: 'translateY(0) rotate(-8deg)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .85, transform: 'translateY(0) rotate(-8deg)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: 1, transform: 'translateY(15px) rotate(-8deg)', opacity: .55, easing: 'cubic-bezier(.2,.65,.2,1)' },
      ],
    },
    {
      selector: '.calendar-time-early',
      keyframes: [
        { offset: 0, transform: 'translate(-20px, 25px) rotate(-10deg)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .14, transform: 'translate(0, 0) rotate(-7deg)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .27, transform: 'translate(0, 0) rotate(-7deg)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .4, transform: 'translate(-45px, 20px) rotate(-12deg)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .91, transform: 'translate(-45px, 20px) rotate(-12deg)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: 1, transform: 'translate(-20px, 25px) rotate(-10deg)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
      ],
    },
    {
      selector: '.calendar-time-chosen',
      keyframes: [
        { offset: 0, transform: 'translate(20px, 20px) rotate(8deg) scale(.96)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .06, transform: 'translate(20px, 20px) rotate(8deg) scale(.96)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .19, transform: 'translate(0, 0) rotate(5deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .28, transform: 'translate(0, 0) rotate(5deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .36, transform: 'translate(-30px, 18px) rotate(-2deg) scale(.96)', opacity: 1, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .43, transform: 'translate(-74px, 53px) rotate(-8deg) scale(.94)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: .92, transform: 'translate(-74px, 53px) rotate(-8deg) scale(.94)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
        { offset: 1, transform: 'translate(20px, 20px) rotate(8deg) scale(.96)', opacity: 0, easing: 'cubic-bezier(.2,.65,.2,1)' },
      ],
    },
    {
      selector: '.calendar-appointment',
      keyframes: [
        { offset: 0, transform: 'translate(40px, -50px) scale(.94)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .33, transform: 'translate(40px, -50px) scale(.94)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .49, transform: 'translate(0, 0) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'translate(0, 0) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .97, transform: 'translate(0, 12px) scale(.98)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'translate(40px, -50px) scale(.94)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
    {
      selector: '.calendar-booked',
      keyframes: [
        { offset: 0, transform: 'rotate(-25deg) scale(.6)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .45, transform: 'rotate(-25deg) scale(.6)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .56, transform: 'rotate(0deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'rotate(0deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .97, transform: 'rotate(12deg) scale(.9)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'rotate(-25deg) scale(.6)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
  ],
};
