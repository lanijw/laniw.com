import {downloadableFileName} from "../util";

test("downloadableFileName leadGiven leadInFilename", () => {
  const lead = "testing";
  const src = "testFunc";
  const date = new Date("2022-06-21T22:04:31");
  expect(downloadableFileName(lead, src, date)).toBe(
    "testing_testFunc_2022-06-21_22-04-31.json"
  );
});

test("downloadableFileName leadMissing leadMissing", () => {
  const src = "testFunc";
  const date = new Date("2022-06-21T22:04:31");
  expect(downloadableFileName("", src, date)).toBe(
    "testFunc_2022-06-21_22-04-31.json"
  );
});
