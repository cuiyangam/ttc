/**
 * 
 * @param {*} nums 
 * @returns 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            continue;
        } else {
            nums[nonZeroIndex++] = nums[i];
        }
    }
    if (nonZeroIndex < nums.length) {
        for (let i = nonZeroIndex; i < nums.length; ++i) {
            nums[i] = 0;
        }
    }
    return nums;
};
