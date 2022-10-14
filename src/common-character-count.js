const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");

  const result = arr1.reduce((acc, item) => {
    if (arr2.indexOf(item) !== -1) {
      const index = arr2.indexOf(item);
      arr2.splice(index, 1);

      return 1 + acc;
      console.log(item, arr2);
    }

    return acc;
  }, 0);

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
