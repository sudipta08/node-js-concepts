// profit will be maximum when we buy at the lowest and sell at the highest rate
var maxProfit = function(prices) {
    let minPrice = Infinity; // we keep track of the minimum stock price to maximise the profit
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
};