/**
 * 15. 三数之和
 * https://leetcode-cn.com/problems/3sum/
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break;
        if (k > 0 && nums[k] == nums[k - 1]) continue;
        let i = k + 1, j = nums.length - 1;
        while (i < j) {
            let sum = nums[k] + nums[i] + nums[j];
            if (sum < 0) {
                while (i < j && nums[i] == nums[++i]);
            } else if (sum > 0) {
                while (i < j && nums[j] == nums[--j]);
            } else {
                res.push([nums[k], nums[i], nums[j]]);
                while (i < j && nums[i] == nums[++i]);
                while (i < j && nums[j] == nums[--j]);
            }
        }
    }
    return res;
}
