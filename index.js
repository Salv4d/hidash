module.exports = {
  forEach(arr, fn) {
    for (let i in arr) {
      fn(arr[i], i);
    }
  },
};
