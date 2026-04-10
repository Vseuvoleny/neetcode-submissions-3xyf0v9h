class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let profit = 0;
        while (right<prices.length){
            const first = prices[left];
            const second = prices[right];
           
      
            if (first>second){
                left = right
            } else {
                const res = second - first;
                profit = Math.max(profit,res)
            }
                right++
            
        }
        return profit;
    }
}
