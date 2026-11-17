import { landingMotion } from './landing-motion.js';
import { createMascot } from './mascot.js';
import { initChannelStrip } from './channel-strip.js?release=mobile-pop-v1';
import { initLanguageSelector } from './language-selector.js';

// Agimon coordinated entrance v1
initChannelStrip();

const reduced = landingMotion;
const DURATION = 3.05;
const clamp = n => Math.max(0, Math.min(1, n));
const smooth = n => { const p=clamp(n); return p*p*(3-2*p); };
const between = (t,a,b) => smooth((t-a)/(b-a));
// Damped overshoot restores the reference's recoil instead of a linear fade.
const spring = (t,start,duration) => {
 const p=clamp((t-start)/duration);
 return p===1?1:1-Math.exp(-7*p)*Math.cos(11*p);
};
let time=0, last=0, running=false, mascot, nextIdle=0, appliedReduced=reduced.matches, ready=false, staticFallback=false;
const $=s=>document.querySelector(s);
const blob=$('#brand-blob');
let words, normal, bubble, strokes, first, second, highlight;
function cacheHeadline(){
 words=[...document.querySelectorAll('.agimon-headline .intro-word')];
 normal=$('.chat-normal');bubble=$('.chat-bubble');strokes=$('.you-strokes');
 first=$('.stroke-one');second=$('.stroke-two');highlight=$('.works-highlight');
}
cacheHeadline();

function render(t) {
  words.forEach((word,i)=>{
    const start=.04+i*.055, p=spring(t,start,.88);
    const phase=clamp((t-2.06-(words.length-i-1)*.025)/.72);
    const wave=phase===1?0:Math.sin(phase*Math.PI*2)*Math.exp(-phase*4);
    word.style.opacity=between(t,start,start+.12);
    word.style.transform=`translateY(${(1-p)*42-wave*7}px) rotate(${(1-p)*(i%2?4:-4)+wave*.9}deg) scale(${.87+.13*p},${.92+.08*p})`;
  });
  const pop=spring(t,.095,.8), settle=between(t,2.02,2.55);
  bubble.style.opacity=1-settle;
  bubble.style.transform=`translateY(${(1-pop)*15}px) rotate(${(-4-(1-pop)*7)*(1-settle)}deg) scale(${.3+.7*pop-.035*settle},${.45+.55*pop})`;
  normal.style.opacity=settle;
  normal.style.transform=`translateY(${(1-settle)*-2}px)`;
  const sweep=between(t,.69,1.12), clear=between(t,2.10,2.58);
  highlight.style.opacity=sweep*(1-clear);
  highlight.style.transform=`rotate(-2deg) scaleX(${sweep}) scaleY(${1+Math.sin(between(t,.7,1.35)*Math.PI)*.1})`;
  first.style.strokeDashoffset=1-between(t,1.02,1.34);
  second.style.strokeDashoffset=1-between(t,1.26,1.58);
  strokes.style.opacity=between(t,1.01,1.04)*(1-between(t,2.16,2.60));
  strokes.style.transform=`translateY(${-2*clear}px)`;
}
let initialComplete = false;
function completeEntrance(){
 if(initialComplete)return;initialComplete=true;
 window.agimonEntrance?.complete();
 window.dispatchEvent(new Event('agimon:intro-complete'));
}
function finish(){running=false;time=DURATION;render(time);completeEntrance();}
function seek(seconds){running=false;time=Math.max(0,Math.min(DURATION,Number(seconds)||0));render(time);}
function replay(){if(reduced.matches)return;time=0;last=performance.now();running=true;render(0);}
function syncReduced(){
 appliedReduced=reduced.matches;running=false;time=DURATION;render(time);
 if(mascot)mascot.render(0);
 blob.style.transform='none';
 window.agimonEntrance?.skip('reduced-motion');
}
function frame(now){
 const delta=Math.min(.06,Math.max(0,(now-last)/1000));last=now;
 // Keep controls synchronized even when the change notification is missed.
 if(appliedReduced!==reduced.matches)syncReduced();
 if(!document.hidden&&!reduced.matches){
  if(running){time=Math.min(DURATION,time+delta);render(time);if(time===DURATION){running=false;completeEntrance();}}
  if(mascot&&now>=nextIdle){mascot.render(now/1000);blob.style.transform=`translateY(${Math.sin(now/1000*Math.PI/2)*-.8}px)`;nextIdle=now+50;}
 }
 requestAnimationFrame(frame);
}
reduced.addEventListener('change',syncReduced);
document.addEventListener('visibilitychange',()=>{last=performance.now();});
window.agimonIntro={replay,seek,finish,getState:()=>({time,running,reducedMotion:reduced.matches,duration:DURATION})};

// The original reference runtime keeps navigation and account-service guards.
// This first pass changes branding and the entrance, without changing scroll.
window.agimonLanguage=initLanguageSelector(()=>{
 cacheHeadline();
 if(staticFallback || window.agimonEntrance?.isSkipped())seek(DURATION);
 else if(ready){if(reduced.matches)seek(DURATION);else replay();}
 else render(0);
});
const favicon=document.querySelector('link[rel="icon"]');if(favicon)favicon.href='/assets/agimon-favicon.svg';
// Headline readiness is independent of the decorative mascot preset request.
// Wait only for the selected writing system and fonts used in the first scene.
// Choose a stable fallback before the first localized frame, never mid-animation.
// On successful readiness remove it while the entrance is still gated.
const fontGuard = document.createElement('style');
fontGuard.textContent='.agimon-headline,.agimon-headline *,.channel-strip,.channel-strip *,._header_1ctqk_2,._header_1ctqk_2 *{font-family:system-ui,sans-serif!important}';
document.head.append(fontGuard);
const selectedLanguage = window.agimonLanguage?.getLanguage() || 'en';
const fontLoads = [
 document.fonts.load('800 80px "TWK Lausanne"'),
 document.fonts.load('400 18px Inter'),
];
if(['ar','ur'].includes(selectedLanguage))fontLoads.push(document.fonts.load('800 80px "Noto Sans Arabic"', 'مرحبا'));
else if(selectedLanguage==='hi')fontLoads.push(document.fonts.load('800 80px "Noto Sans Devanagari"', 'नमस्ते'));
else fontLoads.push(document.fonts.load('700 80px "Agimon Hand"'));
// A slow font is not a reason to skip the brand animation. Wait for the fonts
// to settle; actual failures use the stable system face and still play it.
Promise.allSettled(fontLoads).then(results=>{
 ready=true;
 const fontsLoaded=results.every(result=>result.status==='fulfilled');
 // Loaded brand fonts also apply when reduced motion skips the entrance.
 if(fontsLoaded)fontGuard.remove();
 if(reduced.matches || window.agimonEntrance?.begin()===false)finish();
 else replay();
 last=performance.now();requestAnimationFrame(frame);
});
fetch('/assets/selected-logo-preset.json').then(r=>{if(!r.ok)throw new Error('Logo preset unavailable');return r.json();})
 .then(preset=>{mascot=createMascot(blob,preset);mascot.render(0);})
 .catch(()=>{ /* Wordmark remains usable if its decorative mascot is unavailable. */ });
