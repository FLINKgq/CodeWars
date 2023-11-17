// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.




function zeros(n) {
    let count = 0;
  
    // Используем цикл для итеративного умножения i на 5 и подсчета множителей 5 в n
    // Поиск сколько раз n нацело делится на 5 т.к если число заканчивается на 0, то оно делится на 5 
    for (let i = 5; n / i >= 1; i *= 5) {
      
      // Добавляем к count количество полных делений n на i (5)
      count += Math.floor(n / i);
    }
  
    // Возвращаем общее количество нулей
    return count;
  }


// Проверка
//   const Test = require('@codewars/test-compat');

// describe("Sample Tests", function() {
//   it("Should pass sample tests", function() {
//     Test.assertEquals(zeros(0), 0, "Testing with n = 0")
//     Test.assertEquals(zeros(5), 1, "Testing with n = 5")
//     Test.assertEquals(zeros(6), 1, "Testing with n = 6")
//     Test.assertEquals(zeros(30), 7, "Testing with n = 30")
//   });
// });