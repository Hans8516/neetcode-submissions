class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const alphabets = new Array(26).fill(0);
        if(s.length !== t.length) return false;

        for (let i =0;i<s.length;i++) {
            const letterPlacement_s = s[i].toLowerCase().charCodeAt(0)-97;
            const letterPlacement_t = t[i].toLowerCase().charCodeAt(0)-97;
            alphabets[letterPlacement_s]++;
            alphabets[letterPlacement_t]--;
        }
        for(let i=0; i<26;i++) {
            if(alphabets[i]!==0) {
                return false;
            }
        }
        return true;

    }
}
