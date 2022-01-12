/**
 * 827. 最大人工岛
 * https://leetcode-cn.com/problems/making-a-large-island/
 */

const largestIsland = (grid) => {
    let markAreaMap = new Map();
    let allIsLand = markIsland(grid, markAreaMap);
    let maxIslandNum = findLargestIsland(grid, markAreaMap);

    return allIsLand
        ? markAreaMap.get(2)
        : maxIslandNum;
}

const markIsland = (grid, markAreaMap) => {
    let mark = 2; // >=2的数字是遍历过的岛屿
    let allIsLand = true;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                let area = areaIsland(grid, r, c, mark);
                markAreaMap.set(mark, area);
                mark++;
            }
            if (grid[r][c] === 0) {
                allIsLand = false;
            }
        }
    }
    return allIsLand;
}

const findLargestIsland = (grid, markAreaMap) => {
    let maxIslandNum = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 0) {
                let areaNew = areaNewIsland(grid, r, c, markAreaMap);
                maxIslandNum = Math.max(areaNew, maxIslandNum);
            }
        }
    }
    return maxIslandNum;
}

const areaNewIsland = (grid, r, c, markAreaMap) => {
    let countedArea = new Set();
    if (inArea(grid, r - 1, c) && grid[r - 1][c] != 0) {
        countedArea.add(grid[r - 1][c]);
    }
    if (inArea(grid, r + 1, c) && grid[r + 1][c] != 0) {
        countedArea.add(grid[r + 1][c]);
    }
    if (inArea(grid, r, c - 1) && grid[r][c - 1] != 0) {
        countedArea.add(grid[r][c - 1]);
    }
    if (inArea(grid, r, c + 1) && grid[r][c + 1] != 0) {
        countedArea.add(grid[r][c + 1]);
    }
    let totalArea = 0;
    for (let area of countedArea) {
        totalArea += markAreaMap.get(area);
    }
    return totalArea + 1;
}

const areaIsland = (grid, r, c, mark) => {
    if (!inArea(grid, r, c)) {
        return 0;
    }
    if (grid[r][c] === 0 || grid[r][c] > 1) {
        return 0;
    }
    grid[r][c] = mark;

    return 1
        + areaIsland(grid, r - 1, c, mark)
        + areaIsland(grid, r + 1, c, mark)
        + areaIsland(grid, r, c - 1, mark)
        + areaIsland(grid, r, c + 1, mark);
}

const inArea = (grid, r, c) => {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
