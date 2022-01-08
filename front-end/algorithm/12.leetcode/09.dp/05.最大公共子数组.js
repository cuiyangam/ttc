/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * 
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i,j)为字符串nums1取下标[0,i]区间与字符串nums2取下标[0,j]区间时，包含最后一个元素的最长重复子数组
 *   如果nums1[i] === nums2[j]
 *      则找到最长重复子数组的一个, 即，f(i,j) = f(i-1, j-1) + 1
 *   如果nums1[i] !== nums2[j]
 *      f(i, j) = 0
 * 确定递推关系的起止状态
 *   0 <= i <= nums1.length -1, 0 <= j <= nums2.length -1
 *   f(i, j) 的最大值即为最终的解
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let s = nums1;
    let t = nums2;

    let dp = getDp(s.length, t.length);
    let max = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < t.length; j++) {
            if(i === 0 && j === 0) {
                dp[i][j] = s[i] === t[j] ? 1 : 0; 
                max = Math.max(dp[i][j], max); continue;
            }
            if(i === 0) {
                dp[i][j] = s[i] === t[j] ? 1 : 0; 
                max = Math.max(dp[i][j], max); continue;
            }
            if(j === 0) {
                dp[i][j] = s[i] === t[j] ? 1 : 0;
                max = Math.max(dp[i][j], max); continue;
            }
            dp[i][j] = s[i] === t[j]
                ? dp[i - 1][j - 1] + 1
                : 0;
            max = Math.max(dp[i][j], max); 
        }
    }
    return max;
};

var getDp = function(m, n) {
    let ret = new Array(m);
    for(let i = 0; i < m; i++) {
        ret[i] = new Array(n);
    }
    return ret;
}
