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
function transform(array) {
  const doubleNext = function (arr, i) {
    if (arr[i + 1]) {
      resultArr.push(arr[i + 1]);
    }
  };
  const doublePrev = function (arr, i) {
    if (arr[i - 1]) {
      resultArr.push(arr[i - 1]);
    }
  };
  const discardNext = function (arr, i) {
    if (arr[i + 1] && typeof arr[i + 2] === "string") {
      arr.splice(i, 2);
    } else if (arr[i + 1]) {
      arr.splice(i, 1);
    }
  };
  const discardPrev = function (arr, i) {
    if (arr[i - 1] !== "string") {
      arr.pop();
    }
  };

  if (!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const copyArr = [...array];
  const resultArr = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (typeof copyArr[i] === "string") {
      switch (copyArr[i]) {
        case "--double-next":
          doubleNext(copyArr, i);
          break;
        case "--double-prev":
          doublePrev(copyArr, i);
          break;
        case "--discard-next":
          discardNext(copyArr, i);
          break;
        case "--discard-prev":
          discardPrev(resultArr, i);
          break;
        default:
          resultArr.push(copyArr[i]);
          break;
      }
    } else {
      resultArr.push(copyArr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform,
};
