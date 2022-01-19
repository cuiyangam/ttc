/**
 * 46. 全排列
 * https://leetcode-cn.com/problems/permutations/
 */

/**
 * 排列全排列，解法类似
 * 为什么排列要用递归来回溯，因为排列的定义是递归的定义
 *   第一个位置遍历地取过每个值，加上第一个位置的数值固定之后，第二个位置到最后的数值的排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = (nums) => {
    let current = [...nums];
    let res = [];
    backtrack(current, 0, res);
    return res;
}

/**
 * 
 * @param {*} current 待排列的数组
 * @param {*} k 排列第K个元素
 * @param {*} res 结果
 * @returns 
 */
var backtrack = (current, k, res) => {
    if (k === current.length) {
        res.push(current.slice());
        return;
    }
    for (let i = k; i < current.length; i++) {
        // 动态维护数组
        swap(current, k, i);
        // 继续递归填下一个数
        backtrack(current, k + 1, res);
        // 撤销操作
        swap(current, k, i);
    }
}

var swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
