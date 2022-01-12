/**
 * 695. 岛屿的最大面积
 * https://leetcode-cn.com/problems/max-area-of-island/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let maxArea = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                let area = areaIsland(grid, r, c);
                maxArea = Math.max(maxArea, area);
            }

        }
    }
    return maxArea;
}

const areaIsland = (grid, r, c) => {
    if (!inArea(grid, r, c)) {
        return 0;
    }
    if (grid[r][c] === 0 || grid[r][c] === 2) {
        return 0;
    }
    grid[r][c] = 2;

    return 1
        + areaIsland(grid, r - 1, c)
        + areaIsland(grid, r + 1, c)
        + areaIsland(grid, r, c - 1)
        + areaIsland(grid, r, c + 1);
}

const inArea = (grid, r, c) => {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
