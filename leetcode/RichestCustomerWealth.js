// leetcode 1672 my solution

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

// EXAMPLE 1
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

var maximumWealth = function(accounts) {

    let x = accounts.map((account) => {
        return account.reduce((a, b) => a + b, 0)
    })

    return Math.max(...x)

};
