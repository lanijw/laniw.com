import {ModuleStatus} from "../../../src/components/modulplanner/stores";
import {Status} from "../../../src/components/modulplanner/constants";
import {prepUserData} from "../../../src/components/modulplanner/userdata";

test("prepUserData v1.0.0 v.1.1.0", () => {
  const result = prepUserData({
    v: "1.0.0",
    s: [new ModuleStatus("oop1", Status.MARKED, undefined, false, false)]
  });
  expect(result).toStrictEqual({
    v: "1.1.0",
    s: {
      oop1: new ModuleStatus("oop1", Status.MARKED, undefined, false, false)
    }
  });
});

test("prepUserData v1.0.0wIrrelevantStatus v.1.1.0wStatusRemoved", () => {
  const result = prepUserData({
    v: "1.0.0",
    s: [
      new ModuleStatus("oop1", Status.NOT_TAKEN, undefined, false, false),
      new ModuleStatus("oop2", undefined, undefined, false, false)
    ]
  });
  expect(result).toStrictEqual({
    v: "1.1.0",
    s: {}
  });
});

test("prepUserData v1.1.0 v.1.1.0", () => {
  const input = {
    v: "1.1.0",
    s: {
      oop1: new ModuleStatus("oop1", undefined, undefined, false, false)
    }
  };
  const result = prepUserData(input);
  expect(result).toStrictEqual(input);
});
