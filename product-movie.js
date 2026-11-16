// Generated alongside its matching server markup; the custom element owns only its shadow DOM.
import { n as getReact, t as getJsxRuntime } from "./assets/jsx-runtime-xcbuSnkB.js";
const { jsx } = getJsxRuntime();
const { useEffect } = getReact();
export function ProductMovie() { useEffect(() => { void import("/booking-movie.js?release=chat-context-v10").catch(error => console.error("Booking movie failed", error)); }, []); return jsx("div", { id: "product", className: "_container_1vxje_1 container agimon-product-movie", "data-sentry-component": "AgimonProductMovie", children: jsx("div", { className: "agimon-product-movie-shell", children: jsx("agimon-booking-movie", {}) }) }); }
