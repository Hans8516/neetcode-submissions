class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0], maxSell = prices[1];
        let result = 0;
        for(let buy=0, sell=buy+1 ;buy<prices.length-1;buy++, sell++) {
            if(prices[buy]<minBuy) {
                minBuy=prices[buy];
                maxSell=prices[sell];
            }
            if(prices[sell]>maxSell) {
                maxSell=prices[sell];
            }
            result = Math.max(maxSell-minBuy, result);
        }
        return result;
    }
}
