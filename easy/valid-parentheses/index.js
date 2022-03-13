/**
 * @param {number[]} str
 * @return {number}
 */
var isValid = function (str) {
  let array = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (["(", "{", "["].includes(element)) array.push(element);
    else if (array.length) {
      switch (array[array.length - 1]) {
        case "(":
          if (element === ")") array.pop();
          else return false;
          break;
        case "{":
          if (element === "}") array.pop();
          else return false;
          break;
        case "[":
          if (element === "]") array.pop();
          else return false;
          break;
      }
    } else return false;
  }
  return !array.length;
};

/**
 * run script 
  console.log(isValid("()"));

  console.info(
    `The script uses approximately ${
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
    }`
  );
*/
