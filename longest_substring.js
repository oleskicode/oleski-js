/* Find the Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Input: s1 = "abcabcbb"
Output: The answer is "abc", with the length of 3.

Input: s2 = "bbbbb"
Output: The answer is "b", with the length of 1. */

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "1234123451234";

function findLongestSubstring(str) {
  console.log("Input: " + str);
  const arrayStr = str.split("");
  console.log(arrayStr);
  let biggestSubstring = "";
  let currentSubstring = "";
  arrayStr.forEach((char) => {
    // check if char is in unique set
    if (currentSubstring.includes(char)) {
      // "abc".includes("a"))
      if (currentSubstring.length > biggestSubstring.length) {
        biggestSubstring = currentSubstring;
      }
    } else {
      currentSubstring = currentSubstring + char;
    }
  });

  return `The answer is: ${biggestSubstring}, with the length of ${biggestSubstring.length}.`;
}

console.log(findLongestSubstring(s1));
console.log(findLongestSubstring(s2));
console.log(findLongestSubstring(s3));
