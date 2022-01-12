/**
 * 74. 搜索二维矩阵
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 */

var searchMatrix = function (matrix, target) {
    if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
        return false;
    }
    let [row, rowl, rowr] = [0, 0, matrix.length - 1];
    while (rowl <= rowr) {
        let mid = Math.floor((rowl + rowr) / 2);
        if (matrix[mid][0] <= target && target <= matrix[mid][matrix[0].length - 1]) {
            row = mid;
            break;
        }
        if (target < matrix[mid][0]) {
            rowr = mid - 1;
        } else {
            rowl = mid + 1;
        }
    }

    let [column, columnl, columnr] = [0, 0, matrix[0].length];
    while (columnl <= columnr) {
        let mid = Math.floor((columnl + columnr) / 2);
        if (target === matrix[row][mid]) {
            return true;
        }
        if (target < matrix[row][mid]) {
            columnr = mid - 1;
        } else {
            columnl = mid + 1;
        }
    }
    return false;
};
