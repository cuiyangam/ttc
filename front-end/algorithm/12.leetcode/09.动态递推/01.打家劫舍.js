/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * https://leetcode-cn.com/problems/house-robber/
 * 
 * 将原问题拆分子问题，找出递推关系
 *   房间金额保存在数组nums, 定义f(k)表示数组下标[0, k]区间内的解
 *   如果不盗取第k个房间，f(k) = f(k - 1)
 *   如果盗取第k个房间，f(k) = f(k - 2) + nums[k]
 *   f(k) = Math.max(A, B)
 * 确定递推关系的起止状态
 *   k 等于数组最后一个下标的时候 f(k)即为问题的解
 *   0 <= k <= nums.length - 1
 *   f(0) = nums[0]; f(1) = Math.max(nums[0], nums[1]);
 */ 

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < nums.length; i++) {  
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
};

/**
 * 空间优化版
 * 
 * dp是空间换时间，观察动态递推过程中对dp数组的使用情况，可以考虑对空间压缩
 *   待求的状态与之前的两个状态相关，只需要用两个变量存储历史状态即可
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    }
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let [prev, curr] = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < nums.length; i++) {  
        let temp = Math.max(curr, prev + nums[i]);
        prev = curr;
        curr = temp;
    }
    return curr;
};
