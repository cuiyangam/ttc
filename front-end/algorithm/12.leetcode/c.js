/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i,j)为字符串text1取下标[0,i]区间与字符串text2取下标[0,j]区间时，这两个字符串的最长公共子序列
 *   如果text1[i] === text2[j]
 *      则同时被添加到text1与text2的相同字母被统计到lcs, 即，f(i,j) = f(i-1, j-1) + 1
 *   如果text1[i] !== text2[j]
 *      则同时被添加到text1与text2的不同字母
 *      dp数组向右向下为非严格递增
 *      半径为1 的格子区域向右向下最多增加1
 *      循环到text[i] === text2[j]节点才会真的递增加一，其他都是继承相关的子状态结果
 * 确定递推关系的起止状态
 *   0 <= i <= text1.length -1, 0 <= j <= text2.length -1
 *   f(text1.length - 1, text2.length - 1)即为最终的解
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
            dp[i][j] = s[i] === t[j]
                ? dp[i - 1][j - 1] + 1
                : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
        console.log(dp[i]);
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
console.log(longestCommonSubsequence('abcde', 'ace'));
//     a  c  e
// a [ 1, 1, 1 ]
// b [ 1, 1, 1 ]
// c [ 1, 2, 2 ]
// d [ 1, 2, 2 ]
// e [ 1, 2, 3 ]
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
