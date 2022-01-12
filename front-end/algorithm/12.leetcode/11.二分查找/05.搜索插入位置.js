/**
 * 35. 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 */

var searchInsert = function (nums, target) {
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
    // 数组中无目标值
    return end < middle
        ? middle
        : middle + 1;
};
