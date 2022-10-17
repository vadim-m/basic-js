const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const word = String(str);
  const repeatTimes = arguments[1].repeatTimes ? arguments[1].repeatTimes : 1;
  const separator = arguments[1].separator ? arguments[1].separator : "+";

  const addition =
    arguments[1].addition ||
    arguments[1].addition === false ||
    arguments[1].addition === null
      ? String(arguments[1].addition)
      : "";
  const additionRepeatTimes = arguments[1].additionRepeatTimes
    ? arguments[1].additionRepeatTimes
    : 0;
  const additionSeparator = arguments[1].additionSeparator
    ? arguments[1].additionSeparator
    : "|";

  const resultArr = [];
  let additionStr = [];

  for (let i = 0; i < repeatTimes; i++) {
    const additions = [];

    if (additionRepeatTimes > 0) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        additions.push(addition);
      }

      additionStr = additions.join(additionSeparator);
    } else {
      additions.push(addition);
    }
    additionStr = additions.join(additionSeparator);
    resultArr.push(`${word}${additionStr}`);
  }

  return resultArr.join(separator);
}

module.exports = {
  repeater,
};
