/**
 * 动态规划之辅助思维的方法：状态转移表，状态转移方程
 */

/**
 * 升级版的背包问题：
 * 在满足背包最大重量限制的前提下，求背包中物品总价值的最大值，并打印出背包内所装的物品
 */

/**
 * 
 * @param {物品重量}      weight 
 * @param {物品价值}      value 
 * @param {物品总数}      n 
 * @param {背包可承载重量} w 
 * states[i][j] (0 < i < n, 0 < j < w + 1)
 * 表示第i个物品决策完之后 背包内的总重量为j时 总价值为 states[i][j]
 */

function knapsack(weight, value, n, w){
  states = new Array(n);
  for(let i = 0; i < states.length; ++i){
    states[i] = new Array(w + 1).fill(-1);
  }
  states[0][0] = 0;
  states[0][weight[0]] = value[0];
  for(let i = 1; i < n; ++i){
    for(let j = 0; j <= w; ++j){
      if(states[i - 1][j] >= 0) states[i][j] = states[i - 1][j];
    }
    for(let j = 0; j <= w - weight[i]; ++j){
      if(states[i - 1][j] >= 0) 
        states[i][j + weight[i]] = Math.max(states[i][j + weight[i]], states[i - 1][j] + value[i]);
    }
  }

  let maxValue = -1;
  let j = 0;  // 取得最大价值时候,背包的重量,打印所选物品时用
  for(let i = 0; i <= w; ++i){
    if(states[n - 1][i] > maxValue) {
      maxValue = states[n - 1][i];
      j = i;
    }
  }
  console.log (states);
  // 打印所选物品
  for(let i = n - 1; i >= 1; --i){
    if(states[i][j - weight[i]] === states[i][j] - value[i]){
      console.log (i + " is in the knapsack");
      j -= weight[i];
    }
  }
  return maxValue;
}

let wei = [2,2,4,6,3];
let val = [3,4,8,9,6];
console.log (knapsack(wei, val, 5, 9));