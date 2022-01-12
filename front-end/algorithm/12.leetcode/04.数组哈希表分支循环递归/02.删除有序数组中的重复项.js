/**
 * 26. 删除有序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let currentIndex = 0;
    for (let iteratorIndex = 1; iteratorIndex < nums.length;) {
        if (nums[currentIndex] === nums[iteratorIndex]) {
            iteratorIndex++;
        } else {
            currentIndex++;
            nums[currentIndex] = nums[iteratorIndex];
        }
    }
    return currentIndex + 1;
};
