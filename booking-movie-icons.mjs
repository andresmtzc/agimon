// Calendar, Receipts and To-Do are copied from the supplied Jade prototype's
// data-skill="calendar", "receipts" and "organizer" dock buttons respectively.
// Auto uses the app's actual Campaign dock glyph: getAgimonSkillIcon('campaign')
// resolves to src/assets/font-icons/channel.svg in agimon-web-a. Only its SVG
// sizing/accessibility attributes and currentColor fill are added here.
// Search and Filter & sort preserve the prototype toolbar SVGs. Send uses the
// final jade.js override of .desktop-send, preserving its horizontal geometry.
export const movieIcons = {
  calendar: `<svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 2v3"></path>
  <path d="M16 2v3"></path>
  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
  <path d="M3 9h18"></path>
  <path d="M8 13h.01"></path>
  <path d="M12 13h.01"></path>
  <path d="M16 13h.01"></path>
  <path d="M8 17h.01"></path>
  <path d="M12 17h.01"></path>
  <path d="M16 17h.01"></path>
</svg>`,
  receipt: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M13 16H8"></path>
  <path d="M14 8H8"></path>
  <path d="M16 12H8"></path>
  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
</svg>`,
  todo: `<svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 5h8"></path>
  <path d="M13 12h8"></path>
  <path d="M13 19h8"></path>
  <path d="m3 17 2 2 4-4"></path>
  <rect x="3" y="4" width="6" height="6" rx="1"></rect>
</svg>`,
  auto: `<svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor" stroke="none"><path d="M24.667 2.238A3.333 3.333 0 0 1 28 5.571v20.857a3.334 3.334 0 0 1-5.452 2.573L16 23.608v2.391a4 4 0 0 1-3.765 3.993l-.235.007a4 4 0 0 1-3.993-3.765L8 25.999v-3.467a6.669 6.669 0 0 1 1.334-13.2h5.522l7.693-6.335a3.336 3.336 0 0 1 2.119-.76zm-14 20.428V26a1.333 1.333 0 0 0 2.657.155l.009-.155v-3.334h-2.667zm14-17.761a.67.67 0 0 0-.424.152l-7.693 6.335a2.667 2.667 0 0 1-1.695.608H9.333a4 4 0 0 0 0 8h5.522c.619 0 1.218.215 1.695.608l7.693 6.335a.666.666 0 0 0 1.09-.515V5.571a.667.667 0 0 0-.667-.667z"/></svg>`,
  search: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="m21 21-4.34-4.34"></path>
  <circle cx="11" cy="11" r="8"></circle>
</svg>`,
  sort: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M10 5H3"></path>
  <path d="M12 19H3"></path>
  <path d="M14 3v4"></path>
  <path d="M16 17v4"></path>
  <path d="M21 12h-9"></path>
  <path d="M21 19h-5"></path>
  <path d="M21 5h-7"></path>
  <path d="M8 10v4"></path>
  <path d="M8 12H3"></path>
</svg>`,
  send: `<svg aria-hidden="true" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3 22 12 3 21 7 12Z"/><path d="M7 12h15"/></svg>`,
};
