/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/**
 * 常规操作
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let [start, end] = [0, nums.length - 1];
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            break;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else if (target > nums[middle]) {
            start = middle + 1;
        }
    }
    // 数组中无目标值
    if (end < start) {
        return [-1, -1];
    }
    let [first, last] = [middle, middle];
    while (first - 1 >= 0 && nums[first - 1] === target) {
        first--;
    }
    while (last + 1 <= nums.length - 1 && nums[last + 1] === target) {
        last++;
    }
    return [first, last];
};
