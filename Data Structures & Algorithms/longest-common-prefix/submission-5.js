class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    // longestCommonPrefix(strs) {
    //     let result = '';
    //     let counter = 0;

    //     while (true){
    //         const subresult = strs[0][counter]
    //         if (subresult === undefined){
    //             return result
    //         } 
    //         const isEveryEqual =  strs.every((s)=>s[counter]===subresult)
    //         if (isEveryEqual){
    //             result+=subresult
    //         } else {
    //             return result
    //         }
    //         counter++
    //     }
    // }



      longestCommonPrefix(strs) {
        let result = '';
        const minLength = Math.min(...strs.map((e)=>e.length))
        // console.log(minLength)
        let left = 0;
        let right = minLength

    function commonPrefix(mid){
        const prefix = strs[0].slice(0,mid);
        // console.log({prefix})
        return strs.every((elem)=>elem.startsWith(prefix))
    }


        while (left<=right){
            const mid = Math.floor((right+left)/2);
            if (commonPrefix(mid)){
                left = mid+1
            } else {
                right = mid -1
            }
            
        }
       return strs[0].slice(0, (left + right) / 2);
    }
}

