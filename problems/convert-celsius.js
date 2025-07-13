module.exports = {
    title: 'Convert Celsius to Fahrenheit',
    difficulty: 'easy',
    acceptance: '88.4%',
  
    description: `
      <p>Write a function that converts temperature from Celsius to Fahrenheit.</p>
      <p><b>Formula:</b> F = C × 9/5 + 32</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def convert_celsius(c):</pre>
      <pre><b>Java:</b> public static double convertCelsius(double c)</pre>
      <pre><b>JavaScript:</b> function convertCelsius(c)</pre>
      <pre><b>C++:</b> double convertCelsius(double c)</pre>
    `,
  
    examples: `
      <pre>Input: 0\nOutput: 32.0</pre>
      <pre>Input: 100\nOutput: 212.0</pre>
    `,
  
    constraints: `<ul><li>Accepts a float/double and returns a float/double</li></ul>`,
  
    testCases: [
      { id: 1, input: [0], expected: "32.0" },
      { id: 2, input: [100], expected: "212.0" },
      { id: 3, input: [-40], expected: "-40.0" },
      { id: 4, input: [37], expected: "98.6" },
      { id: 5, input: [20], expected: "68.0" }
    ],
  
    templates: {
      python: `def convert_celsius(c):\n    # write your code here\n    pass`,
      java: `public static double convertCelsius(double c) {\n    // write your code here\n    return 0.0;\n}`,
      javascript: `function convertCelsius(c) {\n    // write your code here\n    return 0;\n}`,
      "c++": `double convertCelsius(double c) {\n    // write your code here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(convert_celsius(${i}))`;
        case 'java': return `${code}\npublic static void main(String[] args) {\n    System.out.println(convertCelsius(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(convertCelsius(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << convertCelsius(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  