/**
 * 72. 编辑距离
 * https://leetcode-cn.com/problems/edit-distance/
 */

/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */
/**
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i,j)为字符串word1取下标[0,i]区间与字符串word2取下标[0,j]区间时，这两个字符串的最短编辑距离
 *   如果word1[i] === word2[j]
 *      则无需编辑，即，f(i,j) = f(i-1, j-1)
 *   如果word1[i] !== word2[j]
 *      f(i,j) = Math.min(f(i-1,j-1),f(i-1,j),f(i,j-1)) + 1
 *         f(i-1,j-1) word1[i] word2[j]  经过一次修改后俩单词相同(word1[i] 修改为 word2[j])
 *         f(i-1,j)   word1[i]           经过一次删除后俩单词相同(删除word1[i])
 *         f(i,j-1)   word2[j]           经过一次插入后俩单词相同(word1[i+1]处插入word[j])
 * 确定递推关系的起止状态
 *   0 <= i <= word1.length -1, 0 <= j <= word2.length -1
 *   f(word1.length - 1, word2.length - 1)即为最终的解
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (word1 === '') {
        return word2.length;
    }
    if (word2 === '') {
        return word1.length;
    }
    let s = word1.split('');
    let t = word2.split('');
    let dp = getDp(s.length, t.length);
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = s[i] === t[j] ? 0 : 1; continue;
            }
            if (i === 0) {
                dp[i][j] = word2.slice(0, j + 1).includes(s[i]) ? j : j + 1; continue;
            }
            if (j === 0) {
                dp[i][j] = word1.slice(0, i + 1).includes(t[j]) ? i : i + 1; continue;
            }
            dp[i][j] = s[i] === t[j]
                ? dp[i - 1][j - 1]
                : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
    }
    return dp[s.length - 1][t.length - 1];
};

var getDp = function (m, n) {
    let ret = new Array(m);
    for (let i = 0; i < m; i++) {
        ret[i] = new Array(n);
    }
    return ret;
}
