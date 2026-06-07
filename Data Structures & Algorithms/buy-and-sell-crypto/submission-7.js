class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let result = 0;
        while(r<prices.length){
            if (prices[l] < prices[r]){
                  result = Math.max(result,prices[r]-prices[l])
            } else {
                    l=r
            }
            r++

        }
        return result
    }
}
