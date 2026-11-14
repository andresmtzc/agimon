
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8dee8ef5-8098-5ddf-9fef-fddf7edec8aa")}catch(e){}}();
(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`v2026-11-13-62d0a3b`}}catch{}})();import{B as e,H as t,L as n}from"./errorTracking-CHeGO-1R.js";import{y as r}from"./utils-OGRw9hWR.js";var i=n(),a=n=>{if(n instanceof e)return Object.values(n.zodError.flatten().fieldErrors).flat().join(`
`);if(n instanceof t)return n.message};async function o(e,t,n){return e=r(e,t),await(await i.get(e,n)).json()}async function s(e,t,n){return await(await i.post(e,{json:t,...n})).json()}export{s as i,o as n,i as r,a as t};
//# debugId=8dee8ef5-8098-5ddf-9fef-fddf7edec8aa
