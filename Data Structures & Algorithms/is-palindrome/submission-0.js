class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;
        while (left<right){
            if (!s[left] ||!/[a-z0-9]/i.test(s[left])){
                left++
                continue
            } 
            if (!s[right] || !/[a-z0-9]/i.test(s[right])){
                right--
                continue
            }
            if (s[left].toLowerCase()!==s[right].toLowerCase()){
                return false
            } else {
                left++
                right--
            }
        }
        return true
    }
}
