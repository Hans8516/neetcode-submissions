class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let [num1,num2] = this.getPossibleNumbers(nums);
        const countRequired = Math.floor(nums.length/3)+1;
        let freq1=0, freq2=0, result=[];
        for(const num of nums){
            if(num==num1) freq1++;
            if(num==num2) freq2++;
        }
        if(freq1>=countRequired) result.push(num1);
        if(freq2>=countRequired && num2!==num1) result.push(num2);
        return result;
    }

    getPossibleNumbers(nums) {
        let num1=0,num2=0,count1=0,count2=0;
        for(const num of nums){
            if(count1==0){
                num1=num;
                count1=1;
            } else if(num1==num) {
                count1++;
            } else if (count2==0){
                num2=num;
                count2=1;
            } else if(num2==num) {
                count2++;
            } else {
                count1--;
                count2--;
            }
        }
        return [num1, num2];
    }
}
