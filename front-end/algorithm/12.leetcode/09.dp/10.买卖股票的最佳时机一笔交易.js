/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let minPrice = prices[0];
  let ret = 0;
  for(let i = 1; i < prices.length; i++) {
      if(prices[i] > minPrice) {
          ret = Math.max(ret, prices[i] - minPrice);
      }
      if(prices[i] < minPrice) {
          minPrice = prices[i];
      }
  }
  return ret;
};
