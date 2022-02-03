/**
 * 240. 搜索二维矩阵 II
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 */

/**
 * 从左至右递增，从上到下递增
 *   从右上角开始查找，即有俩指针，分别指向首行，指向最后一列
 *   如果小于首行最后一列，则淘汰最后一列，列指针左移动一位
 *   如果大于首行最后一列，则淘汰首行，行指针下移动一位
 *   如果找到，则返回真
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [row, coloum] = [matrix.length, matrix[0].length];
    let [start, end] = [0, coloum - 1]; // 从首行最后一个元素开始查找
    while (start < row && end > -1) {
        let value = matrix[start][end];
        if (target < value) {
            end--;
        } else if (target > value) {
            start++;
        } else {
            return true;
        }
    }
    return false;
};
