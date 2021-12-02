const assert = require("assert");
const { forEach, map } = require("./index.js");

it("Test forEach function", () => {
  let sum = 0;

  forEach([3, 6, 9], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 18);
});

it("Test map function", () => {
  const result = map([3, 6, 9], (value) => {
    return value * value;
  });

  assert.deepStrictEqual(result, [9, 36, 81]);
});
