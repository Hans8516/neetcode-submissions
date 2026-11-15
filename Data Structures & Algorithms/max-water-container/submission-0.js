class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start=0, end=heights.length-1;
        let leftBar = heights[start], rightBar=heights[end], width=end-start;
        let result = 0;
        while(start<end) {
            result = Math.max(result, Math.min(leftBar,rightBar)*width);
            // console.log(result, leftBar, rightBar, width);
            if(leftBar<rightBar) {
                // leftbar is limiting
                start++;
                width=end-start;
            } else {
                end--;
                width=end-start;
            }

            if(leftBar<heights[start]){
                leftBar = heights[start]
            }
            if(rightBar<heights[end]) {
                rightBar=heights[end]
            }
        }
        return result;
    }
}
