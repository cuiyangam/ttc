/**
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  let ret = 0;
  let preSum = [];
  preSum[0] = 0;
  for(let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }

  for(let i = 0; i < preSum.length; i++) {
    for(let j = 0; j < i; j++) {
      if(preSum[i] - preSum[j] === k) {
        ret++;
      }
    }
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let ret = 0;
  this.preSum = [0];
  let n = nums.length;
  for(let i = 1; i < n + 1; i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
  }

  let map = new Map();
  for(let i = 0; i < preSum.length; i++) {
    let objNum = preSum[i] - k;
    if(map.has(objNum)) {
      ret += map.get(objNum);
    }
    if(map.has(preSum[i])) {
      map.set(preSum[i], map.get(preSum[i]) + 1);
    } else {
      map.set(preSum[i], 1);
    }
  }
  return ret;
};

console.log(subarraySum([1,1,1], 2))
// 双重for循环，可以借助map转化为一重for循环，特点，原来的内层循环结束条件跟外层循环有关
