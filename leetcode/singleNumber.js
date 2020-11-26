// leetcode proble  136  Solutions

// First solution
var singleNumber = function(nums) {

    let obj = {};


    if (nums.length === 1) {
        return nums[0]
    }

    for (let num of nums) {
        if (obj[num] === undefined) {
            obj[num] = 1;
        } else {
            obj[num] += 1
            delete obj[num]
        }
    }

    return Object.keys(obj)[0]
};

// tad bit better solution

var singleNumber = function(nums) {

    let x = nums.sort(function(a, b){return b-a});

     for (let i = 0; i < nums.length; i += 2) {

         if (x[i] !== x[i + 1]) {
             return x[i]
         }
     }

 };
