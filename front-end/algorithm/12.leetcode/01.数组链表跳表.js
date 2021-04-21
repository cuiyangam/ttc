// https://leetcode-cn.com/problems/two-sum/
// + 遍历过程中找另一个加数
//     + 如果存在，返回俩下标
//     + 如果不存在，将加数与对应的下标存入map
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i =0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
};
console.log(twoSum([2,7,11,15], 9));

// https://leetcode-cn.com/problems/container-with-most-water/
// + 将双指针指向容器两端，记录此时容积
//     + 移动较短的一端，直到双指针相遇，此过程更新最大容积
// Q：为什么该过程不会漏掉最大容积情况？
// A：如果移动长板，则移动后的容积一定小于移动前，相遇过程中宽减小，高度变小或者不变，面积变小
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while(l < r) {
        const temp = height[l] < height[r]
            ? (r - l) * height[l++]
            : (r - l) * height[r--];
        max = Math.max(max, temp);
    }
    return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// https://leetcode-cn.com/problems/move-zeroes/
// + 遍历数组的同时使用指针指向非零元素
//     + 如果遍历到0，不做处理
//     + 如果遍历到非0，挪到指针指向的地址
var moveZeroes = function(nums) {
    let currIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            continue;
        } else {
            nums[currIndex++] = nums[i];
        }
    }
    for(let i = currIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));

// https://leetcode-cn.com/problems/climbing-stairs/
// + 第一阶梯一种方法f(1)
// + 第二阶梯两种方法f(2)
// + 到达第三阶梯之前可以是迈了一步，也可以是迈了两步，所以方法总数f(3) = f(2) + f(1);
// + 同理可得f(x) = f(x - 1) + f(x - 2)
var climbStairs = function(n) {
    if(n === 2 || n === 1) {
        return n;
    }
    let prepre = 1;
    let pre = 2;
    let curr = 0;
    let step = 3;
    while(step++ <= n) {
        curr = prepre + pre;
        prepre = pre;
        pre = curr;
    }
    return curr;
}
console.log(climbStairs(4));

// https://leetcode-cn.com/problems/3sum/
var threeSum = function(nums) {

};
