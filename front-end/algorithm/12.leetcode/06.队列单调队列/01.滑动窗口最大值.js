/**
 * 239. 滑动窗口最大值
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 */

var maxSlidingWindow = function (nums, k) {
    const n = nums.length;
    const queue = [];
    const ans = [];
    for (let i = 0; i < n; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);

        while (queue[0] <= i - k) {
            queue.shift();
        }
        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }
    return ans;
};
