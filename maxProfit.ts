function maxProfit(prices: number[]): number {
    let lowIdx = 0, highIdx = 1;
    let diff = 0;
    while (lowIdx < prices.length) {
        if (prices[highIdx] - prices[lowIdx] > 0) {
            if (prices[highIdx] - prices[lowIdx] > diff) {
                diff = prices[highIdx] - prices[lowIdx];
            }
            highIdx++;
        } else {
            lowIdx++;
            highIdx = lowIdx + 1;
        }
    }
    
    return diff;
};

// 5
console.log(maxProfit([7,1,5,3,6,4]));

// 0
console.log(maxProfit([7,6,4,3,1]));

// 0
console.log(maxProfit([4,2,1]))

// 4
console.log(maxProfit([3,2,6,5,0,3]));