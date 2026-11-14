class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
        longestConsecutive(nums) {
        const mp = {};
        let res = 0;

        for (let num of nums) {
            if (!mp[num]) {
                mp[num] = 1 + (mp[num-1]||0) + (mp[num+1]||0);
                if(mp[num-mp[num-1]]) {
                    mp[num-mp[num-1]] = mp[num]
                }
                if(mp[num+mp[num+1]]) {
                    mp[num+mp[num+1]] = mp[num]
                } 
                res = Math.max(res, mp[num]);
            }
        }
        // console.log(mp)
        return res;
    }
}
