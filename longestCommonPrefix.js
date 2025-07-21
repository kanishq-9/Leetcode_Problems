// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let arr1stData = [];
  let eachValue = "";
  //   console.log(strs);
  [...strs[0]].map((stringData) => {
    eachValue += stringData;
    arr1stData.push(eachValue);
  });
  //   console.log(arr1stData);
  let minValue = Infinity;
  strs.map((value) => {
    let increament = 0;
    arr1stData.map((data) => {
      if (value.startsWith(data)) {
        increament++;
      } else {
        minValue = minValue > increament ? increament : minValue;
        return;
      }
    });
  });
  return strs[0].substring(0, minValue);
  //less time code:
  //   if (strs.length <= 0) return "";

  //   let prefix = strs[0];

  //   for (let i = 0; i < strs.length; i++) {
  //     while (!strs[i].startsWith(prefix)) {
  //         prefix = prefix.slice(0, -1);
  //         console.log(prefix);
  //         }
  //   }

  //   return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flight", "flow"]));
