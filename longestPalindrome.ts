function longestPalindrome(s: string): number {
    let sDict = {};
    for (let count = 0; count < s.length; count++) {
        sDict[s[count]] = (sDict[s[count]] ?? 0) + 1;
    }

    let result = 0;
    let doesContainOneChar = false;
    for (let key in sDict) {
        if (sDict[key] % 2 === 1) {
            doesContainOneChar = true;
        }
        if (sDict[key] > 1) {
            result += Math.floor(sDict[key] / 2);
        }
    }

    return doesContainOneChar ? (result*2) + 1 : result * 2;
};

// 7
console.log(longestPalindrome("abccccdd"));

// 1
console.log(longestPalindrome("a"));

// 3
console.log(longestPalindrome("ccc"));