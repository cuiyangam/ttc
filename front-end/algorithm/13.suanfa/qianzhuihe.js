// // 前缀喝数组 用来空间换时间
// // LeetCode 303. Range Sum Query - Immutable（Easy）
// // LeetCode 724. Find Pivot Index（Easy）
// // LeetCode 560. Subarray Sum Equals K 和为K的子数组（Medium）

// /**
//  * @param {number[]} nums
//  */
// var NumArray = function(nums) {
//   this.preSum = [];  // preSum[k] 代表nums中区间[0, k) 数字之和
//   this.preSum[0] = 0;
//   let n = nums.length;
//   for(let i = 0; i < n; i++) {
//     this.preSum[i + 1] = this.preSum[i] + nums[i];
//   }
// };

// /** 
//  * @param {number} left 
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(left, right) {
//   return this.preSum[right + 1] - this.preSum[left];
// };

// /**
//  * Your NumArray object will be instantiated and called as such:
//  * var obj = new NumArray(nums)
//  * var param_1 = obj.sumRange(left,right)
//  */


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var pivotIndex = function(nums) {
//   const S = nums.reduce((a, b) => a + b, 0);
//   let A = 0;
//   for(let i = 0; i < nums.length; i++) {
//     if(A * 2 + nums[i] === S) {
//       return i;
//     }
//     A += nums[i];
//   }
//   return -1;
// };


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

  let map = new Map();
  map.set(0, 0);
  for(let i = 0; i < preSum.length; i++) {
    let objNum = preSum[i] - k;
    let a = map.get(objNum);
    if(map.has(objNum)) {
      ret += a;
    }
    if(map.has(preSum[i])) {
      map.set(preSum[i], map.get(preSum[i]) + 1);
    } else {
      map.set(preSum[i], 1);
    }
  }
  return ret;
};

subarraySum([1,1,1], 2)
// 双重for循环，可以借助map转化为一重for循环，特点，原来的内层循环结束条件跟外层循环有关

// 动态递推