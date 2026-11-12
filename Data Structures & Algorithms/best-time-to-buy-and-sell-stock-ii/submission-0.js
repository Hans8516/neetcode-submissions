class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length==0) {
            return 0;
        }
        const result = new Array(prices.length).fill(-1)
        const t = this.getProfit(prices, result, 0);
        // console.log(result);
        return t;
    }

    getProfit(prices, result, index) {
        if(index >= prices.length-1) return 0;
        if(result[index]>-1) return result[index];
        result[index] = Math.max(-1, this.getProfit(prices, result, index+1));
        for(let i= index; i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++) {
                if(prices[j]>prices[i]) {
                    result[i]=Math.max(result[i], 
                    this.getProfit(prices, result, j+1) + prices[j]-prices[i])
                }
            }
        }
        return result[index]
    }
}
