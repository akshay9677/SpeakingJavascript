const obj = require("./Chapter14ExceptionHandling");

describe("Exception handling Test Cases", () => {
  test("Handling Changing Const value - Type Error", () => {
    expect(obj.tryCatch()).toBe("TypeError");
  });
  test("Throwing Custom error using try catch", () => {
    expect(obj.thrwoIt("Error occured !!")).toBe("Error occured !!");
  });
  test("Try-catch-finally test by adding a extra value in Array in finally", () => {
    arr = [1, 2, 3];
    expect(obj.throwFinallyException(arr, 4)).toStrictEqual([1, 2, 3, 4]);
  });
  test("Try and finally with return statement in both return in finally will be returned", () => {
    expect(obj.tryReturn(21)).toBe(22);
  });
  test("Error Constructor properties", () => {
    expect(obj.errorConstructor()).toBe(
      "TypeError Assignment to constant variable."
    );
  });
});
