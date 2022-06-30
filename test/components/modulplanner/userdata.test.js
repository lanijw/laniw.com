import {
  ModuleStatus,
  updateModuleStatus,
  userData
} from "../../../src/components/modulplanner/stores";
import {Status} from "../../../src/components/modulplanner/constants";
import {get} from "svelte/store";
import * as Module from "module";
import {prepUserData} from "../../../src/components/modulplanner/userdata";

test("prepUserData v1.0.0 v.1.1.0", () => {
  const result = prepUserData({
    v: "1.0.0",
    s: [new ModuleStatus("oop1", undefined, undefined, false, false)]
  });
  expect(result).toStrictEqual({
    v: "1.1.0",
    s: {
      oop1: new ModuleStatus("oop1", undefined, undefined, false, false)
    }
  });
});

test("prepUserData v1.1.0 v.1.1.0", () => {
  const input = {
    v: "1.1.0",
    s: {
      oop1: new ModuleStatus("oop1", undefined, undefined, false, false)
    }};
  const result = prepUserData(input);
  expect(result).toStrictEqual(input);
});
