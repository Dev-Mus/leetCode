/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target, index = 0, memo = {}) {
  let key = `${target},${index}`;
  if (key in memo) return memo[key];
  if (nums.length === index) return target === 0;

  memo[key] =
    findTargetSumWays(nums, target - nums[index], index + 1, memo) +
    findTargetSumWays(nums, target + nums[index], index + 1, memo);

  return memo[key];
};
