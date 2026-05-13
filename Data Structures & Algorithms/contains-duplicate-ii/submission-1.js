class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map();
        for (let i = 0;i<=nums.length-1;i++){
            const el = nums[i];
            if (map.has(el)){
                // map.set(el,[...map.get(el),i])
                if (k >= i-map.get(el)){
                    return true
                }
            } 
                map.set(el,i)   

        }
        console.log(map)
        return false
    }
}
