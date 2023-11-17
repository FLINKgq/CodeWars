// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a,b) { 
  const BigNumber = require('bignumber.js');

let x = new BigNumber(a); //Using BigNumber instead of BigInt.
let y = new BigNumber(b); // Использую BigNumber вместо BigInt 
let z = new BigNumber(x.plus(y));
  
  
return z.toFixed(); //Using toFixed() to represent the number without the use of scientific notation.
                    //Использую toFixed() чтобы число представлялось  без использования научной нотации
                    //(Без e+10 и т.д)
}


// Sample Tests

// describe("Add two numbers", function(){
//     it("should pass basic tests", function() {
//       Test.assertEquals(add("1", "1"), "2");
//       Test.assertEquals(add("123", "456"), "579");
//       Test.assertEquals(add("888", "222"), "1110");
//       Test.assertEquals(add("1372", "69"), "1441");
//       Test.assertEquals(add("12", "456"), "468");
//       Test.assertEquals(add("101", "100"), "201");
//       Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//     });
//   });