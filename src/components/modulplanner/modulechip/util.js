import {Status} from "../constants";

export function depsMatter(userDataVal, id) {
  const currModuleStatus = userDataVal.s.find(s => s.id === id);
  return currModuleStatus?.status === Status.MARKED;
}

export function hasPlannedDepModules(allModules, userDataVal, id) {
  const deps = depModules(allModules, id);
  return deps.length === plannedDeps(userDataVal, deps).length;
}

export function plannedDeps(userDataVal, deps) {
  if (!userDataVal.s.length) {
    return [];
  }
  return deps.filter(d => {
    const depStatus = userDataVal.s.find(s => s.id === d).status;
    return (
      depStatus === Status.CURRENT ||
      depStatus === Status.MARKED ||
      depStatus === Status.COMPLETED
    );
  });
}

export function depModules(allModules, id) {
  let finalDeps = [];
  let currentDeps = [id];
  for (let i = 0; i < 5; i++) {
    currentDeps = currentDeps.flatMap(d => {
      const currentModule = allModules.find(m => m.id === d);
      return [...currentModule.hardDeps, ...currentModule.softDeps];
    });
    finalDeps = [...finalDeps, ...currentDeps];
  }
  return [...new Set(finalDeps.filter(d => d !== id))];
}
