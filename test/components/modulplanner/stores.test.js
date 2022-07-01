import {
  getModuleStatusById,
  ModuleStatus,
  updateModuleStatus,
  userData
} from "../../../src/components/modulplanner/stores";
import {get} from "svelte/store";
import {Status} from "../../../src/components/modulplanner/constants";

test("updateModuleStatus storeUndefined noAction", () => {
  userData.update(_ => undefined);
  updateModuleStatus(ModuleStatus.defaultInstance("test")).then(_ => {
    expect(get(userData)).toBe(undefined);
  });
});

test("updateModuleStatus oneModule oneModuleUpdated", () => {
  userData.update(_ => ({
    v: "1.0.0",
    s: [
      new ModuleStatus(
        "test",
        Status.NOT_TAKEN,
        undefined,
        undefined,
        undefined
      )
    ]
  }));
  updateModuleStatus(
    new ModuleStatus("test", Status.COMPLETED, 6, 1, false)
  ).then(_ =>
    expect(get(userData)).toStrictEqual({
      v: "1.0.0",
      s: [new ModuleStatus("test", Status.COMPLETED, 6, 1, false)]
    })
  );
});

test("updateModuleStatus twoModules oneModuleLeft", () => {
  userData.update(_ => ({
    v: "1.0.0",
    s: [
      new ModuleStatus(
        "test",
        Status.NOT_TAKEN,
        undefined,
        undefined,
        undefined
      ),
      new ModuleStatus(
        "test",
        Status.NOT_TAKEN,
        undefined,
        undefined,
        undefined
      )
    ]
  }));
  updateModuleStatus(
    new ModuleStatus("test", Status.COMPLETED, 6, 1, false)
  ).then(_ =>
    expect(get(userData)).toStrictEqual({
      v: "1.0.0",
      s: [new ModuleStatus("test", Status.COMPLETED, 6, 1, false)]
    })
  );
});
