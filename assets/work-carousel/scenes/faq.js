export default {
  id: 'faq',
  label: 'FAQ',
  title: 'A familiar question. Answered.',
  description: 'A recurring customer question meets the answer you have already saved.',
  background: '#65cdb5',
  ink: '#142e29',
  markup: `<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Repeated questions about Saturday opening hours resolve into the saved answer: yes, nine am to two pm." font-family="Lausanne, Arial, sans-serif">
    <defs>
      <clipPath id="faq-question-window"><rect x="0" y="0" width="480" height="216"/></clipPath>
    </defs>
    <rect width="480" height="480" fill="#65cdb5"/>
    <g clip-path="url(#faq-question-window)" fill="#142e29" font-size="45" font-weight="500" letter-spacing="-1.8">
      <g class="faq-question-top" opacity=".17" style="transform-box:fill-box;transform-origin:center">
        <text x="-21" y="49">Open Saturday?</text>
      </g>
      <g class="faq-question-main" style="transform-box:fill-box;transform-origin:center">
        <text x="34" y="121">Open Saturday?</text>
      </g>
      <g class="faq-question-bottom" opacity=".17" style="transform-box:fill-box;transform-origin:center">
        <text x="91" y="193">Open Saturday?</text>
      </g>
    </g>
    <g class="faq-rule" style="transform-box:fill-box;transform-origin:left center">
      <path d="M34 237H446" stroke="#142e29" stroke-width="1.25" opacity=".42"/>
    </g>
    <g class="faq-answer-label" fill="#142e29" style="transform-box:fill-box;transform-origin:left center">
      <path d="M36 260h11v17l-5.5-4-5.5 4z" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="58" y="273" font-size="12" font-weight="500" letter-spacing="1.35">YOUR SAVED ANSWER</text>
    </g>
    <g class="faq-answer" fill="#142e29" style="transform-box:fill-box;transform-origin:left bottom">
      <text x="26" y="390" font-size="124" font-weight="500" letter-spacing="-7">Yes.</text>
      <text x="35" y="435" font-size="27" font-weight="400" letter-spacing="-.7">Saturday, 9 am–2 pm.</text>
    </g>
    <g class="faq-spark" fill="none" stroke="#142e29" stroke-width="2.5" stroke-linecap="round" style="transform-box:fill-box;transform-origin:center">
      <path d="M386 320v36M368 338h36M373 325l26 26M373 351l26-26"/>
    </g>
  </svg>`,
  motion: [
    {
      selector: '.faq-question-top',
      keyframes: [
        { offset: 0, transform: 'translateX(70px)', opacity: .09, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .2, transform: 'translateX(0)', opacity: .17, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .82, transform: 'translateX(0)', opacity: .17, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .94, transform: 'translateX(-45px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .95, transform: 'translateX(70px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: 1, transform: 'translateX(70px)', opacity: .09, easing: 'cubic-bezier(.22,.68,0,1)' },
      ],
    },
    {
      selector: '.faq-question-main',
      keyframes: [
        { offset: 0, transform: 'translateX(-24px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .08, transform: 'translateX(-24px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .25, transform: 'translateX(0)', opacity: 1, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .84, transform: 'translateX(0)', opacity: 1, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .96, transform: 'translateX(28px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: 1, transform: 'translateX(-24px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
      ],
    },
    {
      selector: '.faq-question-bottom',
      keyframes: [
        { offset: 0, transform: 'translateX(-80px)', opacity: .09, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .24, transform: 'translateX(0)', opacity: .17, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .82, transform: 'translateX(0)', opacity: .17, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .94, transform: 'translateX(45px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: .95, transform: 'translateX(-80px)', opacity: 0, easing: 'cubic-bezier(.22,.68,0,1)' },
        { offset: 1, transform: 'translateX(-80px)', opacity: .09, easing: 'cubic-bezier(.22,.68,0,1)' },
      ],
    },
    {
      selector: '.faq-rule',
      keyframes: [
        { offset: 0, transform: 'scaleX(0)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .21, transform: 'scaleX(0)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .38, transform: 'scaleX(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'scaleX(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'scaleX(1)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
    {
      selector: '.faq-answer-label',
      keyframes: [
        { offset: 0, transform: 'translateY(10px)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .25, transform: 'translateY(10px)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .4, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'translateY(0)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .98, transform: 'translateY(-8px)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'translateY(10px)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
    {
      selector: '.faq-answer',
      keyframes: [
        { offset: 0, transform: 'translateY(28px) scale(.96)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .3, transform: 'translateY(28px) scale(.96)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .46, transform: 'translateY(0) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'translateY(0) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .98, transform: 'translateY(-15px) scale(1)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'translateY(28px) scale(.96)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
    {
      selector: '.faq-spark',
      keyframes: [
        { offset: 0, transform: 'rotate(-40deg) scale(0)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .42, transform: 'rotate(-40deg) scale(0)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .53, transform: 'rotate(0deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: .85, transform: 'rotate(0deg) scale(1)', opacity: 1, easing: 'cubic-bezier(.16,.7,.2,1)' },
        { offset: 1, transform: 'rotate(40deg) scale(.5)', opacity: 0, easing: 'cubic-bezier(.16,.7,.2,1)' },
      ],
    },
  ],
};
