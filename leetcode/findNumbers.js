// solution for Leetcode problem 1295 Find even Numbers

var findNumbers = function(nums) {

    let x = nums.filter((num) => {
        let c = num.toString();
        if (c.length % 2 === 0) {
            return num
        }
    })

    return x.length

};
