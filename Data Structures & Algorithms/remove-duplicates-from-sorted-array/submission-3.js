class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 1;
        for (let right = 1;right<nums.length;right++){
            const elem = nums[right];
            const prev = nums[right-1]
            if ( prev !== elem){
                nums[left] = nums[right]
                left++
            }
        }
        return left
    }
}


// [1,1,2,3,4]
// 1 итерация
// 