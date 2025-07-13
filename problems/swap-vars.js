module.exports = {
    title: 'Swap Two Variables',
    difficulty: 'easy',
    acceptance: '89.6%',
  
    description: `
      <p>Write a function that swaps two variables and returns them in reverse order.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def swap_vars(a, b):</pre>
      <pre><b>Java:</b> public static int[] swapVars(int a, int b)</pre>
      <pre><b>JavaScript:</b> function swapVars(a, b)</pre>
      <pre><b>C++:</b> pair<int, int> swapVars(int a, int b)</pre>
    `,
  
    examples: `
      <pre>Input: 5, 10\nOutput: 10, 5</pre>
    `,
  
    constraints: `<ul><li>a, b are integers</li></ul>`,
  
    testCases: [
      { id: 1, input: [1, 2], expected: "(2, 1)" },
      { id: 2, input: [-4, 9], expected: "(9, -4)" },
      { id: 3, input: [100, 100], expected: "(100, 100)" },
      { id: 4, input: [0, 7], expected: "(7, 0)" },
      { id: 5, input: [-5, -10], expected: "(-10, -5)" }
    ],
  
    templates: {
      python: `def swap_vars(a, b):\n    # write your code here\n    pass`,
      java: `public static int[] swapVars(int a, int b) {\n    // write your code here\n    return new int[]{0, 0};\n}`,
      javascript: `function swapVars(a, b) {\n    // write your code here\n    return [0, 0];\n}`,
      "c++": `pair<int, int> swapVars(int a, int b) {\n    // write your code here\n    return {0, 0};\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(swap_vars(${i}))`;
        case 'java': return `${code}\npublic static void main(String[] args) {\n    int[] res = swapVars(${i});\n    System.out.println(Arrays.toString(res));\n}`;
        case 'javascript': return `${code}\nconsole.log(swapVars(${i}));`;
        case 'c++': return `#include <iostream>\n#include <utility>\nusing namespace std;\n${code}\nint main() {\n    auto res = swapVars(${i});\n    cout << res.first << " " << res.second << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  