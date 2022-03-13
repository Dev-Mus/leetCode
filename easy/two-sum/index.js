/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let array = [];
  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (target - nums[i] === nums[j]) {
        array = [...array, i, j];
      }
  return array;
};

/**
 * run script 
  console.log(twoSum([2, 7, 11, 15], 9));

  console.info(
    `The script uses approximately ${
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
    }`
  );
*/
