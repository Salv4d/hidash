const { forEach, map } = require("./index.js");

let sum = 0;

forEach([3, 6, 9], (value) => {
  sum += value;
});

if (sum !== 18) {
  throw new Error("Expected summing array to equal 18");
} else {
  console.log("test passed");
}

const result = map([3, 6, 9], (value) => {
  return value * value;
});

if (result[0] !== 9) {
  throw new Error(`Expected to find 9, but found ${result[0]}`);
} else {
  console.log("test passed");
}

if (result[1] !== 36) {
  throw new Error(`Expected to find 36, but found ${result[1]}`);
} else {
  console.log("test passed");
}

if (result[2] !== 81) {
  throw new Error(`Expected to find 81, but found ${result[2]}`);
} else {
  console.log("test passed");
}
