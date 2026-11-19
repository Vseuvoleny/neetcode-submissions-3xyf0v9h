class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result = 0,
            currentSum = 0;
        const prefixMap = new Map();
        prefixMap.set(0,1);
        for (const num of nums){
            currentSum += num;
            const diff = currentSum - k
            result += prefixMap.get(diff) || 0
            prefixMap.set(currentSum,(prefixMap.get(currentSum) ?? 0)+1)
        }
        // [2,-1,1,2], k = 2
        // num = 2
        // curSum = n + 2 // curSum = 2
        // diff = n - curSum // 0
        // prefixMap
        return result
    }
}
