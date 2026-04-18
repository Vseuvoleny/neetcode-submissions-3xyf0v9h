class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {

        let left = 1;
        let right = 1;
        while (right<nums.length){
            const elem = nums[right];
            const prev = nums[right-1]
            if ( prev !== elem){
                nums[left] = nums[right]
                left++
            }
            right++
        }
        return left
    }
}


// [1,1,2,3,4]
// 1 итерация
// 