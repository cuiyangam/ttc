/**
 * 63. 不同路径 II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
    // 最后一行最后一列填充0方便写出dp方程
    let dp = new Array(obstacleGrid.length + 1).fill(new Array(obstacleGrid[0].length + 1).fill(0))
    dp[dp.length - 1][dp[0].length - 2] = 1;

    for (let i = obstacleGrid.length - 1; i >= 0; i--) {
        for (let j = obstacleGrid[0].length - 1; j >= 0; j--) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};
