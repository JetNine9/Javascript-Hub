// leetcode solution for majorityElement # 169

var majorityElement = function(nums) {

    let count = 1;
    let length = nums.length / 2;

    let sortedNums = nums.sort((a,b) => a-b);
    let value = sortedNums.shift();



    for (let num of sortedNums) {

        if (count > length) {
            return value;
        }

        if (num === value) {
            count ++;
        } else {
            count = 1;
            value = num;
        }

    }

    return value;
};
