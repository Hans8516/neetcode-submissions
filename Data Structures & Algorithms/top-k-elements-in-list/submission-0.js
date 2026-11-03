class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {};
        for(let num of nums) {
            if(frequency[num]) frequency[num]++;
            else frequency[num] = 1;
        }
        // console.log(frequency);
        let result =[];
        result.push(...Object.keys(frequency).sort((a,b) => frequency[b]-frequency[a]).slice(0,k).map(Number))
        return result
    }
}
