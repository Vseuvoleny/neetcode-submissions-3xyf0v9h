class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
 characterReplacement (s, k) {
    const map = new Map();
    let result = 0;
    let left = 0;
    let maxCount = 0;  // нужно хранить максимальную частоту
    
    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        // увеличиваем счётчик (ваша ошибка была здесь)
        map.set(rightChar, (map.get(rightChar) || 0) + 1);
        
        // обновляем максимальную частоту
        maxCount = Math.max(maxCount, map.get(rightChar));
        
        // проверяем, нужно ли сдвигать окно
        if ((right - left + 1) - maxCount > k) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    return result;
};
}
