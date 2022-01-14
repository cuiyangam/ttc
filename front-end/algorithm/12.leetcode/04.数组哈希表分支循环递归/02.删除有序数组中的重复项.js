/**
 * 26. 删除有序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * 遍历过程中用指针指向之前没有出现过的元素的位置
 * 指针最后指向的位置就是最后一位不重复元素的下标
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pointer = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[pointer] === nums[i]) {
            continue;
        } else {
            pointer++;
            nums[pointer] = nums[i];
        }
    }
    return pointer + 1;
};
