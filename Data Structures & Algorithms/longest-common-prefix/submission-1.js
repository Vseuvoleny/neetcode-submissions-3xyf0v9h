class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = '';
        let isFlag = false;
        let counter = 0;

        while (!isFlag){
            const subresult = strs[0][counter]
            if (subresult !== undefined){
            const isEveryEqual =  strs.every((s)=>s[counter]===subresult)
            console.log({isEveryEqual})
            if (isEveryEqual){
                result+=subresult
            } else {
                return result
            }
            } else {
                return result
            }
        
            counter++
        }
        return result
    }
}


// ["bat","bag","bank","band"]
// 1 итерация
// result = 'b'
// 