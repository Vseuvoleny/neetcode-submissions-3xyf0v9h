class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = {};
        const resultArry = [];
        let counter = 0;

        while(counter < nums.length){
            let res = 1
            for(let i = 0; i<nums.length; i++){
                const element = nums[i];
                if (counter !== i){
                    res *= element;
                }
             
            }
            resultArry.push(res)
            counter++
        }
        return resultArry
    }



}
