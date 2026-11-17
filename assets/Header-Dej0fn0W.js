/* agimon-section-navigation-v2 */
/* agimon-navigation-cleanup-v1 */
import { agimonHeaderLabel } from "../language-selector.js";
import { AgimonLanguageControl } from "../language-control.js";

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8b0177b9-eae2-531e-a1f3-a1389f25c312")}catch(e){}}();
(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`v2026-11-13-62d0a3b`}}catch{}})();import{o as e}from"./rolldown-runtime-5JLZCTB7.js";import{n as t,t as n}from"./jsx-runtime-xcbuSnkB.js";import{n as r}from"./link-Cv9L_12x.js";import{n as i}from"./src-DNgfmVaZ.js";import{t as a}from"./with-css-vars-rSMYK3K_.js";import{o}from"./hooks-iOQTS0hy.js";import{A as s,E as c,U as l}from"./urls-B4ITLD7H.js";import{n as u,r as d,t as f}from"./Button-CZCL-QHX.js";import{r as p}from"./hooks-DnstTbT8.js";import{n as m}from"./siteHeader-Bwtrx9BJ.js";import{t as h}from"./LogoHeader-BuA-lxko.js";var g=e(t());function _(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},b={duration:.5,overwrite:!1,delay:0},x,S,C,w=1e8,T=1/w,E=Math.PI*2,D=E/4,O=0,k=Math.sqrt,A=Math.cos,j=Math.sin,M=function(e){return typeof e==`string`},N=function(e){return typeof e==`function`},P=function(e){return typeof e==`number`},F=function(e){return e===void 0},I=function(e){return typeof e==`object`},L=function(e){return e!==!1},R=function(){return typeof window<`u`},z=function(e){return N(e)||M(e)},B=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},V=Array.isArray,ee=/(?:-?\.?\d|\.)+/gi,te=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ne=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,re=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,H=/[+-]=-?[.\d]+/,ie=/[^,'"\[\]\s]+/gi,ae=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,U,oe,se,ce,W={},le={},ue,de=function(e){return(le=Be(e,W))&&nr},fe=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},pe=function(e,t){return!t&&console.warn(e)},me=function(e,t){return e&&(W[e]=t)&&le&&(le[e]=t)||W},he=function(){return 0},ge={suppressEvents:!0,isStart:!0,kill:!1},_e={suppressEvents:!0,kill:!1},ve={suppressEvents:!0},ye={},be=[],xe={},Se,Ce={},we={},Te=30,Ee=[],De=``,Oe=function(e){var t=e[0],n,r;if(I(t)||N(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ee.length;r--&&!Ee[r].targetTest(t););n=Ee[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mn(e[r],n)))||e.splice(r,1);return e},ke=function(e){return e._gsap||Oe(St(e))[0]._gsap},Ae=function(e,t,n){return(n=e[t])&&N(n)?e[t]():F(n)&&e.getAttribute&&e.getAttribute(t)||n},je=function(e,t){return(e=e.split(`,`)).forEach(t)||e},G=function(e){return Math.round(e*1e5)/1e5||0},K=function(e){return Math.round(e*1e7)/1e7||0},Me=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Ne=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Pe=function(){var e=be.length,t=be.slice(0),n,r;for(xe={},be.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fe=function(e,t,n,r){be.length&&!S&&Pe(),e.render(t,n,r||S&&t<0&&(e._initted||e._startAt)),be.length&&!S&&Pe()},Ie=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(ie).length<2?t:M(e)?e.trim():e},Le=function(e){return e},Re=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ze=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Be=function(e,t){for(var n in t)e[n]=t[n];return e},Ve=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=I(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},He=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ue=function(e){var t=e.parent||U,n=e.keyframes?ze(V(e.keyframes)):Re;if(L(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},We=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ge=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ke=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},qe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Je=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ye=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xe=function(e,t,n,r){return e._startAt&&(S?e._startAt.revert(_e):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ze=function e(t){return!t||t._ts&&e(t.parent)},Qe=function(e){return e._repeat?$e(e._tTime,e=e.duration()+e._rDelay)*e:0},$e=function(e,t){var n=Math.floor(e=K(e/t));return e&&n===e?n-1:n},et=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tt=function(e){return e._end=K(e._start+(e._tDur/Math.abs(e._ts||e._rts||T)||0))},nt=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=K(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tt(e),n._dirty||Je(n,e)),e},rt=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=et(e.rawTime(),t),(!t._dur||_t(0,t.totalDuration(),n)-t._tTime>T)&&t.render(n,!0)),Je(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-T}},it=function(e,t,n,r){return t.parent&&qe(t),t._start=K((P(n)?n:n||e!==U?mt(e,n,t):e._time)+t._delay),t._end=K(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ge(e,t,`_first`,`_last`,e._sort?`_start`:0),ct(t)||(e._recent=t),r||rt(e,t),e._ts<0&&nt(e,e._tTime),e},at=function(e,t){return(W.ScrollTrigger||fe(`scrollTrigger`,t))&&W.ScrollTrigger.create(t,e)},ot=function(e,t,n,r,i){if(Sn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!S&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Se!==$t.frame)return be.push(e),e._lazy=[i,r],1},st=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},ct=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},lt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&st(e)&&!(!e._initted&&ct(e))||(e._ts<0||e._dp._ts<0)&&!ct(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=_t(0,e._tDur,t),l=$e(s,o),e._yoyo&&l&1&&(a=1-a),l!==$e(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||S||r||e._zTime===T||!t&&e._zTime){if(!e._initted&&ot(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?T:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Xe(e,t,n,!0),e._onUpdate&&!n&&zt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&zt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qe(e,1),!n&&!S&&(zt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},ut=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},dt=function(e,t,n,r){var i=e._repeat,a=K(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:K(a*(i+1)+e._rDelay*i):a,o>0&&!r&&nt(e,e._tTime=e._tDur*o),e.parent&&tt(e),n||Je(e.parent,e),e},ft=function(e){return e instanceof X?Je(e):dt(e,e._dur)},pt={_start:0,endTime:he,totalDuration:he},mt=function e(t,n,r){var i=t.labels,a=t._recent||pt,o=t.duration()>=w?a.endTime(!1):t._dur,s,c,l;return M(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(V(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},ht=function(e,t,n){var r=P(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=L(s.vars.inherit)&&s.parent;a.immediateRender=L(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new Z(t[0],a,t[i+1])},gt=function(e,t){return e||e===0?t(e):t},_t=function(e,t,n){return n<e?e:n>t?t:n},q=function(e,t){return!M(e)||!(t=ae.exec(e))?``:t[1]},vt=function(e,t,n){return gt(n,function(n){return _t(e,t,n)})},yt=[].slice,bt=function(e,t){return e&&I(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&I(e[0]))&&!e.nodeType&&e!==oe},xt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return M(e)&&!t||bt(e,1)?(r=n).push.apply(r,St(e)):n.push(e)})||n},St=function(e,t,n){return C&&!t&&C.selector?C.selector(e):M(e)&&!n&&(se||!en())?yt.call((t||ce).querySelectorAll(e),0):V(e)?xt(e,n):bt(e)?yt.call(e,0):e?[e]:[]},Ct=function(e){return e=St(e)[0]||pe(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return St(t,n.querySelectorAll?n:n===e?pe(`Invalid scope`)||ce.createElement(`div`):e)}},wt=function(e){return e.sort(function(){return .5-Math.random()})},Tt=function(e){if(N(e))return e;var t=I(e)?e:{each:e},n=ln(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return M(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,w])[1],!S){for(b=-w;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===w?0:s?f*u/S-.5:r/S|0,b=0,x=w,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):k(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&wt(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=q(t.amount||t.each)||0,n=n&&f<0?sn(n):n}return f=(p[e]-p.min)/p.max||0,K(p.b+(n?n(f):f)*p.v)+p.u}},Et=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=K(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(P(n)?0:q(n))}},Dt=function(e,t){var n=V(e),r,i;return!n&&I(e)&&(r=n=e.radius||w,e.values?(e=St(e.values),(i=!P(e[0]))&&(r*=r)):e=Et(e.increment)),gt(t,n?N(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=w,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||P(t)?s:s+q(t)}:Et(e))},Ot=function(e,t,n,r){return gt(V(e)?!t:n===!0?!!(n=0):!r,function(){return V(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},kt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},At=function(e,t){return function(n){return e(parseFloat(n))+(t||q(n))}},jt=function(e,t,n){return It(e,t,0,1,n)},Mt=function(e,t,n){return gt(n,function(n){return e[~~t(n)]})},Nt=function e(t,n,r){var i=n-t;return V(t)?Mt(t,e(0,t.length),n):gt(r,function(e){return(i+(e-t)%i)%i+t})},Pt=function e(t,n,r){var i=n-t,a=i*2;return V(t)?Mt(t,e(0,t.length-1),n):gt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ft=function(e){for(var t=0,n=``,r,i,a,o;~(r=e.indexOf(`random(`,t));)a=e.indexOf(`)`,r),o=e.charAt(r+7)===`[`,i=e.substr(r+7,a-r-7).match(o?ie:ee),n+=e.substr(t,r-t)+Ot(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},It=function(e,t,n,r,i){var a=t-e,o=r-n;return gt(i,function(t){return n+((t-e)/a*o||0)})},Lt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=M(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(V(t)&&!V(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Be(V(t)?[]:{},t));if(!u){for(c in n)_n.call(s,t,c,`get`,n[c]);a=function(e){return Ln(e,s)||(o?t.p:t)}}}return gt(r,a)},Rt=function(e,t,n){var r=e.labels,i=w,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},zt=function(e,t,n){var r=e.vars,i=r[t],a=C,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&be.length&&Pe(),o&&(C=o),l=s?i.apply(c,s):i.call(c),C=a,l},Bt=function(e){return qe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!S),e.progress()<1&&zt(e,`onInterrupt`),e},Vt,Ht=[],Ut=function(e){if(e)if(e=!e.name&&e.default||e,R()||e.headless){var t=e.name,n=N(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:he,render:Ln,add:_n,kill:zn,modifier:Rn,rawVars:0},a={targetTest:0,get:0,getSetter:Nn,aliases:{},register:0};if(en(),e!==r){if(Ce[t])return;Re(r,Re(He(e,i),a)),Be(r.prototype,Be(i,He(e,a))),Ce[r.prop=t]=r,e.targetTest&&(Ee.push(r),ye[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}me(t,r),e.register&&e.register(nr,r,Hn)}else Ht.push(e)},J=255,Wt={aqua:[0,J,J],lime:[0,J,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,J],navy:[0,0,128],white:[J,J,J],olive:[128,128,0],yellow:[J,J,0],orange:[J,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[J,0,0],pink:[J,192,203],cyan:[0,J,J],transparent:[J,J,J,0]},Gt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*J+.5|0},Kt=function(e,t,n){var r=e?P(e)?[e>>16,e>>8&J,e&J]:0:Wt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Wt[e])r=Wt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&J,r&J,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&J,e&J]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(ee),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Gt(s+1/3,i,a),r[1]=Gt(s,i,a),r[2]=Gt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(te),n&&r.length<4&&(r[3]=1),r}else r=e.match(ee)||Wt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/J,a=r[1]/J,o=r[2]/J,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},qt=function(e){var t=[],n=[],r=-1;return e.split(Yt).forEach(function(e){var i=e.match(ne)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Jt=function(e,t,n){var r=``,i=(e+r).match(Yt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Kt(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=qt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Yt,`1`).split(ne),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Yt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Yt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Wt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Xt=/hsl[a]?\(/,Zt=function(e){var t=e.join(` `),n;if(Yt.lastIndex=0,Yt.test(t))return n=Xt.test(t),e[1]=Jt(e[1],n),e[0]=Jt(e[0],n,qt(e[1])),!0},Qt,$t=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ue&&(!se&&R()&&(oe=se=window,ce=oe.document||{},W.gsap=nr,(oe.gsapVersions||=[]).push(nr.version),de(le||oe.GreenSockGlobals||!oe.gsap&&oe||{}),Ht.forEach(Ut)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Qt=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Qt=0,l=he},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),en(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),en=function(){return!Qt&&$t.wake()},Y={},tn=/^[\d.\-M][\d.\-,\s]/,nn=/["']/g,rn=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(nn,``).trim():+c,r=s.substr(o+1).trim();return t},an=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},on=function(e){var t=(e+``).split(`(`),n=Y[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[rn(t[1])]:an(e).split(`,`).map(Ie)):Y._CE&&tn.test(e)?Y._CE(``,e):n},sn=function(e){return function(t){return 1-e(1-t)}},cn=function e(t,n){for(var r=t._first,i;r;)r instanceof X?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},ln=function(e,t){return e&&(N(e)?e:Y[e]||on(e))||t},un=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return je(e,function(e){for(var t in Y[e]=W[e]=i,Y[a=e.toLowerCase()]=n,i)Y[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Y[e+`.`+t]=i[t]}),i},dn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/E*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*j((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:dn(s);return a=E/a,c.config=function(n,r){return e(t,n,r)},c},pn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:dn(r);return i.config=function(n){return e(t,n)},i};je(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;un(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Y.Linear.easeNone=Y.none=Y.Linear.easeIn,un(`Elastic`,fn(`in`),fn(`out`),fn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};un(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),un(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),un(`Circ`,function(e){return-(k(1-e*e)-1)}),un(`Sine`,function(e){return e===1?1:-A(e*D)+1}),un(`Back`,pn(`in`),pn(`out`),pn()),Y.SteppedEase=Y.steps=W.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-T;return function(e){return((r*_t(0,a,e)|0)+i)*n}}},b.ease=Y[`quad.out`],je(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return De+=e+`,`+e+`Params,`});var mn=function(e,t){this.id=O++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ae,this.set=t?t.getSetter:Nn},hn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,dt(this,+e.duration,1,1),this.data=e.data,C&&(this._ctx=C,C.data.push(this)),Qt||$t.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,dt(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(en(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(nt(this,e),!n._dp||n.parent||rt(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&it(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===T||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Fe(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Qe(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Qe(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?$e(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-T?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?et(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-T?0:this._rts,this.totalTime(_t(-Math.abs(this._delay),this._tDur,n),t!==!1),tt(this),Ye(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(en(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==T&&(this._tTime-=T)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&it(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(L(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?et(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=ve);var t=S;return S=e,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),S=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ft(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ft(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(mt(this,e),L(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,L(t)),this._dur||(this._zTime=-T),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-T:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-T,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-T)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(n){var r=N(e)?e:Le,i=function(){var e=t.then;t.then=null,N(r)&&(r=r(t))&&(r.then||r===t)&&(t.then=e),n(r),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?i():t._prom=i})},t.kill=function(){Bt(this)},e}();Re(hn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-T,_prom:0,_ps:!1,_rts:1});var X=function(e){v(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=L(t.sortChildren),U&&it(t.parent||U,_(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&at(_(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return ht(0,arguments,this),this},n.from=function(e,t,n){return ht(1,arguments,this),this},n.fromTo=function(e,t,n,r){return ht(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Ue(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new Z(e,t,mt(this,n),1),this},n.call=function(e,t,n){return it(this,Z.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new Z(e,n,mt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Ue(n).immediateRender=L(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Ue(r).immediateRender=L(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:K(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==U&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=K(o%f),o===i?(d=this._repeat,c=a):(_=K(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=$e(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:K(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&zt(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this;cn(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=ut(this,K(r),K(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&c&&!t&&!d&&(zt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-T);break}}l=u}else{l=this._last;for(var C=e<0?e:c;l;){if(u=l._prev,(l._act||C<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(C-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(C-l._start)*l._ts,t,n||S&&(l._initted||l._startAt)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=C?-T:T);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-T)._zTime=c>=r?1:-1,this._ts))return this._start=g,tt(this),this.render(e,t,n);this._onUpdate&&!t&&zt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&qe(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(zt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(P(t)||(t=mt(this,t,e)),!(e instanceof hn)){if(V(e))return e.forEach(function(e){return n.add(e,t)}),this;if(M(e))return this.addLabel(e,t);if(N(e))e=Z.delayedCall(0,e);else return this}return this===e?this:it(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-w);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof Z?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return M(e)?this.removeLabel(e):N(e)?this.killTweensOf(e):(e.parent===this&&Ke(this,e),e===this._recent&&(this._recent=this._last),Je(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=K($t.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=mt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=Z.delayedCall(0,t||he,n);return r.data=`isPause`,this._hasPause=1,it(this,r,mt(this,e))},n.removePause=function(e){var t=this._first;for(e=mt(this,e);t;)t._start===e&&t.data===`isPause`&&qe(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)bn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=St(e),i=this._first,a=P(t),o;i;)i instanceof Z?Ne(i._targets,r)&&(a?(!bn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=mt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=Z.to(n,Re({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||T,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&dt(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Re({startAt:{time:mt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Rt(this,mt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Rt(this,mt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+T)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);for(var r=this._first,i=this.labels,a;r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Je(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Je(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=w,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,it(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=o/n._ts,n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;dt(n,n===U&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(U._ts&&(Fe(U,et(e,U)),Se=$t.frame),$t.frame>=Te){Te+=y.autoSleep||120;var t=U._first;if((!t||!t._ts)&&y.autoSleep&&$t._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||$t.sleep()}}},t}(hn);Re(X.prototype,{_lock:0,_hasPause:0,_forcing:0});var gn=function(e,t,n,r,i,a,o){var s=new Hn(this._pt,e,t,0,1,In,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ft(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(re)||[];u=re.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Me(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=re.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(H.test(r)||g)&&(s.e=0),this._pt=s,s},_n=function(e,t,n,r,i,a,o,s,c,l){N(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?N(u)?c?e[t.indexOf(`set`)||!N(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=N(u)?c?jn:An:kn,p;if(M(r)&&(~r.indexOf(`random(`)&&(r=Ft(r)),r.charAt(1)===`=`&&(p=Me(d,r)+(q(d)||0),(p||p===0)&&(r=p))),!l||d!==r||xn)return!isNaN(d*r)&&r!==``?(p=new Hn(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Fn:Pn,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&fe(t,r),gn.call(this,e,t,d,r,f,s||y.stringFilter,c))},vn=function(e,t,n,r,i){if(N(e)&&(e=En(e,i,t,n,r)),!I(e)||e.style&&e.nodeType||V(e)||B(e))return M(e)?En(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=En(e[o],i,t,n,r);return a},yn=function(e,t,n,r,i,a){var o,s,c,l;if(Ce[e]&&(o=new Ce[e]).init(i,o.rawVars?t[e]:vn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Hn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Vt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},bn,xn,Sn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!x,C=t.timeline,E,D,O,k,A,j,M,N,P,F,I,R,z;if(C&&(!f||!a)&&(a=`none`),t._ease=ln(a,b.ease),t._yEase=d?sn(ln(d===!0?a:d,b.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!C&&!!i.runBackwards,!C||f&&!i.stagger){if(N=g[0]?ke(g[0]).harness:0,R=N&&i[N.prop],E=He(i,ye),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?_e:ge),h._lazy=0),o){if(qe(t._startAt=Z.set(g,Re({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&L(c),startAt:null,delay:0,onUpdate:l&&function(){return zt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(S||!s&&!p)&&t._startAt.revert(_e),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),O=Re({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&L(c),immediateRender:s,stagger:0,parent:_},E),R&&(O[N.prop]=R),qe(t._startAt=Z.set(g,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(S?t._startAt.revert(_e):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,T,T);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&L(c)||c&&!m,D=0;D<g.length;D++){if(A=g[D],M=A._gsap||Oe(g)[D]._gsap,t._ptLookup[D]=F={},xe[M.id]&&be.length&&Pe(),I=v===g?D:v.indexOf(A),N&&(P=new N).init(A,R||E,t,I,v)!==!1&&(t._pt=k=new Hn(t._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(e){F[e]=k}),P.priority&&(j=1)),!N||R)for(O in E)Ce[O]&&(P=yn(O,E,t,I,A,v))?P.priority&&(j=1):F[O]=k=_n.call(t,A,O,`get`,E[O],I,v,0,i.stringFilter);t._op&&t._op[D]&&t.kill(A,t._op[D]),y&&t._pt&&(bn=t,U.killTweensOf(A,F,t.globalTime(n)),z=!t.parent,bn=0),t._pt&&c&&(xe[M.id]=1)}j&&Vn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!z,f&&n<=0&&C.render(w,!0,!0)},Cn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return xn=1,e.vars[t]=`+=0`,Sn(e,o),xn=0,s?pe(t+` not eligible for reset`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=G(n)+q(u.e),u.b&&=l.s+q(u.b)},wn=function(e,t){var n=e[0]?ke(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Be({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Tn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(V(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},En=function(e,t,n,r,i){return N(e)?e.call(t,n,r,i):M(e)&&~e.indexOf(`random(`)?Ft(e):e},Dn=De+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,On={};je(Dn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return On[e]=1});var Z=function(e){v(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Ue(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=o.yoyoEase,g=n.parent||U,v=(V(t)||B(t)?P(t[0]):`length`in n)?[t]:St(t),b,S,C,w,E,D,O,k;if(a._targets=v.length?Oe(v):pe(`GSAP target `+t+` not found. https://gsap.com`,!y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||z(s)||z(c)){if(n=a.vars,b=a.timeline=new X({data:`nested`,defaults:p||{},targets:g&&g.data===`nested`?g.vars.targets:v}),b.kill(),b.parent=b._dp=_(a),b._start=0,u||z(s)||z(c)){if(w=v.length,O=u&&Tt(u),I(u))for(E in u)~Dn.indexOf(E)&&(k||={},k[E]=u[E]);for(S=0;S<w;S++)C=He(n,On),C.stagger=0,h&&(C.yoyoEase=h),k&&Be(C,k),D=v[S],C.duration=+En(s,_(a),S,D,v),C.delay=(+En(c,_(a),S,D,v)||0)-a._delay,!u&&w===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),b.to(D,C,O?O(S,D,v):0),b._ease=Y.none;b.duration()?s=c=0:a.timeline=0}else if(f){Ue(Re(b.vars.defaults,{ease:`none`})),b._ease=ln(f.ease||n.ease||`none`);var A=0,j,M,N;if(V(f))f.forEach(function(e){return b.to(v,e,`>`)}),b.duration();else{for(E in C={},f)E===`ease`||E===`easeEach`||Tn(E,f[E],C,f.easeEach);for(E in C)for(j=C[E].sort(function(e,t){return e.t-t.t}),A=0,S=0;S<j.length;S++)M=j[S],N={ease:M.e,duration:(M.t-(S?j[S-1].t:0))/100*s},N[E]=M.v,b.to(v,N,A),A+=N.duration;b.duration()<s&&b.to({},{duration:s-b.duration()})}}s||a.duration(s=b.duration())}else a.timeline=0;return d===!0&&!x&&(bn=_(a),U.killTweensOf(v),bn=0),it(g,_(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===K(g._time)&&L(l)&&Ze(_(a))&&g.data!==`nested`)&&(a._tTime=-T,a.render(Math.max(0,-c)||0)),m&&at(_(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-T&&!o?i:e<T?0:e,c,l,u,d,f,p,m,h,g;if(!a)lt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=K(s%d),s===i?(u=this._repeat,c=a):(f=K(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(g=this._yEase,c=a-c),f=$e(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&(h&&this._yEase&&cn(h,p),this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(K(d*u),!0).invalidate()._lock=0))}if(!this._initted){if(ot(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(g||this._ease)(c/a),this._from&&(this.ratio=m=1-m),c&&!r&&!t&&!u&&(zt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Xe(this,e,t,n),zt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&zt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Xe(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&qe(this,1),!t&&!(o&&!r)&&(s||r||p)&&(zt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Qt||$t.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Sn(this,a),o=this._ease(a/this._dur),Cn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(nt(this,0),this.parent||Ge(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Bt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!S),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,bn&&bn.vars.overwrite!==!0)._first||Bt(this),this.parent&&n!==this.timeline.totalDuration()&&dt(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?St(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&We(r,i))return t===`all`&&(this._pt=0),Bt(this);for(s=this._op=this._op||[],t!==`all`&&(M(t)&&(d={},je(t,function(e){return d[e]=1}),t=d),t=wn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Ke(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Bt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return ht(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return ht(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return U.killTweensOf(e,t,n)},t}(hn);Re(Z.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),je(`staggerTo,staggerFrom,staggerFromTo`,function(e){Z[e]=function(){var t=new X,n=yt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var kn=function(e,t,n){return e[t]=n},An=function(e,t,n){return e[t](n)},jn=function(e,t,n,r){return e[t](r.fp,n)},Mn=function(e,t,n){return e.setAttribute(t,n)},Nn=function(e,t){return N(e[t])?An:F(e[t])&&e.setAttribute?Mn:kn},Pn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},In=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ln=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},zn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ke(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Bn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Hn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Pn,this.d=o||this,this.set=s||kn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Bn,this.m=e,this.mt=n,this.tween=t},e}();je(De+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return ye[e]=1}),W.TweenMax=W.TweenLite=Z,W.TimelineLite=W.TimelineMax=X,U=new X({sortChildren:!1,defaults:b,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),y.stringFilter=Zt;var Un=[],Wn={},Gn=[],Kn=0,qn=0,Jn=function(e){return(Wn[e]||Gn).map(function(e){return e()})},Yn=function(){var e=Date.now(),t=[];e-Kn>2&&(Jn(`matchMediaInit`),Un.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=oe.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Jn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Kn=e,Jn(`matchMedia`))},Xn=function(){function e(e,t){this.selector=t&&Ct(t),this.data=[],this._r=[],this.isReverted=!1,this.id=qn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){N(e)&&(n=t,t=e,e=N);var r=this,i=function(){var e=C,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Ct(n)),C=r,a=t.apply(r,arguments),N(a)&&r._r.push(a),C=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===N?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=C;C=null,e(this),C=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof Z&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof X?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof Z)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Un.length;r--;)Un[r].id===this.id&&Un.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Zn=function(){function e(e){this.contexts=[],this.scope=e,C&&C.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){I(e)||(e={matches:e});var r=new Xn(0,n||this.scope),i=r.conditions={},a,o,s;for(o in C&&!r.selector&&(r.selector=C.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=oe.matchMedia(e[o]),a&&(Un.indexOf(r)<0&&Un.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Yn):a.addEventListener(`change`,Yn)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Qn={registerPlugin:function(){[...arguments].forEach(function(e){return Ut(e)})},timeline:function(e){return new X(e)},getTweensOf:function(e,t){return U.getTweensOf(e,t)},getProperty:function(e,t,n,r){M(e)&&(e=St(e)[0]);var i=ke(e||{}).get,a=n?Le:Ie;return n===`native`&&(n=``),e&&(t?a((Ce[t]&&Ce[t].get||i)(e,t,n,r)):function(t,n,r){return a((Ce[t]&&Ce[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=St(e),e.length>1){var r=e.map(function(e){return nr.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Ce[t],o=ke(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Vt._pt=0,r.init(e,n?t+n:t,Vt,0,[e]),r.render(1,r),Vt._pt&&Ln(1,Vt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=nr.to(e,Re((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return U.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ln(e.ease,b.ease)),Ve(b,e||{})},config:function(e){return Ve(y,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Ce[e]&&!W[e]&&pe(t+` effect requires `+e+` plugin.`)}),we[t]=function(e,t,r){return n(St(e),Re(t||{},i),r)},a&&(X.prototype[t]=function(e,n,r){return this.add(we[t](e,I(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Y[e]=ln(t)},parseEase:function(e,t){return arguments.length?ln(e,t):Y},getById:function(e){return U.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new X(e),r,i;for(n.smoothChildTiming=L(e.smoothChildTiming),U.remove(n),n._dp=0,n._time=n._tTime=U._time,r=U._first;r;)i=r._next,(t||!(!r._dur&&r instanceof Z&&r.vars.onComplete===r._targets[0]))&&it(n,r,r._start-r._delay),r=i;return it(U,n,0),n},context:function(e,t){return e?new Xn(e,t):C},matchMedia:function(e){return new Zn(e)},matchMediaRefresh:function(){return Un.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Yn()},addEventListener:function(e,t){var n=Wn[e]||(Wn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Nt,wrapYoyo:Pt,distribute:Tt,random:Ot,snap:Dt,normalize:jt,getUnit:q,clamp:vt,splitColor:Kt,toArray:St,selector:Ct,mapRange:It,pipe:kt,unitize:At,interpolate:Lt,shuffle:wt},install:de,effects:we,ticker:$t,updateRoot:X.updateRoot,plugins:Ce,globalTimeline:U,core:{PropTween:Hn,globals:me,Tween:Z,Timeline:X,Animation:hn,getCache:ke,_removeLinkedListItem:Ke,reverting:function(){return S},context:function(e){return e&&C&&(C.data.push(e),e._ctx=C),C},suppressOverwrites:function(e){return x=e}}};je(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Qn[e]=Z[e]}),$t.add(X.updateRoot),Vt=Qn.to({},{duration:0});var $n=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},er=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=$n(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},tr=function(e,t){return{name:e,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(M(n)&&(r={},je(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}er(e,n)}}}},nr=Qn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)S?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tr(`roundProps`,Et),tr(`modifiers`),tr(`snap`,Dt))||Qn;Z.version=X.version=nr.version=`3.12.7`,ue=1,R()&&en(),Y.Power0,Y.Power1,Y.Power2,Y.Power3,Y.Power4,Y.Linear,Y.Quad,Y.Cubic,Y.Quart,Y.Quint,Y.Strong,Y.Elastic,Y.Back,Y.SteppedEase,Y.Bounce,Y.Sine,Y.Expo,Y.Circ;var rr,ir,ar,or,sr,cr,lr,ur=function(){return typeof window<`u`},dr={},fr=180/Math.PI,pr=Math.PI/180,mr=Math.atan2,hr=1e8,gr=/([A-Z])/g,_r=/(left|right|width|margin|padding|x)/i,vr=/[\s,\(]\S/,yr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},br=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Tr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Er=function(e,t,n){return e.style[t]=n},Dr=function(e,t,n){return e.style.setProperty(t,n)},Or=function(e,t,n){return e._gsap[t]=n},kr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ar=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},jr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Q=`transform`,Mr=Q+`Origin`,Nr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in dr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=yr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Qr(i,e)}):this.tfm[t]=o.x?o[t]:Qr(i,t),t===Mr&&(this.tfm.zOrigin=o.zOrigin);else return yr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Q)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Mr,n,``)),t=Q}(a||n)&&this.props.push(t,n,a[t])},Pr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Fr=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(gr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=lr(),(!i||!i.isStart)&&!n[Q]&&(Pr(n),r.zOrigin&&n[Mr]&&(n[Mr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ir=function(e,t){var n={target:e,props:[],revert:Fr,save:Nr};return e._gsap||nr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Lr,Rr=function(e,t){var n=ir.createElementNS?ir.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):ir.createElement(e);return n&&n.style?n:ir.createElement(e)},zr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(gr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Vr(n)||n,1)||``},Br=`O,Moz,ms,Ms,Webkit`.split(`,`),Vr=function(e,t,n){var r=(t||sr).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Br[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Br[i]:``)+e},Hr=function(){ur()&&window.document&&(rr=window,ir=rr.document,ar=ir.documentElement,sr=Rr(`div`)||{style:{}},Rr(`div`),Q=Vr(Q),Mr=Q+`Origin`,sr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Lr=!!Vr(`perspective`),lr=nr.core.reverting,or=1)},Ur=function(e){var t=e.ownerSVGElement,n=Rr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),ar.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),ar.removeChild(n),i},Wr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Gr=function(e){var t,n;try{t=e.getBBox()}catch{t=Ur(e),n=1}return t&&(t.width||t.height)||n||(t=Ur(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wr(e,[`x`,`cx`,`x1`])||0,y:+Wr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Kr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Gr(e))},qr=function(e,t){if(t){var n=e.style,r;t in dr&&t!==Mr&&(t=Q),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(gr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,r,i,a){var o=new Hn(e._pt,t,n,0,1,a?Tr:wr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Yr={deg:1,rad:1,turn:1},Xr={grid:1,flex:1},Zr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=sr.style,c=_r.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Yr[i]||Yr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Kr(t),(p||o===`%`)&&(dr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],G(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===ir||!h.appendChild)&&(h=ir.body),g=h._gsap,g&&p&&g.width&&c&&g.time===$t.time&&!g.uncache)return G(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:qr(t,n)}else(p||o===`%`)&&!Xr[zr(h,`display`)]&&(s.position=zr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(sr),m=sr[u],h.removeChild(sr),s.position=`absolute`;return c&&p&&(g=ke(h),g.time=$t.time,g.width=h[u]),G(f?m*a/d:m&&a?d/m*a:0)},Qr=function(e,t,n,r){var i;return or||Hr(),t in yr&&t!==`transform`&&(t=yr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),dr[t]&&t!==`transform`?(i=ui(e,r),i=t===`transformOrigin`?i.svg?i.origin:di(zr(e,Mr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=ri[t]&&ri[t](e,t,n)||zr(e,t)||Ae(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Zr(e,t,i,n)+n:i},$r=function(e,t,n,r){if(!n||n===`none`){var i=Vr(t,e,1),a=i&&zr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=zr(e,`borderTopColor`))}var o=new Hn(this._pt,e.style,t,0,1,In),s=0,c=0,l,u,d,f,p,m,h,g,_,v,b,x;if(o.b=n,o.e=r,n+=``,r+=``,r===`auto`&&(m=e.style[t],e.style[t]=r,r=zr(e,t)||r,m?e.style[t]=m:qr(e,t)),l=[n,r],Zt(l),n=l[0],r=l[1],d=n.match(ne)||[],x=r.match(ne)||[],x.length){for(;u=ne.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,b=m.substr((f+``).length),h.charAt(1)===`=`&&(h=Me(f,h)+b),g=parseFloat(h),v=h.substr((g+``).length),s=ne.lastIndex-v.length,v||(v=v||y.units[t]||b,s===r.length&&(r+=v,o.e+=v)),b!==v&&(f=Zr(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Tr:wr;return H.test(r)&&(o.e=0),this._pt=o,o},ei={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},ti=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ei[n]||n,t[1]=ei[r]||r,t.join(` `)},ni=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],dr[o]&&(s=1,o=o===`transformOrigin`?Mr:Q),qr(n,o);s&&(qr(n,Q),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ui(n,1),a.uncache=1,Pr(r)))}},ri={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Hn(e._pt,t,n,0,0,ni);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},ii=[1,0,0,1,0,0],ai={},oi=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},si=function(e){var t=zr(e,Q);return oi(t)?ii:t.substr(7).match(te).map(G)},ci=function(e,t){var n=e._gsap||ke(e),r=e.style,i=si(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?ii:i):(i===ii&&!e.offsetParent&&e!==ar&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ar.appendChild(e)),i=si(e),s?r.display=s:qr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ar.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},li=function(e,t,n,r,i,a){var o=e._gsap,s=i||ci(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==ii&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Gr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Mr]=`0px 0px`,a&&(Jr(a,o,`xOrigin`,c,y),Jr(a,o,`yOrigin`,l,b),Jr(a,o,`xOffset`,u,o.xOffset),Jr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ui=function(e,t){var n=e._gsap||new mn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=zr(e,Mr)||`0`,l=u=d=m=h=g=_=v=b=0,u,d,f=p=1,p,m,h,g,_,v,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;return n.svg=!!(e.getCTM&&Kr(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Q]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Q]===`none`?``:s[Q])),r.scale=r.rotate=r.translate=`none`),C=ci(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),li(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==ii&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],u=M=C[5],C.length===6?(f=Math.sqrt(D*D+O*O),p=Math.sqrt(A*A+k*k),m=D||O?mr(O,D)*fr:0,_=k||A?mr(k,A)*fr+m:0,_&&(p*=Math.abs(Math.cos(_*pr))),n.svg&&(l-=x-(x*D+S*k),u-=S-(x*O+S*A))):(V=C[6],z=C[7],I=C[8],L=C[9],R=C[10],B=C[11],l=C[12],u=C[13],d=C[14],w=mr(V,R),h=w*fr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+L*E,F=V*T+R*E,I=j*-E+I*T,L=M*-E+L*T,R=V*-E+R*T,B=z*-E+B*T,j=N,M=P,V=F),w=mr(-k,R),g=w*fr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-L*E,F=k*T-R*E,B=A*E+B*T,D=N,O=P,k=F),w=mr(O,D),m=w*fr,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=G(Math.sqrt(D*D+O*O+k*k)),p=G(Math.sqrt(M*M+V*V)),w=mr(j,M),_=Math.abs(w)>2e-4?w*fr:0,b=B?1/(B<0?-B:B):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!oi(zr(e,Q)),N&&e.setAttribute(`transform`,N))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=G(f),n.scaleY=G(p),n.rotation=G(m)+o,n.rotationX=G(h)+o,n.rotationY=G(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Mr]=di(c)),n.xOffset=n.yOffset=0,n.force3D=y.force3D,n.renderTransform=n.svg?vi:Lr?_i:pi,n.uncache=0,n},di=function(e){return(e=e.split(` `))[0]+` `+e[1]},fi=function(e,t,n){var r=q(t);return G(parseFloat(t)+parseFloat(Zr(e,`x`,n+`px`,r)))+r},pi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,_i(e,t)},mi=`0deg`,hi=`0px`,gi=`) `,_i=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==mi||l!==mi)){var x=parseFloat(l)*pr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*pr,w=Math.cos(x),a=fi(_,a,S*w*-v),o=fi(_,o,-Math.sin(x)*-v),s=fi(_,s,C*w*-v+v)}h!==hi&&(y+=`perspective(`+h+gi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==hi||o!==hi||s!==hi)&&(y+=s!==hi||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+gi),c!==mi&&(y+=`rotate(`+c+gi),l!==mi&&(y+=`rotateY(`+l+gi),u!==mi&&(y+=`rotateX(`+u+gi),(d!==mi||f!==mi)&&(y+=`skew(`+d+`, `+f+gi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+gi),_.style[Q]=y||`translate(0, 0)`},vi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=pr,c*=pr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=pr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=G(b),x=G(x),S=G(S),C=G(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Zr(f,`x`,a,`px`),y=Zr(f,`y`,o,`px`)),(p||m||h||g)&&(v=G(v+p-(p*b+m*S)+h),y=G(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=G(v+r/100*w.width),y=G(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Q]=w)},yi=function(e,t,n,r,i){var a=360,o=M(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?fr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*hr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*hr)%a-~~(s/a)*a)),e._pt=u=new Hn(e._pt,t,n,r,s,xr),u.e=c,u.u=`deg`,e._props.push(n),u},bi=function(e,t){for(var n in t)e[n]=t[n];return e},xi=function(e,t,n){var r=bi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Q]=t,o=ui(n,1),qr(n,Q),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Q],a[Q]=t,o=ui(n,1),a[Q]=c),dr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=q(c),p=q(l),u=f===p?parseFloat(c):Zr(n,s,c,p),d=parseFloat(l),e._pt=new Hn(e._pt,o,s,u,d-u,br),e._pt.u=p||0,e._props.push(s));bi(o,r)};je(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});ri[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Qr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Si={name:`css`,register:Hr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,b,x,S,C,w;for(m in or||Hr(),this.styles=this.styles||Ir(e),w=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Ce[m]&&yn(m,t,n,r,e,i)))){if(f=typeof l,p=ri[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Ft(l)),p)p(this,e,m,l,n)&&(C=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Yt.lastIndex=0,Yt.test(c)||(h=q(c),g=q(l)),g?h!==g&&(c=Zr(e,m,c,g)+g):h&&(l+=h),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),w.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],M(c)&&~c.indexOf(`random(`)&&(c=Ft(c)),q(c+``)||c===`auto`||(c+=y.units[m]||q(Qr(e,m))||``),(c+``).charAt(1)===`=`&&(c=Qr(e,m))):c=Qr(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in yr&&(m===`autoAlpha`&&(d===1&&Qr(e,`visibility`)===`hidden`&&u&&(d=0),w.push(`visibility`,0,o.visibility),Jr(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=yr[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in dr,v){if(this.styles.save(m),b||(x=e._gsap,x.renderTransform&&!t.parseTransform||ui(e,t.parseTransform),S=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Hn(this._pt,o,Q,0,1,x.renderTransform,x,0,-1),b.dep=1),m===`scale`)this._pt=new Hn(this._pt,x,`scaleY`,x.scaleY,(_?Me(x.scaleY,_+u):u)-x.scaleY||0,br),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){w.push(Mr,0,o[Mr]),l=ti(l),x.svg?li(e,l,0,S,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==x.zOrigin&&Jr(this,x,`zOrigin`,x.zOrigin,g),Jr(this,o,m,di(c),di(l)));continue}else if(m===`svgOrigin`){li(e,l,1,S,0,this);continue}else if(m in ai){yi(this,x,m,d,_?Me(d,_+l):l);continue}else if(m===`smoothOrigin`){Jr(this,x,`smooth`,x.smooth,l);continue}else if(m===`force3D`){x[m]=l;continue}else if(m===`transform`){xi(this,l,e);continue}}else m in o||(m=Vr(m)||m);if(v||(u||u===0)&&(d||d===0)&&!vr.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=q(l)||(m in y.units?y.units[m]:h),h!==g&&(d=Zr(e,m,c,g)),this._pt=new Hn(this._pt,v?x:o,m,d,(_?Me(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Cr:br),this._pt.u=g||0,h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Sr);else if(m in o)$r.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){fe(m,l);continue}v||(m in o?w.push(m,0,o[m]):typeof e[m]==`function`?w.push(m,2,e[m]()):w.push(m,1,c||e[m])),a.push(m)}}C&&Vn(this)},render:function(e,t){if(t.tween._time||!lr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qr,aliases:yr,getSetter:function(e,t,n){var r=yr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in dr&&t!==Mr&&(e._gsap.x||Qr(e,`x`))?n&&cr===n?t===`scale`?kr:Or:(cr=n||{})&&(t===`scale`?Ar:jr):e.style&&!F(e.style[t])?Er:~t.indexOf(`-`)?Dr:Nn(e,t)},core:{_removeProperty:qr,_getMatrix:ci}};nr.utils.checkPrefix=Vr,nr.core.getStyleSaver=Ir,(function(e,t,n,r){var i=je(e+`,`+t+`,`+n,function(e){dr[e]=1});je(t,function(e){y.units[e]=`deg`,ai[e]=1}),yr[i[13]]=e+`,`+t,je(r,function(e){var t=e.split(`:`);yr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),je(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){y.units[e]=`px`}),nr.registerPlugin(Si);var Ci=nr.registerPlugin(Si)||nr;Ci.core.Tween;var wi=typeof document<`u`?g.useLayoutEffect:g.useEffect,Ti=e=>e&&!Array.isArray(e)&&typeof e==`object`,Ei=[],Di={},Oi=Ci,ki=(e,t=Ei)=>{let n=Di;Ti(e)?(n=e,e=null,t=`dependencies`in n?n.dependencies:Ei):Ti(t)&&(n=t,t=`dependencies`in n?n.dependencies:Ei),e&&typeof e!=`function`&&console.warn(`First parameter must be a function or config object`);let{scope:r,revertOnUpdate:i}=n,a=(0,g.useRef)(!1),o=(0,g.useRef)(Oi.context(()=>{},r)),s=(0,g.useRef)(e=>o.current.add(null,e)),c=t&&t.length&&!i;return c&&wi(()=>(a.current=!0,()=>o.current.revert()),Ei),wi(()=>{if(e&&o.current.add(e,r),!c||!a.current)return()=>o.current.revert()},t),{context:o.current,contextSafe:s.current}};ki.register=e=>{Oi=e},ki.headless=!0;var Ai=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,ji=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,Mi=Math.PI/180;180/Math.PI;var Ni=Math.sin,Pi=Math.cos,Fi=Math.abs,Ii=Math.sqrt,Li=function(e){return typeof e==`number`},Ri=1e5,zi=function(e){return Math.round(e*Ri)/Ri||0};function Bi(e,t,n,r,i,a,o){for(var s=e.length,c,l,u,d,f;--s>-1;)for(c=e[s],l=c.length,u=0;u<l;u+=2)d=c[u],f=c[u+1],c[u]=d*t+f*r+a,c[u+1]=d*n+f*i+o;return e._dirty=1,e}function Vi(e,t,n,r,i,a,o,s,c){if(!(e===s&&t===c)){n=Fi(n),r=Fi(r);var l=i%360*Mi,u=Pi(l),d=Ni(l),f=Math.PI,p=f*2,m=(e-s)/2,h=(t-c)/2,g=u*m+d*h,_=-d*m+u*h,v=g*g,y=_*_,b=v/(n*n)+y/(r*r);b>1&&(n=Ii(b)*n,r=Ii(b)*r);var x=n*n,S=r*r,C=(x*S-x*y-S*v)/(x*y+S*v);C<0&&(C=0);var w=(a===o?-1:1)*Ii(C),T=w*(n*_/r),E=w*-(r*g/n),D=(e+s)/2,O=(t+c)/2,k=D+(u*T-d*E),A=O+(d*T+u*E),j=(g-T)/n,M=(_-E)/r,N=(-g-T)/n,P=(-_-E)/r,F=j*j+M*M,I=(M<0?-1:1)*Math.acos(j/Ii(F)),L=(j*P-M*N<0?-1:1)*Math.acos((j*N+M*P)/Ii(F*(N*N+P*P)));isNaN(L)&&(L=f),!o&&L>0?L-=p:o&&L<0&&(L+=p),I%=p,L%=p;var R=Math.ceil(Fi(L)/(p/4)),z=[],B=L/R,V=4/3*Ni(B/2)/(1+Pi(B/2)),ee=u*n,te=d*n,ne=d*-r,re=u*r,H;for(H=0;H<R;H++)i=I+H*B,g=Pi(i),_=Ni(i),j=Pi(i+=B),M=Ni(i),z.push(g-V*_,_+V*g,j+V*M,M-V*j,j,M);for(H=0;H<z.length;H+=2)g=z[H],_=z[H+1],z[H]=g*ee+_*ne+k,z[H+1]=g*te+_*re+A;return z[H-2]=s,z[H-1]=c,z}}function Hi(e){var t=(e+``).replace(ji,function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t}).match(Ai)||[],n=[],r=0,i=0,a=2/3,o=t.length,s=0,c=`ERROR: malformed path: `+e,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=function(e,t,n,r){v=(n-e)/3,y=(r-t)/3,h.push(e+v,t+y,n-v,r-y,n,r)};if(!e||!isNaN(t[0])||isNaN(t[1]))return console.log(c),n;for(l=0;l<o;l++)if(x=p,isNaN(t[l])?(p=t[l].toUpperCase(),m=p!==t[l]):l--,d=+t[l+1],f=+t[l+2],m&&(d+=r,f+=i),l||(g=d,_=f),p===`M`)h&&(h.length<8?--n.length:s+=h.length),r=g=d,i=_=f,h=[d,f],n.push(h),l+=2,p=`L`;else if(p===`C`)h||=[0,0],m||(r=i=0),h.push(d,f,r+t[l+3]*1,i+t[l+4]*1,r+=t[l+5]*1,i+=t[l+6]*1),l+=6;else if(p===`S`)v=r,y=i,(x===`C`||x===`S`)&&(v+=r-h[h.length-4],y+=i-h[h.length-3]),m||(r=i=0),h.push(v,y,d,f,r+=t[l+3]*1,i+=t[l+4]*1),l+=4;else if(p===`Q`)v=r+(d-r)*a,y=i+(f-i)*a,m||(r=i=0),r+=t[l+3]*1,i+=t[l+4]*1,h.push(v,y,r+(d-r)*a,i+(f-i)*a,r,i),l+=4;else if(p===`T`)v=r-h[h.length-4],y=i-h[h.length-3],h.push(r+v,i+y,d+(r+v*1.5-d)*a,f+(i+y*1.5-f)*a,r=d,i=f),l+=2;else if(p===`H`)w(r,i,r=d,i),l+=1;else if(p===`V`)w(r,i,r,i=d+(m?i-r:0)),l+=1;else if(p===`L`||p===`Z`)p===`Z`&&(d=g,f=_,h.closed=!0),(p===`L`||Fi(r-d)>.5||Fi(i-f)>.5)&&(w(r,i,d,f),p===`L`&&(l+=2)),r=d,i=f;else if(p===`A`){if(S=t[l+4],C=t[l+5],v=t[l+6],y=t[l+7],u=7,S.length>1&&(S.length<3?(y=v,v=C,u--):(y=C,v=S.substr(2),u-=2),C=S.charAt(1),S=S.charAt(0)),b=Vi(r,i,+t[l+1],+t[l+2],+t[l+3],+S,+C,(m?r:0)+v*1,(m?i:0)+y*1),l+=u,b)for(u=0;u<b.length;u++)h.push(b[u]);r=h[h.length-2],i=h[h.length-1]}else console.log(c);return l=h.length,l<6?(n.pop(),l=0):h[0]===h[l-2]&&h[1]===h[l-1]&&(h.closed=!0),n.totalPoints=s+l,n}function Ui(e){Li(e[0])&&(e=[e]);var t=``,n=e.length,r,i,a,o;for(i=0;i<n;i++){for(o=e[i],t+=`M`+zi(o[0])+`,`+zi(o[1])+` C`,r=o.length,a=2;a<r;a++)t+=zi(o[a++])+`,`+zi(o[a++])+` `+zi(o[a++])+`,`+zi(o[a++])+` `+zi(o[a++])+`,`+zi(o[a])+` `;o.closed&&(t+=`z`)}return t}var Wi,Gi,Ki=function(){return Wi||typeof window<`u`&&(Wi=window.gsap)&&Wi.registerPlugin&&Wi},qi=function(){Wi=Ki(),Wi?(Wi.registerEase(`_CE`,na.create),Gi=1):console.warn(`Please gsap.registerPlugin(CustomEase)`)},Ji=0x56bc75e2d63100000,Yi=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Xi=1,Zi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Qi=/[cLlsSaAhHvVtTqQ]/g,$i=function(e){var t=e.length,n=Ji,r;for(r=1;r<t;r+=6)+e[r]<n&&(n=+e[r]);return n},ea=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var r=e[0]*-1,i=-n,a=e.length,o=1/(+e[a-2]+r),s=-t||(Math.abs(e[a-1]-+e[1])<.01*(e[a-2]-+e[0])?$i(e)+i:+e[a-1]+i),c;for(s=s?1/s:-o,c=0;c<a;c+=2)e[c]=(+e[c]+r)*o,e[c+1]=(+e[c+1]+i)*s},ta=function e(t,n,r,i,a,o,s,c,l,u,d){var f=(t+r)/2,p=(n+i)/2,m=(r+a)/2,h=(i+o)/2,g=(a+s)/2,_=(o+c)/2,v=(f+m)/2,y=(p+h)/2,b=(m+g)/2,x=(h+_)/2,S=(v+b)/2,C=(y+x)/2,w=s-t,T=c-n,E=Math.abs((r-s)*T-(i-c)*w),D=Math.abs((a-s)*T-(o-c)*w),O;return u||(u=[{x:t,y:n},{x:s,y:c}],d=1),u.splice(d||u.length-1,0,{x:S,y:C}),(E+D)*(E+D)>l*(w*w+T*T)&&(O=u.length,e(t,n,f,p,v,y,S,C,l,u,d),e(S,C,b,x,g,_,s,c,l,u,d+1+(u.length-O))),u},na=function(){function e(e,t,n){Gi||qi(),this.id=e,Xi&&this.setData(t,n)}var t=e.prototype;return t.setData=function(e,t){t||={},e||=`0,0,1,1`;var n=e.match(Zi),r=1,i=[],a=[],o=t.precision||1,s=o<=1,c,l,u,d,f,p,m,h,g;if(this.data=e,(Qi.test(e)||~e.indexOf(`M`)&&e.indexOf(`C`)<0)&&(n=Hi(e)[0]),c=n.length,c===4)n.unshift(0,0),n.push(1,1),c=8;else if((c-2)%6)throw`Invalid CustomEase`;for((+n[0]!=0||+n[c-2]!=1)&&ea(n,t.height,t.originY),this.segment=n,d=2;d<c;d+=6)l={x:+n[d-2],y:+n[d-1]},u={x:+n[d+4],y:+n[d+5]},i.push(l,u),ta(l.x,l.y,+n[d],+n[d+1],+n[d+2],+n[d+3],u.x,u.y,1/(o*2e5),i,i.length-1);for(c=i.length,d=0;d<c;d++)m=i[d],h=i[d-1]||m,(m.x>h.x||h.y!==m.y&&h.x===m.x||m===h)&&m.x<=1?(h.cx=m.x-h.x,h.cy=m.y-h.y,h.n=m,h.nx=m.x,s&&d>1&&Math.abs(h.cy/h.cx-i[d-2].cy/i[d-2].cx)>2&&(s=0),h.cx<r&&(h.cx?r=h.cx:(h.cx=.001,d===c-1&&(h.x-=.001,r=Math.min(r,.001),s=0)))):(i.splice(d--,1),c--);if(c=1/r+1|0,f=1/c,p=0,m=i[0],s){for(d=0;d<c;d++)g=d*f,m.nx<g&&(m=i[++p]),l=m.y+(g-m.x)/m.cx*m.cy,a[d]={x:g,cx:f,y:l,cy:0,nx:9},d&&(a[d-1].cy=l-a[d-1].y);p=i[i.length-1],a[c-1].cy=p.y-l,a[c-1].cx=p.x-a[a.length-1].x}else{for(d=0;d<c;d++)m.nx<d*f&&(m=i[++p]),a[d]=m;p<i.length-1&&(a[d-1]=i[i.length-2])}return this.ease=function(e){var t=a[e*c|0]||a[c-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},this.ease.custom=this,this.id&&Wi&&Wi.registerEase(this.id,this.ease),this},t.getSVGData=function(t){return e.getSVGData(this,t)},e.create=function(t,n,r){return new e(t,n,r).ease},e.register=function(e){Wi=e,qi()},e.get=function(e){return Wi.parseEase(e)},e.getSVGData=function(t,n){n||={};var r=n.width||100,i=n.height||100,a=n.x||0,o=(n.y||0)+i,s=Wi.utils.toArray(n.path)[0],c,l,u,d,f,p,m,h,g,_;if(n.invert&&(i=-i,o=0),typeof t==`string`&&(t=Wi.parseEase(t)),t.custom&&(t=t.custom),t instanceof e)c=Ui(Bi([t.segment],r,0,0,-i,a,o));else{for(c=[a,o],m=Math.max(5,(n.precision||1)*200),d=1/m,m+=2,h=5/m,g=Yi(a+d*r),_=Yi(o+t(d)*-i),l=(_-o)/(g-a),u=2;u<m;u++)f=Yi(a+u*d*r),p=Yi(o+t(u*d)*-i),(Math.abs((p-_)/(f-g)-l)>h||u===m-1)&&(c.push(g,_),l=(p-_)/(f-g)),g=f,_=p;c=`M`+c.join(`,`)}return s&&s.setAttribute(`d`,c),c},e}();na.version=`3.12.7`,na.headless=!0,Ki()&&Wi.registerPlugin(na);var $=n(),ra=()=>{let[e,t]=(0,g.useState)(0),[n,r]=(0,g.useState)(null);return(0,g.useEffect)(()=>{let e=window.scrollY,n=()=>{let n=window.scrollY;t(n),n>e?r(`down`):n<e&&r(`up`),e=n};return window.addEventListener(`scroll`,n),()=>{window.removeEventListener(`scroll`,n)}},[]),{scrollY:e,scrollDirection:n}},ia=aa;function aa(e,t,n){var r=null,i=null,a=function(){r&&=(clearTimeout(r),i=null,null)},o=function(){var e=i;a(),e&&e()},s=function(){if(!t)return e.apply(this,arguments);var o=this,s=arguments,c=n&&!r;if(a(),i=function(){e.apply(o,s)},r=setTimeout(function(){if(r=null,!c){var e=i;return i=null,e()}},t),c)return i()};return s.cancel=a,s.flush=o,s}var oa=()=>({emit(e,...t){for(let n=this.events[e]||[],r=0,i=n.length;r<i;r++)n[r](...t)},events:{},on(e,t){return(this.events[e]||=[]).push(t),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}}),sa=500;function ca(e){sa=e}function la({lazy:e=!1,debounce:t=sa,options:n={},callback:r=()=>{}}={},i=[]){let[a,o]=(0,g.useState)(),[s,c]=(0,g.useState)(),l=(0,g.useRef)(),u=(0,g.useRef)(r);u.current=r,(0,g.useEffect)(()=>{if(!a)return;let r=!0;function i(t){u.current(t),l.current=t,e||c(t)}let o=ia(i,t);function s(e){let t=e[0];t&&(r?i(t):o(t),r=!1)}let d=new ResizeObserver(s);return d.observe(a,n),()=>{d.disconnect()}},[a,t,e,JSON.stringify(n),...i]);let d=(0,g.useCallback)(()=>l.current,[]);return[o,e?d:s]}la.setDebounce=ca;var ua=500;function da(e){ua=e}function fa(e=ua){let[t,n]=(0,g.useState)(),[r,i]=(0,g.useState)(),[a,o]=(0,g.useState)();return(0,g.useEffect)(()=>{function t(){n(Math.min(window.innerWidth,document.documentElement.clientWidth)),i(Math.min(window.innerHeight,document.documentElement.clientHeight)),o(window.devicePixelRatio)}let r=ia(t,e);return window.addEventListener(`resize`,r,!1),t(),()=>{window.removeEventListener(`resize`,r,!1),r.cancel()}},[e]),{width:t,height:r,dpr:a}}fa.setDebounce=da;function pa(e){let[t,n]=(0,g.useState)();return(0,g.useEffect)(()=>{let t=window.matchMedia(e);function r(){n(t.matches)}return t.addEventListener(`change`,r,!1),r(),()=>t.removeEventListener(`change`,r,!1)},[e]),t}function ma(e){getComputedStyle(e).position===`sticky`&&(e.style.setProperty(`position`,`relative`),e.dataset.sticky=`true`),e.offsetParent&&ma(e.offsetParent)}function ha(e){e?.dataset?.sticky===`true`&&(e.style.removeProperty(`position`),delete e.dataset.sticky),e.parentNode&&ha(e.parentNode)}function ga(e,t=0){let n=t+e.offsetTop;return e.offsetParent?ga(e.offsetParent,n):n}function _a(e,t=0){let n=t+e.offsetLeft;return e.offsetParent?_a(e.offsetParent,n):n}function va(e,t=0){let n=t+(e?.scrollTop??0);return e.parentNode?va(e.parentNode,n):n}function ya(e,t=0){let n=t+(e?.scrollLeft??0);return e.parentNode?ya(e.parentNode,n):n}var ba=oa(),xa=500;function Sa(e){xa=e}function Ca({ignoreTransform:e=!1,ignoreSticky:t=!0,debounce:n=xa,lazy:r=!1,callback:i}={},a=[]){let[o,s]=(0,g.useState)(null),[c,l]=(0,g.useState)(null),u=(0,g.useRef)(i);u.current=i;let d=(0,g.useCallback)(({top:e,left:t,width:n,height:i,element:a})=>{if(e??=h.current.top,t??=h.current.left,n??=h.current.width,i??=h.current.height,a??=h.current.element,e===h.current.top&&t===h.current.left&&n===h.current.width&&i===h.current.height&&a===h.current.element)return;let o=e,s=t,c,l;e!==void 0&&i!==void 0&&(c=e+i),t!==void 0&&n!==void 0&&(l=t+n),h.current={...h.current,top:e,y:o,left:t,x:s,width:n,height:i,bottom:c,right:l,element:a},u.current?.(h.current),r||v(h.current)},[r,...a]),f=(0,g.useCallback)(()=>{if(!c||!o)return;let n,r;if(t&&ma(c),e)n=ga(c),r=_a(c);else{let e=c.getBoundingClientRect();n=e.top+va(o),r=e.left+ya(o)}t&&ha(c),d({top:n,left:r})},[c,t,e,o,d]),p=(0,g.useCallback)(()=>{if(!c)return;let e=c.getBoundingClientRect(),t=e.width,n=e.height;d({width:t,height:n})},[c,d]),m=(0,g.useCallback)(()=>{f(),p()},[f,p]),h=(0,g.useRef)({}),[_,v]=(0,g.useState)({});(0,g.useEffect)(()=>(h.current.resize=m,v(h.current),ba.on(`resize`,m)),[m]);let[y]=la({lazy:!0,debounce:n,callback:e=>{if(!e)return;let{inlineSize:t,blockSize:n}=e.borderBoxSize[0]??{};d({width:t,height:n})}},[c,r,d]),[b]=la({lazy:!0,debounce:n,callback:f},[f]);(0,g.useEffect)(()=>{b(e=>e&&e!==document.body?e:document.body),s(e=>e&&e!==document.body?e:document.body)},[b]);let x=(0,g.useCallback)(()=>h.current,[]),S=(0,g.useCallback)(e=>{y(e),l(e),d({element:e})},[y,d]),C=(0,g.useCallback)(e=>{b(e),s(e)},[b]);return[S,r?x:_,C]}Ca.resize=()=>ba.emit(`resize`),Ca.setDebounce=Sa;var wa={breakpoints:{mobileSmall:`469px`,mobile:`1025px`,desktopLarge:`1441px`}};function Ta(){let e=parseInt(wa.breakpoints.mobile.replace(`px`,``),10),t=parseInt(wa.breakpoints.desktopLarge.replace(`px`,``),10),n=parseInt(wa.breakpoints.mobileSmall.replace(`px`,``),10),r=pa(`(max-width: ${e-1}px)`),i=pa(`(max-width: ${n-1}px)`),a=pa(`(max-width: ${t}px)`),o=pa(`(min-width: ${e}px)`),s=pa(`(min-width: ${t-1}px)`),c=!1;return{isMobile:r,isMobileSmall:i,isDesktop:o,isDesktopS:a,isDesktopL:s,isReducedMotion:c,isWebGL:o&&!c}}function Ea(e,t,n=!1){let r=null,i=null,a=function(){r&&=(clearTimeout(r),i=null,null)},o=function(){let e=i;a(),e&&e()},s=function(...o){if(!t){e.apply(this,o);return}let s=n&&!r;a(),i=()=>e.apply(this,o),r=setTimeout(()=>{r=null,!s&&i&&(i(),i=null)},t),s&&i&&i()};return s.cancel=a,s.flush=o,s}function Da(e=500){let[t,n]=(0,g.useState)(0),[r,i]=(0,g.useState)(0);return(0,g.useEffect)(()=>{let t=Ea(()=>{n(Math.min(window.innerWidth,document.documentElement.clientWidth)),i(Math.min(window.innerHeight,document.documentElement.clientHeight))},e,!0);return window.addEventListener(`resize`,t,!1),t(),()=>window.removeEventListener(`resize`,t,!1)},[e]),{width:t,height:r}}function Oa(){let[e,t]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{t((()=>{let e=typeof navigator>`u`?``:navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)})())},[]),e}var ka=`_container_1vxje_1`,Aa=({children:e,className:t,id:n,...r})=>(0,$.jsx)(`div`,{className:i(ka,`container`,t),id:n,...r,"data-sentry-component":`Container`,"data-sentry-source-file":`Container.tsx`,children:e}),ja=({svgClassName:e=`fill-current`,...t})=>(0,$.jsx)(d,{...t,href:`/`,ariaLabel:"Agimon: Back to homepage","data-sentry-element":`LinkComponent`,"data-sentry-component":`HeaderLogo`,"data-sentry-source-file":`HeaderLogo.tsx`,children:(0,$.jsx)(h,{width:82,height:28,className:e,"aria-hidden":`true`,"data-sentry-element":`LogoHeader`,"data-sentry-source-file":`HeaderLogo.tsx`})}),Ma=()=>{let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(null),i=(0,g.useCallback)(e=>{if(e){let t=document.getElementById(e);t&&r(t)}t(!0)},[]),a=(0,g.useCallback)(()=>{t(!1)},[]);return(0,g.useEffect)(()=>{let t=0,r=0,i=e=>{if(n){let i=n,a=i.scrollTop,o=i.scrollHeight,s=i.offsetHeight,c=a<=1,l=a>=o-s-1,u=i.contains(e.target),d;if(e instanceof WheelEvent)d=e.deltaY>0?`down`:`up`;else if(e instanceof TouchEvent){let n=e.touches[0].clientY;d=n>t?`up`:`down`,t=n}else d=a>r?`down`:`up`,r=a;u?(c&&d===`up`||l&&d===`down`)&&e.preventDefault?.():e.preventDefault?.()}else e.preventDefault?.()},a=e=>{t=e.touches[0].clientY},o=()=>{document.body.style.overflow=`hidden`,document.body.style.touchAction=`none`},s=()=>{document.body.style.overflow=``,document.body.style.touchAction=``};return e?(o(),window.addEventListener(`wheel`,i,{passive:!1}),window.addEventListener(`touchstart`,a,{passive:!1}),window.addEventListener(`touchmove`,i,{passive:!1}),window.addEventListener(`scroll`,i,{passive:!1})):(s(),window.removeEventListener(`wheel`,i),window.removeEventListener(`touchstart`,a),window.removeEventListener(`touchmove`,i),window.removeEventListener(`scroll`,i)),()=>{s(),window.removeEventListener(`wheel`,i),window.removeEventListener(`touchstart`,a),window.removeEventListener(`touchmove`,i),window.removeEventListener(`scroll`,i)}},[e,n]),{disableScrollListener:i,enableScrollListener:a}},Na=`_wrapper_182hz_1`,Pa=`_innerWrapper_182hz_14`,Fa=`_content_182hz_21`,Ia=`_container_182hz_36`,La=`_mainList_182hz_44`,Ra=`_mainItem_182hz_48`,za=`_menuLink_182hz_79`,Ba=`_footer_182hz_116`,Va=({data:e=[],open:t=!1,hideContactSales:n=!1,onNavigate:agimonNavigate})=>{let{disableScrollListener:r,enableScrollListener:a}=Ma(),s=p();return(0,g.useEffect)(()=>(r(`SubmenuMobile-scroller`),()=>a()),[r,a]),ki(()=>{Ci.fromTo(`.${Na}`,{maxHeight:`0dvh`},{maxHeight:`100dvh`,duration:.8,ease:`expo.out`})},[]),(0,$.jsx)(`div`,{className:i(Na,t&&`_open_182hz_53`),"data-sentry-component":`SubmenuMobile`,"data-sentry-source-file":`SubmenuMobile.tsx`,children:(0,$.jsxs)(`div`,{className:Pa,children:[(0,$.jsx)(`div`,{className:Fa,children:(0,$.jsx)(Aa,{className:Ia,id:`SubmenuMobile-scroller`,"data-sentry-element":`Container`,"data-sentry-source-file":`SubmenuMobile.tsx`,children:(0,$.jsxs)(`ul`,{className:La,children:[e.map(({label:e,href:t},n)=>(0,$.jsx)(`li`,{className:i(Ra),children:t?(0,$.jsx)(d,{href:t,reloadDocument:!0,onClick:agimonNavigate,className:za,children:agimonHeaderLabel(e)}):(0,$.jsx)(`span`,{className:za,children:agimonHeaderLabel(e)})},n))]})})}),(0,$.jsx)(`div`,{className:Ba,children:(0,$.jsx)(Aa,{children:(0,$.jsx)(u,{href:`#get-demo`,reloadDocument:!0,"aria-haspopup":`dialog`,onClick:agimonNavigate,themeColor:`black`,children:agimonHeaderLabel(`Get a demo`)})})})]})})},Ha=`_header_1ctqk_2`,Ua=`_mainNavBg_1ctqk_38`,Wa=`_navLink_1ctqk_41`,Ga=`_columnLeft_1ctqk_44`,Ka=`_logo_1ctqk_44`,qa=`_link_1ctqk_45`,Ja=`_columnRight_1ctqk_46`,Ya=`_preBurgerButton_1ctqk_50`,Xa=`_burgerButtonWrapper_1ctqk_60`,Za=`_backdrop_1ctqk_73`,Qa=`_submenu_1ctqk_77`,$a=`_burgerButton_1ctqk_60`,eo=`_buttons_1ctqk_104`,to=`_skipToMainContent_1ctqk_108`,no=`_container_1ctqk_122`,ro=`_mainNavBgDefault_1ctqk_127`,io=`_grid_1ctqk_179`,ao=`_content_1ctqk_211`,oo=`_links_1ctqk_291`,so=`_button_1ctqk_100`,co=`_submenuCard_1ctqk_502`,lo=`_submenuTextFooter_1ctqk_538`,uo=`_submenuText_1ctqk_538`,fo=`_submenuInner_1ctqk_574`,po=`_submenuRow_1ctqk_581`,mo=`_submenuCol_1ctqk_592`,ho=`_submenuColText_1ctqk_597`,go=`_submenuCardHorizontal_1ctqk_624`,_o=`_submenuCardInner_1ctqk_655`,vo=`_sublink_1ctqk_680`,yo=`_submenuCardVertical_1ctqk_683`,bo=`_submenuColTextTitle_1ctqk_708`,xo=`_submenuNav_1ctqk_716`,So=`_submenuSideNav_1ctqk_720`,Co=`_smallDesktopOnly_1ctqk_779`,wo=`_largeDesktopOnly_1ctqk_788`,To=`_submenuProduct1_1ctqk_797`,Eo=`_shape_1ctqk_804`,Do=`_cardLogo_1ctqk_810`,Oo=`_submenuProduct2_1ctqk_816`,ko=`_submenuProduct3_1ctqk_823`,Ao=`_submenuProduct4_1ctqk_833`,jo=`_submenuCase1_1ctqk_843`,Mo=`_submenuCase2_1ctqk_844`,No=`_submenuCase3_1ctqk_845`,Po=`_holder_1ctqk_966`,Fo=`_cardLink_1ctqk_976`,Io=`_subtitle_1ctqk_989`;typeof window<`u`&&Ci.registerPlugin(na);var Lo=({index:e,open:t,fast:n,children:r})=>{let a=(0,g.useRef)(null),[,o]=(0,g.useState)(!1),[s,c]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{let e=a.current?.querySelectorAll(`a, button, input, textarea, select`)||[];if(t){setTimeout(()=>{c(!0)},5),a.current&&a.current.removeAttribute(`tabindex`);for(let t=0;t<e?.length;t++)(e?.[t]).removeAttribute(`tabindex`)}else{setTimeout(()=>{a.current?.removeAttribute(`tabindex`),c(!1)},1);for(let t=0;t<e?.length;t++)e?.[t].setAttribute(`tabindex`,`-1`)}},[t]),(0,g.useEffect)(()=>{o(!0)},[]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{id:`siteSubmenuLabel${e}`,className:`sr-only`,children:[`Submenu `,e]}),(0,$.jsx)(`div`,{ref:a,className:i(Qa,t&&`_submenuOpen_1ctqk_77`,s&&`_animateIn_1ctqk_34`,n&&`_fast_1ctqk_502`),id:`siteSubmenu${e}`,"aria-labelledby":`siteSubmenuLabel${e}`,role:`tabpanel`,children:(0,$.jsx)(Aa,{"data-sentry-element":`Container`,"data-sentry-source-file":`Submenu.tsx`,children:(0,$.jsx)(`div`,{className:fo,children:r})})})]})},Ro={entries:[{html:`<p>You can now save your brand’s colors, text styles, and easings to a Brand Kit and reuse them across every file in your workspace. Great for keeping brand colors and typography exact, giving all your animations the same feel with consistent easings, and helping new teammates stay on brand from their first file. Every plan comes with one Brand Kit, and Max, Ultra, and Enterprise users can create multiple kits.</p>
<p>Here’s how you can use Brand Kits:</p>
<ol>
<li>Open a file in your workspace.</li>
<li>In the <em>Design</em> tab, click a color or a text style, or switch to the <em>Animate</em> tab to choose an easing.</li>
<li>Click <em>+</em> to save the variable to your Brand Kit.</li>
<li>Use slash names like <em>Brand/Primary</em> or <em>Neutral/Gray 400</em> to sort your variables into groups.</li>
<li>Find everything you’ve saved in a dedicated folder in your workspace’s folder list.</li>
</ol>
<p>This is just the beginning of Brand Kits. We’re working on support for more token types (animation presets, components, and more) so your whole brand can live in one place. ✨</p>
<h2>Other improvements</h2>
<ul>
<li>Bulk font upload: Add multiple fonts to Jitter in one go by dragging and dropping font files, folders, or zip archives.</li>
<li>Custom frame rates: Specify the exact frame rate you need to match your video project rather than choosing only from presets.</li>
<li>Quicker timeline navigation: Snap the playhead to animation boundaries and double-click an animation to jump between its end and start.</li>
<li>Full-length video import: Imported videos are no longer trimmed to your scene’s duration.</li>
</ul>
`,fields:{date:`2026-11-10T00:00:00.000Z`,shortId:`2026-11-10`,slug:`2026-11-10-animated-brand-kits`},frontmatter:{title:`Brand Kits (beta)`,video:{name:`animated-brand-kits.mp4`,publicURL:`https://assets.jitter.video/animated-brand-kits.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now earn with Jitter through the <a href="https://jitter.video/partners">Jitter Partners program</a>: great for content creators, motion design educators, and designers building their own template collections.
Share Jitter with your audience or community and earn a 50% commission on every customer you refer, for 12 months.</p>
<p>Here’s how you can join the program:</p>
<ol>
<li>Head to the <a href="https://jitter.video/partners">application page</a>.</li>
<li>Fill in your details and add your website or social media.</li>
<li>Tell us how you plan to promote Jitter, whether that’s tutorials, posts, or your own animation templates.</li>
</ol>
<p>From there, we'll review your application. Once you're approved, you'll get a unique referral link you can start sharing with your audience right away.</p>
`,fields:{date:`2026-11-03T00:00:00.000Z`,shortId:`2026-11-03`,slug:`2026-11-03-jitter-affiliate-program`},frontmatter:{title:`Jitter Partners`,video:{name:`jitter-affiliate-program.mp4`,publicURL:`https://assets.jitter.video/jitter-affiliate-program.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now explore multiple creative directions with AI Brainstorm in a single click: great for kicking off a new project, finding the right motion style for a brand, or comparing concepts before committing to one.</p>
<p>Here’s how to brainstorm several directions in parallel:</p>
<ol>
<li>Select your scene, click on the ✨ icon in the top right corner, and select <em>Brainstorm</em>.</li>
<li>When it suggests creative directions in the chat, select several at once — or type your own.</li>
<li>Click <em>Continue</em>, and you'll get a separate animation for each direction you chose.</li>
</ol>
<p>That's it! From here, you'll be able to explore a range of possibilities upfront, compare ideas side by side, and keep developing the one that fits your creative vision best.</p>
<h2>Other improvements</h2>
<ul>
<li>More export frame rates: You can now export at 23.976, 24, and 29.97 FPS. This lets you match your project’s frame rate so that Jitter animations drop straight into your video edits without stutter or dropped frames.</li>
<li>Faster rendering for layered effects: Files that combine blend modes, blur, or glass effects with opacity or shadows now render much faster than before.</li>
<li>A steadier playhead: The playhead now stays put when you select animations, so you don’t lose your place in the timeline. You can also snap animations to it while dragging, making it easier to time things to an exact moment.</li>
</ul>
`,fields:{date:`2026-10-28T00:00:00.000Z`,shortId:`2026-10-28`,slug:`2026-10-28-multi-brainstorm`},frontmatter:{title:`Multi-brainstorm`,video:{name:`multi-brainstorm.mp4`,publicURL:`https://assets.jitter.video/multi-brainstorm.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now use Jitter in your AI tool of choice with the Jitter MCP and produce animated content end to end without leaving your AI assistant. Create new files with a prompt, design and animate them from scratch, then adapt your designs to every size and language you need.</p>
<p>Here’s how to set up the Jitter MCP:</p>
<ol>
<li>Copy the server URL: <code>https://mcp.jitter.video</code>.</li>
<li>Add it as a custom connector in your AI tool: <a href="https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp#h_3d1a65aded">Claude</a>, <a href="https://developers.openai.com/api/docs/guides/custom-mcp-server#connect-a-custom-mcp-server">ChatGPT</a>, <a href="https://www.notion.com/help/mcp-connections-for-custom-agents">Notion</a>, or any other platform that supports custom MCP connectors.</li>
<li>Sign in with your Jitter account when prompted.</li>
<li>Start creating right in the chat!</li>
</ol>
<p>Not sure where to begin? Here are a few things you can try:</p>
<ul>
<li>Go from brief to content: “Using the launch brief we just worked on, create 3 animated social posts in Jitter.”</li>
<li>Scale your campaigns: “Create 5 variations of this campaign with different headlines and calls to action.”</li>
<li>Create on-brand content: “Use our brand guidelines to create an animated announcement for our new feature.”</li>
<li>Repurpose designs for every format: “Adapt my product launch animation into square, vertical and widescreen formats.”</li>
<li>Iterate on existing work: “Find my Launch Campaign file and make the animations more dynamic.”</li>
</ul>
<p>Everything the MCP creates or edits is a native Jitter file, so you can always open it and fine-tune your animations by hand.</p>
<p>The Jitter MCP is in beta, so we’d love your feedback. Exporting, workspace actions, and one-click Claude and ChatGPT connectors are on the way.</p>
`,fields:{date:`2026-10-20T00:00:00.000Z`,shortId:`2026-10-20`,slug:`2026-10-20-jitter-mcp`},frontmatter:{title:`Jitter MCP`,video:{name:`jitter-mcp.mp4`,publicURL:`https://assets.jitter.video/jitter-mcp.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now choose between <em>Balanced</em> and <em>Smart</em> modes in AI chat: great for getting the most out of your credits, whether you’re making quick tweaks or building complex animations.</p>
<ul>
<li><em>Balanced</em> (powered by Claude Sonnet 5.5) is fast and credit-efficient. It's perfect for everyday tasks like adjusting timing, swapping text, and fine-tuning animations.</li>
<li><em>Smart</em> (powered by Claude Opus 5.5) is our most capable mode. Use it for complex, multi-step requests like building a full animation sequence from scratch. It uses around twice as many credits as <em>Balanced</em>.</li>
</ul>
<p>By default, Jitter uses the <em>Balanced</em> mode. Here's how you can switch between the modes:</p>
<ol>
<li>Click on the ✨ icon in the top right corner of your scene and select <em>Open chat</em>.</li>
<li>At the bottom of the chat, click on <em>Balanced</em> and drag the slider all the way to the right to switch to <em>Smart</em>.</li>
</ol>
<p>Stick with <em>Balanced</em> for quick edits, and use <em>Smart</em> when you need extra power. You can switch back anytime.</p>
<h2>Other improvements</h2>
<ul>
<li>Floating toolbar: Get quick access to key actions like the pen tool, media, and comments right on the canvas.</li>
<li>File search: Find any file fast with the search field at the top of the sidebar in your file list.</li>
<li>Aspect ratio lock: Click the lock next to the size fields in the right-hand panel to keep layers and artboards in proportion when resizing.</li>
<li>Easy artboard renames: Double-click an artboard’s label on the canvas to rename it.</li>
</ul>
`,fields:{date:`2026-10-14T00:00:00.000Z`,shortId:`2026-10-14`,slug:`2026-10-14-balanced-smart-ai-modes`},frontmatter:{title:`Balanced and Smart AI modes`,video:{name:`reasoning-level.mp4`,publicURL:`https://assets.jitter.video/reasoning-level.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter AI now uses Claude Opus 5.5, Anthropic’s latest model.</p>
<p>Opus 5.5 has a much stronger understanding of motion, making the Jitter AI better at creating transitions, sequencing elements, and building more ambitious animations from a prompt.</p>
<p>Unlike generating a finished video, Jitter AI creates the animation directly on the canvas.
Every layer, timing, easing, effect, and design element remains editable, so you can use AI to explore a direction quickly and then refine every detail until it fits your brand.</p>
<p>Claude Opus 5.5 now powers Jitter AI and AI Shaders. As part of the upgrade, generations also use around 25% fewer credits.</p>
<h2>Other improvements</h2>
<ul>
<li>Artboard variations: Ask Jitter AI for variations of a design and it will generate each one as a new artboard right on your canvas, neatly laid out next to your existing work.</li>
<li>Image-to-video in the composer: Previewing, tweaking the prompt, and generating image-to-video now all happen right in the AI chat composer.</li>
<li>No credits for failed generations: Image-to-video and background removal no longer use your credits when a generation fails on our end.</li>
<li>Rate AI responses: Give a 👍 or 👎 on Jitter AI's answers to help us make it better.</li>
<li>Search layers: Quickly find any layer in the layer list by name. Jitter selects it and zooms right to it.</li>
<li>Select related: Press <em>Cmd/Ctrl + Enter</em> (or right-click) to jump from a layer to its animations, or from animations back to their layers.</li>
<li>New mobile share view: Files opened on a phone now show a lightweight, scrollable viewer instead of the editor. On desktop, use the arrow keys to browse artboards and <em>Space</em> to play or pause.</li>
<li>Better Lottie exports: Resized shape layers (like lines that grow) now export correctly as animated Lottie paths.</li>
</ul>
`,fields:{date:`2026-10-01T00:00:00.000Z`,shortId:`2026-10-01`,slug:`2026-10-01-jitter-ai-opus-5-5`},frontmatter:{title:`Jitter AI: Opus 5.5`,video:{name:`jitter-ai-opus-5-5.mp4`,publicURL:`https://assets.jitter.video/jitter-ai-opus-5-5.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Components just got more flexible. You can now override individual instances of a component without breaking the connection to the rest.</p>
<p>Previously, if part of an instance came from a component, you couldn't make changes to it without updating the component itself. Now you can select that part and edit it directly (swap an asset, tweak text, change colors, etc.) Your change becomes an override on that instance, while everything else stays in sync with the component.</p>
<p>Here's how to use it:</p>
<ol>
<li>Select an instance of a component (or an element inside it) and make an edit: change color, text, or anything else you need.</li>
<li>That's it! Your edit becomes an override on that instance only, and the rest of your instances stay in sync with the component.</li>
</ol>
<p>Want to undo an override and snap back to the original? Right-click the instance in the layer list and hit <em>Reset instance</em>.</p>
<h2>Other improvements</h2>
<ul>
<li>Intelligence controls in AI Chat: You can now choose between <em>Economy</em>, <em>Balanced</em>, and <em>Smart</em> modes in AI chat to optimize credit usage depending on your use case.</li>
</ul>
`,fields:{date:`2026-08-18T00:00:00.000Z`,shortId:`2026-08-18`,slug:`2026-08-18-component-overrides`},frontmatter:{title:`Component overrides`,video:{name:`component-overrides.mp4`,publicURL:`https://assets.jitter.video/component-overrides.mp4`},videoHasAudio:!1,image:null}},{html:`<p><em>The Track</em> just got a sequel. We've added 6 new templates to the collection, built to help sport and fitness brands tease a drop, drum up hype before launch, or turn a single line of copy into something that moves.</p>
<p>Same bold, high-tempo energy as before, just more ways to use it. <a href="https://jitter.video/templates/the-track/">Try the new templates here</a>.</p>
`,fields:{date:`2026-08-11T00:00:00.000Z`,shortId:`2026-08-11`,slug:`2026-08-11-the-track-sport-templates`},frontmatter:{title:`Template collection: The Track 2.0`,video:{name:`the-track-sport-templates.mp4`,publicURL:`https://assets.jitter.video/the-track-sport-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter AI now uses 50% fewer credits on every plan. Anything you build in the AI chat now costs half the credits it used to, so you can create twice as much without changing how you work.</p>
<p>Whether you're creating custom effects with a prompt, translating a new campaign into multiple languages, or adapting your designs to several sizes, your existing credit balance now goes double the distance.</p>
`,fields:{date:`2026-08-04T00:00:00.000Z`,shortId:`2026-08-04`,slug:`2026-08-04-2x-ai-generations`},frontmatter:{title:`2× AI generations for everyone`,video:{name:`2x-AI-generations.mp4`,publicURL:`https://assets.jitter.video/2x-AI-generations.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today's template drop is built around color palettes. From punchy stacks to playful reveals, these templates are made for showcasing brand kits, style guides, and identity presentations with energy and structure. <a href="https://jitter.video/templates/color-palettes/">Explore the new collection here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>AI credit visibility: You can now check your remaining AI credits and their reset date in the AI chat or workspace settings.</li>
<li>Per-teammate AI credits: Each workspace member now gets their own AI credits, so one person doesn't use up the whole workspace's allowance.</li>
<li>Smoother AI chat handoff: When an agent is done with a task, the chat no longer grabs focus, so you can keep editing with shortcuts right away.</li>
</ul>
`,fields:{date:`2026-07-28T00:00:00.000Z`,shortId:`2026-07-28`,slug:`2026-07-28-color-palette-templates`},frontmatter:{title:`Template collection: Color palettes`,video:{name:`color-palette-templates.mp4`,publicURL:`https://assets.jitter.video/color-palette-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now generate hundreds of video variations at once with CSV import. Define your text and image overrides in a spreadsheet, drop it onto the canvas, and Jitter will create a scene for every row based on your original artboard.</p>
<ol>
<li>Right-click your scene and choose <em>Copy as</em> → <em>Download as CSV</em> to get a pre-filled template with your layer names as columns.</li>
<li>Fill in a row per variation. Text layers take the replacement copy directly, and image layers take a filename (images must sit in the same folder as the CSV).</li>
<li>Back in Jitter, make sure the scene you'd like to create variations for is selected.</li>
<li>Drag the CSV and images onto the canvas to generate the new scenes. If your file has any blank cells, Jitter will keep the original content for respective layers.</li>
</ol>
<p>Bulk Create is perfect for producing big ad campaigns, localized versions of your content, or any other type of animations at scale in a fraction of the time.</p>
<h2>Other improvements</h2>
<ul>
<li>Stock media in AI chat: Jitter AI can now search and pull in stock images and videos (via Pixabay and Pexels) right from the design chat. Simply describe the media you're looking for, and the agent will find it for you and add it to your scene.</li>
</ul>
`,fields:{date:`2026-07-21T00:00:00.000Z`,shortId:`2026-07-21`,slug:`2026-07-21-bulk-create-csv-import`},frontmatter:{title:`Bulk Create`,video:{name:`bulk-create.mp4`,publicURL:`https://assets.jitter.video/bulk-create.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now animate letter spacing on text: great for kinetic typography, emphasis reveals, and giving titles a bit more personality.</p>
<p>Here's how to use letter spacing animation:</p>
<ol>
<li>Select the text layer you'd like to animate.</li>
<li>Click <em>New Animation</em>, go to the <em>Custom</em> tab, and choose <em>Letter spacing</em>.</li>
<li>Set the <em>To</em> percentage to define the target spacing. Optionally, you can also set an <em>Initial value</em> to control where the animation starts.</li>
</ol>
<p>That's it! Now you have one more simple way to add rhythm and motion to your type.</p>
<h2>Other improvements</h2>
<ul>
<li>Hide timeline operations: Click the 👁️ icon next to an operation or group in the timeline to hide it from playback.</li>
</ul>
`,fields:{date:`2026-07-17T00:00:00.000Z`,shortId:`2026-07-17`,slug:`2026-07-17-letter-spacing-animations`},frontmatter:{title:`Letter spacing animations`,video:{name:`letter-spacing-16.10.mp4`,publicURL:`https://assets.jitter.video/letter-spacing-16.10.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now ask Jitter to create anything with Superagents. Great for remixing templates, animating complex scenes from scratch, or turning one asset into a full campaign with a variety of sizes, formats, and localized versions.</p>
<p>Here's how to use agents:</p>
<ol>
<li>Select a scene on the canvas and click the ✨ icon in the top right corner.</li>
<li>Pick a shortcut (like <em>Resize</em>, <em>Translate</em>, <em>Rename layers</em>, or <em>Clean up timeline</em>) for quick actions.</li>
<li>Or open AI chat and describe anything you want: from small design tweaks to complex animations.</li>
</ol>
<p>Everything you create with agents stays fully editable, so you can refine and iterate until it looks exactly the way you imagined.</p>
<p>When your animation is ready, ask Jitter for more sizes, formats, languages, or copy variations, and batch export everything in one click.</p>
`,fields:{date:`2026-07-09T00:00:00.000Z`,shortId:`2026-07-09`,slug:`2026-07-09-ai-agents`},frontmatter:{title:`Jitter AI: Superagents`,video:{name:`ai-agents.mp4`,publicURL:`https://assets.jitter.video/ai-agents.mp4`},videoHasAudio:!0,image:null}},{html:`<p>You can now add effects and shaders in Jitter in a click with the new <em>Effects</em> panel. A lot of the effects you've been seeing around lately (like distortion, 3D flips, dithering, fluted glass, and many more) are now readily available for you to use.</p>
<p>Here's where you can find them:</p>
<ol>
<li>Select the layer you'd like to apply an effect to, switch to the <em>Animate</em> tab, and click on <em>Effects</em>.</li>
<li>Browse the effects by category (<em>Distortion</em>, <em>Post FX</em>, and <em>Utility</em>) and click on a shader of your choice to use it.</li>
<li>Tweak the settings to dial it in exactly how you want.</li>
<li>Need something custom? Try <em>AI effect</em> at the top to generate your own unique effects with just a prompt.</li>
</ol>
<p>That's it: now you've got dozens of new ways to make your animations stand out, all built right in.</p>
<h2>Other improvements</h2>
<ul>
<li>Ultra plan: Jitter now offers a new pricing tier for high-volume, AI-heavy workflows, with 6x the AI credits of the Pro plan. Learn more about Jitter Ultra <a href="https://jitter.video/pricing/">here</a>.</li>
<li>Lottie stroke fix: Lottie exports now preserve your stroke caps and joins: the rounded corners and ends you set in Jitter come through exactly as designed.</li>
<li>Slide and Mask fix: The Slide and Mask text effect now plays sequentially instead of overlapping, so each line animates cleanly one after the other.</li>
</ul>
`,fields:{date:`2026-06-30T00:00:00.000Z`,shortId:`2026-06-30`,slug:`2026-06-30-effects-shaders`},frontmatter:{title:`Effects and shaders`,video:{name:`effects-shaders.mp4`,publicURL:`https://assets.jitter.video/effects-shaders.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Meet The Harvest: a set of 7 templates designed for modern food &#x26; drink brands. From logo reveals and animated product labels to kinetic type and packaging-inspired motion, these templates are a great starting point for social media content, ad campaigns, and elevated brand storytelling. <a href="https://jitter.video/templates/the-harvest/">Explore the new collection here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Template search: Our <a href="https://jitter.video/templates/">template gallery</a> is now searchable. Simply type what you're looking for and quickly find the template you need.</li>
</ul>
`,fields:{date:`2026-06-22T00:00:00.000Z`,shortId:`2026-06-22`,slug:`2026-06-22-the-harvest`},frontmatter:{title:`Template collection: The Harvest`,video:{name:`the-harvest.mp4`,publicURL:`https://assets.jitter.video/the-harvest.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now add background blur to any layer: great for readable text panels over busy imagery, frosted overlays, and adding depth to your scenes. Here's how to use background blur:</p>
<ol>
<li>Select a layer on the canvas.</li>
<li>In the <em>Design</em> tab, check the <em>Background blur</em> box.</li>
<li>Set the <em>Radius</em> to control blur strength, and <em>Blend</em> to control how much of the underlying layer shows through.</li>
</ol>
<p>It's a quick way to soften whatever sits behind a layer, so your foreground always stays in focus.</p>
<h2>Other improvements</h2>
<ul>
<li>Trust Center: We now have a dedicated Trust Center — a home for our security, privacy, and compliance practices.</li>
<li>Faster transparent export: We've improved the tech behind how transparent WebM export is handled, making it a lot faster than before.</li>
</ul>
`,fields:{date:`2026-06-16T00:00:00.000Z`,shortId:`2026-06-16`,slug:`2026-06-16-background-blur`},frontmatter:{title:`Background blur`,video:{name:`background-blur.mp4`,publicURL:`https://assets.jitter.video/background-blur-16-9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now animate numbers as counters in Jitter: great for countdowns, growing stats, and any moment where numbers need to stand out. Here's how to use counters:</p>
<ol>
<li>Add a text layer with a number on the canvas — that number will be the initial state of your counter.</li>
<li>In the <em>Animate</em> tab, click <em>Custom</em> and find <em>Counter</em> in the <em>Text</em> section.</li>
<li>Set the <em>From</em> (where the counter will start), <em>To</em> (what it will count up or down to), and <em>Step</em> (the interval it will counts at) values, choose the effect for the transition, and adjust the duration of your animation if needed.</li>
<li>That's it — you've just created a counter!</li>
</ol>
<p>Counters handle just about any number format: integers, decimals, negatives, percentages, and values with units (like $42 or 1,234.50kg).</p>
<h2>Other improvements</h2>
<ul>
<li>Image support in Jitter AI: You can now use images when generating AI effects. Simply paste or drop any image into the chat to share references and examples.</li>
<li>Better timeline drag'n'drop: Moving operations and groups in the timeline is now a lot smoother with a drop line indicator and auto-scroll.</li>
</ul>
`,fields:{date:`2026-06-10T00:00:00.000Z`,shortId:`2026-06-10`,slug:`2026-06-10-counters`},frontmatter:{title:`Counters`,video:{name:`counters.mp4`,publicURL:`https://assets.jitter.video/counters-16.9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now create and reuse components across your file! Perfect for keeping logos, CTAs, and other recurring elements consistent across format and design variations, or composing complex multi-scene montages where every scene stays easy to edit.</p>
<p>Here's how to use components:</p>
<ol>
<li>Select any element (or scene) on the canvas, right-click it, and hit <em>Create component</em>.</li>
<li>Copy your component and paste it into any scene in your file.</li>
<li>That's it! Whenever you edit the component, all instances will update automatically.</li>
</ol>
<p>This is the first version of components, and for now they're file-level. Next up: components you can reuse across your entire workspace.</p>
<h2>Other improvements</h2>
<ul>
<li>Staggering: You can now apply staggered timing across layers directly from the timeline by selecting several operations and right-clicking them.</li>
<li>Drag to adjust inspector values: You can now click and drag on any number field in the right-hand sidebar to adjust its value, instead of typing or using arrows.</li>
<li>Live font preview: Hover over any font in the font picker to preview it live on the canvas.</li>
</ul>
`,fields:{date:`2026-06-02T00:00:00.000Z`,shortId:`2026-06-02`,slug:`2026-06-02-components`},frontmatter:{title:`Components`,video:{name:`components.mp4`,publicURL:`https://assets.jitter.video/components.mp4`},videoHasAudio:!0,image:null}},{html:`<p>You can now use the glass effect in Jitter: both as a static effect in the <em>Design</em> tab and an animation in <em>Animate</em>.</p>
<p>Dial in refraction, depth, dispersion, frost, and more settings to get everything from subtle frosted UI to rich, refractive glass. Then animate each of those settings to create fluid, realistic transitions.</p>
<p>Here's how to use it:</p>
<ol>
<li>Select an element in your file you'd like to apply the glass effect to. The effect works best with shapes and text laid over a non-transparent background.</li>
<li>Go to the <em>Design</em> tab on the right and find <em>Glass</em> (or go to <em>Animate</em> → <em>New animation</em> → <em>Custom</em> → <em>Glass</em> for the animated version of the effect).</li>
<li>Adjust <em>Refraction</em> to control how much the glass bends what's behind it.</li>
<li>Use <em>Depth</em> for the sense of thickness and <em>Dispersion</em> for chromatic color separation.</li>
<li>Set <em>Frost</em> to add blur to the glass surface.</li>
<li>Fine-tune <em>Light intensity</em> and <em>Light angle</em> to control the highlight.</li>
<li>Use <em>Blend</em> to mix the glass effect with the element's original appearance.</li>
</ol>
`,fields:{date:`2026-05-19T00:00:00.000Z`,shortId:`2026-05-19`,slug:`2026-05-19-glass-effect`},frontmatter:{title:`Glass effect`,video:{name:`glass.mp4`,publicURL:`https://assets.jitter.video/glass-16.9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we're launching Jitter AI: an unlimited set of creative tools you can build yourself with just a prompt.</p>
<p>Most design tools give you a fixed set of capabilities you have to work within. Jitter AI flips that. Simply describe the creative tool you need (such as a fluted glass background, a ripple effect, a glitch transition, a 3D rotation, or a card flip), and Jitter will build it for you, right inside the interface you already know.</p>
<p>The tools you build aren't one-offs. You can refine them, reuse them across layers and files, and share with your team so everyone can produce on-brand animated assets in minutes.</p>
<p>Here's how it works.</p>
<ol>
<li>Select the layer or group you'd like to animate on the canvas.</li>
<li>In the right-hand sidebar, switch to the <em>Animate</em> tab.</li>
<li>Click <em>Animate with AI</em> and type what you'd like to happen (e.g., "add a dithering effect" or "create an animation with a pixelated effect").</li>
</ol>
<p>In a few seconds, Jitter will generate the custom effect for you. From there, you can tweak the result by refining your prompt, and adjust the animation parameters manually if you like.</p>
<p>With Jitter AI, we're also launching a <a href="https://jitter.video/templates/jitter-ai/">set of brand new templates</a> created with its help for you to explore, get inspired by, and remix.</p>
<h2>Other improvements</h2>
<ul>
<li>Artboard to PNG: You can now download your artboards as PNGs by right-clicking them and selecting <em>Copy as...</em> .</li>
</ul>
`,fields:{date:`2026-05-13T00:00:00.000Z`,shortId:`2026-05-13`,slug:`2026-05-13-animate-with-ai`},frontmatter:{title:`Jitter AI`,video:{name:`ai-shader.mp4`,publicURL:`https://assets.jitter.video/ai-shader.mp4`},videoHasAudio:!0,image:null}},{html:`<p>If you're working with multiple artboards (design variations, different sizes, or several languages), exporting just became a lot faster. You can now select the artboards you need and export them all at once in a click.</p>
<p>Here's how to use batch export:</p>
<ol>
<li>In your Jitter file, select the artboards you'd like to export.</li>
<li>Click the <em>Export</em> button in the top right corner.</li>
<li>Choose your export format.</li>
<li>You'll land on the export page with all of your selected files exported. From here, you can further adjust the export settings, choose to download some of the scenes individually, or simply hit the <em>Download</em> button to save them all to your device.</li>
</ol>
<p>Batch export is available on the Jitter Max plan.</p>
<h2>Other improvements</h2>
<ul>
<li>Smoother Figma import: Figma imports now carry over line cap and join styles exactly as designed.</li>
<li>Bug fix: Fixed an issue where files with long text layers could be slow to open.</li>
</ul>
`,fields:{date:`2026-05-06T00:00:00.000Z`,shortId:`2026-05-06`,slug:`2026-05-06-batch-export`},frontmatter:{title:`Batch export`,video:{name:`batch-export.mp4`,publicURL:`https://assets.jitter.video/batch-export.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now add organic, wave-like distortion to your elements in Jitter. Displacement shaders let you create animation distortion effects using amplitude, offset, and repeat controls for both the initial state and the animated state. It's a powerful way to create fluid motion, organic transitions, reveal animations, and ambient backgrounds.</p>
<p>Here's how to use the new feature:</p>
<ol>
<li>Select the element you'd like to animate on the canvas.</li>
<li>In the right-hand sidebar, switch to the <em>Animate</em> tab.</li>
<li>Click <em>Add animation</em> and choose <em>Displacement</em>.</li>
<li>Set the <em>Initial value</em> by tweaking <em>Amplitude</em>, <em>Offset</em>, and <em>Repeat</em> to define where the distortion starts.</li>
<li>Below that, set your target values for the same controls — this is where the distortion will end up after the animation plays.</li>
<li>Set the <em>Direction</em> to <em>Horizontal</em>, <em>Vertical</em>, or <em>Both</em>.</li>
<li>Adjust <em>Duration</em> and <em>Easing</em> to control how the transition feels.</li>
</ol>
`,fields:{date:`2026-04-20T00:00:00.000Z`,shortId:`2026-04-20`,slug:`2026-04-20-displacement-shaders`},frontmatter:{title:`Displacement shaders`,video:{name:`displacement-shaders.mp4`,publicURL:`https://assets.jitter.video/displacement-shaders.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now adjust each corner radius of a shape separately in Jitter: great for designing playful buttons, cards, speech bubbles, and other elements that aren’t meant to be perfectly symmetrical.</p>
<p>Here’s how to use independent corner radius:</p>
<ol>
<li>Select a shape on the canvas.</li>
<li>In the right-hand sidebar, make sure you're in the <em>Design</em> tab and find the <em>Corner</em> section.</li>
<li>Click on the corner radius icon to switch from a linked radius to independent corner editing.</li>
<li>Add the radius value for each corner.</li>
</ol>
<p>That's it! It’s an easy way to make shapes feel more custom without having to recreate them as vectors.</p>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: Fixed an issue where adding an <em>In</em> preset to an object after an <em>Out</em> preset could cause it to disappear.</li>
</ul>
`,fields:{date:`2026-04-09T00:00:00.000Z`,shortId:`2026-04-09`,slug:`2026-04-09-independent-corner-radius`},frontmatter:{title:`Independent corner radius`,video:{name:`independent-corner-radius.mp4`,publicURL:`https://assets.jitter.video/independent-corner-radius.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now lets you create advanced custom shapes made up of multiple parts and holes. You can build (or import from Figma) compound shapes with multiple paths, including inner cutouts: perfect for detailed icons, illustrations, and more intricate morph animations.</p>
<p>Here’s how to get started with the improved pen tool:</p>
<ol>
<li>Select the pen tool in the top toolbar.</li>
<li>Click to add points and draw your first path. Drag to reposition points, or drag and hold <kbd>⌘</kbd> (<kbd>Ctrl</kbd> on Windows) to create curves.</li>
<li>Add more paths to build extra parts or holes inside the same shape.</li>
<li>Finish drawing to combine everything into a single editable shape.</li>
<li>Animate it like any other shape in Jitter (including morphing).</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Timeline panning: In addition to scrolling, you can now click and drag to move through the timeline.</li>
<li>Accented letters: You can now add accented characters directly from the tooltip when editing text.</li>
<li>Improved distance guides: Distance lines and badges now stay within the viewport so they're easier to read while editing.</li>
<li>Layer order shortcuts: You can now use keyboard shortcuts to reorder layers: <kbd>]</kbd> to bring to front, <kbd>[</kbd> to send to back, <kbd>⇧ ⌘ ]</kbd> to bring forward , and <kbd>⇧ ⌘ [</kbd> to send backward.</li>
<li>Batch missing font replacement: If you manually replace one missing font in Jitter, we'll also update other text layers that use the same font in batch.</li>
</ul>
`,fields:{date:`2026-04-01T00:00:00.000Z`,shortId:`2026-04-01`,slug:`2026-04-01-improved-pen-tool-for-advanced-shapes`},frontmatter:{title:`Improved pen tool`,video:{name:`pen-tool.mp4`,publicURL:`https://assets.jitter.video/pen-tool.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now supports custom text effects! Build fully custom text animations and reuse them across files to keep your motion consistent and on-brand.</p>
<p>Here’s how to get started with custom text effects:</p>
<ol>
<li>Select a text layer on the canvas.</li>
<li>In the right-hand sidebar, make sure you're in the <em>Animate</em> tab.</li>
<li>Depending on the kind of animation you're building, go to the <em>In</em> or <em>Out</em> tab and select <em>Custom</em>.</li>
<li>Create your custom effect by defining its movement, rotation, scale, opacity, acceleration, duration, and more.</li>
</ol>
`,fields:{date:`2026-03-18T00:00:00.000Z`,shortId:`2026-03-18`,slug:`2026-03-18-custom-text-effects`},frontmatter:{title:`Custom text effects`,video:{name:`custom-text-effects.mp4`,publicURL:`https://assets.jitter.video/custom-text-effects.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Managing Jitter files with many layers just got a little smoother. You can now quickly hide (or show) and lock (or unlock) multiple layers in one sweep.</p>
<p>Here's how it works:</p>
<ol>
<li>In the layer list (the left-hand panel in your Jitter file), click and hold the hide or lock icon next to any layer.</li>
<li>Drag down across other layers.</li>
<li>Release to hide/show or lock/unlock all selected layers in one go.</li>
</ol>
`,fields:{date:`2026-03-11T00:00:00.000Z`,shortId:`2026-03-11`,slug:`2026-03-11-multi-layer-hide-lock`},frontmatter:{title:`Multi-layer hide and lock`,video:{name:`multi-layer-hide-lock.mp4`,publicURL:`https://assets.jitter.video/multi-layer-hide-lock.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Prompting is now part of Image to Video in Jitter! You can now tweak the auto-generated prompt or replace it completely to get exactly the video you want.</p>
<p>Here's how you can write your own Image to Video prompt:</p>
<ol>
<li>Open your Jitter file and select the image you'd like to generate a video from.</li>
<li>In the sidebar on the right, go to the <em>Animate</em> tab.</li>
<li>Click <em>View and edit prompt</em>.</li>
<li>Edit the generated prompt (or write your own) and click <em>Generate video</em>.</li>
</ol>
`,fields:{date:`2026-03-03T00:00:00.000Z`,shortId:`2026-03-03`,slug:`2026-03-03-image-to-video-prompting`},frontmatter:{title:`Prompting: Image to video`,video:{name:`image-to-video-prompting.mp4`,publicURL:`https://assets.jitter.video/image-to-video-prompting.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we're launching Jitter for Figma Draw! You can now import your Figma Draw designs into Jitter in a click and start animating them right away. Everything will be imported pixel-perfect, including:</p>
<ul>
<li>Variable strokes</li>
<li>Brushes</li>
<li>Patterns</li>
</ul>
<p>Here's how you can get started with Jitter for Figma Draw:</p>
<ol>
<li><a href="https://www.figma.com/community/plugin/961270034818256057/jitter-animation-for-figma">Install Jitter's Figma plugin</a> if you don't have it yet.</li>
<li>In Figma Draw, select the frame(s) you'd like to export and click the <em>Copy</em> button on the plugin.</li>
<li>Click <em>Open in Jitter</em> on the plugin to import your design.</li>
<li>Animate! ✨</li>
</ol>
`,fields:{date:`2026-02-25T00:00:00.000Z`,shortId:`2026-02-25`,slug:`2026-02-25-figma-draw-plugin`},frontmatter:{title:`Figma Draw plugin`,video:{name:`figma-draw.mp4`,publicURL:`https://assets.jitter.video/figma-draw.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today's template drop is built around blend modes: from bold overlays to subtle texture, light leaks, and color shifts, this template set makes it easy to get richer visuals fast. <a href="https://jitter.video/templates/blend-modes/">Explore the new collection here</a>.</p>
`,fields:{date:`2026-02-17T00:00:00.000Z`,shortId:`2026-02-17`,slug:`2026-02-17-blend-modes-templates`},frontmatter:{title:`Template collection: Blend modes`,video:{name:`image-to-video.mp4`,publicURL:`https://assets.jitter.video/20260217-blend-modes.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now add movement and ambience to your animations by turning any image into a video right in Jitter! Simply upload your asset, and Jitter will instantly generate a short video clip from it with the help of AI.
Use it to add motion and depth to static backgrounds, create quick clips from product shots and brand visuals, and make your scenes feel more alive with subtle movement.</p>
<p>Here's where you can find the new feature:</p>
<ol>
<li>Open your Jitter file and select the image you'd like to generate a video from.</li>
<li>In the sidebar on the right, go to the <em>Animate</em> tab and click <em>Generate video</em>.</li>
</ol>
<p>In a few moments, our AI assistant Oli will generate a video clip for your and replace the image with the newly created video.</p>
`,fields:{date:`2026-02-10T00:00:00.000Z`,shortId:`2026-02-10`,slug:`2026-02-10-image-to-video`},frontmatter:{title:`Image to video`,video:{name:`image-to-video.mp4`,publicURL:`https://assets.jitter.video/image-to-video_16.9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today’s template drop is all about buttons, toggles, menus, and delightful micro-interactions. From subtle glows to liquid glass effects to cursor-traced hovers, these are perfect for sparking interaction and engagement across social media, ads, and interfaces. <a href="/templates/the-click/">Explore the new templates here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Brainstorm fix: Fixed an issue where AI Brainstorm would not launch on some canvases.</li>
<li>Unsaved changes warning: Added a warning message if you try to leave the editor with unsaved local changes.</li>
<li>Instagram preset update: Updated the Instagram post size preset from 1:1 to 4:5.</li>
</ul>
`,fields:{date:`2026-01-28T00:00:00.000Z`,shortId:`2026-01-28`,slug:`2026-01-28-the-click`},frontmatter:{title:`Template collection: The Click`,video:{name:`the-click.mp4`,publicURL:`https://assets.jitter.video/the-click_16.9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now lets you do quick calculations directly in numeric fields! Just type an arithmetic expression using <em>+</em>, <em>–</em>, <em>*</em>, or <em>/</em> in any numeric field in the <em>Design</em> or <em>Animate</em> tab, and the field will instantly calculate the value for you. This makes small adjustments way faster, whether you want to nudge a layer 10px to the right by typing <em>+10</em> in <em>Position</em>, instantly make an animation snappier with <em>/2</em> in <em>Duration</em>, or double text size by using <em>*2</em> in <em>Font size</em>.</p>
`,fields:{date:`2026-01-21T00:00:00.000Z`,shortId:`2026-01-21`,slug:`2026-01-21-formulas-in-input-fields`},frontmatter:{title:`Formulas in input fields`,video:{name:`formulas-in-input-fields.mp4`,publicURL:`https://assets.jitter.video/formulas-in-input-fields.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we're shipping a set of templates built around gradients.
From ambient backgrounds to dynamic transitions and playful type, these are perfect for adding dimension and character to your designs.
<a href="https://jitter.video/templates/gradients/">Explore the new templates here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Smoother collaboration: Live collaboration is more stable, with easier recovery if your connection drops.</li>
<li>Easier text SVG updates: We fixed an issue where updating the font in text SVG (text imported from Figma as SVG due to a missing font) could change text size, and made conversions from text SVGs to editable text layers more robust.</li>
<li>Improved export stability: Exports are now more reliable, with fewer failures and better handling if something doesn’t work on the first try.</li>
</ul>
`,fields:{date:`2025-12-30T00:00:00.000Z`,shortId:`2025-12-30`,slug:`2025-12-30-gradient-templates`},frontmatter:{title:`Template collection: Gradients`,video:{name:`gradient-templates.mp4`,publicURL:`https://assets.jitter.video/gradient-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Meet <em>The Route</em>: a set of 9 templates designed for modern travel brands.
From destination promos and logo reveals to virtual boarding passes and animated flight trackers, these templates are a great starting point for bringing travel stories to life.
Use them for destination marketing, ad campaigns, and elevated brand storytelling.
<a href="https://jitter.video/templates/the-route/">Explore the new templates here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Better operation resizing: Pressing <kbd>⌥</kbd> (Mac) or <kbd>Alt</kbd> (Windows) now resizes timeline operations symmetrically.</li>
<li>Smoother focusing: Double-clicking a layer's icon in the layer list now brings the focus to the layer with a smoother transition.</li>
<li>Loop by default: Timeline playback now loops automatically.</li>
<li>New shortcut: Pressing <kbd>M</kbd> now toggles between <em>Design</em> and <em>Animate</em> modes.</li>
<li>Handy shortcuts: Keyboard shortcuts now appear in toolbar tooltips.</li>
<li>Improved file loading: Files now open without flashing an empty frame.</li>
<li>Drag &#x26; drop fix: Dragging a layer now accurately matches mouse movement.</li>
<li>Team invite fix: Fixed an issue where some team invites incorrectly showing as “not found”.</li>
</ul>
`,fields:{date:`2025-12-02T00:00:00.000Z`,shortId:`2025-12-02`,slug:`2025-12-02-the-route-travel-templates`},frontmatter:{title:`Template collection: The Route`,video:{name:`the-route-travel-templates.mp4`,publicURL:`https://assets.jitter.video/the-route-travel-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Kickstart a project with quick motion ideas and explore several animation directions in seconds with AI Brainstorm.
Brainstorm lets you instantly turn static designs into animation drafts, ready for you to tweak and refine.</p>
<p>Here's how to use Brainstorm:</p>
<ol>
<li>Open your Jitter file and click the ✨ icon in the top right corner of your artboard to open the AI menu.</li>
<li>Pick a mood (playful, bold, soft, elegant, or cinematic) to generate a draft.</li>
<li>Let the magic happen!</li>
</ol>
<p>In a few seconds, our AI assistant Oli will create a fully editable animation for you, ready to customize, polish, and make fully yours.</p>
`,fields:{date:`2025-11-25T00:00:00.000Z`,shortId:`2025-11-25`,slug:`2025-11-25-ai-brainstorm`},frontmatter:{title:`AI brainstorm`,video:{name:`ai-brainstorm.mp4`,publicURL:`https://assets.jitter.video/ai-brainstorm.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now supports blend modes! You can use them to add depth, texture, and lighting effects to your designs by controlling how layers interact.</p>
<p>Try them out to:</p>
<ul>
<li>Design playful type animations where the text interacts with the background</li>
<li>Add natural glows, highlights, and shadows</li>
<li>Bring in grain, texture, or noise to give your designs a tactile feel</li>
<li>Recolor images and videos without losing detail</li>
<li>Create translucent, glass-like effects</li>
</ul>
<p>Here’s how to get started with blend modes:</p>
<ol>
<li>Select any layer on the canvas.</li>
<li>In the right sidebar, make sure you're in the <em>Design</em> tab and scroll to the <em>Opacity</em> section.</li>
<li>Click on the drop icon and choose an option (e.g. <em>Multiply</em>, <em>Screen</em>, <em>Overlay</em>).</li>
<li>Experiment with different modes to see how your layer interacts with the ones beneath it.</li>
</ol>
`,fields:{date:`2025-11-04T00:00:00.000Z`,shortId:`2025-11-04`,slug:`2025-11-04-blend-modes`},frontmatter:{title:`Blend modes`,video:{name:`blend-modes.mp4`,publicURL:`https://assets.jitter.video/blend-modes.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we’re launching <em>The Prompt</em>, a set of 6 templates built for AI companies.
From chat interfaces and animated buttons to generation flows, these templates are made to bring your AI features to life.
Use them to showcase new capabilities, run product ads, or illustrate real AI workflows, from chat replies to image outputs.
<a href="https://jitter.video/templates/the-prompt/">Explore the new templates here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved resource accessibility: Jitter files now load more reliably for users on corporate networks or VPNs.</li>
<li>Smoother artboard zoom: Camera movement is now smoother when focusing on an artboard, making navigation feel more natural.</li>
</ul>
`,fields:{date:`2025-10-28T00:00:00.000Z`,shortId:`2025-10-28`,slug:`2025-10-28-the-prompt-ai-templates`},frontmatter:{title:`Template collection: The Prompt`,video:{name:`the-prompt-ai-templates.mp4`,publicURL:`https://assets.jitter.video/the-prompt-ai-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we're launching Jitter for Figma Buzz!
You can now import your Figma Buzz designs straight into Jitter in a click and start animating them right away.
Perfect for adding motion to your social media posts, display ads, marketing materials, and brand assets.</p>
<p>Here's how you can get started with Jitter for Figma Buzz:</p>
<ol>
<li><a href="https://www.figma.com/community/plugin/961270034818256057/jitter-animation-for-figma">Install Jitter's Figma plugin</a> if you don't have it yet.</li>
<li>In Figma Buzz, select the frame(s) or you'd like to export and click the <em>Copy</em> button on the plugin.</li>
<li>Click <em>Open in Jitter</em> in the plugin to import your design.</li>
<li>Animate! ✨</li>
</ol>
`,fields:{date:`2025-10-23T00:00:00.000Z`,shortId:`2025-10-23`,slug:`2025-10-23-figma-buzz-plugin`},frontmatter:{title:`Figma Buzz plugin`,video:{name:`figma-buzz-plugin.mp4`,publicURL:`https://assets.jitter.video/figma-buzz-plugin.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today we’re launching <em>The Track</em>, a set of 5 templates built for sport and fitness brands: from training apps and wearable tech to activewear labels and workout spaces.</p>
<p>Use these templates to announce new launches, celebrate milestones with your customers, or run ad campaigns with motion that's bold, high-tempo, and built to stop the scroll. <a href="https://jitter.video/templates/new/">Try the new templates here</a>.</p>
`,fields:{date:`2025-10-07T00:00:00.000Z`,shortId:`2025-10-07`,slug:`2025-10-07-sport-and-fitness-templates`},frontmatter:{title:`Template collection: The Track`,video:{name:`sport-and-fitness-templates.mp4`,publicURL:`https://assets.jitter.video/sport-and-fitness-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now lets you add (and animate!) gradients to strokes. Outline your shapes, text, and other elements with smooth linear or radial blends, then bring them to life with smooth transitions. Perfect for subtle accents and branded details.</p>
<p>Here’s how to get started with stroke gradients:</p>
<ol>
<li>Select a layer on the canvas.</li>
<li>In the <em>Design</em> tab, check the box next to <em>Stroke</em> and adjust its weight.</li>
<li>Click the stroke color, then switch to the <em>Linear</em> or <em>Radial</em> tab to apply a gradient.</li>
<li>To animate the gradient, go to the <em>Animate</em> tab, click <em>Custom</em>, and select <em>Stroke</em>.</li>
<li>Adjust gradient type and color stops until you get the perfect look.</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: Fixed an issue on mobile where the player wouldn’t be shown.</li>
<li>Downloadable assets: You can now download your original media from Jitter by clicking on the <em>...</em> next to the <em>Replace media</em> button.</li>
<li>More reliable collaboration: All workspace files have been migrated to a faster, more reliable system for better sync and performance.</li>
<li>Stroke gradient import: You can now import gradient strokes from Figma seamlessly using the plugin.</li>
</ul>
`,fields:{date:`2025-09-30T00:00:00.000Z`,shortId:`2025-09-30`,slug:`2025-09-30-gradients-on-strokes`},frontmatter:{title:`Gradients on strokes`,video:{name:`gradients-on-strokes.mp4`,publicURL:`https://assets.jitter.video/gradients-on-strokes.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Meet <em>The Stack</em> — our new collection of 6 templates designed for tech companies and startups.
Whether you’re working on a video for a feature launch, a social media reel, or a company announcement, The Stack gives you a strong starting point that feels modern, polished, and scalable.
<a href="https://jitter.video/templates/new/">Explore The Stack</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved undo/redo: We've fixed several undo/redo issues in text editing (with full and partial selection).</li>
<li>Smoother rendering: Rendering is now smoother and more reliable, especially in zoomed-out views and with hidden elements.</li>
</ul>
`,fields:{date:`2025-09-09T00:00:00.000Z`,shortId:`2025-09-09`,slug:`2025-09-09-tech-templates`},frontmatter:{title:`Template collection: The Stack`,video:{name:`tech-templates.mp4`,publicURL:`https://assets.jitter.video/tech-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>We just dropped a new batch of templates that make the most of our recent product update: pen tool and morphing.
From fluid icon animations to seamless shape and text morphs, use these templates to create motion that’s flexible, dynamic, and uniquely yours.
<a href="https://jitter.video/templates/new/">Try them out here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: Fixed a crash that could occur when resizing instant (zero-duration) operations.</li>
<li>Bug fix: Fixed a crash caused by negative audio or video duration in the timeline.</li>
<li>Bug fix: Fixed an issue where shapes could lose their opacity when modified with the pen tool.</li>
</ul>
`,fields:{date:`2025-08-26T00:00:00.000Z`,shortId:`2025-08-26`,slug:`2025-08-26-pen-tool-templates`},frontmatter:{title:`Pen tool & morph templates`,video:{name:`pen-tool-templates.mp4`,publicURL:`https://assets.jitter.video/pen-tool-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Exports with video just got much faster! We've rebuilt our export system at a lower level: video exports are now up to 5x faster and much lighter on memory, making working on big, video-heavy projects smoother than ever.</p>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: We've fixed an issue that could cause export to fail for anonymous users. Exports now work seamlessly even if you’re not signed in.</li>
</ul>
`,fields:{date:`2025-08-19T00:00:00.000Z`,shortId:`2025-08-19`,slug:`2025-08-19-faster-export`},frontmatter:{title:`Faster export`,video:{name:`faster-export.mp4`,publicURL:`https://assets.jitter.video/faster-export.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now lets you bring typography to life with gradients! Create custom color blends and bring them to life with smooth gradient transitions — perfect for bold titles and branded typography.</p>
<p>Here’s how to get started with text gradients:</p>
<ol>
<li>Select a text layer on the canvas.</li>
<li>To fill a text with a gradient, make sure you're in the <em>Design</em> tab and click on the color in the <em>Fill</em> section.</li>
<li>In the <em>Linear</em> or <em>Radial</em> tab, set up the gradient for your text.</li>
<li>To create a gradient animation, switch to the <em>Animate</em> tab and click <em>New animation</em> -> <em>Custom</em> -> <em>Color</em>.</li>
<li>Choose between linear and radial gradients and adjust color stops to create your perfect blend.</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: Fixed an issue where the selection box sometimes wouldn’t appear during rectangle selection.</li>
<li>Bug fix: Fixed a server export bug that could cause exporting files with special characters in their names to fail.</li>
<li>Bug fix: Improved comment input so words no longer break awkwardly in the middle — we now keep them intact whenever possible.</li>
</ul>
`,fields:{date:`2025-08-13T00:00:00.000Z`,shortId:`2025-08-13`,slug:`2025-08-13-text-gradients`},frontmatter:{title:`Text gradients`,video:{name:`text-gradients.mp4`,publicURL:`https://assets.jitter.video/text-gradients.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Meet <em>The Vault</em> — our new collection of 9 templates made for fintech and banking companies, perfect for product updates, demos, feature highlights, and more.
Whether you’re working on a social media reel, an ad, or a website animation, The Vault gives you a great starting point that feels sharp, credible, and clean.
<a href="https://jitter.video/templates/new/">Explore The Vault</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Bug fix: Fixed an issue where media files with special characters in their names could fail to import.</li>
</ul>
`,fields:{date:`2025-08-05T00:00:00.000Z`,shortId:`2025-08-05`,slug:`2025-08-05-fintech-templates`},frontmatter:{title:`Template collection: The Vault`,video:{name:`reel_16-9.mp4`,publicURL:`https://assets.jitter.video/reel_16-9.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Comments are live in Jitter! No more jumping between tools - speed up reviews by sharing and responding to feedback directly in your files.
Each comment is timestamped and synced across the canvas and timeline, so it’s always in context. And with @mentions, it’s easy to bring teammates into the conversation.</p>
<p>Here's how you can leave a comment in Jitter:</p>
<ol>
<li>In the top toolbar, click on the comment icon.</li>
<li>Move the timeline cursor to the point you want your comment to be linked to.</li>
<li>Click on the part of the canvas you'd like to comment on and type in your comment.</li>
</ol>
<p>That's it! Your comments will appear on the canvas, in the timeline, and in the right-hand panel that opens when you click the comment icon.</p>
`,fields:{date:`2025-07-29T00:00:00.000Z`,shortId:`2025-07-29`,slug:`2025-07-29-comments`},frontmatter:{title:`Comments`,video:{name:`comments.mp4`,publicURL:`https://assets.jitter.video/comments.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now supports the complete Google Fonts library — over 1,800 typefaces, fully integrated and ready to use in your designs. And when you import from Figma, your text layers come through exactly as they should — clean, consistent, and fully editable.</p>
<p>To help you navigate this expanded library, we’ve also revamped our font search. The new fonts search lets you quickly search through thousands of fonts to find the perfect typeface for any design instantly.</p>
<h2>Other improvements</h2>
<ul>
<li>Freeze last frame: You can now choose to hold the final frame of a video layer using the <em>Freeze last frame</em> option in the right-hand sidebar.</li>
<li>Bug fix: Fixed an issue where text layers could disappear when changing fonts.</li>
</ul>
`,fields:{date:`2025-07-16T00:00:00.000Z`,shortId:`2025-07-16`,slug:`2025-07-16-new-google-fonts`},frontmatter:{title:`New Google Fonts`,video:{name:`new-google-fonts.mp4`,publicURL:`https://assets.jitter.video/new-google-fonts.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now create custom shapes in Jitter with the new pen tool and bring them to life with powerful morph animations!
Draw your own shapes using anchor points and curves, then smoothly transition between any two shapes using morphing.</p>
<p>You can use the pen tool and morphing to:</p>
<ul>
<li>Design custom product animations, like looping loaders with fluid shape transitions</li>
<li>Animate a logo from a simple shape into the full mark — or morph it into a new identity for a launch or rebrand</li>
<li>Create playful text animations where letters transform seamlessly into shapes (or vice versa)</li>
<li>Smoothly transition UI elements between states, like buttons expanding into cards, or icons adapting as menus open</li>
</ul>
<p>Here's how to get started with the new features:</p>
<ol>
<li>Select the pen tool in the top toolbar.</li>
<li>Click on the canvas to create your first point, then click again to create another one and connect the two points with a straight line. Drag to reposition points, or drag and hold <kbd>⌘</kbd> (<kbd>Ctrl</kbd> on Windows) to turn lines into curves.</li>
<li>Select your shape and go to the <em>Animate</em> tab.</li>
<li>Click <em>New animation</em>, open the <em>Custom</em> tab, and choose <em>Morph</em>.</li>
<li>Edit the shape to create its final form — this updated shape will become the <em>To</em> value of your morph animation.</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Faster-loading assets: Assets in image-heavy files now load much faster.</li>
<li>Highlight on hover: Hovering over a shape now highlights its outline, so you can easily see which layer you're about to select.</li>
<li>Bug fix: We've fixed a bug where scrolling the layer list would ocassionally scroll the canvas instead.</li>
</ul>
`,fields:{date:`2025-07-08T00:00:00.000Z`,shortId:`2025-07-08`,slug:`2025-07-08-pen-tool-and-morphing`},frontmatter:{title:`Pen tool and morphing`,video:{name:`pen-tool-and-morphing.mp4`,publicURL:`https://assets.jitter.video/pen-tool-and-morphing.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today, we're launching <em>The Edit</em> — a collection of 12 templates created for fashion and beauty brands.
Whether you're launching a new collection, showcasing products, or running cross-platform ads, these templates will help you brings sleek, elevated motion to every post.
<a href="https://jitter.video/templates/new/">Try them out here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Transparent video fix: We've fixed a bug that could lead to some animations with a transparent background to be exported without the transparency.</li>
<li>Better real-time collaboration: Workspace files with multiple editors in them now load more reliably.</li>
</ul>
`,fields:{date:`2025-06-17T00:00:00.000Z`,shortId:`2025-06-17`,slug:`2025-06-17-template-collection-the-edit`},frontmatter:{title:`Template collection: The Edit`,video:{name:`the-edit-templates.mp4`,publicURL:`https://assets.jitter.video/20250617-the-edit-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>We just dropped a new batch of templates that make the most of blur, one of our most requested creative features we recently shipped.
From dreamy transitions to smooth text reveals, use these templates to add depth, focus, and polish to your animations.
<a href="https://jitter.video/templates/new/">Try them out here</a>.</p>
<h2>Other improvements</h2>
<ul>
<li>Smoother teamwork: Real-time collaboration just got more reliable, with improved syncing and stability across shared files.</li>
<li>Anonymous export fix: We've fixed an issue that could prevent users without a Jitter account from exporting files.</li>
</ul>
`,fields:{date:`2025-06-03T00:00:00.000Z`,shortId:`2025-06-03`,slug:`2025-06-03-blur-templates`},frontmatter:{title:`Blur templates`,video:{name:`blur-templates.mp4`,publicURL:`https://assets.jitter.video/20250603-blur-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You now have full control over the movement of your layers with Bezier handles for curved paths. When you add a curve to a motion path, Bezier controls will let you pull and angle the curve on either side of a point to get the exact motion you want.</p>
<p>Here's where you can find the feature in Jitter:</p>
<ol>
<li>Select a layer you'd like to animate, switch to the <em>Animate</em> tab, click <em>New animation</em>, and select <em>Custom -> Move</em>.</li>
<li>Check the <em>Bezier controls</em> box.</li>
<li>Drag the handles to sculpt the curve exactly how you want it!</li>
</ol>
<p>Whether you're aiming for smooth, flowing motion or sharp, deliberate turns, Bezier handles give you the control to make it happen.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved audio placement: Audio tracks will now be added at the current point on the timeline, and not at the beginning of your animation.</li>
<li>Bug fix: We've fixed a bug where the timeline could disappear after duplicating a template.</li>
</ul>
`,fields:{date:`2025-05-27T00:00:00.000Z`,shortId:`2025-05-27`,slug:`2025-05-27-bezier-controls-for-curved-paths`},frontmatter:{title:`Bezier controls for curved paths`,video:{name:`bezier-controls-curved-paths.mp4`,publicURL:`https://assets.jitter.video/bezier-controls-curved-paths.mp4`},videoHasAudio:!1,image:null}},{html:`<p>As an official <a href="https://config.figma.com/">Figma Config 2025</a> sponsor, we're proud to announce a batch of exclusive Config templates we created for attendees to showcase their time at the event.</p>
<p>Use these to let everyone know you’re in, share photos and highlights while you’re there, and post recaps after. Customize them by editing the text, changing the colors, replacing the images with your own photos, and choosing from a wide selection of Config stickers for a truly personal touch.</p>
<p>👉 <a href="https://jitter.video/community/config/">Remix them now</a></p>
`,fields:{date:`2025-05-05T00:00:00.000Z`,shortId:`2025-05-05`,slug:`2025-05-05-figma-config`},frontmatter:{title:`Figma Config 2025`,video:{name:`config-2025.mp4`,publicURL:`https://assets.jitter.video/config-2025.mp4`},videoHasAudio:!1,image:null}},{html:`<p>We just launched the new <a href="https://jitter.video/?noredir=1">Jitter website</a> — a fresh look that reflects how far we’ve come and where we’re headed next.
This launch marks a new chapter for our brand: a more confident voice, a stronger visual identity, and creativity front and center.
This is Jitter, leveled up.</p>
<h2>Other improvements</h2>
<ul>
<li>Faster Figma import: We've added caching to our Figma plugin, your designs will now import faster from Figma to Jitter.</li>
<li>Better file names: Files created via Figma import will now be named after your Figma files.</li>
<li>Bug fix: We've fixed a bug that would occasionally cause assets to disappear in the edit.</li>
<li>Fix a bug where video would not show in the effect gallery</li>
</ul>
`,fields:{date:`2025-04-08T00:00:00.000Z`,shortId:`2025-04-08`,slug:`2025-04-08-new-website`},frontmatter:{title:`New website`,video:{name:`new-website-2025.mp4`,publicURL:`https://assets.jitter.video/new-website-2025.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now export your easings as CSS!
Implementing product and web animations just got a lot easier — simply copy any easing (including custom ones, elastic, and bounce) and get the exact movement you designed in Jitter, ready to hand off to your dev team.</p>
<p>Here's how you can copy your easings in Jitter:</p>
<ol>
<li>Select a layer that's being animated and switch to the <em>Animate</em> tab.</li>
<li>Under <em>Animation</em>, click on the <em>Settings</em> icon next to <em>Easing</em>.</li>
<li>Click on <em>...</em> in the top right corner and select <em>Copy as CSS</em>.</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>More control over curved paths: You can now use precise Bezier controls to edit the path for the <em>Move</em> action.</li>
<li>New keyboard shortcut: Jump to a group's child in the timeline by hitting <kbd>Enter</kbd>, or go to the element's parent with <kbd>Shift ⇧</kbd> + <kbd>Enter</kbd>.</li>
<li>Improvement: New artboards are now added at the top of the layer list, like other layers.</li>
<li>Bug fix: We've fixed an issue that could prevent files imported from Figma from being exported correctly.</li>
<li>Bug fix: Unstable network connections no longer cause the editor to crash.</li>
</ul>
`,fields:{date:`2025-03-18T00:00:00.000Z`,shortId:`2025-03-18`,slug:`2025-03-18-css-easing-export`},frontmatter:{title:`CSS Easing export`,video:{name:`20250226-figma-plugin.mp4`,publicURL:`https://assets.jitter.video/easing-css.mp4`},videoHasAudio:!1,image:null}},{html:`<p>We’ve rebuilt our <a href="https://www.figma.com/community/plugin/961270034818256057/jitter-animation-for-figma">Figma plugin</a> from the ground up for pixel-perfect compatibility, better performance, and powerful new import features:</p>
<ul>
<li><strong>Figma Slides support</strong>: Import your Figma Slides decks into Jitter in just one click, just like you would in Figma.</li>
<li><strong>Multiselect</strong>: Select multiple layers or frames in Figma and import them all at once.</li>
<li><strong>Full file import</strong>: Quickly bring your entire Figma file onto Jitter's infinite canvas by pressing <kbd>⌘</kbd> + <kbd>A</kbd> (<kbd>Ctrl</kbd> + <kbd>A</kbd> on Windows) to select everything and then exporting.</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Better artboard pasting: Pasting an artboard into a file will now position it in the middle of the viewport.</li>
<li>Invalid media handling: If a file contains invalid or unavailable media, you will now see a warning in the righthand panel that will not prevent the file from being opened or exported.</li>
<li>Bug fix: We fixed an issue where changes made when editing a template when logged out of Jitter were not saved.</li>
</ul>
`,fields:{date:`2025-02-26T00:00:00.000Z`,shortId:`2025-02-26`,slug:`2025-02-26-all-new-figma-plugin`},frontmatter:{title:`All-new Figma plugin`,video:{name:`20250226-figma-plugin.mp4`,publicURL:`https://assets.jitter.video/20250226-figma-plugin.mp4`},videoHasAudio:!1,image:null}},{html:`<p>In addition to using ready-made easing presets, you can now define your own easing curves to get the exact motion you want.
With custom easings, you can fine-tune how objects accelerate and decelerate and:</p>
<ul>
<li>Create smoother, snappier, or more dynamic movement that feels just right for every animation.</li>
<li>Build and reuse your own easings to keep all your animations on-brand.</li>
</ul>
<p>Here's how you can create a custom easing in Jitter:</p>
<ol>
<li>Select a layer you'd like to animate, make sure you're in the <em>Animate</em> tab, and click on <em>New Animation</em>.</li>
<li>Select the type animation you'd like to use (or build a custom one).</li>
<li>Click on the value next to <em>Easing</em> in the <em>Animation</em> section.</li>
<li>Select <em>Custom</em>.</li>
<li>Adjust the handles in the graph or the values below it to create your custom easing.</li>
</ol>
<p>The handle on the left controls how your object will start moving. The flatter the curve is here, the smoother the acceleration; the steeper it gets, the more abrupt the start of the movement.
The handle on the right controls how the movement will end. The more horizontal the line is, the more it’ll slow down to land smoothly in its final position; the more vertical it becomes, the snappier the end of the animation.</p>
<h2>Other improvements</h2>
<ul>
<li>New shortcut: You can now use <kbd>Tab ⇥</kbd> and <kbd>Shift ⇧</kbd> + <kbd>Tab ⇥</kbd> to navigate between siblings in the layer list and timeline.</li>
<li>Better file names: Exported files are now named after the exported artboard.</li>
<li>Better sharing: You can now share a link to a specific artboard by selecting it before clicking <em>Share</em>.</li>
<li>Artboard inspector: The artboard layout inspector in the <em>Animate</em> mode is now restored.</li>
<li>No sound for hidden layers: Videos that are hidden in the layer list are now muted.</li>
<li>Bug fix: We've fixed a problem where playing a video could result in the app freezing.</li>
<li>Bug fix: Videos are no longer playing when not selected.</li>
</ul>
`,fields:{date:`2025-02-18T00:00:00.000Z`,shortId:`2025-02-18`,slug:`2025-02-18-custom-easings`},frontmatter:{title:`Custom easings`,video:{name:`20250218-custom-easings.mp4`,publicURL:`https://assets.jitter.video/20250218-custom-easings.mp4`},videoHasAudio:!1,image:null}},{html:`<p>We’re excited to introduce the infinite canvas – our biggest update yet!</p>
<p>For too long, motion design workflows have been slow and clunky. Jitter now lets you create <strong>multiple artboards in one file</strong> on a Figma-like infinite canvas - a single place where your entire animation process, from conception to hand-off, happens in a way that is effortless and natural.
This unlocks powerful new ways to:</p>
<ul>
<li><strong>Iterate faster</strong> and quickly test ideas side by side.</li>
<li><strong>Compare versions instantly</strong> in one view – no more switching between files.</li>
<li><strong>Easily scale your content</strong> by adapting animations for different formats, languages, and platforms in one place.</li>
<li><strong>Collaborate like never before</strong> in real time, all in a single file.</li>
</ul>
<p>You can add new artboards to your file in two ways:</p>
<ul>
<li>Click the <em>New Artboard</em> button in the top bar.</li>
<li>Duplicate an existing artboard with:
<ul>
<li><kbd>⌘</kbd> <kbd>C</kbd> / <kbd>⌘</kbd> <kbd>V</kbd> (<kbd>ctrl</kbd> <kbd>C</kbd> / <kbd>ctrl</kbd> <kbd>V</kbd> on Windows)</li>
<li><kbd>⌘</kbd> <kbd>D</kbd> (<kbd>ctrl</kbd> <kbd>D</kbd> on Windows)</li>
<li>holding <kbd>⌥</kbd> while dragging (holding <kbd>alt</kbd> while dragging on Windows)</li>
</ul>
</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>New shortcut: Use <kbd>⌥</kbd> <kbd>L</kbd> (or <kbd>alt</kbd> <kbd>L</kbd> on Windows) to collapse all layer groups, except the ones with the selected layer(s).</li>
<li>New shortcut: Press <kbd>⌘</kbd> <kbd>D</kbd> (<kbd>ctrl</kbd> <kbd>D</kbd> on Windows) to duplicate operations in the timeline.</li>
<li>New shortcut: Hit <kbd>⇧</kbd> <kbd>2</kbd> to pan and zoom the canvas to show the selected layer(s).</li>
<li>Improvement: Double-click a layer icon in the layer list to pan and zoom the canvas to show the layer.</li>
<li>Bug fix: We've fixed an issue where deleting a <em>Play</em> operation for video would delete the associated video layer.</li>
<li>Bug fix: We've fixed a bug where text layers would occasionally not be visible after a new animation was added to them.</li>
<li>Bug fix: Timeline snapping between operations is now restored.</li>
</ul>
`,fields:{date:`2025-02-04T00:00:00.000Z`,shortId:`2025-02-04`,slug:`2025-02-04-infinite-canvas`},frontmatter:{title:`Infinite canvas`,video:{name:`20250204-infinite-canvas.mp4`,publicURL:`https://assets.jitter.video/20250204-infinite-canvas.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now add blur animations to all kinds of layers, including text, in a single click with blur presets!
They are perfect for creating organic transitions and guiding the viewers' attention – without the complexity of building a custom animation from scratch.</p>
<p>Here's where you can find the new presets:</p>
<ol>
<li>Choose a layer, switch to the <em>Animate</em> tab, and click <em>New Animation</em>.</li>
<li>Depending on the type of animations, you're looking for, select <em>In</em> or <em>Out</em>.</li>
<li>Scroll down to the <em>Blur</em> section and choose a preset you'd like to use.</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Snapping improvement: Visible layers no longer snap with hidden layers.</li>
<li>Big fixes: We've fixed several bugs that could cause the editor to crash when mask groups were ungrouped or when fonts weren't loaded.</li>
</ul>
`,fields:{date:`2025-01-16T00:00:00.000Z`,shortId:`2025-01-16`,slug:`2025-01-16-blur-presets`},frontmatter:{title:`Blur presets`,video:{name:`20250116-blur-presets.mp4`,publicURL:`https://assets.jitter.video/20250116-blur-presets.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now lets you create animations along curved paths! It’s perfect for guiding focus, telling a story, or simply making a point with clarity and impact.</p>
<p>Here's how you can use the new feature:</p>
<ol>
<li>Choose a layer, switch to the <em>Animate</em> tab, and click <em>New Animation</em>.</li>
<li>In the <em>Custom</em> tab, select <em>Move</em>.</li>
<li>Adjust the path's anchor points to sculpt a curve that fits your idea.</li>
</ol>
<p>Of course, you can also tweak duration and easing to ensure every movement feels just right.</p>
<h2>Other improvements</h2>
<ul>
<li>Better snapping: We've made several improvements to snapping between layers.</li>
<li>Better syncing: We've fixed an issue where a file could display a different version when opened on a different computer.</li>
<li>Custom font fix: We've fixed an issue where valid font files would sometimes return an import error.</li>
</ul>
`,fields:{date:`2024-12-17T00:00:00.000Z`,shortId:`2024-12-17`,slug:`2024-12-17-curved-paths`},frontmatter:{title:`Curved paths`,video:{name:`20241217-curved-paths.mp4`,publicURL:`https://assets.jitter.video/20241217-curved-paths.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today, we're excited to announce our first drop of <a href="https://jitter.video/community/">community templates</a>, created by some of the best designers and design studios exclusively for Jitter! Browse and customize motion design templates by <a href="https://jitter.video/community/antinomy/">Antinomy</a>, <a href="https://jitter.video/community/anagram/">Anagram</a>, <a href="https://jitter.video/community/vendredi-society/">Vendredi Society</a>, <a href="https://jitter.video/community/studio-size/">Studio Size</a>, <a href="https://jitter.video/community/fons-mans/">Fons Mans</a>, <a href="https://jitter.video/community/luc-chaissac/">Luc Chaissac</a>, and more. Available now to all Jitter users, for free, no download necessary.</p>
<h2>Other improvements</h2>
<ul>
<li>Copy &#x26; paste easings: You can now copy and paste easings across operations. To do that, select the operation whose easing you'd like to copy, click <em>...</em> next to Animation in the right-hand sidebar, and select <em>Copy easing</em>. Next, select the operation you'd like to apply the easing to, and hit <kbd>⌘</kbd> + <kbd>V</kbd> (or <kbd>Ctrl</kbd> + <kbd>V</kbd> on Windows).</li>
</ul>
`,fields:{date:`2024-11-19T00:00:00.000Z`,shortId:`2024-11-19`,slug:`2024-11-19-community-templates`},frontmatter:{title:`Community templates`,video:{name:`20241119-community-templates.mp4`,publicURL:`https://assets.jitter.video/20241119-community-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Today, we are releasing a new, revamped Lottie exporter to make creating high-quality, infinitely scalable animations easier than ever. Paired with Jitter's advanced easing options and animation presets, this update gives designers an unmatched level of creative freedom and control over their Lottie animations.
Here's what's new in this version of the exporter:</p>
<ul>
<li>Full compatibility with the latest Lottie standards: The new exporter is developed in line with Lottie's latest specification so that your animations always play smoothly across popular Lottie players.</li>
<li>1:1 accuracy with the editor: Exported files are now automatically checked against editor previews, ensuring that the final Lottie file is a perfect reflection of your design.</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Better snapping: We’ve significantly improved snapping, especially when working with nested, rotated layers, for a more intuitive feel.</li>
<li>Improved performance: We’ve made several behind-the-scenes performance tweaks for a faster, more seamless experience when working with the timeline and the file list.</li>
</ul>
`,fields:{date:`2024-10-30T00:00:00.000Z`,shortId:`2024-10-30`,slug:`2024-10-30-new-lottie-exporter`},frontmatter:{title:`New Lottie exporter`,video:{name:`20241030-new-lottie-exporter.mp4`,publicURL:`https://assets.jitter.video/20241030-new-lottie-exporter.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now add blur to your layers and animations in Jitter! With this latest update, you can:</p>
<ul>
<li>Add depth of field and focus points to your videos</li>
<li>Create dreamy gradient blurs</li>
<li>Add bokeh effects to your animations</li>
<li>Create organic transitions and elegant text animations</li>
<li>Apply beautiful mask feathers And more!</li>
</ul>
<p>Here's how you can access the blur effect in Jitter:</p>
<ul>
<li>To add blur to a layer, select the layer in your Jitter file, make sure you're in the <em>Design</em> tab in the right-hand sidebar, and click on <em>Blur</em> at the bottom. You can also adjust the intensity of the blur by changing the value in the <em>Radius</em> field.</li>
<li>To create a blur animation, select the layer you'd like to animate, and make sure you're in the <em>Animate</em> tab in the right-hand sidebar. Click on <em>New Animation</em> -> <em>Custom</em> -> <em>Blur</em>, adjust the params, and you're done!</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Faster file list: Your file list is now much faster to load and scroll.</li>
<li>Lottie fixes: A few improvements for better Lottie export.</li>
<li>Bug fix: We've fixed occasional crashes that could occur when updating the font of text imported from Figma.</li>
</ul>
`,fields:{date:`2024-10-15T00:00:00.000Z`,shortId:`2024-10-15`,slug:`2024-10-15-blur`},frontmatter:{title:`Blur`,video:{name:`20241015-blur.mp4`,publicURL:`https://assets.jitter.video/20241015-blur.mp4`},videoHasAudio:!1,image:null}},{html:`<p>This week, we are shipping a collection of <a href="https://jitter.video/templates/charts/">animated chart templates</a> you can customize to bring your data visualizations to life.
In this new collection, you'll find the most common chart types – bar, line, pie, and donut – with various versions of each chart.
Feel free to use these templates for a variety of projects, from product design and business presentations to social media content and educational visuals.</p>
<h2>Other improvements</h2>
<ul>
<li>Better audio compatibility: We've improved the audio format for exported files, making it compatible with most players and video editing apps.</li>
<li>Animated download button: The download button on the export page is now animated so it's instantly visible.</li>
</ul>
`,fields:{date:`2024-09-16T00:00:00.000Z`,shortId:`2024-09-16`,slug:`2024-09-16-chart-templates`},frontmatter:{title:`Chart templates`,video:{name:`20240916-chart-templates.mp4`,publicURL:`https://assets.jitter.video/20240916-chart-templates.mp4`},videoHasAudio:!1,image:null}},{html:`<p>You can now create a new Jitter file right from your browser's address bar!
Just type <code>jitter.new</code> in any browser, and, if you are logged into your account, you'll land right in the Jitter editor with a new file open.</p>
<h2>Other improvements</h2>
<ul>
<li>Offline / syncing indicator: When working on a Jitter file, you'll now be notified if you're offline or if your changes are being synced to the server, and your collaborators might not be able to see your updates right away.</li>
</ul>
`,fields:{date:`2024-09-02T00:00:00.000Z`,shortId:`2024-09-02`,slug:`2024-09-02-jitter-new`},frontmatter:{title:`jitter.new`,video:{name:`20240902-jitter-new.mp4`,publicURL:`https://assets.jitter.video/20240902-jitter-new.mp4`},videoHasAudio:!1,image:null}},{html:`<p>Jitter now offers tools to arrange layers on the canvas in relation to one another. You'll find the alignment tools at the top of the <em>Design</em> tab. If you select one layer, Jitter will align it in relation to its parent, which could be a group or the entire scene. If you select multiple layers, Jitter will align them in relation to each other.</p>
<p>The available options are:</p>
<ul>
<li>Align left</li>
<li>Align center (horizontally)</li>
<li>Align right</li>
<li>Align top</li>
<li>Align center (vertically)</li>
<li>Align bottom</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Drag &#x26; drop away: You can now drag and drop media into the entire Jitter editor window, not just the canvas.</li>
<li>Big files render faster: We've improved performance for files with complex compositions, which means bigger files will now render faster.</li>
</ul>
`,fields:{date:`2024-08-20T00:00:00.000Z`,shortId:`2024-08-20`,slug:`2024-08-20-alignment-tools`},frontmatter:{title:`Alignment tools`,video:{name:`20240820-alignment-tools.mp4`,publicURL:`https://assets.jitter.video/20240820-alignment-tools.mp4`},image:null}},{html:`<p>You can now reorder folders in your workspace!
Reordering folders works just like you'd expect: simply grab the folder in the sidebar and drag it where you want it to go.</p>
<p><strong>Note:</strong> You can't move folders between workspaces.</p>
<h2>Other improvements</h2>
<ul>
<li>Lighter audio files: This means faster, smoother audio import and much smaller exported file size.</li>
<li>Bug fix: We've fixed the bug that could occasionally cause app crashes when working with empty text layers, timeline selections, and dragging layers.</li>
<li>Bug fix: Sync issues across devices after creating a file have been fixed, meaning your files will now always be up-to-date across different devices and browsers.</li>
</ul>
`,fields:{date:`2024-08-06T00:00:00.000Z`,shortId:`2024-08-06`,slug:`2024-08-06-reordering-folders`},frontmatter:{title:`Reordering folders`,video:{name:`20240806-reorder-folders.mp4`,publicURL:`https://assets.jitter.video/20240806-reorder-folders.mp4`},image:null}},{html:`<p>You heard that right - today we're releasing audio support, our most requested feature to date!</p>
<p>You can now enhance your animations with sound effects, background music, and voiceovers. For a consistent sound and one-of-a-kind feel, Jitter lets you control the volume of your audio, add several tracks to your videos, and visualize the waveforms to perfectly synchronize the sound with your animations.</p>
<p>To add audio to your file, simply click on the 🎵 icon in the top toolbar - and start jamming!</p>
<h2>Other improvements</h2>
<ul>
<li>Opacity shortcut: You can now change a layer's opacity by selecting it and pressing the digits on your keyboard: from 1 (for 10%) to 0 (for 100%).</li>
<li>Faster loading files: Files with large assets now open faster.</li>
</ul>
`,fields:{date:`2024-07-23T00:00:00.000Z`,shortId:`2024-07-23`,slug:`2024-07-23-audio`},frontmatter:{title:`Audio`,video:{name:`20240723-audio-release.mp4`,publicURL:`https://assets.jitter.video/20240723-audio-release.mp4`},videoHasAudio:!0,image:null}},{html:`<p>You can now animate your gradients!</p>
<p>Animating gradients is as easy as creating any other animation in Jitter:</p>
<ol>
<li>Select your layer and click <em>New animation</em></li>
<li>Add a <em>Color</em> animation from the <em>Custom</em> tab in the animation menu</li>
<li>Edit the final state of your gradient And that's it!</li>
</ol>
<p>You can animate all the gradient properties, including:</p>
<ul>
<li>The color, number, and position of the color stops</li>
<li>The position of the gradient on the canvas</li>
</ul>
<p>You can also adjust the duration and easing of your transition to create exactly the effect you want.</p>
`,fields:{date:`2024-06-05T00:00:00.000Z`,shortId:`2024-06-05`,slug:`2024-06-05-gradient-animations`},frontmatter:{title:`Gradient animations`,video:{name:`20240605-gradient-animations.mp4`,publicURL:`https://assets.jitter.video/20240605-gradient-animations.mp4`},image:null}},{html:`<p>Our Lottie exporter just got a significant update, as it now supports all of our mask animations!</p>
<p>The Lottie format does not natively support some specifics of our mask animations, which meant we had to replace all our mask animation presets with a simple fade.</p>
<p>We've now done the hard work to ensure all our mask effects are fully supported when exported in Lottie.</p>
<p>We can’t wait to see all these new effects on your websites and apps!</p>
`,fields:{date:`2024-05-07T00:00:00.000Z`,shortId:`2024-05-07`,slug:`2024-05-07-lottie-mask-animations`},frontmatter:{title:`Mask animations in Lottie`,video:{name:`20240507-lottie-mask-animations.mp4`,publicURL:`https://assets.jitter.video/20240507-lottie-mask-animations.mp4`},image:null}},{html:`<p>You can now perform batch actions on multiple files!</p>
<p>To select multiple files, go to your file list and:</p>
<ol>
<li>Press <kbd>⇧</kbd></li>
<li>Click on each file you want to select</li>
</ol>
<p>Afterwards, use the toolbar at the bottom of the screen to perform one of the following actions:</p>
<ul>
<li><strong>Move to folder</strong> to move selected files to a chosen folder</li>
<li><strong>Duplicate</strong> to create copies of selected files in the same location</li>
<li><strong>Delete</strong> to move selected files to Trash</li>
</ul>
<p>You can also press <kbd>⌘</kbd> <kbd>A</kbd> (or <kbd>ctrl</kbd> <kbd>A</kbd> on Windows) to select all files in a folder. And to deselect all files, press <kbd>esc</kbd> or click anywhere outside of a file thumbnail.</p>
`,fields:{date:`2024-04-29T00:00:00.000Z`,shortId:`2024-04-29`,slug:`2024-04-29-multi-select-files`},frontmatter:{title:`Multi-select files`,video:{name:`20240429-multi-select-files.mp4`,publicURL:`https://assets.jitter.video/20240429-multi-select-files.mp4`},image:null}},{html:`<p>We just improved the way you can edit gradients with new options.
First, we added a toolbar with 3 buttons:</p>
<ul>
<li><strong>Rotate.</strong> Make the gradient switch between the horizontal, diagonal, and vertical positions clockwise</li>
<li><strong>Flip.</strong> Swap the colors of the gradient along its axis for a mirror effect</li>
<li><strong>Space evenly.</strong> Make the color stops of the gradient evenly spaced</li>
</ul>
<p>We also added a power move: hold <kbd>⌥</kbd> (<kbd>alt</kbd> on Windows) to edit the end points of your gradient symmetrically.
Instead of having to move the end points separately, you can now edit your gradients in one move!</p>
<h2>Other improvements</h2>
<ul>
<li><kbd>⌘</kbd> <kbd>A</kbd> or <kbd>ctrl</kbd> <kbd>A</kbd> to select all your layers, or all your animations at once.</li>
<li>You can now create a group from just one selected layer (where previously a minimum of two layers was required).</li>
</ul>
`,fields:{date:`2024-04-04T00:00:00.000Z`,shortId:`2024-04-04`,slug:`2024-04-04-gradient-shortcuts`},frontmatter:{title:`Gradient shortcuts`,video:{name:`20240404-gradient_powermove.mp4`,publicURL:`https://assets.jitter.video/20240404-gradient_powermove.mp4`},image:null}},{html:`<p>Collaboration in Jitter just got even easier: you can now share your files with anyone, anywhere!</p>
<p>Click the Share button at the top right of the Editor to quickly generate a shareable URL for your file: this link grants immediate, view-only access to your work.</p>
<p>Collaborators can now view your files even if they don't have a Jitter account, making it easier for them to see your creations and provide feedback.</p>
<p>And rest assured, your original work stays safe since the access is view-only for anyone outside your team.</p>
`,fields:{date:`2024-03-27T00:00:00.000Z`,shortId:`2024-03-27`,slug:`2024-03-27-file-sharing`},frontmatter:{title:`File sharing`,video:{name:`20240327-file-sharing.mp4`,publicURL:`https://assets.jitter.video/20240327-file-sharing.mp4`},image:null}},{html:`<p>Right back at ya! Make your GIFs more fun with a boomerang effect. 🪃</p>
<p>You now have 3 types of GIF effects to choose from at the export:</p>
<ul>
<li><strong>Loop</strong>: will repeat your animation infinitely.</li>
<li><strong>No loop</strong>: will play your animation once.</li>
<li>🆕 <strong>Boomerang</strong>: will create an infinite loop of your animation playing forward and backward.</li>
</ul>
<p>You can apply the Boomerang effect from the settings of the export page, and it is available for GIFs only.</p>
`,fields:{date:`2024-03-20T00:00:00.000Z`,shortId:`2024-03-20`,slug:`2024-03-20-boomerang-export`},frontmatter:{title:`Boomerang export`,video:{name:`20240320-boomerang.mp4`,publicURL:`https://assets.jitter.video/20240320-boomerang.mp4`},image:null}},{html:`<p>You can now create and edit gradients directly in Jitter!</p>
<p>We support two types of gradients:</p>
<ul>
<li><strong>Linear</strong>: This is a progressive transition between two or more colors along a straight line.</li>
<li><strong>Radial</strong>: This is a circular gradient with a color stop at the center that transitions to other colors towards the edge.</li>
</ul>
<p>You can apply these gradients to the scene and all native shapes, including rectangles, ellipses, and stars.
Support for gradients on text layers will be available in a future update.</p>
<p>This update comes with a fully redesigned color picker:</p>
<ul>
<li>To add a color stop to the gradient, click on the gradient slider in the picker</li>
<li>To remove a color stop, right-click on the stop and select “Delete” from the context menu
These interactions also work directly on the canvas.</li>
</ul>
<p>Our Figma plugin has also been updated: now, the gradients in your Figma file are imported natively, and you can edit them in Jitter.</p>
`,fields:{date:`2024-03-13T00:00:00.000Z`,shortId:`2024-03-13`,slug:`2024-03-13-gradients`},frontmatter:{title:`Gradients`,video:{name:`20240313-gradients.mp4`,publicURL:`https://assets.jitter.video/20240313-gradients.mp4`},image:null}},{html:`<p>We’re launching a new Discord server to bring our community together in one central location.</p>
<p>Join us to showcase your amazing animations, meet talented designers, and discover exclusive Community templates
We can’t wait to see all your creations and ideas!</p>
<p>Join us 👉 https://discord.gg/FhZEmxZJ6e</p>
`,fields:{date:`2024-02-28T00:00:00.000Z`,shortId:`2024-02-28`,slug:`2024-02-28-jitter-community-is-live`},frontmatter:{title:`Jitter Community is live`,video:{name:`20240228-jitter-community-is-live.mp4`,publicURL:`https://assets.jitter.video/20240228-jitter-community-is-live.mp4`},image:null}},{html:`<p>We've revamped the My Files page to let you create folders in your team workspaces!
This makes it much easier to manage your files and to keep your workspaces neat and tidy.</p>
<p>To create a new folder in a team, you can head to your file list and:</p>
<ol>
<li>Locate the Team to which you want to add your folder, in the side bar on the left</li>
<li>Click on the “New folder” button</li>
<li>Give it a name and validate</li>
</ol>
<p>To move a file in a folder, you can:</p>
<ol>
<li>Right-click on the file</li>
<li>Select the “Move to…” option</li>
<li>Select the new folder</li>
</ol>
<p>Folders start rolling out for teams on the Jitter Pro plan.</p>
`,fields:{date:`2024-02-08T00:00:00.000Z`,shortId:`2024-02-08`,slug:`2024-02-08-folders-for-teams`},frontmatter:{title:`Folders for teams`,video:{name:`20240208-folders-for-teams.mp4`,publicURL:`https://assets.jitter.video/20240208-folders-for-teams.mp4`},image:null}},{html:`<p>Jitter is the first fully collaborative motion design tool, and team workspaces play a central part in it.</p>
<p>To improve the onboarding experience, we added a screen that lets new users invite their teammates.</p>
<p>This will automatically create a Jitter team, and ask your collaborators if they want to join.</p>
<p>The teams can always be joined, left or edited afterward as well.</p>
`,fields:{date:`2024-01-31T00:00:00.000Z`,shortId:`2024-01-31`,slug:`2024-01-31-onboarding-invite-teammates`},frontmatter:{title:`Onboarding: invite teammates`,video:{name:`20240131-onboarding-invite-teammates.mp4`,publicURL:`https://assets.jitter.video/20240131-onboarding-invite-teammates.mp4`},image:null}},{html:`<p>We just improved how you can position layers on the canvas:
you can now easily space out layers with equal distance between them, with improved snapping!</p>
<p>When moving an item and the distance to its siblings matches, Jitter will display a guide between these items with a measurement of the gap between them.</p>
<p>Same-distance snapping between layers works with any kind of item:</p>
<ul>
<li>Artboard / scene</li>
<li>Texts</li>
<li>Vector shapes (rectangles, ellipses, stars)</li>
<li>Media shapes (images, videos, GIFs, SVGs)</li>
</ul>
`,fields:{date:`2023-12-20T00:00:00.000Z`,shortId:`2023-12-20`,slug:`2023-12-20-distance-snapping`},frontmatter:{title:`Distance snapping`,video:{name:`20231220-distance-snapping.mp4`,publicURL:`https://assets.jitter.video/20231220-distance-snapping.mp4`},image:null}},{html:`<p>We know the first impression is important, so we just made major improvements to the sign-up and first-time user experience:
everyone in your team will now get a step-by-step introduction to Jitter, and get some insights on how to get setup their workspace effectively.</p>
<p>If you are an existing user, you can initiate this first-time introduction by typing <a href="/onboarding">jitter.video/onboarding</a> in your address bar.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed an issue that could prevent thumbnail updates to be displayed.</li>
<li>Fixed an issue that could crash the editor when editing a text layer.</li>
<li>Fixed an issue where the focus of a text layer could be lost when editing it.</li>
</ul>
`,fields:{date:`2023-12-06T00:00:00.000Z`,shortId:`2023-12-06`,slug:`2023-12-06-new-onboarding-flow`},frontmatter:{title:`New onboarding flow`,video:{name:`20231206-onboarding.mp4`,publicURL:`https://assets.jitter.video/20231206-onboarding.mp4`},image:null}},{html:`<p>We are releasing a major improvement to our Lottie exporter, as it now supports all our text animations!</p>
<p>The Lottie format does not support text animations natively: until now, we had to replace all the text animation presets by a simple fade when exported to Lottie.</p>
<p>But we did all the heavy lifting, and we're super excited to announce that all our text effects are now fully supported when exported in Lottie. ✨</p>
<p>We are sure this will bring app and website animations to the next level, and we can't wait to see what you create with it!</p>
`,fields:{date:`2023-11-29T00:00:00.000Z`,shortId:`2023-11-29`,slug:`2023-11-29-text-animations-in-lottie`},frontmatter:{title:`Text animations in Lottie`,video:{name:`20231129-text-animations-in-lottie.mp4`,publicURL:`https://assets.jitter.video/20231129-text-animations-in-lottie.mp4`},image:null}},{html:`<p>You can now find shortcuts to speed up your workflow in most parts of the Editor, and we've added shortcut hints in all the dropdown menus.
In case you need to find all of them, here they are:</p>
<h3>General</h3>
<ul>
<li><kbd>⌘</kbd> <kbd>C</kbd> or <kbd>ctrl</kbd> <kbd>C</kbd> → Copy</li>
<li><kbd>⌘</kbd> <kbd>X</kbd> or <kbd>ctrl</kbd> <kbd>X</kbd> → Cut</li>
<li><kbd>⌘</kbd> <kbd>V</kbd> or <kbd>ctrl</kbd> <kbd>V</kbd> → Paste</li>
<li><kbd>delete</kbd> or <kbd>⌫</kbd> → Delete</li>
<li><kbd>⌘</kbd> <kbd>Z</kbd> or <kbd>ctrl</kbd> <kbd>Z</kbd> → Undo</li>
<li><kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>Z</kbd> or <kbd>⇧</kbd> <kbd>ctrl</kbd> <kbd>Z</kbd> → Redo</li>
</ul>
<h3>Tools</h3>
<ul>
<li><kbd>R</kbd> → Rectangle tool</li>
<li><kbd>O</kbd> → Ellipse tool</li>
<li><kbd>T</kbd> → Text tool</li>
</ul>
<h3>View</h3>
<ul>
<li><kbd>+</kbd> or <kbd>=</kbd> → Zoom in</li>
<li><kbd>-</kbd> → Zoom out</li>
<li><kbd>1</kbd> or <kbd>)</kbd> → Zoom to 100%</li>
<li><kbd>H</kbd> or middle click → Pan</li>
</ul>
<h3>Timeline</h3>
<ul>
<li><kbd>space</kbd> → Play / Pause</li>
<li><kbd>←</kbd> <kbd>→</kbd> → Move animation by ±10ms</li>
<li><kbd>⇧</kbd> + <kbd>←</kbd> <kbd>→</kbd> → Move animation by ±100ms</li>
<li><kbd>,</kbd> and <kbd>.</kbd> → Move time cursor by ±10ms</li>
<li><kbd>⇧</kbd> + <kbd>,</kbd> and <kbd>.</kbd> → Move time cursor by ±100ms</li>
<li><kbd>⌥</kbd> + <kbd>,</kbd> and <kbd>.</kbd> → Move time cursor to the previous or next animation</li>
<li><kbd>⇧</kbd> <kbd>⌥</kbd> + <kbd>,</kbd> and <kbd>.</kbd> → Move to the beginning or end of the scene</li>
</ul>
<h3>Layers</h3>
<ul>
<li><kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> → Move element by 1px</li>
<li><kbd>⇧</kbd> + <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> → Move element by 10px</li>
<li><kbd>⌘</kbd> <kbd>G</kbd> or <kbd>ctrl</kbd> <kbd>G</kbd> → Group</li>
<li><kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>G</kbd> or <kbd>⇧</kbd> <kbd>ctrl</kbd> <kbd>G</kbd> → Ungroup</li>
<li><kbd>⌃</kbd> <kbd>⌘</kbd> <kbd>M</kbd> → Create mask</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Unified dropdown menus behavior across the file list and the Editor.</li>
<li>Fixed a drag-and-drop bug that could corrupt a file.</li>
<li>Fixed a crash that could happen when editing a text.</li>
<li>Fixed a layout bug on the export page.</li>
</ul>
`,fields:{date:`2023-11-15T00:00:00.000Z`,shortId:`2023-11-15`,slug:`2023-11-15-keyboard-shortcuts`},frontmatter:{title:`Keyboard shortcuts`,video:{name:`20231115-keyboard-shortcuts.mp4`,publicURL:`https://assets.jitter.video/20231115-keyboard-shortcuts.mp4`},image:null}},{html:`<p>We are really excited to give more control over the easing curves, to help you craft your animations the way you want.</p>
<p>The easing determines the acceleration of the transition between the beginning and the end of an animation.
It helps communicate movement and emotion, and makes your animation more natural or expressive.
It is a core part of your brand identity, so it is important to give as much control as possible over it.</p>
<p>In this update, we introduce the easing <strong>intensity</strong>.
This is a simple yet efficient way to control how the animation will look like:</p>
<ul>
<li>At lower intensities, the easing will feel smoother and softer,</li>
<li>At higher intensities, the easing will feel steeper and stronger.</li>
</ul>
<p>We did all the hard work to provide you with the best-looking easing curves, so that you can focus on the expressivity of your motion.</p>
<p>We also added more easing presets, and they all come with their intensity sliders:</p>
<h3>Smooth</h3>
<p>This is the default easing preset.
It starts the animation slowly, accelerates in the middle, and makes the object land in its final position smoothly.
This is how objects usually behave in the physical world: when in doubt, this is the preset you should use.</p>
<h3>Natural</h3>
<p>This preset is a variation of the <strong>Smooth</strong> easing preset.
Similarly, it starts and ends the animation slowly, in a symmetrical manner.
This is a perfect preset for objects that stay on screen.</p>
<h3>Slow down</h3>
<p>This preset makes the animation start fast, and slow down as it reaches the end of the transition.
It works well for making objects appear into view.</p>
<h3>Accelerate</h3>
<p>This preset is the opposite of the <strong>Slow down</strong> easing preset.
It makes the object start slowly, and accelerate as it reaches the end of its transition.
It works well for transitioning objects out of view.</p>
<h3>Elastic</h3>
<p>This easing preset adds a dynamic and bouncy effect to transitions, mimicking the behavior of a physical spring being stretched and released.
It makes the transitions look playful and natural.
It is widely used in iOS interface design, and to put emphasis on your content.</p>
<h3>Bounce</h3>
<p>This easing preset mimics what happens when you drop something on the floor.
It will first accelerate downwards, and then bounce back up after hitting the floor.
It is a playful preset to make object appear with emphasis.</p>
<h3>Overshoot</h3>
<p>This preset is similar to the <strong>Slow down</strong> easing preset, but it starts faster and makes the animation go beyond the target value, before smoothly getting back to the end position.
Similarly, it works well to make objects appear into view.</p>
<h3>Impulse</h3>
<p>Before starting the action, the object will move in the opposite direction.
This is a technique commonly used in motion design to prepare the audience that something is about to happen, and reinforce the main motion.
Much like the <strong>Accelerate</strong> easing preset, this preset works well to make objects transition out of view.</p>
<h3>Swing</h3>
<p>This preset is another very natural way of moving objects in your scene.
It starts with an anticipation movement (like the <strong>Impulse</strong> easing preset), accelerates in the middle, and goes past the end position before slowing coming back (like the <strong>Overshoot</strong> preset).</p>
<h3>None</h3>
<p>When no easing is applied, the transition happens at a constant speed.
This is often the way to go for opacity and color transitions.
However, this is generally not recommended for other types of animations, as it makes the object look unnatural or robotic.
It can work in some cases though – for instance when you want to add a perpetual motion to your scene.
Think of a spinning object, or a scrolling banner.</p>
<p>We are really excited about these new customization capabilities, and can't wait to see how it will help you elevate your brand.</p>
<h2>Other improvements</h2>
<ul>
<li>Reorganised the templates.</li>
<li>Improved quality of the .webm exports.</li>
<li>Improved the flow to create and delete a team.</li>
<li>Improved the styling of the side panel.</li>
<li>Fixed a bug preventing the change of FPS in an APNG export.</li>
<li>Fixed a bug where editing multiple Move actions in multiplayer would not work properly.</li>
<li>Fixed a bug where some fields of the inspector would take focus inappropriately.</li>
<li>Fixed a display issue in the pricing FAQ.</li>
<li>Fixed a bug that would export GIFs with another frame rate as the one selected.</li>
</ul>
`,fields:{date:`2023-11-08T00:00:00.000Z`,shortId:`2023-11-08`,slug:`2023-11-08-easings-intensity`},frontmatter:{title:`Custom easings`,video:{name:`20231108-custom-easings.mp4`,publicURL:`https://assets.jitter.video/20231108-custom-easings.mp4`},image:null}},{html:`<p>This release introduces several improvements in our renderer, that will make your editing experience smoother.
This includes working with masks and other advance design and animation features, especially in large projects.
Enjoy an even faster editing experience!</p>
<h2>Other improvements</h2>
<ul>
<li>Added onboarding modal to help first-time users get started.</li>
<li>Improved styling of the onboarding modal.</li>
<li>Improved color precision in Lottie exports.</li>
<li>Improved the snapping rules when moving group children in the editor.</li>
<li>Restored the option to use a full-resolution image in the editor.</li>
<li>Fixed an issue where renaming a layer with a double-click would not work.</li>
<li>Fixed an issue where text layers could blink when entering the “edit” mode.</li>
</ul>
`,fields:{date:`2023-10-18T00:00:00.000Z`,shortId:`2023-10-18`,slug:`2023-10-18-performance-improvements`},frontmatter:{title:`Performance improvements`,video:{name:`20231018-performance-improvements.mp4`,publicURL:`https://assets.jitter.video/20231018-performance-improvements.mp4`},image:null}},{html:`<p>We are improving our collaboration capabilities to make people feel like they are in the same room:
whenever you open a file, we now add your avatar to the toolbar.
This allows everyone to see who is currently accessing the file.
And if you hover over a person's avatar, you will see their name so that you know exactly who else on your team is collaborating with you!</p>
<h2>Other improvements</h2>
<ul>
<li>The export menu is now compatible with keyboard navigation and typeahead.</li>
<li>Improved the display of the default profile pictures in the side bar.</li>
<li>Improved the descriptions in all the sections in the Settings to make them easier to understand.</li>
<li>Updated the color of the default profile pictures.</li>
<li>Unified styling of the text in all the Settings pages.</li>
<li>We now display the Team picture on the screen to accept the invitation to join a team.</li>
<li>Improved the role picker in the team member settings.</li>
<li>Improved keyboard shortcuts when editing a text.</li>
<li>We now handle special line break characters properly.</li>
<li>After ungrouping a selection, all the children elements remain selected.</li>
</ul>
`,fields:{date:`2023-09-27T00:00:00.000Z`,shortId:`2023-09-27`,slug:`2023-09-27-live-avatars`},frontmatter:{title:`Live avatars`,video:{name:`20230927-live-avatars.mp4`,publicURL:`https://assets.jitter.video/20230927-live-avatars.mp4`},image:null}},{html:`<p>We've updated the font picker to let you find your favorite fonts more easily.
You can now use the search field at the top of the menu to search the font list by name.</p>
<p>The font menu is also now fully compatible with keyboard navigation, with:</p>
<ul>
<li>The arrow keys <kbd>↑</kbd> and <kbd>↓</kbd> to navigate between fonts</li>
<li>The Escape key <kbd>esc</kbd> to close the menu</li>
<li>The Enter key <kbd>⏎</kbd> to select the font that is currently highlighted</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Increased the maximum export size available, up to 5760x1080.</li>
<li>Improved the automatic selection between transparent and non transparent export profiles.</li>
<li>Improved the fonts antialiasing in the Editor canvas.</li>
<li>Improved the crispiness of the Editor canvas when zooming in.</li>
<li>Improved the drawing performance of the Editor canvas for large artboards.</li>
<li>Improved the display of stroked ellipses in the Editor canvas.</li>
<li>Restored the display of color animations targeting the artboard in the Editor timeline.</li>
<li>Fixed an issue that could crash the app when a text layer using multiple fonts was edited.</li>
<li>Fixed an issue that could crash the app when a complex selection was duplicated.</li>
<li>Fixed an issue leading to the immediate close of the animation menu when opening it.</li>
</ul>
`,fields:{date:`2023-09-06T00:00:00.000Z`,shortId:`2023-09-06`,slug:`2023-09-06-search-fonts`},frontmatter:{title:`Search fonts`,video:{name:`20230906-search-fonts.mp4`,publicURL:`https://assets.jitter.video/20230906-search-fonts.mp4`},image:null}},{html:`<p>This week, we are introducing 20+ new templates to help you showcase your design work in a more engaging way.
Use these animated device mockups to create a showreel, showcase your designs on Dribbble, share your work in a presentation, or anything else you can think of!</p>
<p>These templates cover the most common devices you design for - smartphones, tablets, and computers, - and include a wide range of animations, such as screen transitions and scrolling effects.</p>
<p>The best part?
You can mix and match several templates by simply copying and pasting the scenes you’d like to use in your file.</p>
<p>To access the new animated device templates in Jitter, simply navigate to the <a href="https://jitter.video/templates/">Templates</a> section, click on the <a href="https://jitter.video/templates/devices/">Devices</a> category, and select the desired template that best suits your project's needs.</p>
<p>We hope these new additions can enhance your design presentations and provide you with exciting ways to showcase your work to clients and stakeholders.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved the loading performance of the Editor.</li>
<li>Fixed an issue preventing the edition of multiple layers at once.</li>
<li>Fixed an issue with useless alignment anchors being displayed when moving a group of layers.</li>
<li>Fixed an issue with non matching colors being exported in Lottie.</li>
</ul>
`,fields:{date:`2023-08-16T00:00:00.000Z`,shortId:`2023-08-16`,slug:`2023-08-16-new-animated-device-templates`},frontmatter:{title:`New animated device templates`,video:{name:`20230816-new-animated-device-templates.mp4`,publicURL:`https://assets.jitter.video/20230816-new-animated-device-templates.mp4`},image:null}},{html:`<p>We added keyboard navigation to all the dropdown menus in the Editor and in other places of the Jitter app.
This makes the app faster and easier to use for people who feel more productive using their keyboards.</p>
<p>You can now navigate the menus using:</p>
<ul>
<li>The arrow keys <kbd>↑</kbd> and <kbd>↓</kbd> to navigate between items</li>
<li>The Escape key <kbd>esc</kbd> to close the menu</li>
<li>The Enter key <kbd>⏎</kbd> to select the item that is currently highlighted</li>
</ul>
<p>We even added support for typeahead:
once a dropdown menu is opened, you can start typing a word (for instance “Copy” or “Duplicate”), and this will automatically highlight the closest-matching item in the menu.</p>
<p>We improved two types of dropdown menus:</p>
<ul>
<li>Contextual menus, also known as "right click" or "pop up" menus, which provide quick access to options when you interact with Jitter</li>
<li>Select menus, that allow users to choose between multiple options in a field of the property panel (<em>e.g.</em> the menu to select fonts)</li>
</ul>
`,fields:{date:`2023-08-02T00:00:00.000Z`,shortId:`2023-08-02`,slug:`2023-08-02-keyboardnavigation-menus`},frontmatter:{title:`Keyboard navigation: dropdown menu`,video:{name:`20230802-keyboard-shortcut-menus.mp4`,publicURL:`https://assets.jitter.video/20230802-keyboard-shortcut-menus.mp4`},image:null}},{html:`<p>You can now export your animations in 4K.
This option is now available in the Export menu in the Editor, and on the Export page.
It is compatible both for landscape and portrait formats.
Your videos now look sharper and more detailed, allowing you to showcase your work in the highest quality possible.</p>
<h2>Other improvements</h2>
<ul>
<li>Added a context menu on the side bar's team items to access settings and add members more easily.</li>
<li>Fixed an issue that could happen when deleting a layer being dragged by someone else.</li>
<li>Fixed a bitrate issue with transparent webm exports.</li>
<li>Fixed an issue with Chrome 114 preventing our GIF exporter to work properly.</li>
</ul>
`,fields:{date:`2023-07-19T00:00:00.000Z`,shortId:`2023-07-19`,slug:`2023-07-19-4k-exports`},frontmatter:{title:`Export in 4K`,video:{name:`20230719-4K-exports.mp4`,publicURL:`https://assets.jitter.video/20230719-4K-exports.mp4`},image:null}},{html:`<p>Introducing Jitter for Teams!
You and your teammates can now collaborate seamlessly on your designs and animations.
Jitter for Teams solves some of the biggest problems that designers, design teams, and stakeholders (like clients, marketers, and developers) face in the creation process.</p>
<p>Here are the main benefits:</p>
<ul>
<li>Designers can co-create in real-time and iterate rapidly on the same files with their peers, in real-time</li>
<li>Everyone is now on the same page and teams get aligned faster (no more file version problems)</li>
<li>Review processes are 10x easier (no more exporting videos, sending them over Slack or email, and waiting for feedback), and designers get their work approved faster</li>
<li>Designers can hand off their work to marketers (who can iterate on the content) and developers (who can inspect animations) so that everyone focuses on what they do best</li>
</ul>
<p>This will transform the way design teams and stakeholders create content – here are all the features that come with it:</p>
<h3>Shared workspace</h3>
<p>You and your team can now have all your files in the same workspace.
And you always get the latest version: no more tedious file sharing, endless back-and-forth exchanges, or final_final_v2 versions.
Everything is always in sync, and you are all on the same page.</p>
<h3>Real-time collaboration</h3>
<p>You can now edit your designs and animations together, in real-time:</p>
<ul>
<li>Avatar stack → Whenever you open a file, we add your avatar to the toolbar at the top of the Editor, and you'll see everyone else that is currently editing the file.</li>
<li>Live cursors → If your teammates are editing the same file, you'll see their cursors move in real-time on the canvas.</li>
<li>Live selection → And whenever they select an object on the canvas or an animation in the timeline, you'll also see their selection in real-time.</li>
</ul>
<p>And that's not all!
Everything works seamlessly even if you don't have an internet connection:
when you reconnect, we'll just sync your changes in your files.</p>
<h3>Unlimited teams and collaborators</h3>
<p>You can now create your team from the side bar in the File list.
Just enter a name, invite your teammates with their emails, and you're ready to go!
It's as simple as that.</p>
<h3>Admin tools</h3>
<p>You can now manage all your team in the same place: see who is on your team, add and remove members, change their permissions…
You can do all of this from the new Team Settings page.</p>
<h3>Centralized billing</h3>
<p>When you upgrade your team to the Team plan, you now benefit from a centralized billing for all your team members.
Enter your payment and billing info once, and we'll manage the rest for you.</p>
<p>And getting started with Jitter for Teams is easy:</p>
<ol>
<li>Create a team from the Files page</li>
<li>Invite your teammates via email</li>
<li>Collaborate!</li>
</ol>
<p>This is a huge milestone for Jitter, and one big step towards making motion design accessible to anyone.
We can't wait to see how these new collaboration features improve your workflows and unleash your creativity as a team.</p>
<p>Time to create together! ✨</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a selection issue when double clicking on a text layer.</li>
<li>Fixed keyboard cut shortcuts not working in text layers.</li>
<li>Fixed move animation handles not working with text layers.</li>
<li>Greatly improved ProRes4444 export speed.</li>
</ul>
`,fields:{date:`2023-07-05T00:00:00.000Z`,shortId:`2023-07-05`,slug:`2023-07-05-jitter-for-teams`},frontmatter:{title:`Jitter for Teams`,video:{name:`20230715-jitter-for-teams.mp4`,publicURL:`https://assets.jitter.video/20230715-jitter-for-teams.mp4`},image:null}},{html:`<h2>Improved GIF export</h2>
<p>This update brings a significant improvement to the GIF exporting process, resulting in faster exports and significantly smaller file sizes.</p>
<p>On average, GIFs now export 2x faster on average (and up to 3x faster in some cases), allowing you to create and share your work in record time, even for complex and lengthy animations.</p>
<p>The new GIF exporter also significantly reduces the file size of exported GIFs: on average, the file sizes are now 2x smaller, making it easier to share your creations across various platforms.
The exporter even achieves file size reductions of up to ten times for certain GIFs, optimizing storage and bandwidth usage without compromising on visual quality.</p>
<p>With these enhancements, Jitter ensures that your GIF creation process is more efficient, allowing you to produce stunning animations with less time and effort.
If you are using GIFs in your email campaigns, these gains are absolute game-changers.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed an issue that made some Lottie exports appear off-center.</li>
</ul>
`,fields:{date:`2023-06-14T00:00:00.000Z`,shortId:`2023-06-14`,slug:`2023-06-14-improved-gif-export`},frontmatter:{title:`Improved GIF export`,video:{name:`20230614-improved-gif-export.mp4`,publicURL:`https://assets.jitter.video/20230614-improved-gif-export.mp4`},image:null}},{html:`<h2>Timeline selection rectangle</h2>
<p>We dramatically improved the way you can select animations in the timeline.
Previously, it was only possible to select multiple animations by manually clicking on each of them.
We are now adding a new way to select multiple animations in the timeline in a single gesture, with a selection rectangle.</p>
<p>To select multiple animations with the selection rectangle, you can click on the timeline and drag your mouse.
All the animations that intersect that rectangle will be added to the selection.</p>
<p>If you want to add other elements to your existing selection, you can hold <kbd>⇧</kbd> and draw another rectangle.
If the rectangle interesects elements that were already in the selection, they will be removed from the selection.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed an issue that could prevent a GIF export to succeed.</li>
<li>Improved the loading experience while the GIF export is starting.</li>
<li>Improved the rendering of SVG in some configurations of the Lottie export.</li>
<li>Renaming a file in the editor is not in the Undo/Redo history anymore.</li>
<li>Improved the layout of the templates page.</li>
</ul>
`,fields:{date:`2023-06-07T00:00:00.000Z`,shortId:`2023-06-07`,slug:`2023-06-07-timeline-selection-rectangle`},frontmatter:{title:`Timeline selection rectangle`,video:{name:`20230607-timeline-selection-rectangle.mp4`,publicURL:`https://assets.jitter.video/20230607-timeline-selection-rectangle.mp4`},image:null}},{html:`<p>We are excited to announce the latest update to Jitter's template library: template categories!</p>
<p>With a growing number of templates available, it can be overwhelming to find the perfect one for your project.
That's why we are now organizing our templates into categories.
This makes it easier for you to find exactly what you're looking for.</p>
<p>Whether you're designing interfaces, apps, websites, or creating content for social media, videos, advertising, or something else entirely, our template categories will help you quickly narrow down your options and find the perfect starting point.</p>
<p>We hope this new feature will enhance your experience and make it even simpler to create outstanding content with Jitter.</p>
`,fields:{date:`2023-05-29T00:00:00.000Z`,shortId:`2023-05-29`,slug:`2023-05-29-template-categories`},frontmatter:{title:`Template categories`,video:{name:`20230529-template-categories.mp4`,publicURL:`https://assets.jitter.video/20230529-template-categories.mp4`},image:null}},{html:`<p>We are thrilled to announce the latest version of our <a href="https://www.figma.com/community/plugin/961270034818256057">Figma plugin</a>.</p>
<p>Previously, exporting a Figma frame to Jitter was a simple one-click process, but it did have its limitations.
You could only import top-level frames (and not individual layers), which made the workflow less efficient.
Moreover, if you re-exported the same frame to an existing Jitter project and the layer hierarchy had changed, you could lose some of your animations without any way of retrieving them.</p>
<p>Today, we are introducing a new version of our Figma plugin that makes the import process much more efficient and secure.</p>
<p>Here's how it works:</p>
<ol>
<li>Open the plugin in Figma and select the frame you wish to import.</li>
<li>Click on the plugin button to copy the frame.</li>
<li>Go to your Jitter file and paste the element using <kbd>⌘</kbd> <kbd>V</kbd> – on Windows, use <kbd>ctrl</kbd> <kbd>V</kbd>.</li>
</ol>
<p><em>Pro tip:</em> If you made changes in your Figma file and want to sync them in Jitter, use the <em>Paste and replace</em> feature by pressing <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>V</kbd> – on Windows, use <kbd>shift</kbd> <kbd>ctrl</kbd> <kbd>V</kbd>.
This feature will preserve your animations in the timeline, provided that the hierarchy of your animated layers hasn't changed.</p>
<p>This new plugin is much more flexible and is designed to support exciting future updates.
You can install the new plugin from <a href="https://www.figma.com/community/plugin/961270034818256057">Figma Community</a>, and we can’t wait to see how it speeds up your workflow!</p>
<h2>Other improvements</h2>
<ul>
<li>Allowed the editing of multiple operations simultaneously in the right side inspector.</li>
<li>Fixed an issue that could prevent a file rename from being saved.</li>
<li>Fixed an issue where a preset converted into operations had the wrong duration.</li>
</ul>
`,fields:{date:`2023-05-22T00:00:00.000Z`,shortId:`2023-05-22`,slug:`2023-05-22-copy-and-paste-from-figma`},frontmatter:{title:`Copy and paste from Figma`,video:{name:`20230522-copy-and-paste-from-figma.mp4`,publicURL:`https://assets.jitter.video/20230522-copy-and-paste-from-figma.mp4`},image:null}},{html:`<p>This week, we are introducing new ways to navigate in the timeline with your keyboard.
Previously, you could only move the time cursor by using your mouse.
And in some cases, this could lack precision.</p>
<p>Starting today, here are the shortcuts you can use to move the time cursor with your keyboard:</p>
<ul>
<li><kbd>,</kbd> and <kbd>.</kbd> to move by ±10ms</li>
<li><kbd>⇧</kbd> <kbd>,</kbd> and <kbd>⇧</kbd> <kbd>.</kbd> to move by ±100ms</li>
<li><kbd>⌥</kbd> <kbd>,</kbd> and <kbd>⌥</kbd> <kbd>.</kbd> to move to the previous or next animation</li>
<li><kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>,</kbd> and <kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>.</kbd> to move to the beginning or end of the scene</li>
</ul>
<p>These shortcuts not only make Jitter more accessible, but they also make it much easier to place the time cursor exactly where you need to.</p>
<p><em>Pro tip:</em> on QWERTY keyboards, you can replace <kbd>,</kbd> and <kbd>.</kbd> by the <kbd>&#x3C;</kbd> and <kbd>></kbd> keys, making this shortcut even easier to remember.</p>
<h2>Other improvements</h2>
<ul>
<li>You can now upload and update your profile picture in the Settings</li>
<li>You can now update your name in the Settings</li>
<li>Improved the animations of the information toasts in the Editor</li>
<li>Improved the way we load assets while opening a Jitter file\xA0– the Editor now launches faster</li>
</ul>
`,fields:{date:`2023-04-14T00:00:00.000Z`,shortId:`2023-04-14`,slug:`2023-04-14-timeline-keyboard-navigation`},frontmatter:{title:`Timeline keyboard navigation`,video:{name:`20230414-timeline-keyboard-navigation.mp4`,publicURL:`https://assets.jitter.video/20230414-timeline-keyboard-navigation.mp4`},image:null}},{html:`<p>We are excited to announce the addition of new templates to our gallery!
This week, we are introducing a variety of professionally designed templates that you can use as examples to start from.
You'll find new templates in 3 main categories:</p>
<ul>
<li>Animated stories – for Instagram and other social media,</li>
<li>Animated UI elements,</li>
<li>Templates to showcase your work in mobile device frames – for instance for Dribbble shots.</li>
</ul>
<p>Templates can help you create faster by providing a starting point for your designs.
Rather than creating a design from scratch, you can use one of our pre-designed templates as a foundation and customize it to fit your needs.
This saves time and effort while still allowing you to create unique and effective designs.
Additionally, templates can serve as inspiration if you struggle to come up with ideas or need help visualizing a concept.</p>
<p>We are continuously working on adding more relevant templates to the gallery, so please feel free to suggest new templates by reaching out to us!</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Fixed an issue that could prevent assets and files from being uploaded correctly.</li>
<li>Restored the option to rename a file by clicking on its name from the editor.</li>
<li>Made the display and editing of large text layers smoother.</li>
<li>Allowed the editing of multiple layers simultaneously in the right side inspector.</li>
<li>Reduced the number of required clicks to select deep nested children within a group.</li>
<li>Added the option to replace a layer or operation when pasting, using <kbd>⌘</kbd><kbd>⇧</kbd><kbd>V</kbd> (<kbd>ctrl</kbd><kbd>shift</kbd><kbd>V</kbd> on Windows).</li>
<li>Fixed an issue with mask groups that would change positions when adding or removing them from another group.</li>
<li>Allowed layers from different parents to be grouped together.</li>
</ul>
`,fields:{date:`2023-04-06T00:00:00.000Z`,shortId:`2023-04-06`,slug:`2023-04-06-new-templates`},frontmatter:{title:`New templates`,video:{name:`20230406-new-templates.mp4`,publicURL:`https://assets.jitter.video/20230406-new-templates.mp4`},image:null}},{html:`<p>We just made it easier to select multiple layers at a time.
In the Layer list on the left, you can now use the <kbd>⇧</kbd> and the <kbd>⌘</kbd> keys (<kbd>ctrl</kbd> on Windows) to select multiple layers more efficiently.</p>
<p>More specifically, if you want to select a range of layers, you can use the <kbd>⇧</kbd> key:</p>
<ul>
<li>Click on the first layer to select</li>
<li>Hold down the <kbd>⇧</kbd> key</li>
<li>Click on the last layer of the range
Jitter will select every layer between those two layers in the Layer list.</li>
</ul>
<p>And if you want to select individual layers, you can use the <kbd>⌘</kbd> key:</p>
<ul>
<li>Click on the first layer to select</li>
<li>Hold down the <kbd>⌘</kbd> key (or <kbd>ctrl</kbd> on Windows)</li>
<li>Click on any other layer you want to select</li>
</ul>
<p>Selecting multiple layers is particularly handy when you want to:</p>
<ul>
<li>Update a property across multiple layers at the same time</li>
<li>Move multiple objects at the same time</li>
<li>Create a group or a masked group from the selection</li>
</ul>
<p>This productivity improvement also works in the timeline: you can select a range of animations by holding <kbd>⇧</kbd>, and add individual animations to the selection by holding <kbd>⌘</kbd> (or <kbd>ctrl</kbd> on Windows).</p>
<p><strong>Note</strong>: while it is possible to select multiple objects that don't have the same level of hierarchy, it is not possible to have a parent group and its children in the same selection.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Improved the insertion order of duplicated layers</li>
<li>Restored the display of the artboard name on the canvas</li>
<li>Restored the correct behavior of the “Use full resolution image” option for images</li>
<li>Fixed an issue that could cause imported images to be clipped</li>
<li>Fixed an issue with extremely large ratio images that could cause the Editor to crash</li>
<li>Fixed a video frame synchronization issue that could occur when exporting video media</li>
</ul>
`,fields:{date:`2023-03-09T00:00:00.000Z`,shortId:`2023-03-09`,slug:`2023-03-09-select-multiple-objects`},frontmatter:{title:`Select multiple objects`,video:{name:`20230309-select−multiple-objects.mp4`,publicURL:`https://assets.jitter.video/20230309-select−multiple-objects.mp4`},image:null}},{html:`<p>In Jitter, every object in the canvas has a corresponding layer in the Layer list (side panel on the left).
If you hover over a layer in the Layer list, we now display a box to highlight that layer's location in the canvas.
Similarly, when you hover over an object in the canvas, we also highlight the corresponding layer in the Layer list.
This makes it much faster to find the layers you're working on.</p>
<h2>Other improvements</h2>
<ul>
<li>You can now directly paste layers inside a group, when the group is selected</li>
<li>It is now possible to ungroup multiple groups at once</li>
<li>Improved accuracy for the progress of Lottie exports (0% → 100%)</li>
<li>Improved export quality for images in high resolution</li>
<li>Improved the export process, which is now compatible with more hardware configurations</li>
<li>Fixed an issue on the sidebar scroll position on Account pages</li>
<li>Fixed an issue in the inspector of some text layer imported from Figma</li>
<li>Fixed an issue that caused the browser to crash when exporting large Lottie files</li>
<li>Fixed an issue that caused some exports to be stuck at 100%</li>
<li>Fixed an issue that could make the app crash when replacing an image with a GIF</li>
<li>Fixed an issue that could prevent the export of some SVGs</li>
</ul>
`,fields:{date:`2023-02-23T00:00:00.000Z`,shortId:`2023-02-23`,slug:`2023-02-23-hover-layers`},frontmatter:{title:`Hover objects in the canvas and the layer list`,video:{name:`20230223-hover-layers.mp4`,publicURL:`https://assets.jitter.video/20230223-hover-layers.mp4`},image:null}},{html:`<p>You can now export your files in background tabs!</p>
<p>Previously, the Export tab had to remain visible during the export process.
Otherwise, the export process would pause after a few seconds, and even completely stop after some time.</p>
<p>With this update, it is now possible to launch an export, and go back to what you were doing before.
The file will keep exporting in the tab, even if it is not currently active.</p>
<p>This is a huge productivity improvement, as you can now:</p>
<ul>
<li>keep using other tabs of your browser while your file is exporting,</li>
<li>and launch multiple exports in parallel – for instance if you want to export the same file in multiple formats (video, GIF, Lottie…) and sizes.</li>
</ul>
<p>This improvement is available for all export formats (video, GIF, Lottie).
And the best part of it: you can keep track of the export progress in the tab title. ⏳</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a display issue with the custom fonts inspector.</li>
<li>Fixed an "asset missing" issue that could appear with some particular media files.</li>
<li>Fixed an issue preventing the export of some particular SVGs in Lottie.</li>
<li>Fixed an issue where the natural order of layers was lost when reordering layers in bulk in the layer list.</li>
</ul>
`,fields:{date:`2023-02-07T00:00:00.000Z`,shortId:`2023-02-07`,slug:`2023-02-07-background-export`},frontmatter:{title:`Export files in background tabs`,video:{name:`20230207-background-export.mp4`,publicURL:`https://assets.jitter.video/20230207-background-export.mp4`},image:null}},{html:`<p>You can now lock layers to protect them from accidental edits, or to prevent them from being edited in the canvas.</p>
<p>To lock or unlock a layer, you can:</p>
<ol>
<li>Hover over the layer in the layer list on the left</li>
<li>Click on the padlock icon that appears</li>
</ol>
<p>When a layer is locked, you can still select it from the layer list on the left, and adjust its property from the inspector on the right.</p>
<p>If you lock a group, all its children will also be locked.
It is not possible to unlock child layers without unlocking the enclosing group.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a crash occurring when exporting some particular emojis in Lottie.</li>
<li>Fixed an issue with the selection rectangle not working when perfectly aligned on the edge of a shape.</li>
<li>Fixed an issue with donuts shapes that in some cases appeared at a wrong position when exported in Lottie.</li>
</ul>
`,fields:{date:`2023-01-31T00:00:00.000Z`,shortId:`2023-01-31`,slug:`2023-01-31-lock-and-unlock-layers`},frontmatter:{title:`Lock and unlock layers`,video:{name:`20230131-lock-and-unlock-layers.mp4`,publicURL:`https://assets.jitter.video/20230131-lock-and-unlock-layers.mp4`},image:null}},{html:`<p>We are excited to launch a new file browser with the new Jitter: all your files are now displayed in a grid, with a thumbnail.</p>
<p>The thumbnail lets you preview the contents of your files at a glance.
Better yet, you can hover a file thumbnail and preview the full animation.</p>
<p>This makes it much easier to find the file you are looking for.</p>
<h2>Other improvements</h2>
<ul>
<li>Hovering a layer in the layer list highlights it in the canvas, and vice-versa</li>
<li>Fixed a bug with the processing of ligatures in some fonts</li>
<li>Fixed a bug when draging a group over itself in the layer list</li>
</ul>
`,fields:{date:`2023-01-20T00:00:00.000Z`,shortId:`2023-01-20`,slug:`2023-01-20-animated-file-thumbnails`},frontmatter:{title:`Animated file thumbnails`,video:{name:`20230120-animated-file-thumbnails.mp4`,publicURL:`https://assets.jitter.video/20230120-animated-file-thumbnails.mp4`},image:null}},{html:`<p>We are excited to announce our biggest update to Jitter yet, with an entirely new version of the tool.</p>
<p>Over the past year, Jitter became the fastest and simplest tool to create animated content &#x26; interfaces for individuals. This year, we want to make Jitter the best animation tool for professionals (designers, teams and businesses).</p>
<p>When we started Jitter, we had one mission in mind: make motion design accessible to anyone. This update is just the first step towards that mission. We bringing a complete UI overhaul to make to make Jitter look more professional yet playful, and tons of new features to make you more productive.</p>
<p>We can’t wait to see what you create with this new version!</p>
`,fields:{date:`2023-01-10T00:00:00.000Z`,shortId:`2023-01-10`,slug:`2023-01-10-all-new-jitter`},frontmatter:{title:`Introducing the all-new Jitter`,video:{name:`20230110-all-new-jitter.mp4`,publicURL:`https://assets.jitter.video/20230110-all-new-jitter.mp4`},image:null}},{html:`<p>This week, we are adding a bunch of new professionally designed templates to the <a href="https://jitter.video/templates/">example gallery</a>.
You'll find 3 main categories:</p>
<ul>
<li>Animated landing pages</li>
<li>Animated loaders (UI elements)</li>
<li>Animated stories</li>
</ul>
<p>We are continuously working on adding more relevant templates to the gallery: you can suggest new templates by reaching out to us!</p>
<h2>Other improvements</h2>
<ul>
<li>Improved the mask animations for texts, that could sometimes truncate some characters</li>
<li>Fixed a bug that would offset the positions of layers when dragging multiple layers at once</li>
<li>Fixed a bug that could make the application crash on a mutli-select</li>
</ul>
`,fields:{date:`2022-12-01T00:00:00.000Z`,shortId:`2022-12-01`,slug:`2022-12-01-new-website-loader-story-templates`},frontmatter:{title:`New website, loader and story templates`,video:{name:`20221201-new-templates.mp4`,publicURL:`https://assets.jitter.video/20221201-new-templates.mp4`},image:null}},{html:`<p>With an increasing number of agencies, startups and companies among our customers, we are bringing a big improvement to all our Pro users.
With our new customer portal, you can now manage all your subscription, billing and invoice details in one place.</p>
<p>More specifically, here is what you can do with the customer portal:</p>
<h3>Update your payment method</h3>
<p>You can now change the payment method of your Jitter Pro subscription at anytime.
To do so:</p>
<ol>
<li>Click <strong>Manage billing</strong> from your <a href="/account/">account</a> page.</li>
<li>Click the <strong>Add payment method</strong> setting</li>
<li>Enter the new credit or debit card details in the fields provided and confirm</li>
<li>Optionally, you can delete the older payment method.
Jitter will use these payment details for your next subscription payment and onward.
You can only pay for a Jitter Pro subscription with a credit card or a debit card that supports online transactions.</li>
</ol>
<h3>Change your billing email</h3>
<p>You can now change the email we automatically send your invoices to.
To do so:</p>
<ol>
<li>Click <strong>Manage billing</strong> from your <a href="/account/">account</a> page.</li>
<li>Click the <strong>Update information</strong> setting in the <strong>Billing information</strong> section</li>
<li>Enter the email in the corresponding field and confirm.
Jitter will use this email to send your following invoices and receipts.</li>
</ol>
<h3>Change your billing information</h3>
<p>You can now change the billing information and enter your company name, address, tax ID, VAT numer and more.
To do so:</p>
<ol>
<li>Click <strong>Manage billing</strong> from your <a href="/account/">account</a> page.</li>
<li>Click the <strong>Update information</strong> setting in the <strong>Billing information</strong> section</li>
<li>Enter the information in the fields provided and confirm.
Jitter will use these elements while generating your following invoices.</li>
</ol>
<h3>Download your past invoices</h3>
<p>You can now access all your past invoices.
To do so:</p>
<ol>
<li>Click <strong>Manage billing</strong> from your <a href="/account/">account</a> page.</li>
<li>Click on the desired invoice in the <strong>Invoice history</strong> section</li>
<li>Download the invoice</li>
</ol>
<h3>Cancel your subscription</h3>
<p>Cancelling your subscription is also available through the customer portal.
To do so:</p>
<ol>
<li>Click <strong>Manage billing</strong> from your <a href="/account/">account</a> page.</li>
<li>Click the <strong>Cancel plan</strong> button</li>
<li>Confirm your choice</li>
</ol>
<h2>Other improvements</h2>
<ul>
<li>Allowed the export of super slim/narrow artboards (for instance 80×2 or 4×80)</li>
<li>Fixed an bug that changed masked group positions unexpectedly</li>
<li>Fixed a crash occurring when pasting invalid data into Jitter</li>
<li>Fixed an issue with Intercom's start screen, where we would display messages instead of the home screen</li>
<li>Improved the performance of the selection rectangle in environments with many layers</li>
</ul>
`,fields:{date:`2022-11-17T00:00:00.000Z`,shortId:`2022-11-17`,slug:`2022-11-17-customer-portal`},frontmatter:{title:`Customer portal`,video:{name:`20221117-customer-portal.mp4`,publicURL:`https://assets.jitter.video/20221117-customer-portal.mp4`},image:null}},{html:`<p>You can now compose beautifully formatted text, directly in the canvas.</p>
<p>Previously, if you wanted to highlight a word in bold or in a different color, you had to manually split the text in multiple words.
You had to create a text layer for each word you wanted to highlight, and style that word independently.
While you could achieve the desired result, it was not flexible: if you wanted to edit your text you had to manually reposition each of these highlighted words so they fit in the new sentence.</p>
<p>This is a thing of the past, as we now support rich text editing.
Jitter now provides a WYSIWYG editor to add rich formatting to your texts directly on screen.
Rich text editing works on these properties:</p>
<ul>
<li>Font family</li>
<li>Font weight</li>
<li>Font size</li>
<li>Line height</li>
<li>Letter spacing</li>
<li>Letter case (normal, uppercase, lowercase)</li>
<li>Color</li>
</ul>
<p>Other text properties like horizontal alignment, vertical alignment, or box resizing can only be applied to the entire text layer.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved canvas drawing performance</li>
</ul>
`,fields:{date:`2022-11-02T00:00:00.000Z`,shortId:`2022-11-02`,slug:`2022-11-02-rich-text-editing`},frontmatter:{title:`Rich text editing`,video:{name:`20221102-rich-text-editing.mp4`,publicURL:`https://assets.jitter.video/20221102-rich-text-editing.mp4`},image:null}},{html:`<p>We are improving our Lottie export: SVGs are now exported as native Lottie shapes.</p>
<p>Previously, SVGs were converted as rasterized images in the Lottie export.
In some animations, they could appear pixelated, and we were losing one of the biggest advantages of Scalable Vector Graphics (being able to scale any preferred size without compromising on quality).</p>
<p>This is now fixed, as we are now converting SVGs to the native Lottie shape format.
As a result, you get a crisp rendering of all your vector images in your animations.
This improvement is compatible with all platforms.</p>
<p>Pro tip: you can now use Jitter to convert your SVGs to Lottie.
This is particularly handy if you need to animate your SVG icons or illustrations and turn them into Lottie animations.</p>
<h2>Other improvements</h2>
<ul>
<li>Improved Lottie export for emojis in texts (Apple Emojis are now supported)</li>
<li>Fixed a bug preventing SVGs to be edited the second time a file was opened</li>
<li>Fixed a bug where inspector values could propagate from 1 object to another when the selection changed</li>
</ul>
`,fields:{date:`2022-10-19T00:00:00.000Z`,shortId:`2022-10-19`,slug:`2022-10-19-svg-to-lottie`},frontmatter:{title:`SVG to Lottie`,video:{name:`20221019-svg-to-lottie.mp4`,publicURL:`https://assets.jitter.video/20221019-svg-to-lottie.mp4`},image:null}},{html:`<p>We just added one of the most requested usability features: you can now measure the distance between layers on the canvas.
To show distance between layers, you can:</p>
<ol>
<li>Select an object</li>
<li>Hold <kbd>⌥</kbd> (or <kbd>alt</kbd> on Windows)</li>
<li>Hover the other objects for which you want to know the distance to
Jitter will display a red line between the objects, as well as a measurement.</li>
</ol>
<p>Measuring the distances between layers works with any kind of element:</p>
<ul>
<li>Artboard / scene</li>
<li>Texts</li>
<li>Vector shapes (rectangles, ellipses, stars)</li>
<li>Media shapes (images, videos, GIFs, SVGs)</li>
</ul>
<p>We measure the distances between the bounding boxes of each object.
There are some cases where the behavior may differ from what you expect:</p>
<ul>
<li>Shapes with a center or outer stroke: Jitter will measure the distance to the object's bounds, and not the outer limit of the stroke</li>
<li>Stars: if you have stars with an odd number of spikes, the layer bounding box is slightly bigger than the shape's dimensions</li>
</ul>
<h2>Other improvements</h2>
<ul>
<li>Improved the display of scaled up images in the "Lottie - Others" profile</li>
<li>Ellipses with a “Resize” animation are now supported in the Lottie export</li>
<li>Fixed a display bug with flipped images</li>
<li>Fixed a bug with Undo / Redo in the inspector</li>
</ul>
`,fields:{date:`2022-10-05T00:00:00.000Z`,shortId:`2022-10-05`,slug:`2022-10-05-distance-between-objects`},frontmatter:{title:`Show distance between objects`,video:{name:`20221005-distance-to-objects.mp4`,publicURL:`https://assets.jitter.video/20221005-distance-to-objects.mp4`},image:null}},{html:`<p>We dramatically improved the way you can select layers on the canvas.
Previously, it was only possible to select multiple layers by manually clicking on each of them.
We are now adding a new way to select multiple layers on the canvas in a single gesture, with a selection rectangle.</p>
<p>To select multiple layers with the selection rectangle, you can click on the canvas and drag your mouse.
All the layers that intersect that rectangle will be added to the selection.</p>
<p>If you want to add other elements to your existing selection, you can hold <kbd>⇧</kbd> and draw another rectangle.
If the rectangle interesects elements that were already in the selection, they will be removed from the selection.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a bug where texts with custom fonts imported from Figma could crash the file</li>
<li>Fixed a bug where creating a group could change the order of the layers inside it</li>
<li>Fixed a bug where artboard background animations didn't work in Lottie exports</li>
</ul>
`,fields:{date:`2022-09-21T00:00:00.000Z`,shortId:`2022-09-21`,slug:`2022-09-21-selection-rectangle`},frontmatter:{title:`Selection rectangle`,video:{name:`20220921-selection-rectangle.mp4`,publicURL:`https://assets.jitter.video/20220921-selection-rectangle.mp4`},image:null}},{html:`<p>All texts in Jitter are now editable inline: you can now write and edit your content directly in the canvas.
Double click on any text field to trigger the editing mode.
Then, everything works as you expect: you can place the cursor anywhere you want with your mouse or using keyboard arrows, and start typing.</p>
<p>We also added many handy shortcuts.
For instance, here is what you can do to speed up your workflow with your keyboard:</p>
<ul>
<li><kbd>⌘</kbd> <kbd>A</kbd>: select all the text in the text box</li>
<li><kbd>⌥</kbd> + <kbd>←</kbd> <kbd>→</kbd>: move the cursor by word</li>
<li><kbd>⌥</kbd> + <kbd>↑</kbd> <kbd>↓</kbd>: move the cursor by paragraph</li>
<li><kbd>⌘</kbd> + <kbd>←</kbd> <kbd>→</kbd>: move the cursor at the beginning / end of the current line</li>
<li><kbd>⌘</kbd> + <kbd>↑</kbd> <kbd>↓</kbd>: move the cursor at the beginning / end of the text field</li>
</ul>
<p>Finally, you can hold <kbd>⇧</kbd> while using the keyboard arrows to manipulate the selection – this is compatible with the previous shortcuts (like holding <kbd>⌥</kbd> to navigate by word)</p>
<p>We also support some useful mouse shortcuts:</p>
<ul>
<li>Double-click to select the word under your cursor</li>
<li>Triple-click to select the entire paragraph</li>
<li>Quadruple click to select the entire text</li>
</ul>
<p>And the magic part? Try dragging the mouse after one of these multi-clicks and see what happens!</p>
<h2>Other improvements</h2>
<ul>
<li>Increased the maximum scene duration to 120 seconds</li>
<li>Updated the Dribbble size preset to 1600 × 1200 px</li>
<li>Fixed a bug for line SVGs (open paths)</li>
<li>Fixed a bug in the mask text effects</li>
</ul>
`,fields:{date:`2022-06-14T00:00:00.000Z`,shortId:`2022-06-14`,slug:`2022-06-14-inline-text-editing`},frontmatter:{title:`Inline text editing`,video:{name:`20220614-inline-text-editing.mp4`,publicURL:`https://assets.jitter.video/20220614-inline-text-editing.mp4`},image:null}},{html:`<p>We released a new version of our Figma plugin, which increases compatibility with the features Figma released at Config 2022. We now support the Dark Mode 🌙, and all the new capabilities of Auto Layout:</p>
<ul>
<li>Negative spacing</li>
<li>Reverse order of the children layers</li>
<li>Individual paddings</li>
<li>Stroke included / excluded</li>
</ul>
<p>We are still missing a few properties (Variable fonts, Truncate mode, Individual strokes). We'll add support for these as soon as Figma grants access to these parameters in the plugin API.</p>
<h2>Other improvements</h2>
<ul>
<li>We fixed a bug where some soft line breaks were not exported correctly</li>
</ul>
`,fields:{date:`2022-05-25T00:00:00.000Z`,shortId:`2022-05-25`,slug:`2022-05-25-figma-plugin-dark-mode`},frontmatter:{title:`Figma plugin: Dark mode, Auto Layout and more`,video:{name:`20220525-figma-plugin-dark-mode.mp4`,publicURL:`https://assets.jitter.video/20220525-figma-plugin-dark-mode.mp4`},image:null}},{html:`<p>We're improving our Lottie export: texts are now exported as real vector shapes, which gives a crisp rendering of your letters and words in your animations.</p>
<p>This improvement is compatible with all the fonts: the default fonts available in Jitter (Google Fonts), your custom fonts, and even emojis. 💫</p>
<p>Thanks to this, text layers in Lottie now also support basic animations, like resize, rotate, opacity, color or stroke.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a bug that would prevent to move layers with keyboard arrows</li>
<li>Fixed a bug that would prevent the display of the "New Animation" menu for masks</li>
</ul>
`,fields:{date:`2022-05-10T00:00:00.000Z`,shortId:`2022-05-10`,slug:`2022-05-10-crisp-texts-in-lottie`},frontmatter:{title:`Better text support in Lottie`,video:{name:`20220510-crisp-texts-in-lottie.mp4`,publicURL:`https://assets.jitter.video/20220510-crisp-texts-in-lottie.mp4`},image:null}},{html:`<p>We are releasing a new version of our plugin that lets you export your Figma designs to Lottie. It is as simple as before:</p>
<ol>
<li>Import your Figma artboard to Jitter in 1 click with the plugin</li>
<li>Add animations in a few clicks in Jitter</li>
<li>Export your animation in the Lottie format
Then you can include your Lottie animations to your interfaces, apps, websites, Webflow projects or LottieFiles account seamlessly.</li>
</ol>
<h2>Figma plugin: export custom shapes as SVGs</h2>
<p>We're releasing a new version of our Figma plugin that exports most custom shapes as SVGs. The assets imported in Jitter are crisp at any scale, and you can iterate on some properties (color, stroke) directly in Jitter.</p>
<h2>Other improvements</h2>
<ul>
<li>Fixed a bug that would not set default values when adding a shadow or a stroke</li>
</ul>
`,fields:{date:`2022-05-03T00:00:00.000Z`,shortId:`2022-05-03`,slug:`2022-05-03-figma-to-lottie`},frontmatter:{title:`Figma to Lottie`,video:{name:`20220503-figma_to_lottie.mp4`,publicURL:`https://assets.jitter.video/20220503-figma_to_lottie.mp4`},image:null}},{html:`<p>We just added one of the most requested features: you can now export your creations in Lottie format.</p>
<p>Lottie is a lightweight and interactive format that lets your embed high-quality, vector animations in your websites or apps.</p>
<p>The Lottie export is currently in beta. Here are the features that are not supported yet:</p>
<ul>
<li>Text animations (we use a fade-in / fade-out instead)</li>
<li>Mask animations (we use a fade-in / fade-out instead)</li>
<li>Donuts and pies</li>
</ul>
<p>We are currently working on adding support for these features.</p>
<h2>Other improvements</h2>
<ul>
<li>Added the APNG export format</li>
<li>Prevented a crash when resizing artboards to a size of 0</li>
<li>Improved the handling of GIF layers</li>
<li>Improved the export page</li>
<li>Improved the sign-up flow</li>
<li>Added support for texts without background fill</li>
</ul>
`,fields:{date:`2022-04-20T00:00:00.000Z`,shortId:`2022-04-20`,slug:`2022-04-20-lottie-export`},frontmatter:{title:`Lottie export – Public beta`,video:{name:`20220420-lottie_export_beta.mp4`,publicURL:`https://assets.jitter.video/20220420-lottie_export_beta.mp4`},image:null}},{html:`<p>We dramatically improved the quality of transparent GIF exports.
Due to the limitations of the GIF format, some exports could display a colorful drop shadow on the edges of the exported layers.
We optimised the transparent GIF export parameters: transparent GIFs are now as sharp as they should be!</p>
<h2>Optional fill for shapes</h2>
<p>You can now remove the Fill of the shapes in Jitter: you can now style an element with just a stroke, and an optional shadow.
For this, you just have to select the shape, and disable the "Background" field in the property panel (in Design mode).</p>
<p>This feature will be supported on texts soon.</p>
<h2>Figma plugin improvements</h2>
<p>We published a new version of the Figma plugin. In this version:</p>
<ul>
<li>Hidden layers are now exported to Jitter</li>
<li>Shapes with no fill are now exported natively</li>
<li>We fixed a bug where some masked layers could make the plugin crash</li>
</ul>
`,fields:{date:`2022-02-25T00:00:00.000Z`,shortId:`2022-02-25`,slug:`2022-02-25-transparent-gif-export`},frontmatter:{title:`Transparent GIF export`,video:{name:`20220225-transparent_gif_export.mp4`,publicURL:`https://assets.jitter.video/20220225-transparent_gif_export.mp4`},image:null}},{html:`<p>You can now import GIFs in your Jitter projects!
GIFs work like any other media in Jitter: for instance you can add corner radius, strokes or shadows easily in the Design mode, and you can animate the GIF in the Animate mode.</p>
<p>Adding a GIF to your scene will also add a segment in the timeline (like videos).
Adjusting the size of the segment will trim the GIF, just like a regular video.
And if you go beyond the duration of the GIF, it will just loop.</p>
<p>⚠️ This feature is only available in Chrome for now, it will be released in other browsers later on.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added more templates to the Gallery</li>
<li>Added the 3x export size when relevant</li>
<li>Improved how we display video frames in the Animate mode</li>
<li>Improved the Export process to make it work on more browsers</li>
<li>Fixed a bug when resizing a group would not resize its rotated children properly</li>
<li>Fixed an export bug where the last frame of the video was not taken into account</li>
<li>Fixed the corner radius property on some videos</li>
<li>Fixed a bug with easing functions what would result in invalid colors</li>
</ul>
`,fields:{date:`2022-01-14T00:00:00.000Z`,shortId:`2022-01-14`,slug:`2022-01-14-import-gifs`},frontmatter:{title:`Import GIFs to your projects`,video:{name:`20220114-gifs.mp4`,publicURL:`https://assets.jitter.video/20220114-gifs.mp4`},image:null}},{html:`<p>Masks are now available in Jitter! To create a mask, just select multiple layers, and press <kbd>⌘</kbd><kbd>⌃</kbd><kbd>M</kbd>: the last layer of the selection will be used as a mask for the other layers of the selection.
Then, to create your best effects, you can animate:</p>
<ul>
<li>The mask group (all the layers)</li>
<li>The masked layers (all the layers of the group except the last one)</li>
<li>The mask (only the last layer of the group)</li>
</ul>
<p>To remove the mask, you can simply select the masked group, and hit <kbd>⇧</kbd><kbd>⌘</kbd><kbd>⌃</kbd><kbd>M</kbd>.</p>
<p>All of these options are also available from the right-click menu.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>The minimum scene duration is now 100ms</li>
<li>Launched the Jitter blog at blog.jitter.video</li>
<li>Improved the export flow</li>
<li>Fixed a bug that could prevent to import some SVGs</li>
<li>Fixed a bug when resizing a rotated group</li>
</ul>
`,fields:{date:`2021-12-16T00:00:00.000Z`,shortId:`2021-12-16`,slug:`2021-12-16-masks`},frontmatter:{title:`Masks`,video:{name:`20211216-masks.mp4`,publicURL:`https://assets.jitter.video/20211216-masks.mp4`},image:null}},{html:`<p>When you import a SVG, you can now edit some basic properties directly in Jitter, like the fill color, the stroke color, and the stroke width.
It is now also easier to resize a SVG: instead of cropping the SVG, we now rescale it.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>The font style menu now displays human-readable values (“Light”, “Regular”, “Bold”…)</li>
<li>Removed the corner radius property for SVG media</li>
<li>Fixed a contrast issue on warning messages</li>
<li>Improved the labels in the Export Format menu</li>
<li>Added transparent background templates in the gallery</li>
<li>Added a “NEW” badge for new templates in the gallery</li>
<li>Improved the progress bar accuracy during the export</li>
</ul>
`,fields:{date:`2021-10-29T00:00:00.000Z`,shortId:`2021-10-29`,slug:`2021-10-29-edit-svgs-natively`},frontmatter:{title:`Edit SVGs natively`,video:{name:`20211029-svg.mp4`,publicURL:`https://assets.jitter.video/20211029-svg.mp4`},image:null}},{html:`<p>You can now export your GIF and videos with a transparent background.
To do this, you can simply remove the background of your artboard in the editor, or choose a transparent export format from the export page.</p>
<p>We support 2 video formats with transparency: .webm and .mov (ProRes 4444) so that you can use your transparent videos on a maximum number of platforms, like the web or video editing apps.</p>
<p>GIFs with a transparent background are also supported.</p>
<h2>New export options (file format, fps, GIF loop)</h2>
<p>We added more export options in the export page.
You can change the frame rate (15fps, 30fps, 60fps), decide if you want your GIFs to loop, and change the file format.</p>
<p>We now support the following file formats:</p>
<ul>
<li>.mp4</li>
<li>.webm (with optional transparency)</li>
<li>.mov (with optional transparency – ProRes4444)</li>
<li>.gif (with optional transparency)</li>
<li>.png (exports all the frames as PNGs)</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Improved how the editor is displayed on mobile</li>
<li>Fixed a bug when looping playback on very short animations</li>
</ul>
`,fields:{date:`2021-10-19T00:00:00.000Z`,shortId:`2021-10-19`,slug:`2021-10-19-transparent-background-export`},frontmatter:{title:`Transparent background export`,video:{name:`20211019-transparent_bg.mp4`,publicURL:`https://assets.jitter.video/20211019-transparent_bg.mp4`},image:null}},{html:`<p>We just added a much requested feature: you can now loop the playback when previewing your animation.
It works both on the whole scene, or on the selected animations.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added new templates to the gallery</li>
<li>Improved the video encoder</li>
<li>Fixed a bug that would make the application crash when deleting groups with animations</li>
</ul>
`,fields:{date:`2021-09-20T00:00:00.000Z`,shortId:`2021-09-20`,slug:`2021-09-20-loop-playback-preview`},frontmatter:{title:`Loop playback preview`,video:{name:`20210920-loop_playback.mp4`,publicURL:`https://assets.jitter.video/20210920-loop_playback.mp4`},image:null}},{html:`<p>Timeline animations now snap with each other: if you drag a segment near the edge of another segment, you'll feel some magnetism between segments, just like when you move objects on the canvas. And of course, the same thing happens when resizing a timeline segment.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>You can now trigger the Hand tool by clicking on your mouse wheel</li>
<li>You can now sign in and login with Google in 1 click – no need for passwords or magic links anymore!</li>
<li>You can now set a text to UPPERCASE or lowercase in the text inspector</li>
<li>Improved the styling of forms on all the website</li>
<li>Improved video encoding quality</li>
<li>Added more fonts to the default font list</li>
<li>Added tooltips to the main actions buttons in the editor</li>
<li>Fixed a bug that occured while hovering the layers in the layer list</li>
</ul>
`,fields:{date:`2021-09-09T00:00:00.000Z`,shortId:`2021-09-09`,slug:`2021-09-09-animation-snapping`},frontmatter:{title:`Animation snapping`,video:{name:`20210909-timeline_snapping.mp4`,publicURL:`https://assets.jitter.video/20210909-timeline_snapping.mp4`},image:null}},{html:`<p>It is now possible to rename your layers by double-clicking on the layer name in the layer list.
This also works for most animations in the timeline (except the elementary actions such as “Move”, “Scale”, etc.).</p>
<h2>Hide &#x26; show layers</h2>
<p>We added the possibility to hide a layer from the layer list.
That's particularly handy if you want to concentrate on one part of the animation.
To do so, just hover the layer in the layer list, and click on the “Eye” icon.</p>
<h2>Actions on files</h2>
<p>It is now possible to rename, duplicate or delete a file from the editor.
To do so, you can click on the chevron next to the file name (in the top bar), and pick one of these actions from the menu.
It is also possible to rename the file by clicking directly on the file name.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Playback now stops when switching to the Design tab</li>
<li>Display a warning message when opening Jitter from an unsupported browser (Jitter is currently optimized to run on the latest version of Google Chrome for Desktop)</li>
<li>Improved the export page</li>
<li>Improved stability when opening an existing project</li>
<li>Fixed an issue with texts when importing Figma projects</li>
<li>Fixed a bug that occured when ungrouping an empty group</li>
</ul>
`,fields:{date:`2021-08-26T00:00:00.000Z`,shortId:`2021-08-26`,slug:`2021-08-26-rename-layers-inline`},frontmatter:{title:`Rename layers inline`,video:{name:`20210826-rename_inline.mp4`,publicURL:`https://assets.jitter.video/20210826-rename_inline.mp4`},image:null}},{html:`<p>You can now import videos in your Jitter projects.
Once imported, the videos are represented by a segment in the timeline.
You can crop the video by resizing the segment.
We currently support the .mp4 and .mov formats.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>It is now possible to reset your password and update your email in your account</li>
<li>It is now possible to zoom the canvas by pressing ctrl or meta key while scrolling</li>
<li>We now handle custom fonts with no name in their metas</li>
<li>The playback now stops when switching to the Design tab</li>
<li>Added more fonts to the list of available fonts</li>
<li>Added an alternate export method</li>
<li>Added strokes on groups</li>
<li>Added more animations on groups (color, resize…)</li>
<li>Improved the export flow</li>
<li>Improved the loading of custom fonts</li>
<li>Improved the video and GIF encoder</li>
<li>Improved font and asset uploads</li>
<li>Fixed some import warnings</li>
</ul>
`,fields:{date:`2021-08-13T00:00:00.000Z`,shortId:`2021-08-13`,slug:`2021-08-13-video-support`},frontmatter:{title:`Video support`,video:{name:`20210813-video.mp4`,publicURL:`https://assets.jitter.video/20210813-video.mp4`},image:null}},{html:`<p>We now support stroke natively in Jitter.
You can adjust the following parameters, the width, color and position (inside, outside, center).
Strokes are currently supported on all layer types, except groups.</p>
<h2>Stroke animation</h2>
<p>It is also possible to animate the stroke properties, just like any other property.
You can change the weight and color of the stroke, and apply an easing function.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Improved the video encoder performance</li>
<li>Fixed layout problem that would hide the shadow field in the design inspector</li>
<li>Fixed a bug where empty groups in the timeline would make the application crash</li>
<li>Fixed a bug that would prevent opening some files</li>
<li>Fixed a bug when ungrouping layers</li>
<li>Fixed a bug for timeline groups with a duration of 0</li>
</ul>
`,fields:{date:`2021-07-08T00:00:00.000Z`,shortId:`2021-07-08`,slug:`2021-07-08-stroke`},frontmatter:{title:`Stroke`,video:{name:`20210708-stroke.mp4`,publicURL:`https://assets.jitter.video/20210708-stroke.mp4`},image:null}},{html:`<p>We just released a much requested productivity improvement: you can now duplicate a layer by holding <kbd>alt</kbd> while dragging it on the canvas.
All the layer properties are duplicated, including its animations: you can design an animated layer once, and duplicate it in one click.
Huge time saver!</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added the GIF 2x export option</li>
<li>Improved the preview of animation presets for images</li>
<li>Improved layout of pricing page</li>
<li>Improved performance of the video encoder</li>
<li>Fixed a bug when ungrouping layers</li>
<li>Fixed a layout bug where the Intercom bubble would hide some sections of the inspector</li>
<li>Fixed a bug when deleting multiple groups at once</li>
<li>Fixed a bug where the Hide and Show actions could have a duration</li>
<li>Fixed a display bug on the timeline time ruler</li>
</ul>
`,fields:{date:`2021-07-01T00:00:00.000Z`,shortId:`2021-07-01`,slug:`2021-07-01-duplicate-layers-by-holding-kbdaltkbd-while-dragging`},frontmatter:{title:`Duplicate layers by holding <kbd>alt</kbd> while dragging`,video:{name:`20210701-duplicate.mp4`,publicURL:`https://assets.jitter.video/20210701-duplicate.mp4`},image:null}},{html:`<p>We just added 2 new types of animations: Hide and Show.</p>
<ul>
<li>The “Hide” animation lets you hide an item instantly</li>
<li>The “Show” animation lets you display an item instantly</li>
</ul>
<p>To add these animations, you can click on the “New animation” button, head to the “Custom” tab, and select the “Hide / Show” item.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>It is now possible to drag &#x26; drop images from your computer files to your Jitter window</li>
<li>It is now possible to import multiple images at once from the file picker</li>
<li>It is now possible to duplicate a layer with <kbd>⌘</kbd><kbd>D</kbd> – this action is also available from the right-click menu</li>
<li>Fixed a bug where animations with a duration of 0 would disappear from the timeline</li>
<li>Fixed a bug when copying a text effect to another type of layer</li>
<li>Fixed a bug that would not update the size of the text box when changing the font</li>
<li>Improved behavior when adding multiple animations of the same type to the same object</li>
</ul>
`,fields:{date:`2021-06-21T00:00:00.000Z`,shortId:`2021-06-21`,slug:`2021-06-21-hide--show-animations`},frontmatter:{title:`Hide / Show animations`,video:{name:`20210621-hide_show.mp4`,publicURL:`https://assets.jitter.video/20210621-hide_show.mp4`},image:null}},{html:`<p>We are thrilled to introduce a huge productivity improvement: it is now possible to edit multiple items simulatenously!</p>
<p>You can select multiple layers by holding <kbd>⇧</kbd> while clicking on them in the canvas or the layer list.
Once they are selected, the inspector shows the property fields shared across all the layers.
You can edit one value there, and all the selected layers will get this new value.</p>
<p>It is the same for animations: if you select multiple animations in the timeline with the <kbd>⇧</kbd> key, you can then update their properties all at once.
This works with all kinds of animations: presets, text animations, and custom animations</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>New export page UI</li>
<li>Added more items to the gallery</li>
<li>Improved the way Jitter handles encoding errors (if any)</li>
</ul>
`,fields:{date:`2021-06-09T00:00:00.000Z`,shortId:`2021-06-09`,slug:`2021-06-09-edit-multiple-layers-or-animations-simultaneously`},frontmatter:{title:`Edit multiple layers or animations simultaneously`,video:{name:`20210609-multi_edit.mp4`,publicURL:`https://assets.jitter.video/20210609-multi_edit.mp4`},image:null}},{html:`<p>We greatly improved the way we handle text layers: you can now adust the letter spacing.
The letter spacing unit is percents of the font size.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Converted line height unit to percents</li>
<li>Added examples to the gallery</li>
<li>Improved performance to display examples from the gallery</li>
<li>UI improvements on the Figma plugin</li>
<li>Text can now be imported natively from Figma</li>
<li>Text with missing fonts can now be converted to native text by replacing or uploading the font</li>
</ul>
`,fields:{date:`2021-05-31T00:00:00.000Z`,shortId:`2021-05-31`,slug:`2021-05-31-letter-spacing-support`},frontmatter:{title:`Letter spacing support`,video:{name:`20210531-letter_spacing.mp4`,publicURL:`https://assets.jitter.video/20210531-letter_spacing.mp4`},image:null}},{html:`<p>Adding text effects is now easier than ever: when a text is selected and you click on the “New animation” button, we'll display a list of text animations sorted by effect.
Once a text animation is applied, you can easily change the effect to test other possibilities.
And of course, it is still possible to apply the effect to letters, words or lines, just like before.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Updated landing page</li>
<li>Added YouTube tutorials to My Files page</li>
</ul>
`,fields:{date:`2021-05-20T00:00:00.000Z`,shortId:`2021-05-20`,slug:`2021-05-20-new-text-effect-menu`},frontmatter:{title:`New text effect menu`,video:{name:`20210520-new_text_effects.mp4`,publicURL:`https://assets.jitter.video/20210520-new_text_effects.mp4`},image:null}},{html:`<p>You can now zoom in and zoom out in the timeline.
If you use a trackpad, you can use the sinple “pinch to zoom” gesture.
If you use a mouse, you can hover the timeline with your mouse cursor, and scoll while holding the <kbd>ctrl</kbd> key.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Right click menu: it is now possible to access the contextual menu for layers and animations with a right click.</li>
<li>Improved Subscription flow</li>
<li>Updated Pricing page</li>
</ul>
`,fields:{date:`2021-05-13T00:00:00.000Z`,shortId:`2021-05-13`,slug:`2021-05-13-timeline-zoom`},frontmatter:{title:`Timeline zoom`,video:{name:`20210513-timeline_zoom.mp4`,publicURL:`https://assets.jitter.video/20210513-timeline_zoom.mp4`},image:null}},{html:`<p>It is now possible to sync your Figma exports with your Jitter projects using our Figma plugin.
If the frame you want to export has already been exported to Jitter, you can choose to resync it with the corresponding Jitter project(s): all the animations you started to make remain untouched.
This allows you to design with the power of Figma, and animate with the power of Jitter.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Updated landing page &#x26; My Files page</li>
<li>Fixed UI overlay bug for color picker</li>
</ul>
`,fields:{date:`2021-05-10T00:00:00.000Z`,shortId:`2021-05-10`,slug:`2021-05-10-sync-figma-projects`},frontmatter:{title:`Sync Figma projects`,video:{name:`20210510-figma_sync.mp4`,publicURL:`https://assets.jitter.video/20210510-figma_sync.mp4`},image:null}},{html:`<p>Custom animations now support initial values.
This is very handy to make your layers appear in the scene, while leaving their design untouched.</p>
<p>To activate the “Initial value” field, you just have to click on the + button at the top of the custom action inspector.
Then, you can enter a value for the “From” field and / or for the “To” field.</p>
<p>Here is an example, to make a simple “Fade in” animation:</p>
<ul>
<li>Add a new custom animation (Opacity)</li>
<li>Activate the “Initial value” field by clicking on the + button</li>
<li>In the “From” field, enter the value 0</li>
<li>In the “To” field, press <kbd>⌫</kbd> to remove the value: you'll see the opacity value of the layer in its Design state</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added “Zoom to fit” option (also accessible with the <kbd>⇧</kbd><kbd>1</kbd> keyboard shortcut)</li>
<li>Users can now choose between a password or magic link login</li>
<li>Projects imported from Figma are now opened by default on the Animate tab</li>
<li>Users are now automatically redirected to the editor after sign up / login</li>
<li>Fixed a bug for videos with opacity &#x3C; 100%</li>
<li>Fixed a bug for groups with no children</li>
<li>Updated landing page</li>
</ul>
`,fields:{date:`2021-05-03T00:00:00.000Z`,shortId:`2021-05-03`,slug:`2021-05-03-animations-with-initial-value`},frontmatter:{title:`Animations with initial value`,video:{name:`20210503-initial_value.mp4`,publicURL:`https://assets.jitter.video/20210503-initial_value.mp4`},image:null}},{html:`<p>Our Figma plugin just got published on Figma Community: you can <a href="https://www.figma.com/community/plugin/961270034818256057">install it here</a>!
This plugin allows you in import a Figma project into Jitter, which means that you don't need to recreate the design from scratch in Jitter anymore. This is a huge time saver.</p>
<p>Here is how the plugin works:</p>
<ul>
<li>Open the plugin</li>
<li>Select a Figma frame, and click the “Export” button</li>
<li>Open the project in Jitter and create some magic! ✨</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added an “Import from Figma” button in the file list</li>
<li>Display the file name in the top bar of the editor</li>
</ul>
`,fields:{date:`2021-04-15T00:00:00.000Z`,shortId:`2021-04-15`,slug:`2021-04-15-figma-plugin`},frontmatter:{title:`Figma plugin`,video:{name:`20210415-figma.mp4`,publicURL:`https://assets.jitter.video/20210415-figma.mp4`},image:null}},{html:`<p>Groups just got a big upgrade!
They now support:</p>
<ul>
<li>A “Clip content” option (this will clip the content outside of the group boundaries)</li>
<li>A Corner Radius property</li>
<li>A Color Fill property</li>
<li>A Shadow property</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Fixed a rendering bug for groups with opacity &#x3C; 100% or with shadows</li>
<li>Improved the rendering engine to make the editing experience more fluid</li>
<li>Added default values for Shadow and Background fields</li>
<li>The timeline now crolls horizontally to show the animation selected last</li>
<li>Improved the font rendering for a more consistent experience in the editor and in the exported files</li>
</ul>
`,fields:{date:`2021-04-08T00:00:00.000Z`,shortId:`2021-04-08`,slug:`2021-04-08-clipping-groups`},frontmatter:{title:`Clipping groups`,video:{name:`20210408-group_clipping.mp4`,publicURL:`https://assets.jitter.video/20210408-group_clipping.mp4`},image:null}},{html:`<p>The export just got a big upgrade: exporting a GIF is now on average 4 times faster, and exporting a video is now on average 7 times faster (!!).
To benefit from this upgrade, you just have to upgrade to the latest version of Chrome (89 and upwards) and reload the page.</p>
<p>Mac M1 computers will support this feature later.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>It is now possible to fold / unfold a layer group without selecting it</li>
<li>Selecting a layer in the canvas now displays it in the layer list (auto unfold its parent groups, and auto scroll)</li>
<li>Added more examples to the Gallery</li>
<li>Added a Pricing page in the top bar</li>
<li>Updated the Subscribe page</li>
<li>Enabled HD export for up to 2160×2160px resolution</li>
<li>Fixed a bug to resize text boxes inside a group</li>
<li>Fixed a bug for resizing text boxes with the <kbd>⌥</kbd> key pressed</li>
</ul>
`,fields:{date:`2021-03-31T00:00:00.000Z`,shortId:`2021-03-31`,slug:`2021-03-31-super-fast-video-export-`},frontmatter:{title:`Super fast video export ⚡`,video:{name:`20210331-fast_export.mp4`,publicURL:`https://assets.jitter.video/20210331-fast_export.mp4`},image:null}},{html:`<p>You can now select multiple layers and create a group with them!
To do this, you can simply select the layers you want to group, and press <kbd>⌘</kbd><kbd>G</kbd> (or <kbd>ctrl</kbd><kbd>G</kbd> on Windows).
If you want to ungroup them, you can simply select the group, and press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> (or <kbd>⇧</kbd><kbd>ctrl</kbd><kbd>G</kbd> on Windows).</p>
<p>Groups in Jitter work like frames in Figma: their size and position is determined when they are created.
After a group is created, changing the size or position of the children will not automatically change the group's bounding box.</p>
<p>By default, when you resize a group, it will resize all the children proportionally.
However, if you press the <kbd>ctrl</kbd> key while resizing, it will simply resize the group boundaries and leave the children untouched.</p>
<h2>Hand tool</h2>
<p>You can now move the canvas with the Hand tool. To do this:</p>
<ul>
<li>Press <kbd>H</kbd> and keep the key pressed – the cursor will change to a hand</li>
<li>Click an drag your mouse to move navigate in the work zone</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Added more keyboard shortcuts (press <kbd>R</kbd> to create a rectangle, press <kbd>O</kbd> to create an ellipse, press <kbd>T</kbd> to create a text)</li>
<li>Fixed a bug that would prevent the drag of the selected element if it was under another element</li>
<li>Swap the export button and zoom menu in the top bar</li>
<li>Updated the login page</li>
</ul>
`,fields:{date:`2021-03-10T00:00:00.000Z`,shortId:`2021-03-10`,slug:`2021-03-10-grouping-layers`},frontmatter:{title:`Grouping layers`,video:{name:`20210310-groups.mp4`,publicURL:`https://assets.jitter.video/20210310-groups.mp4`},image:null}},{html:`<p>All your files now automatically sync to the cloud: as soon as you are logged in, you can access them from any browser, and they are always up to date.
This is a first step towards a seamless real-time collaboration experience, and we can't wait to push this further!</p>
<h2>Zoom menu</h2>
<p>We added a menu in the top bar that lets you adjust the canvas zoom level.
We also added some keyboard shortcuts for this:</p>
<ul>
<li>Zoom in by pressing the <kbd>+</kbd> key</li>
<li>Zoom out by pressing the <kbd>-</kbd> key</li>
<li>Zoom to 100% by pressing the <kbd>⇧</kbd><kbd>0</kbd> key combination</li>
</ul>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>Fixed a bug that would cause the canvas to zoom out instantly on Windows</li>
<li>Increased the max GIF export size</li>
<li>Updated our Terms &#x26; Conditions and Privacy Policy</li>
</ul>
`,fields:{date:`2021-03-03T00:00:00.000Z`,shortId:`2021-03-03`,slug:`2021-03-03-cloud-file-synchronization`},frontmatter:{title:`Cloud file synchronization`,video:{name:`20210303-file_sync.mp4`,publicURL:`https://assets.jitter.video/20210303-file_sync.mp4`},image:null}},{html:`<p>This week is mostly about bug fixes and stabilization:</p>
<ul>
<li>Increased the draggable area around objects</li>
<li>Fixed cursor conflicts for small or narrow objects</li>
<li>Fixed a bug that would make the Typewriter effect crash with texts of only 1 letter</li>
<li>We now automatically redirect logged users to their file list</li>
<li>Fixed a bug for ellipse animations (negative ratio, negative width)</li>
</ul>
`,fields:{date:`2021-02-24T00:00:00.000Z`,shortId:`2021-02-24`,slug:`2021-02-24-improvements--fixes`},frontmatter:{title:`Improvements & fixes`,video:{name:`20210224-bug_fixes.mp4`,publicURL:`https://assets.jitter.video/20210224-bug_fixes.mp4`},image:null}},{html:`<p>You can now scroll the timeline horizontally.
This makes it easier to animate longer projects and focus on one part of the animation.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>It is now possible to edit the artboard duration graphically in the timeline</li>
<li>We now display the artboard duration next to the artboard name in the canvas</li>
<li>We now use the project name to name the exported file (.mp4 or .gif)</li>
<li>Fixed a bug in the timeline when there were no animations</li>
<li>Fixed a bug that would make the application crash on some text effects</li>
<li>Fixed the layer header styling</li>
</ul>
`,fields:{date:`2021-02-17T00:00:00.000Z`,shortId:`2021-02-17`,slug:`2021-02-17-scrollable-timeline`},frontmatter:{title:`Scrollable timeline`,video:{name:`20210217-timeline_scroll.mp4`,publicURL:`https://assets.jitter.video/20210217-timeline_scroll.mp4`},image:null}},{html:`<p>We are really excited to open the beta to the public, and to launch Jitter on Product Hunt!</p>
<p>Jitter is still in early stage so some things might not work as expected, but it is really important we get more feedback from our users.
In particular, we really want to learn about your use cases and how we can improve the tool for you.
So please reach out to us to give us honest feedback, we really want to hear the truth (even if it hurts sometimes).</p>
<p>Our goal is to make a simple and modern tool for motion design, and we need you for this :)
Can't wait to see what you create!</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>The design tab is now selected by default when you open a project with no animations</li>
<li>When opening a project, we now set the zoom level so the arboard is entirely visible</li>
<li>The default font size is now proportional to the artboard size</li>
<li>Updated the “Join the beta” form</li>
<li>Added hover effect on gallery items</li>
<li>Added a subscribe link to My Account page</li>
</ul>
`,fields:{date:`2021-02-09T00:00:00.000Z`,shortId:`2021-02-09`,slug:`2021-02-09-jitter-is-now-in-public-beta`},frontmatter:{title:`Jitter is now in public beta!`,video:{name:`20210209-video.mp4`,publicURL:`https://assets.jitter.video/20210209-video.mp4`},image:null}},{html:`<p>The export menu now proposes multiple options, with:</p>
<ul>
<li>Standard video sizes: 480p, 720p, 1080p</li>
<li>Design-ready video sizes: 0.5x, 1x, 2x</li>
<li>Design-ready GIF sizes: 0.5x, 1x.</li>
</ul>
<p>The standard video sizes will scale up or scale down your artboard size for the export, in order to match the 480p, 720p or 1080p resolution.
The design-ready video &#x26; GIF sizes will export at the artboard size, with the multiplicating factor.</p>
<h2>Free video exports under 480p</h2>
<p>We also introduce a Free vs. <strong>PRO</strong> plan.
In the free plan, you can export any video size up to 480p, and any GIF size up to 360p.
HD video export (artboard size > 480 px) and large GIF export (artboard size > 360 px) are available under the <strong>PRO</strong> plan.</p>
<h2>Other improvements &#x26; fixes</h2>
<ul>
<li>It is now possible to move timeline segments with keyboard arrows</li>
<li>Made the example gallery page available to anyone</li>
<li>Users can now try the editor without being logged-in (but you still have to be looged in to save your files)</li>
</ul>
`,fields:{date:`2021-01-29T00:00:00.000Z`,shortId:`2021-01-29`,slug:`2021-01-29-export-menu`},frontmatter:{title:`Export menu`,video:{name:`20210129-export_menu.mp4`,publicURL:`https://assets.jitter.video/20210129-export_menu.mp4`},image:null}},{html:`<p>Today we release text animation presets.
Just like for regular presets, you can add a “In” preset to make your text appear, and a “Out” preset to make it disappear.
Text presets enable you to animate texts:</p>
<ul>
<li>Letter by letter,</li>
<li>Word by word,</li>
<li>or Line by line.</li>
</ul>
<p>You can customize the animation of each node (letter, word, line), and the offset between each of these nodes.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>It is now possible to move timeline segments with keyboard arrows</li>
<li>It is now possible to edit objects graphically between “in” and “out” animations</li>
<li>It is now possible to edit objects graphically when the time cursor is at the end of an operation</li>
<li>The scene size and duration are now available in both Design and Animate modes</li>
<li>Added more examples to the gallery</li>
<li>Changed the playback behavior of actions in “in” mode</li>
<li>Updated the text effects inspector</li>
<li>Fixed a bug on the slide direction of text effects</li>
<li>Fixed a display bug that would display a small part of the object before a masking animation</li>
<li>Changed how you can define initial values for actions</li>
<li>Renamed items in the inspector menu</li>
</ul>
`,fields:{date:`2021-01-22T00:00:00.000Z`,shortId:`2021-01-22`,slug:`2021-01-22-text-presets`},frontmatter:{title:`Text presets`,video:{name:`20210122-text_presets.mp4`,publicURL:`https://assets.jitter.video/20210122-text_presets.mp4`},image:null}},{html:`<p>Today we release animation presets: they allow to add rich animations to your objects in just one click.
We reorganised the main animation menu, which has now 3 tabs:</p>
<ul>
<li><strong>In:</strong> lists the presets to make an object appear in the scene</li>
<li><strong>Out:</strong> lists the presets to make an object disappear from the scene</li>
<li><strong>Custom:</strong> lists all the elementary actions, if you want to build a custom animation from scratch</li>
</ul>
<p>You can also break down the presets into their individual actions, if you want to fully customize them.
You can find this option in the contextual menu, in the top right of the inspector.
This feature is not yet available on mask presets.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Fixed a problem with the URLs to share projects</li>
<li>Fixed a display bug for groups of layers when the opacity was &#x3C;100%</li>
<li>Updated default parameters when adding a new shape</li>
<li>Updated the animation menu style from dark to light mode</li>
</ul>
`,fields:{date:`2021-01-15T00:00:00.000Z`,shortId:`2021-01-15`,slug:`2021-01-15-animation-presets`},frontmatter:{title:`Animation presets`,video:{name:`20210115-presets.mp4`,publicURL:`https://assets.jitter.video/20210115-presets.mp4`},image:null}},{html:`<p>We added a menu at the top right of the inspector.
For layers and animations, you can now access contextual commands such as rename, delete, group, ungroup…</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Fixed a display bug for a group of objects with opacity &#x3C; 100%</li>
<li>Fixed a bug when resizing text boxes</li>
<li>Added more examples to the gallery</li>
</ul>
`,fields:{date:`2021-01-08T00:00:00.000Z`,shortId:`2021-01-08`,slug:`2021-01-08-contextual-menu`},frontmatter:{title:`Contextual menu`,video:{name:`20210108-happy_new_year.mp4`,publicURL:`https://assets.jitter.video/20210108-happy_new_year.mp4`},image:null}},{html:`<p>You can now group animations in the timeline.
It works like for grouping layers in regular design tools: select the animations you want to group and press <kbd>⌘</kbd><kbd>G</kbd>.
To ungroup, selected the element and press <kbd>⌘</kbd><kbd>⇧</kbd><kbd>G</kbd>.
Grouping animations together is particularly useful to organize the timeline in a more logical way.</p>
<h2>Rename animation groups</h2>
<p>To go even further, it is now possible to rename the animation groups.
For instance, you can make a group of “Move” + “Opacity” and name it “Slide in”.
Or, you can group all the animations of the beginning of your scene, and name it “Intro”.
This is particularly useful to organize the timeline in a more readable way.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Added a 5px security margin before starting to drag elements</li>
<li>Added an empty state to the file list</li>
<li>Fixed a bug that would reorder items in the layer list and the timeline when dragging them</li>
<li>Improved the experience while reordering items</li>
<li>Updated UI of the timeline and the layer list</li>
</ul>
`,fields:{date:`2020-12-19T00:00:00.000Z`,shortId:`2020-12-19`,slug:`2020-12-19-group-animations-in-the-timeline`},frontmatter:{title:`Group animations in the timeline`,video:{name:`20201219-group_animations.mp4`,publicURL:`https://assets.jitter.video/20201219-group_animations.mp4`},image:null}},{html:`<p>It is now possible to copy and paste animations.
For this:</p>
<ul>
<li>Step 1: Select the animation you want to copy and press <kbd>⌘</kbd><kbd>C</kbd></li>
<li>Step 2: Select the object you want to paste it on, and press <kbd>⌘</kbd><kbd>V</kbd></li>
</ul>
<p>That's it!
And of course, it also works with <kbd>ctrl</kbd><kbd>C</kbd> and <kbd>ctrl</kbd><kbd>V</kbd> on Windows and Linux.</p>
<h2>Copy &#x26; Paste layers (with their animations)</h2>
<p>It is also now possible to copy and paste layers: the duplicated layer will come with all its animations.
This is super helful when you have similar elements in your creations: you can design the animation once on the first object, and then make copies to speed up your workflow.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Added new examples to <a href="https://jitter.video/templates/">the gallery</a></li>
<li>It is now possible to move a multi-selection of layers with the keyboard arrows</li>
</ul>
`,fields:{date:`2020-12-11T00:00:00.000Z`,shortId:`2020-12-11`,slug:`2020-12-11-copy--paste-animations`},frontmatter:{title:`Copy & Paste animations`,video:{name:`20201211-copy_and_paste.mp4`,publicURL:`https://assets.jitter.video/20201211-copy_and_paste.mp4`},image:null}},{html:`<p>We are really excited to release the <a href="https://jitter.video/templates/">gallery of examples</a>.
In this gallery, you can click on any example to explore how it was done, and duplicate the file to remix it.</p>
<p>This is the first step towards our vision of:</p>
<ul>
<li>Enabling users to build on top of each other's work,</li>
<li>Enabling users to learn motion design through the tool.</li>
</ul>
<p>We can't wait to add more examples to the gallery, and see what you create. Happy remixing!</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Improved the navigation between the app sections</li>
<li>Enable to remix projects</li>
<li>The file list is now accessible at the <code>jitter.video/files</code> URL</li>
<li>Stop playback when leaving the editor</li>
<li>Decreased timeline grid to 10ms for more precision</li>
<li>Updated the interface of the Move action with handles</li>
<li>Fixed multiple display bugs (multi-selection, Move action…)</li>
<li>Cancel native trackpad gestures on the editor</li>
<li>Fix “pinch to zoom out” behavior on Safari</li>
<li>Stop auto-creating a file when the file list is empty</li>
</ul>
`,fields:{date:`2020-12-04T00:00:00.000Z`,shortId:`2020-12-04`,slug:`2020-12-04-example-gallery`},frontmatter:{title:`Example gallery`,video:{name:`20201204-gallery.mp4`,publicURL:`https://assets.jitter.video/20201204-gallery.mp4`},image:null}},{html:`<p>This release is mostly about consolidating what we shipped in the previous weeks.</p>
<ul>
<li>Improved the graphical editing of Move action</li>
<li>Added an arrow head to represent the direction of the Move actions</li>
<li>Display the size and angle information near the mouse cursor when editing graphically</li>
<li>Improve responsiveness when dragging the time cursor in the timeline</li>
<li>Fixed a bug on the Resize action, where the object would sometimes jump</li>
<li>Shortened the export page URLs</li>
</ul>
`,fields:{date:`2020-11-27T00:00:00.000Z`,shortId:`2020-11-27`,slug:`2020-11-27-improvements-and-fixes`},frontmatter:{title:`Improvements and fixes`,video:{name:`20201127-improvements.mp4`,publicURL:`https://assets.jitter.video/20201127-improvements.mp4`},image:null}},{html:`<p>We just added the ellipse shape.
It is great for making perfect circles, but we  also added a few extra cursors you can play with:</p>
<ul>
<li><strong>Donut</strong>: this creates a hole in the ellipse, with a number between 0% (no hole) and 100% (as big as the ellipse)</li>
<li><strong>Sweep</strong>: this creates a pie, with a number between 0% and 100%</li>
<li><strong>Start angle</strong>: this represents the angle where the pie starts</li>
</ul>
<p>These 3 parameters can be combined together – and of course, you can animate them with the <strong>Arc</strong> action.</p>
<h2>Resize animation</h2>
<p>It is now possible to resize any shape during the animation.
This is particularly useful for rectangles or media containers.
For example, you can design a nice intro animation by making a rectangle grow until it takes up all the surface of the scene.</p>
<p>The <strong>Resize</strong> action lets you choose an anchor point: this is the point that remains in the same place while the object is resizing. For instance, if you make a rectangle grow from a width of 100px to a width of 200px, you can choose the anchor point:</p>
<ul>
<li>On the left edge: the rectangle will expand by pushing its right edge further right,</li>
<li>On the right edge: the rectangle will expand by pushing its left edge further left,</li>
<li>In the center: the rectangle will expand by pushing both edges equally.</li>
</ul>
<h2>Other improvements and fixes</h2>
<ul>
<li>Added sections labels to the Animation menu, and reordered the actions</li>
<li>Display the Text Content section in Animate mode when a text is selected</li>
<li>Fixed the input fields of the Text effect inspector</li>
<li>Removed the From / To toggle of the Text effect inspector</li>
<li>Removed the Scale property from the Design inspector for all objects</li>
<li>The width and height of the Star shape can now be different</li>
<li>Restored graphical editing of actions</li>
<li>Improved the ghost display when the object does not change position</li>
<li>Allow to resize the timeline vertically</li>
<li>Added 50ms steps on the timeline</li>
<li>Added autoplay when switching the From / To modes</li>
<li>Keep the UI hidden for 500ms at the end of an auto-preview</li>
</ul>
`,fields:{date:`2020-11-20T00:00:00.000Z`,shortId:`2020-11-20`,slug:`2020-11-20-ellipse--arc-tool`},frontmatter:{title:`Ellipse & Arc Tool`,video:{name:`20201120-ellipse.mp4`,publicURL:`https://assets.jitter.video/20201120-ellipse.mp4`},image:null}},{html:`<p>We introduce a toggle in the top bar that allows you to switch easily between a mode when you can design your objects, and a mode where you can animate them.</p>
<p>In <strong>Design</strong> mode, you can focus on the design of your objects before any animation is applied to it.
We display the design inspector with all the object properties.</p>
<p>In <strong>Animate</strong> mode, you can focus on adding animations to your objects, and customize them in the inspector.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>When an action is selected, adding a new action now uses the same timing parameters as the selected action</li>
<li>Clicking on the timeline now unselects any selected action, but keeps the focus on the selected object</li>
<li>Actions now preview automatically when updating the easing function</li>
<li>Removed the Scale property from the design inspector</li>
<li>Converted Scale values to percents</li>
<li>Input fields now display units even when they are being edited</li>
<li>Input fields now support optional min and max thresholds when editing the value with keyboard arrows</li>
<li>Action input fields now support an optional “\xA0<strong>-</strong>\xA0” value to indicate the property is not animated</li>
<li>When an input field is in focus, hitting the space bar now previews the animation</li>
<li>Added an icon to represent the artboard</li>
<li>Improved the default values when adding a new action</li>
<li>Improved display performance for invisible shadows</li>
<li>Fixed the display of the Animation menu that could sometimes be partially off-screen</li>
<li><span class="tag">experimental</span> Resize action</li>
</ul>
`,fields:{date:`2020-11-13T00:00:00.000Z`,shortId:`2020-11-13`,slug:`2020-11-13-animate--design-modes`},frontmatter:{title:`Animate & Design modes`,video:{name:`20201113-animate-design-modes.mp4`,publicURL:`https://assets.jitter.video/20201113-animate-design-modes.mp4`},image:null}},{html:`<p>All the actions (Move, Scale, Rotate…) now support two modes:</p>
<ul>
<li>The <strong>To →</strong>\xA0mode: the action starts from the current state of the object and brings it to a new value,</li>
<li>The <strong>→ From</strong> mode: the action brings the object into its current state.</li>
</ul>
<p>The <strong>→ From</strong> mode is particularly useful to make objects appear into the scene. Before that, you had to add an action, update the design to reflect the initial state of the object, and go back to the action to make sure it transformed the object into its main state. Now, you can simply add an action to the object and toggle the <strong>→ From</strong> mode.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Fixed a bug that could cause the hover box to remain displayed after the mouse left</li>
<li>Fixed the highlight of actions applied on the same layer</li>
<li>Simplified the inspector of actions that handle multiple properties</li>
</ul>
`,fields:{date:`2020-11-06T00:00:00.000Z`,shortId:`2020-11-06`,slug:`2020-11-06-animate-elements-into-view`},frontmatter:{title:`Animate elements into view`,video:null,image:null}},{html:`<p>This release is mostly about consolidating what we shipped in the previous weeks.</p>
<ul>
<li>Improved the way fonts, images and videos are uploaded to the server</li>
<li>Improved the file duplication process</li>
<li>Improved the file synchronization process</li>
<li>Fixed a bug that could make the application crash on a page reload</li>
</ul>
`,fields:{date:`2020-10-30T00:00:00.000Z`,shortId:`2020-10-30`,slug:`2020-10-30-improvements-and-fixes`},frontmatter:{title:`Improvements and fixes`,video:{name:`20201030-improvements.mp4`,publicURL:`https://assets.jitter.video/20201030-improvements.mp4`},image:null}},{html:`<p>It is now possible to share a project with the URL.
For the user who opens the URL, it will create a copy of the project in her own library.
The original project and the duplicated one will keep living their separate lives in each other's browsers.</p>
<p>This is a first important step towards our vision of a fully collaborative experience.
This milestones makes it possible for experienced designers to share their projects on the Internet, and for more novice users to duplicate these projects and learn from their peers.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li><span class="tag">experimental</span> Trigger animations in cascade with a fixed offset between them</li>
</ul>
`,fields:{date:`2020-10-23T00:00:00.000Z`,shortId:`2020-10-23`,slug:`2020-10-23-project-sharing`},frontmatter:{title:`Project sharing`,video:null,image:null}},{html:`<p>It is now possible to create groups of layers:</p>
<ul>
<li>When multiple layers are selected, press <kbd>⌘</kbd><kbd>G</kbd>  when multiple layers are selected to group them (use <kbd>ctrl</kbd><kbd>G</kbd> on Windows / Linux)</li>
<li>When a group is selected, press <kbd>⌘</kbd><kbd>⇧</kbd><kbd>G</kbd> to ungroup (or <kbd>ctrl</kbd><kbd>⇧</kbd><kbd>G</kbd> on Windows / Linux)</li>
</ul>
<p>Groups work very much like layers: in particular, you can move, resize, scale and rotate them. Please note that resizing a group will not resize its content – they works very much like frames in Figma.</p>
<p>But the best part of it is that you can also add animations to the group itself! This is really powerful: you can for instance animate 2 objects, group them, and add another animation to the group itself.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>It is now possible to reorder multiple animations in the timeline at once</li>
<li>It is now possible to reorder multiple layers at once</li>
<li>Improved the selection of animations in the timeline on a mouse click</li>
<li>Improved the time cursor behavior when clicking in the timeline</li>
<li>Fixed a bug that would not display the handles of a rotated object</li>
<li>Fixed a bug on the Move animation that would conflict with overlapping animations</li>
<li>Fixed a bug that would display the snap lines of an artboard incorrectly after the artboard was moved</li>
<li>Fixed a bug that would display the snap lines of a ghost incorrectly after the artboard was moved</li>
<li>Fixed a bug on the Undo / Redo commands</li>
</ul>
`,fields:{date:`2020-10-16T00:00:00.000Z`,shortId:`2020-10-16`,slug:`2020-10-16-grouping-layers`},frontmatter:{title:`Grouping layers`,video:null,image:null}},{html:`<p>We are really excited to share some work-in-progress about masking. This will be really powerful: you can mask a group of animated layers with any animated mask. We have a working prototype of this, and we can't wait to share it publicly with you!</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Improved the behavior of clicks on the timeline</li>
<li>Animations now keep the same order in the timeline when grouping / ungrouping them</li>
<li>Layers now keep the same order in the timeline when grouping / ungrouping them</li>
<li>Fixed a bug that would cause a conflict between a Move and other overlapping animations</li>
</ul>
`,fields:{date:`2020-10-09T00:00:00.000Z`,shortId:`2020-10-09`,slug:`2020-10-09-proof-of-concept-masks`},frontmatter:{title:`Proof-of-concept: Masks`,video:{name:`20201009-masks.mp4`,publicURL:`https://assets.jitter.video/20201009-masks.mp4`},image:null}},{html:`<p>When you move a layer on the canvas, we now automatically snap it to the other layers of the artboard. We use a few useful anchor points: the corners, and the center of the layers.</p>
<p>This also works with animation ghosts. For instance, if you add a Move animation to a layer, you can snap the final position of the layer to its initial position.</p>
<h2>Text box auto resize</h2>
<p>You can now choose how the text box behaves:</p>
<ul>
<li><strong>Auto-width</strong>: the box always fits the content, and grows / shrinks with it</li>
<li><strong>Auto-height</strong>: the box has a fixed width, and the height grows / shrinks to fit the content</li>
<li><strong>Fixed size</strong>: the box size is fixed, and does not adapt to the text</li>
</ul>
<p>In the inspector, these options are available in the <em>Auto resize</em> field of the <em>Text</em> section.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Fixed a bug that would prevent to move layers with keyboard arrows</li>
</ul>
`,fields:{date:`2020-10-02T00:00:00.000Z`,shortId:`2020-10-02`,slug:`2020-10-02-snapping-layers`},frontmatter:{title:`Snapping layers`,video:null,image:null}},{html:`<p>Good news for users who need to reuse the same template multiple times: it is now possible to duplicate a file. And to make sure you don't get lost with all your files, you can also rename them.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Improved the time cursor and playback behavior</li>
<li>It is now possible to rotate an object by more than 360°, to spin several times</li>
</ul>
`,fields:{date:`2020-09-25T00:00:00.000Z`,shortId:`2020-09-25`,slug:`2020-09-25-rename-and-duplicate-files`},frontmatter:{title:`Rename and duplicate files`,video:{name:`20200925-rename-duplicate-files.mp4`,publicURL:`https://assets.jitter.video/20200925-rename-duplicate-files.mp4`},image:null}},{html:`<p>We simplified the creation of an animation.
After you add a Move, Rotate or Scale animation, you can manipulate your object directly on the canvas, and it will create the corresponding animations automatically.</p>
<p>Additionally, it is now possible to edit the Rotate and Scale animations graphically: after you create these animations, you can grab the handles of the object and edit the rotation angle or scale factor directly on the canvas.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>It is now possible to select multiple layers by holding <kbd>⇧</kbd></li>
<li>We display the multiple states of an animated object with semi-transparent copies (“ghosts”)</li>
</ul>
`,fields:{date:`2020-09-18T00:00:00.000Z`,shortId:`2020-09-18`,slug:`2020-09-18-create--edit-animations-graphically`},frontmatter:{title:`Create & edit animations graphically`,video:null,image:null}},{html:`<p>You can now use your own fonts for your animations!
To do so, we added an “Upload your font” option at the top of the font list menu: it triggers a panel where you can drag and drop your font file (or use the system file browser).</p>
<p>We currently support the following file types:</p>
<ul>
<li>TrueType (<code>*.ttf</code>)</li>
<li>OpenType (<code>*.otf</code>)</li>
</ul>
<p><strong>💡 Note:</strong> at the moment, it is not possible to delete a custom font.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Added the possibility to edit the duration and easing of multiple animations at once</li>
<li>Improved the visibility of the 📣 Feedback button</li>
</ul>
`,fields:{date:`2020-09-11T00:00:00.000Z`,shortId:`2020-09-11`,slug:`2020-09-11-use-your-own-fonts`},frontmatter:{title:`Use your own fonts`,video:null,image:{name:`20200911-custom-fonts.png`,publicURL:`https://assets.jitter.video/20200911-custom-fonts.png`}}},{html:`<p>It is now possible to add complex animations in 1 click.
We added 6 presets to make elements appear and disappear easily.
It is also possible to customize parameters of the presets, like the direction of a translation, or the easing function of the animation.</p>
<h2>Group animations in the timeline</h2>
<p>As projects are getting bigger, the timeline can become more complex to read.
We just added the possibility to tidy up the timeline by grouping animations together: when multiple animations are selected, hitting <kbd>⌘</kbd><kbd>G</kbd> folds them under a group.
You can ungroup the animations by hitting <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd>.</p>
<p>Groups work like you expect: moving a group in the timeline moves all the enclosed animations by the same offset; and stretching a group's duration stretches the enclosed animations proportionally.</p>
`,fields:{date:`2020-09-04T00:00:00.000Z`,shortId:`2020-09-04`,slug:`2020-09-04-animation-presets`},frontmatter:{title:`Animation presets`,video:null,image:{name:`20200904-animation-presets.png`,publicURL:`https://assets.jitter.video/20200904-animation-presets.png`}}},{html:`<p>It is now possible to select multiple animations in the timeline by holding <kbd>⇧</kbd> and clicking on the desired animations.
Once multiple segments are selected, you can move and resize them all together.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Resizing animations in the timeline now rounds the values to the nearest millisecond</li>
<li>Added a “Feedback” button in the interface</li>
<li>Improved the Intercom prompt to start a conversation</li>
</ul>
`,fields:{date:`2020-08-28T00:00:00.000Z`,shortId:`2020-08-28`,slug:`2020-08-28-select-multiple-animations-in-the-timeline`},frontmatter:{title:`Select multiple animations in the timeline`,video:null,image:{name:`20200828-timeline-multiselect.png`,publicURL:`https://assets.jitter.video/20200828-timeline-multiselect.png`}}},{html:`<p>This week, we worked on ways to simplify the creation of an animation.
What if we could design the initial and final states of an element, and let the app magically create an animation between those 2 states?
This is what we are testing at the moment: <a href="mailto:hi@snackthis.co?subject=Hello%20SnackThis">reach out to us</a> if you want to give it a try!</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>The labels in the Text Effect inspector are more explicit</li>
<li>Fixed a bug that would prevent to drag Text Effect animation in the timeline</li>
</ul>
`,fields:{date:`2020-08-21T00:00:00.000Z`,shortId:`2020-08-21`,slug:`2020-08-21-magic-motion-proof-of-concept`},frontmatter:{title:`Magic Motion proof-of-concept`,video:{name:`20200821-magic-motion.mp4`,publicURL:`https://assets.jitter.video/20200821-magic-motion.mp4`},image:null}},{html:`<p>This week we release an important feature for the future developments of our product: we introduce a checkout process to export the GIFs and videos.
We want to move fast towards the best possible product, and we think this is what will help us the most for that goal.
In particular, having paying users:</p>
<ul>
<li>sets high expectations about what we deliver, and holds us accountable</li>
<li>provides high quality feedback, and helps us focus on the most pressing problems</li>
<li>provides a great measurement of the value we provide</li>
</ul>
<h2>Intercom</h2>
<p>We want to keep a constant bond with our users to make sure we focus on the right things, so we just added Intercom to our website.
Please reach out to us anytime, whether you have a question, a comment or just want to say hi: we are always really, really happy to talk to you! 🙂</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>We now communicate on our progress with a public changelog – there you are!</li>
<li>Users can now access their “My Account” page</li>
<li>Fixed a bug that would make possible to edit an animation without seeing the result in the canvas</li>
</ul>
`,fields:{date:`2020-08-14T00:00:00.000Z`,shortId:`2020-08-14`,slug:`2020-08-14-checkout-process`},frontmatter:{title:`Checkout process`,video:null,image:null}},{html:`<p>The interface just got a big upgrade: it is cleaner, more lightweight, and more understandable.
The color code of the layers is blue, the color code of the animations is red: it is now easier to understand if you are editing the layer or the animation.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>All operations now have a From / To toggle</li>
<li>The timeline now indicates what to do to add the first animation</li>
<li>Reordered and improved the Text Effect inspector sections</li>
<li>For text effects, you can now split texts in letters</li>
<li>You can now resize a text effect segment in the timeline</li>
<li>You can now select an operation segment by clicking anywhere on the timeline</li>
<li>Operation segments now display handles on hover</li>
<li>Removed the size in the Artboard preset selector</li>
<li>Improved the separation of the timeline and the canvas</li>
</ul>
`,fields:{date:`2020-08-07T00:00:00.000Z`,shortId:`2020-08-07`,slug:`2020-08-07-ui-revamp`},frontmatter:{title:`UI revamp`,video:null,image:{name:`20200807-ui-revamp.png`,publicURL:`https://assets.jitter.video/20200807-ui-revamp.png`}}},{html:`<p>Text effects now support easing functions.
You can select a prebuilt effect (for instance “Slide and Fade”) and decide how the word (or line) comes in.
For instance, you can select “Slow down” for a classic look, or “Elastic” for a more playful ambience.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Shadow animations and Star animation inspectors now have a From / To toggle</li>
<li>Texts now support shadows</li>
<li>You can now animate the text color</li>
<li>You can now animate the text shadow</li>
<li><span class="tag">experimental</span> Add Timeline empty state</li>
<li><span class="tag">experimental</span> Add Animate / Design tabs to the inspector</li>
</ul>
`,fields:{date:`2020-07-31T00:00:00.000Z`,shortId:`2020-07-31`,slug:`2020-07-31-text-effect-easing`},frontmatter:{title:`Text Effect easing`,video:{name:`20200731-text-node-easing.mp4`,publicURL:`https://assets.jitter.video/20200731-text-node-easing.mp4`},image:null}},{html:`<p>We added the Star object, with 2 specific controls to help you shape it exactly like you want: number of spikes, and thickness.
For instance, you can set the thickness to 38.2% to get a straight star, or to 50% if you want to get a more friendly star.</p>
<h2>Star animation</h2>
<p>Like any other object, you can animate all of the star's basic properties.
But we also made it easy to animate the star's specific properties (number of spikes, thickness).
Animating the thickness property is particularly useful if you want to make a cool apparition effect.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>The Animation menu is now more consistent across all objects</li>
<li>We added the corner radius property to Rectangles, Images and Videos</li>
<li>You can now animate the corner radius</li>
<li>Shadow animations now have better default values</li>
</ul>
`,fields:{date:`2020-07-24T00:00:00.000Z`,shortId:`2020-07-24`,slug:`2020-07-24-star-shape`},frontmatter:{title:`Star shape`,video:{name:`20200724-star-animation.mp4`,publicURL:`https://assets.jitter.video/20200724-star-animation.mp4`},image:null}},{html:`<p>This week, we introduce the possibility to save your files and come back to them later.
The home screen now lists all your files.
You can create a new file with the “New file” button, and delete old ones with the Trash icon.</p>
<h2>Shadow support</h2>
<p>All shapes, images and videos now support shadows.
Like in traditional design tools, you can express a shadow with a color, an opacity, a blur radius, and a position offset.</p>
<h2>Color &#x26; Shadow animation</h2>
<p>It is now possible to animate the shadow of an object, as well as its color.
All the properties of the shadow are grouped under the same animation, because it is more common to animate them synchronously.
If you need to desynchronize shadow properties, you can simply add two Shadow animations and set custom parameters for each of them.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>Buttons to add images &#x26; videos are now merged into a single “Add media” icon</li>
</ul>
`,fields:{date:`2020-07-17T00:00:00.000Z`,shortId:`2020-07-17`,slug:`2020-07-17-file-library`},frontmatter:{title:`File library`,video:null,image:{name:`20200717-file-library.png`,publicURL:`https://assets.jitter.video/20200717-file-library.png`}}},{html:`<p>We're excited to add a much requested feature: you can now undo / redo all your actions with <kbd>⌘</kbd> <kbd>Z</kbd> and <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>Z</kbd> (<kbd>ctrl</kbd> <kbd>Z</kbd> and <kbd>ctrl</kbd> <kbd>⇧</kbd> <kbd>Z</kbd> on Windows &#x26; Linux).
This is definitely a big improvement for productivity and creativity, as it lets you be in the flow without the fear of making mistakes.</p>
<h2>Font styles &#x26; line height</h2>
<p>Text just got a big upgrade with the support of all the font styles proposed by Google Fonts (font weight and italics).
We also added a control for the line height: using a small line height is particularly useful to make bold statements with fonts fonts like Montserrat 900, Oswald, or Fjalla One (in all caps).</p>
<h2>Move objects along guides, resize from center</h2>
<p>We added 2 other much requested features: you can now move an object along horizontal or vertical guides by holding <kbd>⇧</kbd> while dragging, and resize an object from its center by holding <kbd>⌥</kbd> while resizing (<kbd>alt</kbd> on Windows and Linux).</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>We replaced the <code>⚡️</code> icon by a <code>⚡️ Animate</code> button on the canvas</li>
<li>The timeline now scrolls automatically to the selected operation</li>
<li>Fixed a bug that would make the export crash in some cases</li>
<li>Fixed an issue that would not display alignment guides in some cases</li>
<li>Fixed a display bug in the text effect inspector</li>
</ul>
`,fields:{date:`2020-07-10T00:00:00.000Z`,shortId:`2020-07-10`,slug:`2020-07-10-undo--redo`},frontmatter:{title:`Undo / Redo`,video:null,image:{name:`20200710-text-inspector.png`,publicURL:`https://assets.jitter.video/20200710-text-inspector.png`}}},{html:`<p>The 4 basic animations (move, rotate, scale, opacity) just got an upgrade: you can now control all the parameters, including the start value, from their inspector. Being able to customize the animation from the same place makes it much easier to create what you want in a shorter amount of time.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>The Rotate animation now supports negative angle values</li>
<li>The Animation menu now has icons to illustrate the animations</li>
<li>We updated the UI of the inspector</li>
<li>We simplified the animation inspector a lot, removing options that were too complicated or not ready yet (enforce initial value, build in / build out toggle)</li>
<li>We temporarily removed the presets as they made the interface more cluttered</li>
<li>Fixed a bug about video upload</li>
</ul>
`,fields:{date:`2020-07-03T00:00:00.000Z`,shortId:`2020-07-03`,slug:`2020-07-03-more-control-over-the-animations`},frontmatter:{title:`More control over the animations`,video:null,image:{name:`20200703-opacity-inspector.png`,publicURL:`https://assets.jitter.video/20200703-opacity-inspector.png`}}},{html:`<p>We now support video as a media.
Just like images, you can import a video in your project and animate its basic properties.
We currently support the MP4 format, and videos under 100MB.</p>
<h2>Other improvements and fixes</h2>
<ul>
<li>We added some animation presets to simplify the creation of classic animations</li>
<li>Animation parameters are now expressed in terms of absolute values (instead of relative)</li>
<li>We now use the original file name to identify an image in the layer list</li>
<li>Selecting an element in the layer list now highlights its animations in the timeline, and vice versa</li>
<li>The timeline height is now capped to leave more space for the canvas</li>
<li>You can now reorder animations in the timeline</li>
<li>New animations are now added at the bottom of the timeline</li>
<li>The UI elements displayed on the canvas are now hidden while playing an animation</li>
<li>Fixed a bug about the selection box that would not fit the object</li>
<li>Fixed a bug about resizing objects with a Move animation</li>
</ul>
`,fields:{date:`2020-06-26T00:00:00.000Z`,shortId:`2020-06-26`,slug:`2020-06-26-video-support`},frontmatter:{title:`Video support`,video:null,image:null}}]};function zo(){let{entries:e}=Ro,t=[];for(let n of e)if(n.fields.slug!==null&&(t.push({slug:n.fields.slug,title:n.frontmatter.title}),t.length===3))break;return t}var Bo=({index:e,open:t,data:n,...a})=>{let o=[{"title":"Customer stories","href":"#customer-stories"},{"title":"Pricing","href":"#pricing"},{"title":"FAQ","href":"#faq"}],{setOpenSubmenuIndex:agimonCloseMenu}=m();return(0,$.jsx)(Lo,{index:e,open:t,...a,"data-sentry-element":`Submenu`,"data-sentry-component":`SubmenuProduct`,"data-sentry-source-file":`Product.tsx`,children:(0,$.jsxs)(`div`,{className:po,"aria-haspopup":`true`,children:[(0,$.jsxs)(`div`,{className:i(mo,Co),children:[(0,$.jsxs)(`div`,{className:i(co,`submenuCard1`,go,To),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card1.href,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card1.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card1.title)}}),(0,$.jsx)(`span`,{className:vo,children:agimonHeaderLabel(n.cards.card1.ctaLabel)})]})})]}),(0,$.jsxs)(`div`,{className:i(co,`submenuCard2`,go,Oo),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card2.href,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card2.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card2.title)}}),(0,$.jsx)(`span`,{className:vo,children:agimonHeaderLabel(n.cards.card2.ctaLabel)})]})})]})]}),(0,$.jsx)(`div`,{className:i(mo,wo),children:(0,$.jsxs)(`div`,{className:i(co,`submenuCard1`,yo,To),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card1.href,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card1.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsxs)(`div`,{className:_o,children:[(0,$.jsx)(`div`,{className:Eo,children:t&&(0,$.jsx)(`div`,{className:`_cardLogo_1ctqk_810`,children:(0,g.cloneElement)(n.cards.card1.graphic,{className:`fill-current`,"aria-hidden":`true`})})}),(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card1.title)}}),(0,$.jsx)(`span`,{className:vo,children:agimonHeaderLabel(n.cards.card1.ctaLabel)})]})]})]})}),(0,$.jsx)(`div`,{className:i(mo,wo),children:(0,$.jsxs)(`div`,{className:i(co,`submenuCard2`,yo,Oo),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card2.href,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card2.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsxs)(`div`,{className:_o,children:[n.cards.card2.imageUrl&&(0,$.jsx)(`img`,{className:`_image_1ctqk_1083`,src:n.cards.card2.imageUrl}),(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card2.title)}}),(0,$.jsx)(`span`,{className:vo,children:agimonHeaderLabel(n.cards.card2.ctaLabel)})]})]})]})}),(0,$.jsxs)(`div`,{className:mo,children:[(0,$.jsxs)(`div`,{className:i(co,`submenuCard3`,go,ko),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card3.href,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card3.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card3.title)}}),(0,$.jsx)(`span`,{className:vo,children:agimonHeaderLabel(n.cards.card3.ctaLabel)})]})})]}),(0,$.jsxs)(`div`,{className:i(co,`submenuCard4`,go,Ao),children:[(0,$.jsx)(r,{reloadDocument:!0,onClick:()=>agimonCloseMenu(null),to:n.cards.card4?.href?n.cards.card4?.href:``,className:Fo,"aria-label":agimonHeaderLabel(n.cards.card4.title),"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Product.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsxs)(`div`,{className:Po,children:[n?.cards?.card4?.title&&(0,$.jsx)(`h3`,{className:`_subtitle_1ctqk_989`,dangerouslySetInnerHTML:{__html:agimonHeaderLabel(n.cards.card4.title)}}),n?.cards?.card4?.ctaLabel&&(0,$.jsx)(`span`,{className:`_sublink_1ctqk_680`,children:agimonHeaderLabel(n.cards.card4.ctaLabel)})]})})]})]}),(0,$.jsx)(`div`,{className:i(mo,ho),children:(0,$.jsxs)(`nav`,{className:xo,"aria-labelledby":`submenuNavTitle-${e}`,children:[(0,$.jsx)(`p`,{className:i(uo,bo),id:`submenuNavTitle-${e}`,children:agimonHeaderLabel(`Explore Agimon`)}),(0,$.jsx)(`ul`,{className:So,children:o.map((e,t)=>(0,$.jsx)(`li`,{className:uo,children:(0,$.jsx)(d,{href:e.href,reloadDocument:!0,onClick:()=>agimonCloseMenu(null),children:agimonHeaderLabel(e.title)})},t))}),(0,$.jsx)(`div`,{className:lo,children:(0,$.jsxs)(u,{href:"https://agimon.io/#get-started",themeColor:`gray`,"data-sentry-element":`ButtonLink`,"data-sentry-source-file":`Product.tsx`,children:[agimonHeaderLabel(`Get a demo`),`\xA0→`]})})]})})]})})},Vo=({index:e,open:t,data:n,...o})=>{let[s,c]=(0,g.useState)(0),{setOpenSubmenuIndex:l}=m();return(0,g.useEffect)(()=>{c(0)},[t]),(0,$.jsx)(Lo,{index:e,open:t,...o,"data-sentry-element":`Submenu`,"data-sentry-component":`SubmenuCases`,"data-sentry-source-file":`Cases.tsx`,children:(0,$.jsxs)(`div`,{className:po,"aria-haspopup":`true`,children:[(0,$.jsx)(`div`,{className:i(mo),children:(0,$.jsxs)(`div`,{className:i(co,`submenuCard1`,yo,jo,s===0&&`_submenuCaseActiveCard_1ctqk_880`),onMouseEnter:()=>{c(0)},style:a({"--card-color":n.cards.card1.color}),children:[(0,$.jsx)(r,{to:n.cards.card1.href,className:Fo,"aria-label":n.cards.card1.title,"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Cases.tsx`}),(0,$.jsxs)(`div`,{className:_o,children:[(0,$.jsx)(`div`,{className:Do,children:n.cards.card1.smallDesktopLogo?.svg&&(0,$.jsx)(`div`,{className:`_cardLogoInner_1ctqk_926`,style:{width:`${n.cards.card1.smallDesktopLogo?.width}px`},dangerouslySetInnerHTML:{__html:n.cards.card1.smallDesktopLogo?.svg}})}),(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:n.cards.card1.title}}),(0,$.jsx)(`span`,{className:vo,children:n.cards.card1.ctaLabel})]})]})]})}),(0,$.jsx)(`div`,{className:i(mo,wo),children:(0,$.jsxs)(`div`,{className:i(co,`submenuCard2`,yo,Mo,s===1&&`_submenuCaseActiveCard_1ctqk_880`),onMouseEnter:()=>{c(1)},style:a({"--card-color":n.cards.card2.color}),children:[(0,$.jsx)(r,{to:n.cards.card2.href,className:Fo,"aria-label":n.cards.card2.title,"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Cases.tsx`}),(0,$.jsxs)(`div`,{className:_o,children:[(0,$.jsx)(`div`,{className:Do,children:n.cards.card2.desktopLogo?.svg&&(0,$.jsx)(`div`,{className:`_cardLogoInner_1ctqk_926`,style:{width:`${n.cards.card2.desktopLogo?.width}px`},dangerouslySetInnerHTML:{__html:n.cards.card2.desktopLogo?.svg}})}),(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:n.cards.card2.title}}),(0,$.jsx)(`span`,{className:vo,children:n.cards.card2.ctaLabel})]})]})]})}),(0,$.jsx)(`div`,{className:i(mo,wo),children:(0,$.jsxs)(`div`,{className:i(co,`submenuCard3`,yo,No,s===2&&`_submenuCaseActiveCard_1ctqk_880`),onMouseEnter:()=>{c(2)},style:a({"--card-color":n.cards.card3.color}),children:[(0,$.jsx)(r,{to:n.cards.card3.href,className:Fo,"aria-label":n.cards.card3.title,"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Cases.tsx`}),(0,$.jsxs)(`div`,{className:_o,children:[(0,$.jsx)(`div`,{className:Do,children:n.cards.card3.desktopLogo?.svg&&(0,$.jsx)(`div`,{className:`_cardLogoInner_1ctqk_926`,style:{width:`${n.cards.card3.desktopLogo?.width}px`},dangerouslySetInnerHTML:{__html:n.cards.card3.desktopLogo?.svg}})}),(0,$.jsxs)(`div`,{className:Po,children:[(0,$.jsx)(`h3`,{className:Io,dangerouslySetInnerHTML:{__html:n.cards.card3.title}}),(0,$.jsx)(`span`,{className:vo,children:n.cards.card3.ctaLabel})]})]})]})}),(0,$.jsxs)(`div`,{"aria-hidden":`true`,className:i(mo,Co),children:[(0,$.jsxs)(`div`,{className:i(co,`submenuCard2`,go,Mo,s===1&&`_submenuCaseActiveCard_1ctqk_880`),onMouseEnter:()=>{c(1)},children:[(0,$.jsx)(r,{to:n.cards.card2.href,className:Fo,"aria-label":n.cards.card2.title,"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Cases.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsx)(`div`,{className:Do,children:n.cards.card2.smallDesktopLogo?.svg&&(0,$.jsx)(`div`,{className:`_cardLogoInner_1ctqk_926`,style:{width:`${n.cards.card2.smallDesktopLogo?.width}px`},dangerouslySetInnerHTML:{__html:n.cards.card2.smallDesktopLogo?.svg}})})})]}),(0,$.jsxs)(`div`,{className:i(co,`submenuCard3`,go,No,s===2&&`_submenuCaseActiveCard_1ctqk_880`),onMouseEnter:()=>{c(2)},children:[(0,$.jsx)(r,{to:n.cards.card3.href,className:Fo,"aria-label":n.cards.card3.title,"data-sentry-element":`RouterLink`,"data-sentry-source-file":`Cases.tsx`}),(0,$.jsx)(`div`,{className:_o,children:(0,$.jsx)(`div`,{className:Do,children:n.cards.card3.smallDesktopLogo?.svg&&(0,$.jsx)(`div`,{className:`_cardLogoInner_1ctqk_926`,style:{width:`${n.cards.card3.smallDesktopLogo?.width}px`},dangerouslySetInnerHTML:{__html:n.cards.card3.smallDesktopLogo?.svg}})})})]})]}),n.extraColumn&&(0,$.jsx)(`div`,{className:i(`_submenuCol_1ctqk_592`,`_submenuColText_1ctqk_597`),children:(0,$.jsxs)(`nav`,{className:`_submenuNav_1ctqk_716`,"aria-labelledby":`submenuNavTitle-${e}`,children:[(0,$.jsx)(`p`,{className:i(`_submenuText_1ctqk_538`,`_submenuColTextTitle_1ctqk_708`),id:`submenuNavTitle-${e}`,children:n.extraColumn.title}),(0,$.jsx)(`ul`,{className:`_submenuSideNav_1ctqk_720`,children:n.extraColumn.links.map((e,t)=>(0,$.jsx)(`li`,{className:`_submenuText_1ctqk_538`,children:(0,$.jsx)(d,{href:e.href,onClick:()=>{l(null)},children:agimonHeaderLabel(e.label)})},t))}),(0,$.jsx)(`div`,{className:`_submenuTextFooter_1ctqk_538`,children:n.extraColumn.cta?.href&&(0,$.jsxs)(u,{href:n.extraColumn.cta.href,themeColor:`gray`,onClick:()=>{l(null)},children:[n.extraColumn.cta.label,` \xA0→`]})})]})})]})})},Ho={"menu":[{"label":"Product","slug":"#product"},{"label":"Customers","slug":"#customer-stories"},{"label":"Team","slug":"#team"},{"label":"Pricing","slug":"#pricing"}],"menuMobile":[{"label":"Product","href":"#product"},{"label":"Customers","href":"#customer-stories"},{"label":"Team","href":"#team"},{"label":"Pricing","href":"#pricing"}]},Uo=e=>(0,$.jsx)(`svg`,{width:16,height:10,viewBox:`0 0 16 10`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,$.jsx)(`path`,{d:`M0.5 10H15.5V8.33333H0.5V10ZM0.5 5.83333H15.5V4.16667H0.5V5.83333ZM0.5 0V1.66667H15.5V0H0.5Z`})}),Wo=e=>(0,$.jsxs)(`svg`,{width:20,height:20,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,$.jsx)(`g`,{clipPath:`url(#clip0_794_3025)`,children:(0,$.jsx)(`path`,{d:`M15.8334 5.34175L14.6584 4.16675L10.0001 8.82508L5.34175 4.16675L4.16675 5.34175L8.82508 10.0001L4.16675 14.6584L5.34175 15.8334L10.0001 11.1751L14.6584 15.8334L15.8334 14.6584L11.1751 10.0001L15.8334 5.34175Z`,fill:`white`})}),(0,$.jsx)(`defs`,{children:(0,$.jsx)(`clipPath`,{id:`clip0_794_3025`,children:(0,$.jsx)(`rect`,{width:20,height:20,fill:`white`})})})]}),Go=e=>(0,$.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 12 7.41`,fill:`currentColor`,...e,children:(0,$.jsx)(`path`,{d:`M1.41,0,6,4.58,10.59,0,12,1.41l-6,6-6-6Z`})});typeof window<`u`&&Ci.registerPlugin(na);var Ko=({appearInEnabled:e=!1,theme:t=`dark`,greyBackground:n=!1,hideContactSales:r=!1})=>{let[,agimonRefreshHeader]=(0,g.useState)(0);(0,g.useEffect)(()=>{const refresh=()=>agimonRefreshHeader(n=>n+1);window.addEventListener("agimon:language",refresh);return()=>window.removeEventListener("agimon:language",refresh)},[]);let a=(0,g.useRef)(null),h=(0,g.useRef)(null),_=(0,g.useRef)(null),v=(0,g.useRef)(null),y=p(),[b,x]=(0,g.useState)(!1),[S,C]=(0,g.useState)(!1),w=(0,g.useRef)(null),T=(0,g.useRef)(0),E=(0,g.useRef)(!1),{isMinimized:D,openSubmenuIndex:O,setIsMinimized:k,setOpenSubmenuIndex:A,isSticky:j,setIsSticky:M,localScrollDirection:N,setLocalScrollDirection:P}=m(),[F,I]=(0,g.useState)(!1),[L,R]=(0,g.useState)(!1),z=Oa(),{isMobile:B}=Ta(),{width:V}=Da(),ee=t===`light`&&(!j||D)&&O===null?`white`:`black`,te=n&&(!j||D)&&O===null?`white`:`gray`,[ne,re]=(0,g.useState)(!1),[H,ie]=(0,g.useState)(null),[ae,U]=(0,g.useState)(!1),[oe,se]=(0,g.useState)(!1),{scrollY:ce,scrollDirection:W}=ra(),le=e=>{e.keyCode===9&&(document.documentElement.classList.add(`keyboard-user`),re(!0))},ue=()=>{document.documentElement.classList.remove(`keyboard-user`),re(!1)};return ki(()=>{let e=Ci.timeline();na.create(`quadOut`,`0.25, 0.46, 0.45, 0.94`),na.create(`overShoot`,`0.33, 1.42, 0.05, 0.96`),Ci.killTweensOf(h.current);let t=0;if(O!==null){let e=((_.current?.querySelectorAll(`.${Wa}`)[O])?.querySelector(`.${Qa}`))?.querySelector(`.${fo}`);if(!e)return;t=(a.current?.offsetHeight||0)+e.offsetHeight;let n=window.innerHeight-15-6-window.innerHeight/10;t>n&&(t=n)}let n=0;(j||O!==null)&&(n=1);let r=j?.3:.2,i;i=O!==null&&h.current?-h.current.offsetTop||0:j?D?`-14rem`:0:`-3.45rem`;let o=j?.75:.5,s=!j&&O===null?.2:0,c;c=O!==null||j&&!D?`overShoot`:`expo.out`;let l=O===null?a.current?.offsetWidth:window.innerWidth,u=O===null?a.current?.offsetHeight:t+(h.current?.offsetTop||0),d=O===null?.7:.5;e.to(h.current,{opacity:n,duration:r,ease:`quadOut`}).to(h.current,{y:i,duration:o,delay:s,ease:c},`<`).to(h.current,{width:l,height:u,duration:d,ease:`expo.out`},`<`)},[j,D,O,V,F]),(0,g.useEffect)(()=>{M(ce>1),ce>T?.current?(k(!1),P(`down`)):P(`up`),T.current=ce},[ce,k,P,M]),(0,g.useEffect)(()=>{w.current!==null&&clearTimeout(w.current);let e=null;e=setTimeout(j?()=>{C(!0)}:()=>{C(!1)},400),w.current=e},[j]),(0,g.useEffect)(()=>{N===`down`?(k(!0),A(null)):k(!1)},[N,ce,k,A]),(0,g.useEffect)(()=>{P(W)},[W,P]),(0,g.useEffect)(()=>{z&&document.body.classList.add(`is-mobile-device`)},[z]),(0,g.useEffect)(()=>(se(!1),A(null),ie(null),window.addEventListener(`keydown`,le),window.addEventListener(`mousemove`,ue),setTimeout(()=>{x(!0)},100),setTimeout(()=>{U(!0)},500),()=>{window.removeEventListener(`keydown`,le),window.removeEventListener(`mousemove`,ue)}),[A]),(0,g.useEffect)(()=>{F?setTimeout(()=>{R(!0)},10):R(!1)},[F]),(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u,{href:`#main-content`,themeColor:`gray`,size:`small`,className:to,"data-sentry-element":`ButtonLink`,"data-sentry-source-file":`Header.tsx`,children:`Skip to main content`}),(0,$.jsxs)(`header`,{"data-agimon-section-header":`true`,className:i(Ha,j&&`_isSticky_1ctqk_38`,S&&`_wasSticky_1ctqk_154`,D&&`_isMinimized_1ctqk_38`,e&&`_hasAppearIn_1ctqk_34`,ae&&`_animateIn_1ctqk_34`,y&&`_isLoggedIn_1ctqk_55`,t===`light`&&`_light_1ctqk_93`,F&&`_mobileMenuOpen_1ctqk_34`,O!==null&&`_hasSubmenu_1ctqk_73`,(j&&!D||O!==null)&&`_showBackground_1ctqk_96`),children:[(0,$.jsxs)(Aa,{className:no,"data-sentry-element":`Container`,"data-sentry-source-file":`Header.tsx`,children:[(0,$.jsx)(`div`,{ref:a,className:i(Ua,ro)}),(0,$.jsx)(`div`,{ref:h,className:Ua}),(0,$.jsx)(`div`,{ref:v,className:io,children:(0,$.jsxs)(`div`,{className:ao,children:[(0,$.jsxs)(`div`,{className:Ga,children:[(0,$.jsx)(`div`,{className:Ka,children:(0,$.jsx)(ja,{onMouseEnter:()=>{A(null),ie(null)},"data-sentry-element":`HeaderLogo`,"data-sentry-source-file":`Header.tsx`})}),(0,$.jsxs)(`nav`,{ref:_,className:oo,children:[(0,$.jsx)(`h2`,{className:`sr-only`,"aria-hidden":`true`,children:`Main navigation`}),(0,$.jsx)(`ul`,{"aria-label":`Main navigation menu`,children:Ho.menu.map((e,t)=>(0,$.jsxs)(`li`,{className:i(Wa,t===O&&`_openSubmenu_1ctqk_314`,H===t&&`_navItemHoveredActive_1ctqk_64`,H!==null&&`_navItemHovered_1ctqk_64`),onMouseEnter:n=>{b?(ie(t),e.id===`product`||e.id===`customers`||e.id===`resources`?(O!==null&&se(!0),n.stopPropagation(),A(t),k(!1)):(se(!1),A(null))):(se(!1),A(null),ie(null))},onMouseLeave:()=>{se(!1),A(null),ie(null)},children:[e.id===`product`||e.id===`customers`?(0,$.jsx)(d,{href:e.href,reloadDocument:!0,onClick:()=>A(null),className:qa,"aria-haspopup":`true`,"aria-expanded":O===t?`true`:`false`,onFocusCapture:()=>{ne&&(k(!1),A(null))},children:agimonHeaderLabel(e.label)}):(0,$.jsx)(d,{href:e.slug||`/`,reloadDocument:!0,onClick:()=>A(null),className:qa,onMouseEnter:()=>{A(null)},onFocusCapture:()=>{ne&&(k(!1),A(null))},onMouseLeave:()=>{ie(null)},children:agimonHeaderLabel(e.label)}),ne&&(e.id===`product`||e.id===`customers`)&&(0,$.jsx)(`button`,{type:`button`,className:`_submenuAccessibilityOpener_1ctqk_1141`,"aria-controls":`siteSubmenu${t}`,"aria-label":O===t?`Close submenu: ${e.label}`:`Open submenu: ${e.label}`,"aria-selected":O===t?`true`:`false`,onClick:()=>{O===t?A(null):(A(t),k(!1))},onFocusCapture:()=>{ne&&(k(!1),A(null))},children:(0,$.jsx)(Go,{"aria-hidden":`true`})}),e.id===`product`&&(0,$.jsx)(Bo,{index:t,open:t===O,fast:oe,data:e.content}),e.id===`customers`&&(0,$.jsx)(Vo,{index:t,open:t===O,fast:oe,data:e.content})]},t))})]})]}),(0,$.jsx)(`div`,{className:Ja,children:(0,$.jsx)(Aa,{"data-sentry-element":`Container`,"data-sentry-source-file":`Header.tsx`,children:(0,$.jsxs)(`div`,{className:eo,children:[(0,$.jsx)(AgimonLanguageControl,{}),(0,$.jsx)(`div`,{className:Ya,children:(0,$.jsx)(u,{href:`#get-demo`,reloadDocument:!0,"aria-haspopup":`dialog`,themeColor:ee,className:so,onFocusCapture:()=>{k(!1)},onMouseEnter:()=>{A(null)},onClick:()=>{I(!1),R(!1)},children:agimonHeaderLabel(`Get a demo`)})}),(0,$.jsx)(`div`,{className:Xa,children:(0,$.jsx)(f,{themeColor:V<1025&&(F?`black`:`white`)||ee,className:i(so,$a),onClick:()=>{B?(F||(E.current=j),M(F?E.current:!1),I(!F)):P(`up`)},onFocus:()=>{M(!0),k(!0)},"aria-label":agimonHeaderLabel(F?`Close menu`:`Open menu`),"data-sentry-element":`Button`,"data-sentry-source-file":`Header.tsx`,children:F?(0,$.jsx)(Wo,{"aria-hidden":`true`}):(0,$.jsx)(Uo,{"aria-hidden":`true`})})})]})})})]})})]}),(0,$.jsx)(`div`,{className:i(Za),onMouseEnter:()=>{A(null)}}),B&&F&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`h2`,{className:`sr-only`,"aria-hidden":`true`,children:`Main navigation`}),(0,$.jsx)(Va,{data:Ho.menuMobile||[],open:L,hideContactSales:r,onNavigate:()=>{I(!1),R(!1)}})]})]})]})};export{Da as a,Ci as c,Oa as i,Go as n,Ta as o,Aa as r,ki as s,Ko as t};
//# debugId=8b0177b9-eae2-531e-a1f3-a1389f25c312
