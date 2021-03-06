// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

// sudo code logic
    // while le < ro
    //if nums[l] % 2 === 0 => l++
    //if nums[2] % 2 !== 0 => r--
    // temp = nums[l]; nums[l] = nums[r]; nums[r] =temp
    

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    
    let leftEven = 0
    let rightOdd = nums.length - 1
    while(leftEven < rightOdd) {    
         if(nums[leftEven] % 2 === 0){
            leftEven++
        }else if(nums[rightOdd] % 2 !== 0){
            rightOdd--
        } else if (nums[leftEven] % 2 !== 0 && nums[rightOdd] % 2 === 0){
            let temp = nums[leftEven]
            nums[leftEven] = nums[rightOdd]
            nums[rightOdd] = temp
        }
    }
    return nums

};


    ///


    // Better solution by Devs

    var sortArrayByParity = function(nums) {
        let first = 0;
        let second = nums.length - 1;
        const swap = (a, b) => {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
        }
        
        while(first < second){
            if(nums[first] % 2 !== 0 && nums[second] % 2 === 0){
                swap(first, second);
                first++;
                second--;
            } else if(nums[first] % 2 === 0 && nums[second] % 2 === 0){
                first++;
            } else if(nums[first] % 2 === 0 && nums[second] % 2 !== 0){
                first++;
                second--;
            } else {
                second--;
            }
        }
        return nums;
    }; 