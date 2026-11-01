class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const alphabets = new Array(26).fill(0);
        for (const letter of s) {
            const letterPlacement = letter.toLowerCase().charCodeAt(0)-97;
            alphabets[letterPlacement]++;
        }
        for (const letter of t) {
            const letterPlacement = letter.toLowerCase().charCodeAt(0)-97;
            alphabets[letterPlacement]--;
        }

        for(let i=0; i<26;i++) {
            if(alphabets[i]!==0) {
                return false;
            }
        }
        return true;

    }
}
