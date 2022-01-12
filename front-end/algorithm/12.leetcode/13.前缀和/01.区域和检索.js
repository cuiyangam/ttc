/**
 * https://leetcode-cn.com/problems/range-sum-query-immutable/
 * 
 * 前缀和数组的第i项为数组[0, i) 区间之和
 * T(n)=1; O(n)=n
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.preSum = [0];
    let n = nums.length;
    for (let i = 1; i < n + 1; i++) {
        this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
