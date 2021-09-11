function firstUniqChar(s: string): number {
    const map = {};
    let result = -1;
    for (let i=0;i<s.length;i++) {
        if (map[s[i]]) {
            map[s[i]] = map[s[i]]+1;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i=0;i<s.length;i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    
    return result;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
 console.log(firstUniqChar("dddccdbba"));