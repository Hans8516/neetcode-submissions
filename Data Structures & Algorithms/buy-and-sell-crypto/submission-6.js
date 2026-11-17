class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let result = 0;
        for(let sell=1 ;sell<prices.length;sell++) {
            if(prices[sell]<minBuy) {
                minBuy=prices[sell];
            }
                result = Math.max(prices[sell]-minBuy, result);  
        }
        return result;
    }
}
