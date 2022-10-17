const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let resultStr = "";

  members.forEach((item) => {
    if (typeof item === "string") {
      resultStr += item.trim()[0].toUpperCase();
    }
  });

  return resultStr.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
