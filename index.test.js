const { forEach } = require("./index.js");

let sum = 0;

forEach([3, 6, 9], (value) => {
  sum += value;
});

if (sum !== 18) {
  throw new Error("Expected summing array to equal 18");
} else {
  console.log("test passed");
}
