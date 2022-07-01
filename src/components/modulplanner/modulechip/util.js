import {Status} from "../constants";
import {userData} from "../stores.js";
import {get} from "svelte/store";
import {allModules} from "../informatik/modules.js";

export function depsMatter(id) {
  const currModuleStatus = Object.values(get(userData).s).find(
    s => s.id === id
  );
  return currModuleStatus?.status === Status.MARKED;
}

export function hasPlannedDepModules(id) {
  const userDataVal = get(userData);
  if (!(id in userDataVal.s)) {
    // Don't analyze deps if module status is not set.
    return true;
  }
  const deps = depModules(id);
  return deps.length === plannedDeps(deps, userDataVal).length;
}

export function plannedDeps(deps, userDataVal = get(userData)) {
  if (!userDataVal.s.length) {
    return [];
  }
  return deps.filter(d => {
    const depStatus = Object.values(userDataVal.s).find(
      s => s.id === d
    )?.status;
    return (
      depStatus &&
      (depStatus === Status.CURRENT ||
        depStatus === Status.MARKED ||
        depStatus === Status.COMPLETED)
    );
  });
}

export function depModules(id) {
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
