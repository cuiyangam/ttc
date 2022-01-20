/**
 * 167. 两数之和 II - 输入有序数组
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [start, end] = [0, numbers.length - 1];
    while (start < end) {
        let value = numbers[start] + numbers[end];
        if (value < target) {
            start++;
        } else if (value > target) {
            end--;
        } else {
            return [start + 1, end + 1];
        }
    }
    return [-1, -1];
};
