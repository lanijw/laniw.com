import {depsMatter} from "../../../../src/components/modulplanner/modulechip/util";
import {ModuleStatus} from "../../../../src/components/modulplanner/stores";
import {Status} from "../../../../src/components/modulplanner/constants";

test("depsMatter userDataEmpty false", () => {
  expect(depsMatter({s: []}, "test")).toBe(false);
});

test("depsMatter statusCompleted false", () => {
  expect(
    depsMatter(
      {
        s: [
          new ModuleStatus(
            "test",
            Status.COMPLETED,
            undefined,
            undefined,
            false
          )
        ]
      },
      "test"
    )
  ).toBe(false);
});

test("depsMatter statusMarked true", () => {
  expect(
    depsMatter(
      {
        s: [
          new ModuleStatus(
            "test",
            Status.MARKED,
            undefined,
            undefined,
            false
          )
        ]
      },
      "test"
    )
  ).toBe(true);
});