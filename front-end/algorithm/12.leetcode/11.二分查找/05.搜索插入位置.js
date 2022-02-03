/**
 * 35. 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 */

/**
 * 找到常规折半查找查找结束后，再没找到的情况下，左右边界可能的状态，分类讨论
 *   归纳法，任何长度的数组都必将折半到偶数长度2或者奇数长度1
 *   如果数组长度是奇数1，即起止相等
 *     如果目标值小于最终指向的值，相对值为0 0 -1
 *     如果目标值大于最终指向的值，相对值为1 0 0
 *   如果数组长度是偶数2
 *     如果目标值大于middle指向的值，则转化为二分长度为1 的数组
 *     如果目标值小于middle指向的值，则相对值为 0 0 -1
 *   综上，左中右的相对值不外乎两种情况
 *     0 0 -1时，新元素应该插入0
 *     1 0 0 时，新元素应该插入1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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
