class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums=nums.sort((a,b) => a-b);
        if(!nums.length) return 0;
        let result =1, count=1;
        for(let i =1;i<nums.length;i++){
            if(nums[i]==nums[i-1]+1){
                result++;
            } else if (nums[i]>nums[i-1]+1) {
                count=Math.max(result, count)
                result=1;
            }
        }
        count=Math.max(result, count)
        return count;
    }
}
