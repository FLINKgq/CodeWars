// Create a function that takes a Roman numeral as its argument and returns its 
// value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the 
// number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is
//  rendered "MMVIII" (2000 = MM, 8 = VIII).
//  The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.





// Функция solution принимает строку roman, представляющую римское число, и возвращает его числовое значение.
// The solution function takes a string roman representing a Roman numeral and returns its numerical value.
function solution(roman) {
  
    // Объект romanNum содержит соответствие римских цифр и их числовых значений.
    // The romanNum object contains the mapping of Roman numerals to their numerical values.
    const romanNum = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    // Преобразуем строку roman в массив символов.
    // Convert the roman string into an array of characters.
    let arrnew = roman.split("");
    let count = 0;
    
    // Используем цикл for для обхода каждого символа в массиве.
    // Use a for loop to iterate through each character in the array.
    for(let i = 0; i < arrnew.length; i++) {
      // Если значение текущей римской цифры меньше значения следующей,
      // вычитаем его из общего счетчика.
      // If the value of the current Roman numeral is less than the value of the next one,
      // subtract it from the total count.
      if(romanNum[arrnew[i]] < romanNum[arrnew[i + 1]]) {
        count -= romanNum[arrnew[i]];
      }
      // В противном случае, прибавляем значение текущей римской цифры к общему счетчику.
      // Otherwise, add the value of the current Roman numeral to the total count.
      else {
        count += romanNum[arrnew[i]];
      }
    }
    
    // Выводим результат в консоль (необязательно).
    // Output the result to the console (optional).
    console.log(count);
    
    // Возвращаем числовое значение римского числа.
    // Return the numerical value of the Roman numeral.
    return count;
  }





//   Tests
//   const strictEqual = require('chai').assert.strictEqual;

// function doTest (romanString, expected) {
// 	const actual = solution(romanString);
// 	strictEqual(actual, expected, `for roman number ${romanString}`);
// }

// describe("Tests", () => {
// 	it("sample tests", () => {
// 		doTest('XXI', 21);
// 		doTest('I', 1);
// 		doTest('IV', 4);
// 		doTest('MMVIII', 2008);
// 		doTest('MDCLXVI', 1666);
// 	});
// });