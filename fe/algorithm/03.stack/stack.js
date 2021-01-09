class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop(item) {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.getCount() - 1];
  }
  getCount() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

/**
 * 栈的应用：判断括号匹配合法性
 */
function isValid(str) {
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] < 0) {  // 左括号，待匹配
      stack.push(str[i]);  // 入栈
    } else {  // 右括号，执行匹配
      let peer = stack.pop();  // 栈顶元素出栈
      if (map[peer] + map[str[i]] !== 0) return false;  // 如果没有匹配，返回false
    }
  }
  if (stack.getCount() > 0) return false;  // 如果最后栈中仍有剩余，说明有括号未匹配
  return true;  // 不为以上情况，则匹配成功
}

console.log(isValid('([]{})'));