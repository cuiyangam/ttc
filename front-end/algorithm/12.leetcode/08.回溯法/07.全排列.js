/**
 * 46. 全排列
 * https://leetcode-cn.com/problems/permutations/
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
