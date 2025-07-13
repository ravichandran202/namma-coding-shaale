module.exports = {
    title: 'Check Even or Odd',
    difficulty: 'easy',
    acceptance: '91.9%',
  
    description: `
      <p>Write a function that returns whether a number is even or odd.</p>
      <p>Return the string <code>"Even"</code> or <code>"Odd"</code>.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def check_even(num):</pre>
      <pre><b>Java:</b> public static String checkEven(int num)</pre>
      <pre><b>JavaScript:</b> function checkEven(num)</pre>
      <pre><b>C++:</b> string checkEven(int num)</pre>
    `,
  
    examples: `
      <pre>Input: 7\nOutput: Odd</pre>
      <pre>Input: 4\nOutput: Even</pre>
    `,
  
    constraints: `<ul><li>-10^6 ≤ num ≤ 10^6</li></ul>`,
  
    testCases: [
      { id: 1, input: [0], expected: "Even" },
      { id: 2, input: [1], expected: "Odd" },
      { id: 3, input: [12], expected: "Even" },
      { id: 4, input: [-9], expected: "Odd" },
      { id: 5, input: [-20], expected: "Even" }
    ],
  
    templates: {
      python: `def check_even(num):\n    # write your code here\n    pass`,
      java: `public static String checkEven(int num) {\n    // write your code here\n    return "";\n}`,
      javascript: `function checkEven(num) {\n    // write your code here\n    return "";\n}`,
      "c++": `string checkEven(int num) {\n    // write your code here\n    return "";\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(check_even(${i}))`;
        case 'java': return `${code}\npublic static void main(String[] args) {\n    System.out.println(checkEven(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(checkEven(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << checkEven(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  