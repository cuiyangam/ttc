/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i)为数组nums取下标[0,i]区间时，含有nums[i]的子数组的最大和
 *   之所以要定义为含有nums[i]，是为了如下的动态递推关系成立
 *   dp空间存储的中间状态的最大值即为解
 *   因为这些中间状态的子数组，左侧一定最大，右侧可能混杂负数，遍历所有则必然取到右侧完美的中间状态
 *   f(i) = Math.max(f(i - 1), f(i - 1) + nums[i])
 * 确定递推关系的起止状态
 *   0 <= i <= nums.length -1
 *   f(0) = nums[0]
 *   所有f(k)的解的最大值即为所求解
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [nums[0]];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(dp[i], max)
    }
    return max;
};
