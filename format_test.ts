import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { formatDate, formatDateInfo, isoToDateInfo } from "./format.ts";
import { DateInfo } from "./types.ts";

Deno.test("format: YY", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "21" },
    {
      input: { year: 1900, month: 3, day: 1 },
      expected: "00",
    },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "YY"), t.expected);
  });
});

Deno.test("format: YYYY", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "2021" },
    {
      input: { year: 1900, month: 3, day: 1 },
      expected: "1900",
    },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "YYYY"), t.expected);
  });
});

Deno.test("format: M", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "1" },
    { input: { year: 2021, month: 8, day: 1 }, expected: "8" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "11" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "M"), t.expected);
  });
});

Deno.test("format: MM", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "01" },
    { input: { year: 2021, month: 8, day: 1 }, expected: "08" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "11" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "MM"), t.expected);
  });
});

Deno.test("format: MMM", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "Jan" },
    { input: { year: 2021, month: 8, day: 1 }, expected: "Aug" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "Nov" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "MMM"), t.expected);
  });
});

Deno.test("format: MMMM", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "January" },
    { input: { year: 2021, month: 8, day: 1 }, expected: "August" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "November" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "MMMM"), t.expected);
  });
});

Deno.test("format: d", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "1" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "15" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "d"), t.expected);
  });
});

Deno.test("format: dd", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "01" },
    { input: { year: 2021, month: 11, day: 15 }, expected: "15" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "dd"), t.expected);
  });
});

Deno.test("format: D", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 21 }, expected: "1" },
    { input: { year: 2021, month: 12, day: 31, hours: 21 }, expected: "365" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "366" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "D"), t.expected);
  });
});

Deno.test("format: DDD", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 0 }, expected: "001" },
    { input: { year: 2021, month: 2, day: 23, hours: 0 }, expected: "054" },
    { input: { year: 2021, month: 12, day: 31, hours: 21 }, expected: "365" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "366" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "DDD"), t.expected);
  });
});

Deno.test("format: H", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 4 }, expected: "4" },
    { input: { year: 2021, month: 12, day: 31, hours: 9 }, expected: "9" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "21" },
    { input: { year: 2020, month: 12, day: 31, hours: 23 }, expected: "23" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "H"), t.expected);
  });
});

Deno.test("format: HH", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 4 }, expected: "04" },
    { input: { year: 2021, month: 12, day: 31, hours: 9 }, expected: "09" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "21" },
    { input: { year: 2020, month: 12, day: 31, hours: 23 }, expected: "23" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "HH"), t.expected);
  });
});

Deno.test("format: h", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 4 }, expected: "4" },
    { input: { year: 2021, month: 12, day: 31, hours: 9 }, expected: "9" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "9" },
    { input: { year: 2020, month: 12, day: 31, hours: 23 }, expected: "11" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "h"), t.expected);
  });
});

Deno.test("format: hh", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 4 }, expected: "04" },
    { input: { year: 2021, month: 12, day: 31, hours: 9 }, expected: "09" },
    { input: { year: 2020, month: 12, day: 31, hours: 21 }, expected: "09" },
    { input: { year: 2020, month: 12, day: 31, hours: 23 }, expected: "11" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "hh"), t.expected);
  });
});

Deno.test("format: m", () => {
  const tests = [
    {
      input: { year: 2021, month: 1, day: 1, hours: 1, minutes: 0 },
      expected: "0",
    },
    {
      input: { year: 2021, month: 12, day: 31, hours: 1, minutes: 1 },
      expected: "1",
    },
    {
      input: { year: 2020, month: 12, day: 31, hours: 1, minutes: 10 },
      expected: "10",
    },
    {
      input: { year: 2020, month: 12, day: 31, hours: 1, minutes: 59 },
      expected: "59",
    },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "m"), t.expected);
  });
});

Deno.test("format: mm", () => {
  const tests = [
    {
      input: { year: 2021, month: 1, day: 1, hours: 1, minutes: 0 },
      expected: "00",
    },
    {
      input: { year: 2021, month: 12, day: 31, hours: 1, minutes: 1 },
      expected: "01",
    },
    {
      input: { year: 2020, month: 12, day: 31, hours: 1, minutes: 10 },
      expected: "10",
    },
    {
      input: { year: 2020, month: 12, day: 31, hours: 1, minutes: 59 },
      expected: "59",
    },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "mm"), t.expected);
  });
});

Deno.test("format: a", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1, hours: 4 }, expected: "AM" },
    { input: { year: 2021, month: 12, day: 31, hours: 12 }, expected: "AM" },
    { input: { year: 2020, month: 12, day: 31, hours: 13 }, expected: "PM" },
    { input: { year: 2020, month: 12, day: 31, hours: 23 }, expected: "PM" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "a"), t.expected);
  });
});

Deno.test("format: w", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 2 }, expected: "6" },
    { input: { year: 2021, month: 1, day: 3 }, expected: "7" },
    { input: { year: 2021, month: 5, day: 3 }, expected: "1" },
    { input: { year: 2021, month: 5, day: 7 }, expected: "5" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "w"), t.expected);
  });
});

Deno.test("format: www", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 2 }, expected: "Sat" },
    { input: { year: 2021, month: 1, day: 3 }, expected: "Sun" },
    { input: { year: 2021, month: 5, day: 3 }, expected: "Mon" },
    { input: { year: 2021, month: 5, day: 7 }, expected: "Fri" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "www"), t.expected);
  });
});

Deno.test("format: wwww", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 2 }, expected: "Saturday" },
    { input: { year: 2021, month: 1, day: 3 }, expected: "Sunday" },
    { input: { year: 2021, month: 5, day: 3 }, expected: "Monday" },
    { input: { year: 2021, month: 5, day: 7 }, expected: "Friday" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "wwww"), t.expected);
  });
});

Deno.test("format: W", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "53" },
    { input: { year: 2021, month: 1, day: 4 }, expected: "1" },
    { input: { year: 2021, month: 5, day: 25 }, expected: "21" },
    { input: { year: 2021, month: 11, day: 4 }, expected: "44" },
    { input: { year: 2021, month: 12, day: 31 }, expected: "52" },
    { input: { year: 2020, month: 12, day: 31 }, expected: "53" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "W"), t.expected);
  });
});

Deno.test("format: WW", () => {
  const tests = [
    { input: { year: 2021, month: 1, day: 1 }, expected: "53" },
    { input: { year: 2021, month: 1, day: 4 }, expected: "01" },
    { input: { year: 2021, month: 5, day: 25 }, expected: "21" },
    { input: { year: 2021, month: 11, day: 4 }, expected: "44" },
    { input: { year: 2021, month: 12, day: 31 }, expected: "52" },
    { input: { year: 2020, month: 12, day: 31 }, expected: "53" },
  ];
  tests.forEach((t) => {
    assertEquals(formatDateInfo(t.input, "WW"), t.expected);
  });
});

Deno.test("formatDate MMMM yyyy", () => {
  const dateInfo = { year: 2021, month: 6, day: 1, hours: 9 };
  const result = formatDate(dateInfo, "MMMM YYYY");
  assertEquals(result, "June 2021");
});

Deno.test("isoToDateInfo", () => {
  type Test = {
    input: string;
    expected: DateInfo | undefined;
  };
  const tests: Test[] = [
    {
      input: "2021-05-25T09:08:34",
      expected: {
        year: 2021,
        month: 5,
        day: 25,
        hours: 9,
        minutes: 8,
        seconds: 34,
        milliseconds: undefined,
      },
    },
    {
      input: "2021-11-01T09:08:34.123",
      expected: {
        year: 2021,
        month: 11,
        day: 1,
        hours: 9,
        minutes: 8,
        seconds: 34,
        milliseconds: 123,
      },
    },
    {
      input: "2021-11-01T09:08:34Z",
      expected: {
        year: 2021,
        month: 11,
        day: 1,
        hours: 9,
        minutes: 8,
        seconds: 34,
        milliseconds: undefined,
      },
    },
    {
      input: "2021-11-01T09:08:34+09:00",
      expected: {
        year: 2021,
        month: 11,
        day: 1,
        hours: 9,
        minutes: 8,
        seconds: 34,
        milliseconds: undefined,
      },
    },
    {
      input: "2021-11-01T09:08:34-04:00",
      expected: {
        year: 2021,
        month: 11,
        day: 1,
        hours: 9,
        minutes: 8,
        seconds: 34,
        milliseconds: undefined,
      },
    },
    {
      input: "2021-150",
      expected: {
        year: 2021,
        month: 5,
        day: 30,
      },
    },
    {
      input: "2021-001",
      expected: {
        year: 2021,
        month: 1,
        day: 1,
      },
    },
    {
      input: "2021-366",
      expected: undefined,
    },
  ];

  tests.forEach((t) => {
    assertEquals(isoToDateInfo(t.input), t.expected);
  });
});
