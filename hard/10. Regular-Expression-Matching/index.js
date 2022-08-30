/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const regex = new RegExp(p);
  return (regex.exec(s)?.[0] || "").length === s.length;
};
