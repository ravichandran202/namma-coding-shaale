module.exports = {
    title: 'Square of Number',
    difficulty: 'easy',
    acceptance: '89.5%',
  
    description: `
      <p>Write a function <code>square_of_number(num)</code> that returns the square of the input number.</p>
      <p>This is a basic problem to test your understanding of function implementation and arithmetic operations.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def square_of_number(num):</pre>
      <pre><b>Java:</b> public static int squareOfNumber(int num)</pre>
      <pre><b>JavaScript:</b> function squareOfNumber(num)</pre>
      <pre><b>C++:</b> int squareOfNumber(int num)</pre>
    `,
  
    examples: `
      <h3>Example 1</h3>
      <pre>Input: num = 2
  Output: 4</pre>
      
      <h3>Example 2</h3>
      <pre>Input: num = 3
  Output: 9</pre>
    `,
  
    constraints: `
      <ul>
        <li>-2<sup>31</sup> ≤ num ≤ 2<sup>31</sup> - 1</li>
        <li>The square of num will not exceed 32-bit integer range.</li>
      </ul>
    `,
  
    followUp: 'Can you implement this without using the ** operator or Math.pow()?',
  
    testCases: [
      { id: 1, input: [1], expected: 1 },
      { id: 2, input: [2], expected: 4 },
      { id: 3, input: [3], expected: 9 },
      { id: 4, input: [4], expected: 16 },
      { id: 5, input: [5], expected: 25 },
      { id: 6, input: [6], expected: 36 },
      { id: 7, input: [-7], expected: 49 },
      { id: 8, input: [0], expected: 0 },
      { id: 9, input: [-9], expected: 81 },
      { id: 10, input: [10], expected: 100 }
    ],
  
    templates: {
      python: `def square_of_number(num):\n    return num * num`,
      java: `public class Main {\n  public static int squareOfNumber(int num) {\n    return num * num;\n  }\n  \n  public static void main(String[] args) {\n    // Test cases will be added here\n  }\n}`,
      javascript: `function squareOfNumber(num) {\n  return num * num;\n}`,
      "c++": `#include <iostream>\n\nint squareOfNumber(int num) {\n  return num * num;\n}\n\nint main() {\n  // Test cases will be added here\n  return 0;\n}`
    },
  
    wrapCode: function(lang, userCode, input) {
      switch(lang) {
        case 'python':
          return `${userCode}\nprint(square_of_number(${input[0]}))`;
        case 'java':
          return userCode.replace('// Test cases will be added here',
            `System.out.println(squareOfNumber(${input[0]}));`);
        case 'javascript':
          return `${userCode}\nconsole.log(squareOfNumber(${input[0]}));`;
        case 'c++':
          return userCode.replace('// Test cases will be added here',
            `std::cout << squareOfNumber(${input[0]}) << std::endl;`);
        default:
          return userCode;
      }
    }
  };
  