/**
知识点
数组 高效查询 低效增删
链表 高效增删 低效查询
跳表 跳表是对有序链表的改进 可以给链表查询加速 空间换时间 时间复杂度到了logn
*/

// 移动零 https://leetcode-cn.com/problems/move-zeroes/ 
// + 遍历数组的同时使用指针指向非零元素
//     + 如果遍历到0，不做处理
//     + 如果遍历到非0，挪到指针指向的地址
var moveZeroes = function(nums) {
    let pointer = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            continue;
        } else {
            nums[pointer++] = nums[i];
        }
    }
    for(let i = pointer; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));

// 盛最多水的容器 https://leetcode-cn.com/problems/container-with-most-water/ 
// + 将双指针指向容器两端，记录此时容积
//     + 移动较短的一端，直到双指针相遇，此过程更新最大容积
// Q：为什么该过程不会漏掉最大容积情况？
// A: 1.导致最大面积的长短版下标必然存在
//    2.如果移动长板，则移动后的容积一定小于移动前，相遇过程中宽减小，高度变小或者不变，面积一定变小
//    3.所以只能移动短板，宽减小，高度可能变大，面积可能变大
//    4.长短板相遇，我们已经沿着面积可能变大的方向遍历了所有情况，最大的面积必然已经在遍历过程中被遍历到
var maxArea = function(height) {
    let [l, r, max] = [0, height.length - 1, 0];
    while(l < r) {
        const temp = height[l] < height[r]
            ? (r - l) * height[l++]
            : (r - l) * height[r--];
        max = Math.max(max, temp);
    }
    return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// 两数之和，用例保证答案唯一 https://leetcode-cn.com/problems/two-sum/
// + 遍历过程中找另一个加数
//     + 如果存在，返回俩下标
//     + 如果不存在，将加数与对应的下标存入map
var twoSum = function(nums, target) {
    let map = new Map(); // target value -> target index
    for(let i =0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
};
console.log(twoSum([2,7,11,15], 9));

// 三数之和 https://leetcode-cn.com/problems/3sum/
// 1.转化为两数之和,用map去重，效率不高
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let resultMap = new Map();
    for(let i = 0; i < nums.length - 2; i ++) {
        if ( i > 1 && nums[i - 1] === nums[i]) {
            continue;
        }
        // 转化为两数之和
        target = 0 - nums[i];
        let map = new Map;
        for(let j = i + 1; j < nums.length; j++) {
            if (map.has(target - nums[j])) {
                let second = map.get(target - nums[j]);
                let key = `key-${nums[i]}${nums[j]}${nums[second]}`;
                if(!resultMap.has(key)) {
                    let item = [ nums[i], nums[j], nums[second] ];
                    resultMap.set(key, item);
                }
            } 
            map.set(nums[j], j);
        }
        map.clear();
    }

    return result;
};
console.log(threeSum([0,0,0,0]))

// 2.排序 + 双指针
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for(let k = 0; k < nums.length - 2; k++){
        if(nums[k] > 0) {
            break;
        }
        if(k > 0 && nums[k] == nums[k - 1]) { // 等同前元素跳过以防止重复
            continue;
        }
        let [i, j] = [k + 1, nums.length - 1];
        while(i < j){
            let sum = nums[k] + nums[i] + nums[j];
            if(sum < 0){
                while(i < j && nums[i] == nums[++i]);
            } else if (sum > 0) {
                while(i < j && nums[j] == nums[--j]);
            } else {
                res.push([nums[k], nums[i], nums[j]]);
                while(i < j && nums[i] == nums[++i]);
                while(i < j && nums[j] == nums[--j]);
            }
        }
    }
    return res;
}
