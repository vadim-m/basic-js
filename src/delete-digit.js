const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const inputArr = Array.from(n.toString());
  const outputArr = inputArr.map((item, index) => {
    let digit = "";

    for (let i = 0; i < inputArr.length; i++) {
      if (i !== index) {
        digit += inputArr[i];
      }
    }

    return +digit;
  });

  return Math.max(...outputArr);
}

module.exports = {
  deleteDigit,
};
