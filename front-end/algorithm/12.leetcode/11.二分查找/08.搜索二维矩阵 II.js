/**
 * 240. 搜索二维矩阵 II
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [row, coloum] = [matrix.length, matrix[0].length];
    let [start, end] = [0, coloum - 1];
    while (start < row && end > -1) {
        let value = matrix[start][end];
        if (value > target) {
            end--;
        } else if (value < target) {
            start++;
        } else {
            return true;
        }
    }
    return false;
};
