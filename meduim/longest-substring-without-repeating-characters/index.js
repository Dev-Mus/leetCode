/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  let count = 0;
  let map = {};
  for (let j = 0, i = 0; j < str.length; j++) {
    if (Object.keys(map).includes(str[j])) i = Math.max(map[str[j]], i);

    count = Math.max(count, j - i + 1);
    map[str[j]] = j + 1;
  }
  return count;
};

/**
 * run script *
  console.log(lengthOfLongestSubstring("pwwkew"));

  console.info(
    `The script uses approximately ${
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
    }`
  );
*/
