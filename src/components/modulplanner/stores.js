import {writable} from "svelte/store";
import {Status} from "./constants";

export class ModuleStatus {
  constructor(id, status, grade, sem, fulfilled, secondTry) {
    this.id = id;
    this.status = status;
    this.grade = grade;
    this.fulfilled = fulfilled;
    this.sem = sem;
    this.secondTry = secondTry;
  }

  static defaultInstance(id) {
    return new ModuleStatus(id, Status.NOT_TAKEN, undefined, undefined, false, false);
  }
}

export async function updateModuleStatus(status) {
  userData.update(v => {
    if (!v) return;

    const otherModules = v.s.filter(m => m.id !== status.id);
    if (otherModules.length < v.s.length - 1) {
      console.warn(
        `Expected 0 or 1 matches but found ${
          v.length - otherModules.length
        } matches. Discarding additional matches.`
      );
    }
    return {...v, s: [...otherModules, status]};
  });
}

export const USER_DATA_DEFAULT_VAL = {
  v: "1.1.0",
  s: {}
};
export const userData = writable(USER_DATA_DEFAULT_VAL);

export const Major = {
  INFORMATIK: 0,
  ICOMPETENCE: 1
};

export const major = writable(Major.INFORMATIK);
