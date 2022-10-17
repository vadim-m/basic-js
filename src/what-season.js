const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(d) {
  if (d === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(d instanceof Date) || Object.getOwnPropertyNames(d).length) {
    throw new Error("Invalid date!");
  }

  if (Object.prototype.toString.call(d) === "[object Date]") {
    if (isNaN(d)) {
      throw new Error("Invalid date!");
    } else {
      const m = d.getMonth();

      if (m === 11 || m === 0 || m === 1) {
        return "winter";
      } else if (m === 2 || m === 3 || m === 4) {
        return "spring";
      } else if (m === 5 || m === 6 || m === 7) {
        return "summer";
      } else if (m === 8 || m === 9 || m === 10) {
        return "autumn";
      }
    }
  }
}

module.exports = {
  getSeason,
};
