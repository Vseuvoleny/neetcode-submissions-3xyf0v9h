class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length){
            return false
        }

        let s1Count = Array.from({length: 26}).fill(0)
        let s2Count = Array.from({length: 26}).fill(0)


        let l = 0;
        for (let i = 0;i<s1.length;i++){
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }
        let matches = 0;
        let count = 0;
        while (count < 26){
            if (s1Count[count]===s2Count[count]){
                matches++
            }
            count++
        }
for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true;
            }

            let index = s2.charCodeAt(r) - 97;
            s2Count[index]++;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            s2Count[index]--;
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }
            l++;
        }
        return matches === 26;


    }
}
