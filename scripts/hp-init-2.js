(function (){
  const w = window
  if(typeof w === 'undefined'){
    return
  }

  if(
    w.localStorage.getItem('a05dc2b2-7bff-433b-873d-c0869323cca8') !== null
    && !w.location.search.includes("noredir")
  ){
    w.location.replace(`/files/${w.location.search}`)
    return
  }

  if (w.innerWidth < 1025) {
    const PERFS = {
      PERF_BAD: 0,
      PERF_LOW: 1,
      PERF_GOOD: 2,
      PERF_HIGH: 3,
    }

    let PERF = 0
    let array
    let quality = PERFS.PERF_BAD
    const start = (window.performance || Date).now()
    for (let i = 0; i < 20000; i++) {
      array = Math.pow(Math.sin(Math.random()), 2)
    }
    const end = (window.performance || Date).now()
    const perf = end - start

    if (perf < 5) {quality = PERFS.PERF_HIGH}
    else if (perf < 14) {quality = PERFS.PERF_GOOD}
    else if (perf < 22) {quality = PERFS.PERF_LOW}
    else {quality = PERFS.PERF_BAD}

    if (navigator && navigator.connection) {
      if (navigator.connection?.effectiveType !== "4g") {
        if (["slow-2g", "2g"].includes(navigator.connection?.effectiveType)) {
          quality = PERFS.PERF_BAD
        } else {
          quality = PERFS.PERF_LOW
        }
      }
    }

    PERF = quality

    const isPerformanceGood = PERF >= PERFS.PERF_HIGH
    window.lowPerformanceDevice = !isPerformanceGood

    // Applied synchronously (before paint) so the hero entrance animation
    // picks the right variant on the first frame. This causes a hydration
    // warning on `<html>`, accepted since low-performance devices are rare.
    if (!isPerformanceGood) {
      document.documentElement.classList.add('low-performance-device')
    }
  }
})()
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a4e81d9b-8997-53c4-9144-f59069778adf")}catch(e){}}();
//# debugId=a4e81d9b-8997-53c4-9144-f59069778adf
