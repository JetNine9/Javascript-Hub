// My solution to leetcode problem 1470 shuffle the array.

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Basically you are given nums which is an array and n which is an integer.
// Have to split the array into two pieces, N will be the last index in your first array
// your second array will be the remaining values.
// Write code to grab the first value in the array and put them in your new array.



var shuffle = function(nums, n) {
    let arr = []
    let x = nums.splice(0, n)
    let flip = true;


    while (nums.length > 0 && x.length >= 0) {

      if (flip) {
        let a = x.shift()
        arr.push(a)
        flip = false

      } else {
        let b = nums.shift()
        arr.push(b)
        flip = true

      }

    }
    return arr

  };
