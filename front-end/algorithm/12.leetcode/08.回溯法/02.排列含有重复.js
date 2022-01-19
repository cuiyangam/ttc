/**
 * 47. 全排列 II
 * https://leetcode-cn.com/problems/permutations-ii/
 */


 var backtrack = (n, output, res, first, temp) => {
    // 所有数都填完了
    if (first == n) {
        if (!temp.has(output.join())) {
            res.push(output.join().split(','));
        }
        temp.add(output.join());
    }
    for (let i = first; i < n; i++) {
        if (output[i] === output[first] && i !== first) {
            continue;
        }
        // 动态维护数组
        swap(output, first, i);
        // 继续递归填下一个数
        backtrack(n, output, res, first + 1, temp);
        // 撤销操作
        swap(output, first, i);
    }
}

var permuteUnique = (nums) => {
    let temp = new Set();
    let res = [];
    let output = [...nums.sort((a, b) => a - b)];
    let n = nums.length;
    backtrack(n, output, res, 0, temp);
    return res;
}


var swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
