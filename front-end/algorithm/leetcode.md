# 一句话总结算法 & 力扣实战

## 数组、链表、跳表
```js{cmd=node}
// https://leetcode-cn.com/problems/move-zeroes/
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] === 0) {
            continue;
        } else {
            nums[nonZeroIndex++] = nums[i]; 
        }
    }
    if(nonZeroIndex < nums.length) {
        for(let i = nonZeroIndex; i < nums.length; ++i) {
            nums[i] = 0;
        }
    }
    return nums;
};
```

```js{cmd=node}
// https://leetcode-cn.com/problems/climbing-stairs/
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // const oneStep = 1;
    // const twoStep = 2;
    // const nStep = n-1Step + n-2Step
    if (n === 1 || n === 2) {
        return n;
    }
    let pre = 2;
    let prepre = 1;
    let cur = 0;
    for(let i = 3; i <= n; ++i) {
        cur = pre + prepre;
        prepre = pre;
        pre = cur;
    }
    return cur;
};
```