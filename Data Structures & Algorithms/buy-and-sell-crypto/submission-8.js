class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

    let l = 0;
    let result = 0;

    for (let r =0;r<prices.length;r++){
        if (prices[l]> prices[r]){
            l = r
        }
        result = Math.max(result,prices[r]-prices[l])
    }
    return result
    }
}
