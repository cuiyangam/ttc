/**
 * 1162. 地图分析
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    const length = grid.length;
    const queue = [];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }

    if (queue.length === length * length || queue.length === 0) {
        return -1;
    }

    let distance = -1;
    while (queue.length > 0) {
        distance++;
        let currentLevel = queue.length;
        for (let i = 0; i < currentLevel; i++) {
            let [r, c] = queue.shift();
            if (inArea(grid, r - 1, c) && grid[r - 1][c] === 0) {
                grid[r - 1][c] = 2;
                queue.push([r - 1, c]);
            }
            if (inArea(grid, r + 1, c) && grid[r + 1][c] === 0) {
                grid[r + 1][c] = 2;
                queue.push([r + 1, c]);
            }
            if (inArea(grid, r, c - 1) && grid[r][c - 1] === 0) {
                grid[r][c - 1] = 2;
                queue.push([r, c - 1]);
            }
            if (inArea(grid, r, c + 1) && grid[r][c + 1] === 0) {
                grid[r][c + 1] = 2;
                queue.push([r, c + 1]);
            }
        }
    }
    return distance;
};

const inArea = (grid, r, c) => {
    return r >= 0 && r < grid.length && c >= 0 && c < grid.length;
}