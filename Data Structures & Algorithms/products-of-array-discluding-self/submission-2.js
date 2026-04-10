class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Map();
        const resultArry = [];
        let counter = 0;

        while(counter < nums.length){
            let res = 1
            for(let i = 0; i<nums.length; i++){
                const element = nums[i];
                if (counter !== i){
                    if (result.has(`${res}to${element}`)){
                    const t = result.get(`${res}to${element}`);
                    res = t
                } else {
                    result.set(`${res}to${element}`,res * element)
                    res *= element;
                }
                }
            
  
             
            }
            resultArry.push(res)
            counter++
        }
        return resultArry
    }



}
