class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let loop =0;
        const result = [];
        while(loop < 2){
 for (const elem of nums){
            result.push(elem)
        }
        loop++
        }
       
        return result
    }
}
