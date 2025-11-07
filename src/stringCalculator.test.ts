import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for one number", () => {
    expect(add("5")).toBe(5);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("return the sum of two numbers not on same line", () => {
    expect(add("1\n2, 3")).toBe(6);
  });

  test("supports custom delimiters defined like //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrowError(
      "Negative numbers are not allowed,-2"
    );
  });

  test("ignores number greater than 1000", () => {
    expect(add("1001,3")).toBe(3)
  });

test('supports multiple custom delimiters of any length', () => {
  expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});


});
