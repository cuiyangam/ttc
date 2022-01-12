/**
 * 90. 子集 II
 * https://leetcode-cn.com/problems/subsets-ii/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function (nums) {
    let res = [];
    let index = 0;
    let nodes = [];
    backtrack(nums.sort(), index, nodes, res);

    return res;
};

const backtrack = (nums, index, nodes, res) => {
    if (index === nums.length) {
        res.push(nodes.slice());
        return;
    }
    // has
    nodes.push(nums[index]);
    backtrack(nums, index + 1, nodes, res);
    // not has
    nodes.pop();
    let j = index;
    while (j < nums.length && nums[j] === nums[index]) {
        j++;
    }
    backtrack(nums, j, nodes, res);
}
