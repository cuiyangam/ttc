/**
 * dp解题步骤
 * 
 * 将原问题拆分子问题，找出递推关系
 * 确定递推关系的起止状态
 * dp是空间换时间，可以考虑对空间压缩(可选)
 */

/**
 * https://leetcode-cn.com/problems/longest-turbulent-subarray/
 * 
 * 将原问题拆分子问题，找出递推关系
 *   定义f(i)为数组arr取下标[0,i]区间时，含有i的最大湍流子数组
 *   如果加入的arr[i]与f(i - 1)组成新的湍流
 *     f(i) = f(i-1)
 *   如果加入的arr[i]与f(i - 1)不组成新的湍流
 *     如果arr[i] === arr[i-1]
 *       则降arr[i]放入存储当前湍流的变量
 *       f(i) = 1
 *     如果arr[i] !== arr[i-1]
 *       则降arr[i-1],arr[i]放入存储当前湍流的变量
 *       f(i) = 2
 * 确定递推关系的起止状态
 *   0 <= i <= arr.length -1
 *   所有f(i)的解的最大值即为所求解
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    if(arr.length === 1) {
        return 1;
    }
    let dp = [1];
    let max = 1;
    let turb = [arr[0]];
    let diraction = 0; // 1 up -1 down

    for(let i = 1; i < arr.length; i++) {
        if(turb[turb.length - 1] === arr[i]) {
            turb = [arr[i]];
            dp[i] = turb.length;
            max = Math.max(dp[i], max);
            diraction = 0;
        }
        if(diraction === 0 && turb[turb.length - 1] !== arr[i]) {
            turb.push(arr[i]);
            dp[i] = turb.length;
            max = Math.max(dp[i], max);
            diraction = turb[turb.length - 1] - turb[turb.length - 2] > 0 ? 1 : -1;
        }
        if(diraction !== 0 && turb[turb.length - 1] !== arr[i]) {
            let currDir = arr[i] - turb[turb.length - 1] > 0 ? 1 : -1;
            if(currDir + diraction === 0) {
                turb.push(arr[i]);
                dp[i] = turb.length;
                max = Math.max(dp[i], max);
                diraction = diraction === 1 ? -1 : 1;
            } else {
                turb = [arr[i-1], arr[i]];
                dp[i] = turb.length;
                max = Math.max(dp[i], max);
                diraction = turb[turb.length - 1] - turb[turb.length - 2] > 0 ? 1 : -1;
            }
        }
    }
    return max;
};
// nice 完全自己找子路，一次通过