class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

       isPalindrome(s) {
        let left = 0,
            right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    validPalindrome(s) {
        let right = s.length-1;
        let left = 0;
        let result = true;
        let errorMark = false
        while (left<right){
            const leftElem = s[left]
            const rightElem = s[right]
      
            console.log({leftElem,rightElem,left,right})
            if (leftElem !==rightElem){
               return this.isPalindrome(s.slice(0, left) + s.slice(left + 1)) ||
                    this.isPalindrome(s.slice(0, right) + s.slice(right + 1))
            }
            left++
            right--
        }

        return result
    }
}
