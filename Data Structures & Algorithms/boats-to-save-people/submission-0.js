class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b);
        let l=0, r=people.length-1;
        let count=0
        while(l<=r){
            if(people[l]+people[r] > limit){
                count++;
                r--;
            } else {
                l++;
                r--;
                count++;
            }
        }
        return count;
    }
}
