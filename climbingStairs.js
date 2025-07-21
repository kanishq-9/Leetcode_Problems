/*
You are climbing a staircase.It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const readLine = require("readline");
const r1 = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let noOfOutput = 0;
var climbStairs = function (n) {
  if (n === 0) {
    noOfOutput++;
    return;
  } else if (n < 0) {
    return;
  } else {
    climbStairs(n - 1);
    climbStairs(n - 2);
  }
  return noOfOutput;
};
r1.question("Enter no of stairs: ", (stairs) => {
  console.log(climbStairs(stairs));
  r1.close;
  process.exit(0);
});

/*
or var climbStairs = function (n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    }
    else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};

OR


using memoization

var climbStairs = function(n, memo = {}) {
    // Base cases
    if (n === 0) return 1; // One valid way to stay at the top
    if (n < 0) return 0;   // No way to go past the top

    // Check if result is already computed
    if (memo[n]) return memo[n];

    // Compute and store in memo
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

*/
