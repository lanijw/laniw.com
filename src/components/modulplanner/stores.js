import {writable} from "svelte/store";
import {Status} from "./constants";

export class ModuleStatus {
  constructor(id, status, grade, sem, fulfilled) {
    this.id = id
    this.status = status
    this.grade = grade
    this.fulfilled = fulfilled
    this.sem = sem
  }

  static defaultInstance(id) {
    return new ModuleStatus(id, Status.NOT_TAKEN, null, null, false)
  }
}

export async function updateModuleStatus(status) {
  userData.update(v => {
    if (!v) return;

    const otherModules = v.s.filter(m => m.id !== status.id)
    if (otherModules.length < v.s.length - 1) {
      console.warn(`Expected 0 or 1 matches but found ${v.length -
      otherModules.length} matches. Discarding additional matches.`)
    }
    return {...v, s: [...otherModules, status]}
  })
}

export function getModuleStatusById(storeValue, id) {
  if (!id) return;

  const matchingModules = storeValue.s.filter(m => m.id === id)
  if (matchingModules.length) {
    if (matchingModules.length > 1) {
      console.warn(`Expected 0 or 1 matches but found ${matchingModules.length} matches. Proceeding with first match.`)
    }
    return matchingModules[0];
  }
  return ModuleStatus.defaultInstance(id);
}

// TODO(laniw): Add tag for API version to ensure backwards compatibility.
export const userData = writable({
  v: "1.0.0",
  s: []
})