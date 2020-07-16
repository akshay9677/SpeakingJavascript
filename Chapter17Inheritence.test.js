const obj = require("./Chapter17Inheritence");

test("Create instance from a sub constructor which is inherited from a super constructor and has properties of both super and sub constructor properties", () => {
  expect(obj.inheritence()).toStrictEqual([true, true]);
});
