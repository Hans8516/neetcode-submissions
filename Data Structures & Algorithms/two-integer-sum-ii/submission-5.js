class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start=0, end=numbers.length-1;
        let result = [];
        while(start<end) {
            let sum = numbers[start] + numbers[end];
            if(sum==target) {
                result.push(start+1);
                result.push(end+1);
                return result;
            } else if(sum<target) {
                start++;
            } else {
                end--;
            }
        }
        return result;
    }
}
