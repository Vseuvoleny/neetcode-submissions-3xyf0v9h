class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let s of strs){
            console.log(s.split('').sort())
            const sor = s.split('').sort().join('')
            if (!map.has(sor)){
                map.set(sor,[])
            }
            const arr = map.get(sor);
            arr.push(s)
            map.set(arr)
        }
      console.log(map)
        return Array.from(map.values().filter(Boolean))
    }
}
