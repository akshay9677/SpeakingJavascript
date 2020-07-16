const obj = require("./Chapter15Functions");

describe("Functions practice codes", () => {
  test("Functions have a property called Name which gives name of function", () => {
    expect(obj.nameOfFunction()).toBe("nameOfFunction");
  });
  test("Hoisting check function", () => {
    expect(obj.hoisting()).toBe("Hoisted");
  });
  describe("Handling missing parameters with functions", () => {
    test("Optional Parameter missing check", () => {
      expect(obj.handlingMissingParameter(2)).toBe(
        "Optional parameter is not mentioned"
      );
    });
    test("Mandotory Parameter missing check", () => {
      expect(obj.handlingMissingParameter(undefined, 2)).toBe(
        "Mandatory parameter is not mentioned"
      );
    });
  });
  test("Simulating pass by reference", () => {
    expect(obj.simulatingPassByReference([3])).toStrictEqual([4]);
  });
  test("Simulating named parameter functions", () => {
    expect(obj.simulatingNamedParameters({ start: 5, end: 12 })).toStrictEqual([
      5,
      12,
    ]);
  });
});
