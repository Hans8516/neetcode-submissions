class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const difference = {};
    for (const [index, num] of nums.entries()) {
        const required_diff = target - num;
        
        // Fix 1: Explicitly check if the key exists in the object
        if (required_diff in difference) { 
            return [difference[required_diff], index]; // Cleaner way to return an array
        } 
        
        // Fix 2: Store the CURRENT number's index, not the required_diff
        difference[num] = index; 
    }
}
}
