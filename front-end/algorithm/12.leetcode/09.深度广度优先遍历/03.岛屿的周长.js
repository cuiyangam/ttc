/**
 * 463. 岛屿的周长
 * https://leetcode-cn.com/problems/island-perimeter/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

const islandPerimeter = (grid) => {
    let perimeter = 0;
    label:
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                perimeter = areaIsland(grid, r, c);
                break label;
            }

        }
    }
    return perimeter;
}

const areaIsland = (grid, r, c) => {
    if (!inArea(grid, r, c) || grid[r][c] === 0) {
        return 1;
    }
    if (grid[r][c] === 2) {
        return 0;
    }
    grid[r][c] = 2;

    return areaIsland(grid, r - 1, c)
        + areaIsland(grid, r + 1, c)
        + areaIsland(grid, r, c - 1)
        + areaIsland(grid, r, c + 1);
}

const inArea = (grid, r, c) => {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
