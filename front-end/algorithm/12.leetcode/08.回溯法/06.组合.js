/**
 * 77. 组合
 * https://leetcode-cn.com/problems/combinations/
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(i + 1);
    }

    let stack = [];
    let res = [];
    let index = 0;
    backtrack(nums, index, stack, k, res);
    return res;
};

const backtrack = function (nums, index, stack, k, res) {
    if (index === nums.length) {
        if (stack.length === k) {
            res.push(stack.slice());
        }
        return;
    }
    backtrack(nums, index + 1, stack, k, res);
    stack.push(nums[index]);
    backtrack(nums, index + 1, stack, k, res);
    stack.pop();
}
