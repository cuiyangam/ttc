/**
 * 189. 轮转数组
 * https://leetcode-cn.com/problems/rotate-array/
 */

/**
 * 以长度为5的数组向右轮转2个位置为例
 * 先将数组整体翻转，然后[0, k)区间翻转，然后[k, length)区间翻转
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
