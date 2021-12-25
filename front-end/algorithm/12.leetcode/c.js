/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */
/**
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i,j)为s[0,i] t[0,j]内的解
 *   如果s(i) === t(j),则f(i,j) = f(i-1, j-1) + 1
 *   如果s(i) !== t(j),则f(i,j) = Math.max(f(i, j-1), f(i-1, j))
 * 确定递推关系的起止状态
 *   0 <= i <= s.length -1, 0 <= j <= t.length -1
 *   f(s.length - 1, t.length - 1)即为最终的解
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let s = text1.split('');
    let t = text2.split('');

    let dp = getDp(s.length, t.length);
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < t.length; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = s[i] === t[j] ? 1 : 0; continue;
            }
            if(i === 0) {
                dp[i][j] = dp[i][j - 1] || s[i] === t[j] ? 1 : 0; continue;
            }
            if(j === 0) {
                dp[i][j] = dp[i - 1][j] || s[i] === t[j] ? 1 : 0; continue;
            }
            dp[i][j] = s[i] === t[j] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[s.length - 1][t.length - 1];
};

var getDp = function(m, n) {
    let ret = new Array(m);
    for(let i = 0; i < m; i++) {
        ret[i] = new Array(n);
    }
    return ret;
}
// ======================================

/**
 * dp是空间换时间，可以考虑对空间压缩(可选)
 *   待求的状态与之前的左侧、上侧、左上侧状态相关，只需要一维数组加单个变量即可存储历史状态
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let s = text1.split('');
    let t = text2.split('');

    let dp = new Array(t.length);
    for(let i = 0; i < s.length; i++) {
        let leftTopValue = 0; // 内层下一个循环的left top
        for(let j = 0; j < t.length; j++) {
            if(i === 0 && j === 0) {
                dp[j] = s[i] === t[j] ? 1 : 0; continue;
            }
            if(i === 0) {
                dp[j] = dp[j - 1] || s[i] === t[j] ? 1 : 0; continue;
            }
            if(j === 0) {
                let temp = dp[j];
                dp[j] = dp[j] || s[i] === t[j] ? 1 : 0;
                leftTopValue = temp; continue;
            }
            let temp = dp[j];
            dp[j] = s[i] === t[j] ? leftTopValue + 1 : Math.max(dp[j], dp[j - 1]);
            leftTopValue = temp;
        }
    }
    return dp[t.length - 1];
};
