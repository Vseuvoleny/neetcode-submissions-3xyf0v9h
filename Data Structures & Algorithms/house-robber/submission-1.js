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
        // dp[2] = Math.max(nums[i-1],nums[i-2] +nums[i] )

        for (let n = 2;n<nums.length; n++) {
            dp[n] = Math.max(dp[n-1],dp[n-2] + nums[n])
        }
        console.log(dp)
        return Math.max(...dp)
    }
}


//почему формула такая Math.max(nums[i-1],nums[i-2] +nums[i] )?
// вот массив [1,2,3,4]
// Допустим грабим дом 3 (который под индексом 2) 

// dp[0]=nums[0]
// dp[1]=Math.max(nums[0],nums[1])
// dp[2] = Math.max(nums[1], nums[2])