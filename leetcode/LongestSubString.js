
// This code solves question 3 on leetocde.
// Question :  3. Given a string s, find the length of the longest substring without repeating characters.



// I iterated through the string - for each iteration I checked to see if that letter/index was added to the set.
// If the set did not contain that letter I added to it.
// If the set contained the letter I deleted the repeated letter and re-started my count.


var lengthOfLongestSubstring = function(s) {
    let set = new Set()
   let leftIndex = 0;
   let rightIndex = 0;
   let maxCount = 0;


   while (rightIndex < s.length) {
     let rightLetter = s[rightIndex]

    if (!set.has(rightLetter)) {
      set.add(rightLetter)
      maxCount = Math.max(maxCount, set.size)
        rightIndex ++

    } else {
      set.delete(s[leftIndex])
      leftIndex ++


    }

   }

   return maxCount

};
