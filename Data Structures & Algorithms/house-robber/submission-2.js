class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1){
            return nums[0]
        }
        // [1,1,3,3]
        // [1=>грабим,1,3=>грабим,3]
        // [1,1=>грабим,3,3=>грабим]
        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);

        for (let n = 2;n<nums.length; n++) {
            // либо мы не грабим дом и грабим следующий (это dp[n-1])
            // либо мы грабим дом и грабим через (nums[n] текущий и грабим через один назад)
            dp[n] = Math.max(dp[n-1],dp[n-2] + nums[n])
        }

        return dp[nums.length - 1]
    }
}

