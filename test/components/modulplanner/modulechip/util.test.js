import {
  depModules,
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
        new ModuleStatus(
          "test3",
          Status.COMPLETED,
          undefined,
          undefined,
          false
        ),
        new ModuleStatus("test4", Status.NOT_TAKEN, undefined, undefined, false)
      ]
    },
    ["test1", "test2", "test3"]
  );
  expect(result[0]).toBe("test1");
  expect(result[1]).toBe("test2");
  expect(result[2]).toBe("test3");
  expect(result.length).toBe(3);
});

test("plannedDeps depsNotTakenAndFailed emptyArray", () => {
  const result = plannedDeps(
    {
      s: [
        new ModuleStatus(
          "test1",
          Status.NOT_TAKEN,
          undefined,
          undefined,
          false
        ),
        new ModuleStatus("test2", Status.FAILED, undefined, undefined, false)
      ]
    },
    ["test1", "test2"]
  );
  expect(result.length).toBe(0);
});

test("depModules noModuleInfo fails", () => {
  expect(() => depModules([], "test1")).toThrow(
    TypeError("Cannot read properties of undefined (reading 'hardDeps')")
  );
});

test("depModules noDeps emptyArray", () => {
  const result = depModules([{id: "test", hardDeps: [], softDeps: []}], "test");
  expect(result.length).toBe(0);
});

test("depModules 5levelDeps allDeps", () => {
  const result = depModules(
    [
      {id: "test", hardDeps: ["test1"], softDeps: []},
      {id: "test1", hardDeps: ["test2"], softDeps: []},
      {id: "test2", hardDeps: ["test3"], softDeps: []},
      {id: "test3", hardDeps: ["test4"], softDeps: []},
      {id: "test4", hardDeps: ["test5"], softDeps: []}
    ],
    "test"
  );
  expect(result[0]).toBe("test1");
  expect(result[1]).toBe("test2");
  expect(result[2]).toBe("test3");
  expect(result[3]).toBe("test4");
  expect(result[4]).toBe("test5");
});

test("depModules 6levelDeps 5levelDeps", () => {
  const result = depModules(
    [
      {id: "test", hardDeps: ["test1"], softDeps: []},
      {id: "test1", hardDeps: ["test2"], softDeps: []},
      {id: "test2", hardDeps: ["test3"], softDeps: []},
      {id: "test3", hardDeps: ["test4"], softDeps: []},
      {id: "test4", hardDeps: ["test5"], softDeps: []},
      {id: "test5", hardDeps: ["test6"], softDeps: []}
    ],
    "test"
  );
  expect(result[0]).toBe("test1");
  expect(result[1]).toBe("test2");
  expect(result[2]).toBe("test3");
  expect(result[3]).toBe("test4");
  expect(result[4]).toBe("test5");
});
