/**
 * 78. 子集
 * https://leetcode-cn.com/problems/subsets/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let index = 0;
    let nodes = [];
    backtrack(nums, index, nodes, res);

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
    backtrack(nums, index + 1, nodes, res);
}
// var subsets = function(nums) {
//     let res = [[]];
//     for(let i=0;i<nums.length;i++){
//         res.forEach(e=>{
//             res.push(e.concat(nums[i]))
//         })
//     }
//     return res;
// };