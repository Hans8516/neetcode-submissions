class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if(!nums.length) return 0;
        nums = nums.sort();
        let slow=0,fast = nums.length;
        while(true){
            if(nums[slow]!==val) {
                slow++;
            }
            if(nums[fast-1]!=val) {
                fast--;
            }
            if(fast<=slow){
                return nums.length;
            }
            if(nums[fast-1]===val && nums[slow]===val){
                while(fast<nums.length){
                    nums[slow]=nums[fast]
                    slow++;
                    fast++;
                }
                break;      
            }
        }

        return slow
    }
}
