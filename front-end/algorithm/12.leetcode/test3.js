/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.length === 0) {
        return 0;
    }
    const dp = getDp(5, prices.length + 1);
    for(let i = 0; i < prices.length + 1; i++) {
        dp[0][i] = 0;
    }

    for(let j = 1; j < prices.length + 1; j++) {
        for(let i = 1; i < 5; i++) {
            if(i === j) {
                dp[i][i] = i % 2 === 1
                    ? dp[i - 1][i - 1] - prices[i]
                    : dp[i - 1][i - 1] + prices[i];
                continue;
            }
            if(i > j) {
                continue;
            }
            dp[i][j] = i % 2 === 1
                ? Math.max(dp[i][j - 1], dp[i - 1][j] - prices[j])
                : Math.max(dp[i][j - 1], dp[i - 1][j] + prices[j]);
        }
    }
    return Math.max(0, Math.max(dp[2][prices.length - 1], dp[4][prices.length - 1]));
};

var getDp = function(m, n) {
    let ret = new Array(m);
    for(let i = 0; i < m; i++) {
        ret[i] = new Array(n);
    }
    return ret;
}
console.log(maxProfit([1,2,3,4,5]))