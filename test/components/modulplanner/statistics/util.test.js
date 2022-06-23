import {
  formatCreditPercentage,
  isModuleCompleted,
  isModuleStatusCompletedInGroup,
  isModuleStatusPlannedInGroup,
  moduleStatusToCredits,
  sum
} from "../../../../src/components/modulplanner/statistics/util";
import {ModuleStatus} from "../../../../src/components/modulplanner/stores";
import {Status} from "../../../../src/components/modulplanner/constants";

test("sum ab sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("isModuleStatusCompletedInGroup emptyIds false", () => {
  expect(
    isModuleStatusCompletedInGroup(ModuleStatus.defaultInstance("test"), [])
  ).toBe(false);
});

test("isModuleStatusCompletedInGroup emptyIds false", () => {
  expect(
    isModuleStatusCompletedInGroup(ModuleStatus.defaultInstance("test"), [])
  ).toBe(false);
});

test("isModuleStatusCompletedInGroup notCompleted false", () => {
  expect(
    isModuleStatusCompletedInGroup(
      new ModuleStatus("test", Status.NOT_TAKEN, undefined, undefined, false),
      ["test"]
    )
  ).toBe(false);
});

test("isModuleStatusCompletedInGroup completedNotFulfilled true", () => {
  expect(
    isModuleStatusCompletedInGroup(
      new ModuleStatus("test", Status.COMPLETED, undefined, undefined, false),
      ["test"]
    )
  ).toBe(true);
});

test("isModuleStatusCompletedInGroup fulfilledNotCompleted true", () => {
  expect(
    isModuleStatusCompletedInGroup(
      new ModuleStatus("test", Status.NOT_TAKEN, undefined, undefined, true),
      ["test"]
    )
  ).toBe(true);
});

test("isModuleStatusCompletedInGroup completedAndFulfilled true", () => {
  expect(
    isModuleStatusCompletedInGroup(
      new ModuleStatus("test", Status.COMPLETED, undefined, undefined, true),
      ["test"]
    )
  ).toBe(true);
});

test("isModuleStatusPlannedInGroup emptyIds false", () => {
  expect(
    isModuleStatusPlannedInGroup(
      new ModuleStatus("test", Status.COMPLETED, undefined, undefined, false),
      []
    )
  ).toBe(false);
});

test("isModuleStatusPlannedInGroup notTaken false", () => {
  expect(
    isModuleStatusPlannedInGroup(
      new ModuleStatus("test", Status.NOT_TAKEN, undefined, undefined, false),
      ["test"]
    )
  ).toBe(false);
});

test("isModuleStatusPlannedInGroup completed true", () => {
  expect(
    isModuleStatusPlannedInGroup(
      new ModuleStatus("test", Status.COMPLETED, undefined, undefined, false),
      ["test"]
    )
  ).toBe(true);
});

test("moduleStatusToCredits emptyModules fails", () => {
  expect(() =>
    moduleStatusToCredits([], ModuleStatus.defaultInstance("test"))
  ).toThrow(
    TypeError("Cannot read properties of undefined (reading 'credits')")
  );
});

test("moduleStatusToCredits modules credits", () => {
  expect(
    moduleStatusToCredits(
      [
        {
          id: "test",
          credits: 3
        }
      ],
      ModuleStatus.defaultInstance("test")
    )
  ).toBe(3);
});

test("formatCreditPercentage halfCredits percentage", () => {
  expect(formatCreditPercentage(1, 2)).toBe(50);
});

test("formatCreditPercentage min0 inf", () => {
  expect(formatCreditPercentage(1, 0)).toBe("&infin;");
});

test("isModuleCompleted emptyUserData fails", () => {
  expect(() => isModuleCompleted({s: []}, "test")).toThrow(
    TypeError("Cannot read properties of undefined (reading 'status')")
  );
});

test("isModuleCompleted notCompletedNotFulfilled false", () => {
  expect(
    isModuleCompleted(
      {
        s: [
          new ModuleStatus(
            "test",
            Status.NOT_TAKEN,
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

test("isModuleCompleted completedNotFulfilled false", () => {
  expect(
    isModuleCompleted(
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
  ).toBe(true);
});

test("isModuleCompleted notCompletedFulfilled false", () => {
  expect(
    isModuleCompleted(
      {
        s: [
          new ModuleStatus("test", Status.NOT_TAKEN, undefined, undefined, true)
        ]
      },
      "test"
    )
  ).toBe(true);
});

test("isModuleCompleted completedAndFulfilled false", () => {
  expect(
    isModuleCompleted(
      {
        s: [
          new ModuleStatus("test", Status.COMPLETED, undefined, undefined, true)
        ]
      },
      "test"
    )
  ).toBe(true);
});
