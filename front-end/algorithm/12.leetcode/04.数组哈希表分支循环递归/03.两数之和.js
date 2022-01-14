/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 */

/**
 * 定义一个map，key是加数，value是加数对应的下标
 * 遍历过程中首先查看map中是否有加数，如果有则返回一对下标，如果没有则set键值对
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
};
