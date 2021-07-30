/**
栈
队列 双端队列 优先队列
 */

// 有效的括号
// https://leetcode-cn.com/problems/valid-parentheses/

function isValid(str) {
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  };
  let stack = new Array();
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] < 0) {  // 左括号，待匹配
      stack.push(str[i]);  // 入栈
    } else {  // 右括号，执行匹配
      let peer = stack.pop();  // 栈顶元素出栈
      if (map[peer] + map[str[i]] !== 0) return false;  // 如果没有匹配，返回false
    }
  }
  if (stack.length > 0) return false;  // 如果最后栈中仍有剩余，说明有括号未匹配
  return true;  // 不为以上情况，则匹配成功
}

console.log(isValid('([]{})'));

// 最小栈
// https://leetcode-cn.com/problems/min-stack/

var MinStack = function () {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function (x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function () {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function () {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

// 柱状图中最大的矩形
// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

// 最大的柱子上边线必然与单根柱子得上边线平行,所以遍历上边线可得到最大面积
/**
 * 单调栈（递增）特性：栈内元素单调递增
 * 操作规则:新元素大于栈顶元素，入栈，小于：一直出栈直到新元素大于栈顶元素
 * 动态特性:栈内元素A出栈后，向后找第一个比其小的元素是新元素
 *         栈内元素A出栈后，向前找第一个比其小的元素是栈顶元素
 * 试用范围:根据其动态特性，我们可以知道可以在操作单调栈的过程中获取从某元素开始的递增区间
 */
// 本题技巧:找左边界
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let ans = 0;
  let stack = [];
  let hs = [0, ...heights, 0];
  for (let i = 0; i < hs.length; i++) {
    while (stack.length !== 0 && hs[i] < hs[stack[stack.length - 1]]) {
      let cur = stack.pop();
      let left = stack[stack.length - 1] + 1;
      let right = i - 1;
      ans = Math.max(ans, (right - left + 1) * hs[cur]);
    }
    stack.push(i);
  }
  return ans;
}

// 滑动窗口最大值
// https://leetcode-cn.com/problems/sliding-window-maximum/
// 单调双端队列（队列左到右递减），又新有大的存在，又旧有小的就删除
/**
1、合法性检查：队头下标如果距离 i 超过了 k ，则应该出队。
2、单调性维护：如果新元素大于或等于队尾元素下标所对应的值，队尾元素出队，直到队为空或者队尾元素大于新元素
3、如次遍历一遍数组，队头就是每个滑动窗口的最大值所在下标。
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
    if(i >= k - 1) {
      ans.push(nums[queue[0]]);
    }
  }
  return ans;
};
