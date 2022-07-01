import {downloadableFileName} from "../../util";
import {ModuleStatus, USER_DATA_DEFAULT_VAL, userData} from "./stores.js";
import {Status} from "./constants.js";
import {allModules} from "./informatik/modules.js";

export function downloadFileName() {
  return downloadableFileName("", "Studenthub-Benutzerdaten", new Date());
}

export function uploadFile(files) {
  if (!files.length) {
    return;
  }

  let fileContent = "";
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      files = [];
      fileContent = reader.result;
      const importedUserData = JSON.parse(fileContent);
      if ("v" in importedUserData) {
        userData.update(_ => prepUserData(importedUserData));
      } else {
        alert(
          "Your data was exported too early in this product's development. Please reenter your data by hand."
        );
      }
    },
    false
  );
  reader.readAsText(files[0]);
}

/**
 * precondition: iud.v exists.
 * @param iud
 */
export function prepUserData(iud) {
  if (iud.v === "1.0.0") {
    let statusesMap = {};
    iud.s
      .filter(s => s.status !== undefined && s.status !== Status.NOT_TAKEN)
      .forEach(s => (statusesMap[s.id] = s));
    allModules
      .filter(m => !Object.keys(statusesMap).includes(m.id))
      .forEach(m => (statusesMap[m.id] = ModuleStatus.defaultInstance(m.id)));
    iud.s = statusesMap;
    iud.v = USER_DATA_DEFAULT_VAL.v;
  }
  return iud;
}
