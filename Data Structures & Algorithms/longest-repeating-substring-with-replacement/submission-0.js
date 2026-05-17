class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
   characterReplacement(s, k) {
    const charCount = new Array(26).fill(0); // счётчики для A-Z
    let maxCount = 0;  // максимальная частота любого символа в окне
    let left = 0;
    let result = 0;
    
    for (let right = 0; right < s.length; right++) {
        // добавляем текущий символ в окно
        const charIndex = s.charCodeAt(right) - 65; // 'A' = 65
        charCount[charIndex]++;
        
        // обновляем максимальную частоту
        maxCount = Math.max(maxCount, charCount[charIndex]);
        
        // если нужно заменить больше k символов - сжимаем окно
        while ((right - left + 1) - maxCount > k) {
            // удаляем левый символ из окна
            const leftCharIndex = s.charCodeAt(left) - 65;
            charCount[leftCharIndex]--;
            left++;
        }
        
        // обновляем результат
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};
}
