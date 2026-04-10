class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (const str of strs){
            const list = new Array(26).fill(0);
           
            for (let char of str){
                list[char.charCodeAt(0) - 'a'.charCodeAt(0)]+=1
            }
            //  console.log(list)
             const key = list.join(',')
             console.log(key)
             if (!result[key]){
                result[key] = []
             }
             result[key].push(str)
        }
        return Object.values(result)
    }
}
