class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            if (s.length !==t.length){
                return false
            }
        const arr = new Array(26).fill(0);
        // console.log(arr)÷
        for (let i =0;i<s.length;i++){
     
            arr[s.charCodeAt(i) - 'a'.charCodeAt()]++
            arr[t.charCodeAt(i) - 'a'.charCodeAt()]--
        
        }
        return arr.filter(Boolean).length === 0
        console.log(arr)
        return true

    }
}