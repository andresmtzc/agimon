
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ff65dffd-70e0-5929-bc01-802a48280857")}catch(e){}}();
self.onmessage=({data:{type:e,id:t}})=>{e===`ping`&&self.postMessage({type:`pong`,id:t})};
//# debugId=ff65dffd-70e0-5929-bc01-802a48280857
