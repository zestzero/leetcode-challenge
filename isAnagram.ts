function isAnagram(s: string, t: string): boolean {
    if (s.length === t.length) {
        const sMap = {};
        const tMap = {};
        for (let i=0;i<s.length;i++) {
            if (sMap[s[i]]) sMap[s[i]] = sMap[s[i]] + 1;
            else sMap[s[i]] = 1;

            if (tMap[t[i]]) tMap[t[i]] = tMap[t[i]] + 1;
            else tMap[t[i]] = 1;
        }
        let result = true;
        for (let i=0;i<s.length;i++) {
            result = result && sMap[s[i]] === tMap[s[i]];
        }
        return result;
    }
    return false;
};

const s = "anagram", t = "nagaram"
console.log(isAnagram(s,t));

const s = "rat", t = "car"
console.log(isAnagram(s,t));