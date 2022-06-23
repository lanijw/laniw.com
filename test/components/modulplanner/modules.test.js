import {modules as informatikModules, allModules as informatikAllModules} from "../../../src/components/modulplanner/informatik/modules";
import {modules as icompetenceModules, allModules as icompetenceAllModules} from "../../../src/components/modulplanner/icompetence/modules";

test("informatik modulesNotEmpty", () => {
  expect(informatikModules).not.toBe({});
});

test("informatik allModulesNotEmpty", () => {
  expect(!informatikAllModules.length).toBe(true)
});

test("icompetence modulesNotEmpty", () => {
  expect(icompetenceModules).not.toBe({});
});

test("icompetence allModulesNotEmpty", () => {
  expect(!icompetenceAllModules.length).toBe(true)
});
