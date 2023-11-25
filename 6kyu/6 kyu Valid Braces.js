// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(braces) {
    const regex = /\(\)|\[\]|\{\}/g;
    while (braces.match(regex)) {
      braces = braces.replaceAll(regex, '');
    }
    if (braces === '') {return true;} else {return false;}
  }


//   Sample Tests
  
//   const strictEqual = require('chai').assert.strictEqual;

//   function doTest (braces, expected) {
//       const actual = validBraces(braces);
//       strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
//   }
  
//   describe("Tests suite", function() {
//     it("sample tests", function() {
//       doTest("()))", false);
//       doTest("()", true);
//       doTest("[]", true);
//       doTest("{}", true);
//       doTest("(){}[]", true);
//       doTest("([{}])", true);
//       doTest("(}", false);
//       doTest("[(])", false);
//       doTest("({})[({})]", true);
//       doTest("(})", false);
//       doTest("(({{[[]]}}))", true);
//       doTest("{}({})[]", true);
//       doTest(")(}{][", false);
//       doTest("())({}}{()][][", false);
//       doTest("(((({{", false);
//       doTest("}}]]))}])", false);
//     });
//   });
