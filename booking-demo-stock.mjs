// Consistent illustrative stock totals across the conversation and its tools.
const before = 24;
const used = 2;
const usedEarlierThisWeek = 7;
export const STOCK_DEMO = Object.freeze({
  before, used, remaining: before - used, weeklyUsed: usedEarlierThisWeek + used,
});
