const assert = require("assert");
const { forEach, map } = require("./index.js");

const test = (desc, fn) => {
  console.log("---", desc);

  try {
    fn();
    console.log("test passed");
  } catch (err) {
    console.log(err.message);
  }
};

test("Test forEach function", () => {
  let sum = 0;

  forEach([3, 6, 9], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 18);
});

test("Test map function", () => {
  const result = map([3, 6, 9], (value) => {
    return value * value;
  });

  assert.strictEqual(result[0], 9);
  assert.strictEqual(result[1], 36);
  assert.strictEqual(result[2], 81);
});
