const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const doubleNext = function (arr, i) {
    if (arr[i + 1] && typeof arr[i + 2] !== "string") {
      resultArr.push(arr[i + 1]);
    }
  };
  const doublePrev = function (arr, i) {
    if (arr[i - 1]) {
      resultArr.push(arr[i - 1]);
    }
  };
  const discardNext = function (arr, i) {
    if (arr[i + 1]) {
      arr.splice(i, 1);
    }
  };
  const discardPrev = function (arr, i) {
    arr.pop();
  };

  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      switch (arr[i]) {
        case "--double-next":
          doubleNext(arr, i);
          break;
        case "--double-prev":
          doublePrev(arr, i);
          break;
        case "--discard-next":
          discardNext(arr, i);
          break;
        case "--discard-prev":
          discardPrev(resultArr, i);
          break;
        default:
          resultArr.push(arr[i]);
          break;
      }
    } else {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform,
};
