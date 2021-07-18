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

var MinStack = function() {
  this.x_stack = [];
  this.min_stack = [Infinity];
};

MinStack.prototype.push = function(x) {
  this.x_stack.push(x);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

MinStack.prototype.pop = function() {
  this.x_stack.pop();
  this.min_stack.pop();
};

MinStack.prototype.top = function() {
  return this.x_stack[this.x_stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min_stack[this.min_stack.length - 1];
};

// 柱状图中最大的矩形
// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

// 最大的柱子上边线必然与单根柱子得上边线平行，可用单调栈（栈底到栈顶递增）
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let n = heights.length;
  let left = new Array(n);
  let right = new Array(n);
  right.fill(n);
  
  let mono_stack = new Array();
  for (let i = 0; i < n; ++i) {
      while (mono_stack.length !== 0 && heights[mono_stack[mono_stack.length - 1]] >= heights[i]) {
          right[mono_stack[mono_stack.length - 1]] = i;
          mono_stack.pop();
      }
      left[i] = (mono_stack.length === 0 ? -1 : mono_stack[mono_stack.length - 1]);
      mono_stack.push(i);
  }
  
  let ans = 0;
  for (let i = 0; i < n; ++i) {
      ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
};

// 滑动窗口最大值
// https://leetcode-cn.com/problems/sliding-window-maximum/
// 单调双端队列（队列左到右递减），又新有大的存在，又旧有小的就删除

var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  const q = [];
  for (let i = 0; i < k; i++) {
      while (q.length && nums[i] >= nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(i);
  }

  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
      while (q.length && nums[i] >= nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(i);
      while (q[0] <= i - k) {
          q.shift();
      }
      ans.push(nums[q[0]]);
  }
  return ans;
};
