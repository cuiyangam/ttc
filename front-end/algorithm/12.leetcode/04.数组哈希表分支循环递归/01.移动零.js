/**
 * 283. 移动零
 * https://leetcode-cn.com/problems/move-zeroes/
 */

/**
 * 遍历过程中用指针指向下一个可以填充非零元素的位置，遇到非零元素则填充
 * 指针最后指向的位置到最后的位置都填充0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        } else {
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    for (let i = pointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
