import {Status} from "../constants";

export function sum(a, b) {
  return a + b;
}

export function isModuleStatusCompletedInGroup(s, ids) {
  return (s.status === Status.COMPLETED || s.fulfilled) && ids.includes(s.id);
}

export function isModuleStatusPlannedInGroup(s, ids) {
  return s.status !== Status.NOT_TAKEN && ids.includes(s.id);
}

export function moduleStatusToCredits(allModules, s) {
  return allModules.find(m => m.id === s.id).credits;
}

export function formatCreditPercentage(credits, minCredits) {
  const result = Math.round(10 * 100 * (credits / minCredits)) / 10;
  return minCredits === 0 ? "&infin;" : result;
}

export function isModuleCompleted(userDataVal, id) {
  const status = userDataVal.s.find(s => s.id === id);
  return status.status === Status.COMPLETED || status.fulfilled;
}
