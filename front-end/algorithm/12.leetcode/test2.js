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
        // 第一个极值是极小值，且最后一个极值是极大值，此时极大极小数量相等
    }
    if(startWithSmall && small.length > big.length) {
        // 第一个极值是极小值，且最后一个极值是极小值，此时极大比极小数量少一个，尾部元素作为极大值
        big.push(prices[prices.length - 1]);
    }
    if(!startWithSmall && small.length === big.length) {
        // 第一个极值是极大值，且最后一个极值是极小值，此时极大极小数量相等，首部元素作为极小，尾部元素作为极大
        small.unshift(prices[0]);
        big.push(prices[prices.length - 1]);
    }
    if(!startWithSmall && small.length < big.length) {
        // 第一个极值是极大值，且最后一个极值是极大值，此时极大比极小数量多一个，首部元素作为极小值
        small.unshift(prices[0]);
    }

    let arr = compose(small, big);
    let before = getValues(arr);
    let after = getValues2(arr);
    for(let i = 0; i < before.length; i++) {
        ret = Math.max(ret, before[i] + after[i]);
    }
    console.log(before, after); // [14,9,10,12,4,8,1,16]
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
var compose = function(small, big) {
    let ret = [];
    for(let i = 0; i < small.length; i++) {
        ret.push(small[i], big[i]);
    }
    return ret;
}
var getValue = function(prices) {
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
var getValues = function(prices) {
    let minPrice = prices[0];
    let ret = 0;
    let res = [];
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > minPrice) {
            ret = Math.max(ret, prices[i] - minPrice);
        }
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        res.push(ret);
    }
    return res;
}

var getValues2 = function(prices) {
    prices = prices.reverse(); // 反过来赔的最多
    let maxPrice = prices[0];
    let ret = 0;
    let res = [0];
    for(let i = 1; i < prices.length - 1; i++) {
        if(prices[i] < maxPrice) {
            ret = Math.min(ret, prices[i] - maxPrice);
        }
        if(prices[i] > maxPrice) {
            maxPrice = prices[i];
        }
        res.push(ret);
    }
    return res.reverse().map(v => -v);
}