// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:
function balancedParenthesis(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
    } else if (string[i] === ")") {
      count--;
    }
  }
  return count === 0;
}
console.log(balancedParenthesis("Hey...there are no parens here!"));
