class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const key = s[i].toLowerCase();
    map.set(key, (map.get(key) ?? 0) + 1);
  }

   for (let i = 0; i < t.length; i++) {
    const key = t[i].toLowerCase();
    map.set(key, (map.get(key) ?? 0) - 1);
    if (map.get(key)===0){
        map.delete(key)
    }
  }

  console.log(  map,map.size)
      return map.size===0
    }

}