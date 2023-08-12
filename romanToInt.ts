const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

function romanToInt(s: string): number {
    let sum = 0;
    for(let counter = 0; counter < s.length; counter++) {
        if (counter > 0 && values[s[counter - 1]] < values[s[counter]]) {
            sum += values[s[counter]] - (values[s[counter - 1]] * 2);
        } else {
            sum += values[s[counter]];
        }
    }
    return sum;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994