/**
 * 704. 二分查找
 * https://leetcode-cn.com/problems/binary-search/
 */

/**
 * 避免陷入死循环，考虑取middle的逻辑与折半操作方法
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
