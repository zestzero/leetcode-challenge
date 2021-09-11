function reverseString(s: string[]): void {
    let i = 0, j = s.length-1;
    while(i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    console.log(s);
};

reverseString(["h","e","l","a","o"])
reverseString(["h","e","l","l","o"])
reverseString(["H","a","n","n","a","h"])