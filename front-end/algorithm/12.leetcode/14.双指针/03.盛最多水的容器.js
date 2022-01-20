/**
 * 11. 盛最多水的容器
 * https://leetcode-cn.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let [start, end, max] = [0, height.length - 1, 0];
    while (start < end) {
        let value = Math.min(height[start], height[end]) * (end - start);
        max = Math.max(max, value);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};
