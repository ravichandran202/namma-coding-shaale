module.exports = {
    title: 'Convert Kilometers to Miles',
    difficulty: 'easy',
    acceptance: '89.1%',
  
    description: `
      <p>Write a function that converts distance from kilometers to miles.</p>
      <p><b>Formula:</b> miles = km × 0.621371</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def km_to_miles(km):</pre>
      <pre><b>Java:</b> public static double kmToMiles(double km)</pre>
      <pre><b>JavaScript:</b> function kmToMiles(km)</pre>
      <pre><b>C++:</b> double kmToMiles(double km)</pre>
    `,
  
    examples: `
      <pre>Input: 5\nOutput: 3.106855</pre>
    `,
  
    constraints: `
      <ul><li>Return value should maintain at least 6 decimal places</li></ul>
    `,
  
    testCases: [
      { id: 1, input: [1], expected: "0.621371" },
      { id: 2, input: [5], expected: "3.106855" },
      { id: 3, input: [10], expected: "6.21371" },
      { id: 4, input: [0], expected: "0.0" },
      { id: 5, input: [100], expected: "62.1371" }
    ],
  
    templates: {
      python: `def km_to_miles(km):\n    # write your code here\n    pass`,
      java: `public static double kmToMiles(double km) {\n    // write your code here\n    return 0.0;\n}`,
      javascript: `function kmToMiles(km) {\n    // write your code here\n    return 0;\n}`,
      "c++": `double kmToMiles(double km) {\n    // write your code here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(km_to_miles(${i}))`;
        case 'java': return `${code}\npublic static void main(String[] args) {\n    System.out.println(kmToMiles(${i}));\n}`;
        case 'javascript': return `${code}\nconsole.log(kmToMiles(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << kmToMiles(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  