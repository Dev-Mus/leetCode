/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function (x) {
  const operator = x >= 0;
  x = Math.abs(x);
  let str = ("" + x).split("").reverse().join("");
  x = operator ? parseInt(str) : -parseInt(str);
  return x != (x | 0) ? 0 : x;
};

