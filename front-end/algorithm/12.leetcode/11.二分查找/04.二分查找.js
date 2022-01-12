/**
 * 704. 二分查找
 * https://leetcode-cn.com/problems/binary-search/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let [start, end] = [0, nums.length - 1];
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else if (target > nums[middle]) {
            start = middle + 1;
        }
    }
    return -1;
};
