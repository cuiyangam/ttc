/**
 * 189. 轮转数组
 * https://leetcode-cn.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++; end--;
    }
}

function swap(nums, start, end) {
    let tmp = nums[start];
    nums[start] = nums[end]
    nums[end] = tmp;
}
