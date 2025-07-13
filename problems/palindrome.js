// palindrome.js
module.exports = {
    title: 'Check Palindrome',
    difficulty: 'medium',
    acceptance: '76.8%',
    
    description: `
      <p>Implement a function that checks if a given string is a palindrome.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>The function should be named <code>is_palindrome</code> (Python) or <code>isPalindrome</code> (Java/JavaScript/C++)</li>
        <li>It should accept one string parameter</li>
        <li>It should return a boolean value</li>
        <li>Ignore case and non-alphanumeric characters</li>
      </ul>
    `,
  
    signatures: `
      <pre><b>Python:</b> def is_palindrome(s):</pre>
      <pre><b>Java:</b> public static boolean isPalindrome(String s)</pre>
      <pre><b>JavaScript:</b> function isPalindrome(s)</pre>
      <pre><b>C++:</b> bool isPalindrome(string s)</pre>
    `,
  
    examples: `
      <h3>Example 1</h3>
      <pre>Input: "A man, a plan, a canal: Panama"
  Output: true</pre>
      
      <h3>Example 2</h3>
      <pre>Input: "race a car"
  Output: false</pre>
    `,
  
    testCases: [
      { id: 1, input: ["A man, a plan, a canal: Panama"], expected: "true" },
      { id: 2, input: ["race a car"], expected: "false" },
      { id: 3, input: [""], expected: "true" }
    ],
  
    templates: {
      python: `def is_palindrome(s):\n    # Write your code here\n`,
      java: `public class Main {\n    public static boolean isPalindrome(String s) {\n        // Write your code here\n    }\n}`,
      javascript: `function isPalindrome(s) {\n    // Write your code here\n}`,
      "c++": `#include <string>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    // Write your code here\n}`
    }
  };