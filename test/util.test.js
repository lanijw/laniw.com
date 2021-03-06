import {downloadableFileName, replaceUrlParams} from "../src/util";

test("downloadableFileName leadGiven leadInFilename", () => {
  const date = new Date("2022-06-21T22:04:31");
  expect(downloadableFileName("testing", "testFunc", date)).toBe(
    "testing_testFunc_2022-06-21_22-04-31.json"
  );
});

test("downloadableFileName leadMissing leadMissing", () => {
  const date = new Date("2022-06-21T22:04:31");
  expect(downloadableFileName("", "testFunc", date)).toBe(
    "testFunc_2022-06-21_22-04-31.json"
  );
});

test("replaceUrlParams langParam mappedCorrectly", () => {
  const result = replaceUrlParams(new Map([["lang", "en"]]));
  expect(result).toBe("http://localhost/?lang=en");
});
