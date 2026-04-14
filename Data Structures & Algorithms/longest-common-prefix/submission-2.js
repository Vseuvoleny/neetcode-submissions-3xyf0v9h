class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = '';
        let counter = 0;

        while (true){
            const subresult = strs[0][counter]
            if (subresult === undefined){
                return result
            } 
               const isEveryEqual =  strs.every((s)=>s[counter]===subresult)
            if (isEveryEqual){
                result+=subresult
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