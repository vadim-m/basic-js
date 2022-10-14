const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithoutUnit = arr
    .filter((item) => item > 0)
    .sort(function compareNumbers(a, b) {
      return a - b;
    });

  const relustArr = arr.map((item, index) => {
    if (item === -1) {
      return item;
    } else {
      let val = arrWithoutUnit[0];
      arrWithoutUnit.shift();
      return val;
    }
  });

  return relustArr;
}
module.exports = {
  sortByHeight,
};
