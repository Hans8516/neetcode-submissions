class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const signature = {};
        for(const str of strs) {
            let anagram_sign = new Array(26).fill(0);
            for(let i =0;i<str.length;i++) {
                const letter = str[i].toLowerCase().charCodeAt(0)-97;
                anagram_sign[letter]++;
            }

            if(anagram_sign in signature) {
                signature[anagram_sign].push(str); 
            } else {
                signature[anagram_sign] = [str];
            }
        }
        const result = [];

        Object.values(signature).forEach(value => {
            result.push(value)
        })
        return result;
    }
}
