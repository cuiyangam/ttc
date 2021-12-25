/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * 将原问题拆分子问题，找出递推关系
 *   定义f(k)表示[0, k]区间内的解。 房间金额保存在数组n
 *   如果盗取第k个房间，f(k) = f(k - 1)
 *   如果不盗取第k个房间，f(k) = f(k - 2) + n[k]
 *   f(k) = Math.max(...)
 * 确定递推关系的起止状态
 *   k 等于房间数量时候 f(k)纪委问题的解
 *   0 <= k < n.length
 *   f(0) = n[0]; f(1) = Math.max(n[0], n[1]);
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
 * dp是空间换时间，可以考虑对空间压缩(可选)
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