import {depsMatter} from "../../../../src/components/modulplanner/modulechip/util";

test("depsMatter dummy", () => {
  expect(depsMatter({s: []}, "test")).toBe(false);
});
