/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if(prices.length === 1) {
      return 0;
  }
  if(prices.length === 2) {
      return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
  }
  let big = [];
  let small = [];
  prices = getNoDump(prices);
  let startWithSmall = false;
  let arrive = false;
  for(let i = 1; i < prices.length - 1; i++) {
      if(prices[i] < prices[i - 1] && prices[i] < prices[i + 1]) {
          small.push(prices[i]);
          if(!arrive) {
              arrive = true;
              startWithSmall = true;
          }
      }
      if(prices[i] > prices[i - 1] && prices[i] > prices[i + 1]) {
          big.push(prices[i]);
          if(!arrive) {
              arrive = true;
              startWithSmall = false;
          }
      }
  }
  let ret = 0;
  if(small.length === 0 && big.length === 0) {
      return prices[1] - prices[0] > 0 ? prices[prices.length - 1] - prices[0] : 0;
  }
  if(startWithSmall && small.length === big.length) {
      for(let i = 0; i < small.length; i++) {
          ret += big[i] - small[i];
      }
  }
  if(startWithSmall && small.length > big.length) {
      big.push(prices[prices.length - 1]);
      for(let i = 0; i < small.length; i++) {
          ret += big[i] - small[i];
      }
  }
  if(!startWithSmall && small.length === big.length) {
      small.unshift(prices[0]);
      big.push(prices[prices.length - 1]);
      for(let i = 0; i < small.length; i++) {
          ret += big[i] - small[i];
      }
  }
  if(!startWithSmall && small.length < big.length) {
      small.unshift(prices[0]);
      for(let i = 0; i < small.length; i++) {
          ret += big[i] - small[i];
      }
  }
  return ret;
};

var getNoDump = function(prices) {
  let ret = [prices[0]];
  for(let i = 1; i < prices.length; i++) {
      if(prices[i] === prices[i - 1]) {
          continue;
      }
      ret.push(prices[i]);
  }
  return ret;
}
