// 动态规划是 分治 + 利用最优子结构
// 递归是顶向下，dp是自底向上，在写dp递推方程的时候可以用递归来建立思路

// https://leetcode-cn.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 最后一行最后一列填充0方便写出dp方程
    let dp = new Array(obstacleGrid.length + 1).fill(new Array(obstacleGrid[0].length + 1).fill(0))
    dp[dp.length - 1][dp[0].length - 2] = 1;

    for(let i = obstacleGrid.length - 1; i >= 0 ; i--) {
        for(let j = obstacleGrid[0].length - 1; j >= 0 ; j--) {
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))


// 状态转移方程 斐波那契 与 count the paths 引出状态转移方程的设计方法
// https://leetcode-cn.com/problems/longest-common-subsequence/

var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        const c1 = text1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = text2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};
