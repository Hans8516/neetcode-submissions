class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let sum = 0;
        const prefixSum=nums.map((value, index)=>sum+=nums[index]);
        let existingMap={0:1};
        let result = 0;
        for(let num of prefixSum) {
            const existingCount = num - k;
            if(existingCount in existingMap) {
                result += existingMap[existingCount];
            }
            existingMap[num] = existingMap[num]? existingMap[num] + 1 : 1;
        }
        return result;
    }
}
