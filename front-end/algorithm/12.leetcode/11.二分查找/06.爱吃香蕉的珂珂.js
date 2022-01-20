/**
 * 875. 爱吃香蕉的珂珂
 * https://leetcode-cn.com/problems/koko-eating-bananas/
 */

/**
 * 注意折半查找结束条件
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    if (piles.length > h) {
        return;
    }
    let minSpeed = 1;
    let maxSpeed = 1;
    piles.forEach(pile => {
        if (pile > maxSpeed) {
            maxSpeed = pile;
        }
    })
    let r = 0;
    while (minSpeed <= maxSpeed) {
        let middle = Math.ceil((minSpeed + maxSpeed) / 2);
        let cost = getCost(piles, middle);
        let costpre = getCost(piles, middle - 1);

        if (cost <= h && costpre > h) { // 折半结束条件，middle算出的cost刚好符合，少一小时都不行
            r = middle; break;
        }
        if (cost > h) {
            minSpeed = middle + 1;
        } else {
            maxSpeed = middle - 1;
        }
    }
    return r;
};

var getCost = function (piles, speed) {
    let cost = 0;
    for (let i = 0; i < piles.length; i++) {
        cost += Math.ceil(piles[i] / speed);
    }
    return cost;
}
