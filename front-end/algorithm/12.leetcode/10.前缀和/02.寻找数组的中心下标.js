/**
 * https://leetcode-cn.com/problems/find-pivot-index/
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  const S = nums.reduce((a, b) => a + b, 0);
  let A = 0;
  for(let i = 0; i < nums.length; i++) {
    if(A * 2 + nums[i] === S) {
      return i;
    }
    A += nums[i];
  }
  return -1;
};
