class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
               let stack = [];
        let maxLen = 0; // 1. Заведи переменную для максимума

        for (let i = 0;i<s.length;i++){
            const elem = s[i];

            while (stack.includes(elem)) { 
                stack.shift(); 
            } 
               
                stack.push(elem);
            // 3. Обновляем максимум на КАЖДОМ шаге
            // Длина текущей подстроки равна длине стека
            maxLen = Math.max(maxLen, stack.length);
        }
        return maxLen
    }
}
