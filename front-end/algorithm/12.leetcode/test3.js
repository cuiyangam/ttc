/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }
  const stateNums = 4;
  const dp = getDp(stateNums, prices.length);

  for (let j = 0; j < prices.length; j++) {
    for (let i = 0; i <= Math.min(j, stateNums - 1); i++) {
      // 横向初始化
      if (i === 0 && j === 0) {
        dp[0][0] = 0 - prices[j]; continue;
      }
      if (i === 0) {
        dp[0][j] = Math.max(dp[0][j - 1], 0 - prices[j]); continue;
      }
      // 纵向初始化
      if (i === j) {
        dp[i][i] = i % 2 === 0
          ? dp[i - 1][i - 1] - prices[j] // 买入股票，现金减少
          : dp[i - 1][i - 1] + prices[j];
        continue;
      }
      // 动态递推
      dp[i][j] = i % 2 === 0
        ? Math.max(dp[i][j - 1], dp[i - 1][j - 1] - prices[j]) // 买入股票，现金减少
        : Math.max(dp[i][j - 1], dp[i - 1][j - 1] + prices[j]);
    }
  }
  return Math.max(0, Math.max(dp[1][prices.length - 1], dp[3][prices.length - 1]));
};

var getDp = function (m, n) {
  let ret = new Array(m);
  for (let i = 0; i < m; i++) {
    ret[i] = new Array(n).fill(-Infinity);
  }
  return ret;
}
console.log(maxProfit([1, 2]))
