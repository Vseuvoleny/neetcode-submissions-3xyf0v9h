class Solution {

    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

    let count = digits.length-1;
    while(count >= 0){
        digits[count] +=1 
        if (digits[count] > 9){
            digits[count] = 0
            if (count === 0){
                digits.unshift(1)
                return digits
            }
        } else {
            return digits
        }
        count--
    }

    }
}
