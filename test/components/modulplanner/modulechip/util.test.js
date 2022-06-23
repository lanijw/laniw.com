import {
  depsMatter,
  plannedDeps
} from "../../../../src/components/modulplanner/modulechip/util";
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
          new ModuleStatus("test", Status.MARKED, undefined, undefined, false)
        ]
      },
      "test"
    )
  ).toBe(true);
});

test("plannedDeps userDataEmpty emptyArray", () => {
  const result = plannedDeps({s: []}, ["test"]);
  expect(result.length).toBe(0);
});

test("plannedDeps depsCurrentMarkedAndCompleted allDeps", () => {
  const result = plannedDeps(
    {
      s: [
        new ModuleStatus("test1", Status.CURRENT, undefined, undefined, false),
        new ModuleStatus("test2", Status.MARKED, undefined, undefined, false),
        new ModuleStatus("test3", Status.COMPLETED, undefined, undefined, false),
        new ModuleStatus("test4", Status.NOT_TAKEN, undefined, undefined, false)
      ]
    },
    ["test1", "test2", "test3"]
  );
  console.log(result)
  expect(result[0]).toBe("test1");
  expect(result[1]).toBe("test2");
  expect(result[2]).toBe("test3");
  expect(result.length).toBe(3)
});

test("plannedDeps depsNotTakenAndFailed emptyArray", () => {
  const result = plannedDeps(
    {
      s: [
        new ModuleStatus("test1", Status.NOT_TAKEN, undefined, undefined, false),
        new ModuleStatus("test2", Status.FAILED, undefined, undefined, false)
      ]
    },
    ["test1", "test2"]
  );
  expect(result.length).toBe(0)
});
