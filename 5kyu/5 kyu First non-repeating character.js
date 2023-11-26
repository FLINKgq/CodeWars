// Write a function named first_non_repeating_letter that takes a string 
// input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should 
// return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.



// Функция принимает строку s в качестве аргумента
// The function takes a string s as an argument
function firstNonRepeatingLetter(s) {
    // Цикл for...in перебирает все символы в строке s
    // The for...in loop iterates over all characters in the string s
    for(let i in s) {
      // Создаем регулярное выражение для символа s[i] с флагами "g" (глобальный поиск) и "i" (игнорирование регистра)
      // We create a regular expression for the character s[i] with flags "g" (global search) and "i" (case insensitive)
      // Используем метод match для поиска всех вхождений этого символа в строке s
      // We use the match method to find all occurrences of this character in the string s
      // Если количество вхождений равно 1 (т.е. это неповторяющийся символ), то возвращаем этот символ
      // If the number of occurrences is 1 (i.e., it's a non-repeating character), then we return this character
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    // Если неповторяющихся символов не найдено, возвращаем пустую строку
    // If no non-repeating characters are found, we return an empty string
    return '';
  }

  

//   TESTS
//   const Test = require('@codewars/test-compat');

// describe('Simple Tests', function() {
//   it('should handle simple tests', function() {
//     Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//   });
//   it('should handle empty strings', function() {
//     Test.assertEquals(firstNonRepeatingLetter(''), '');
//   });
// });

// describe('Harder Tests', function() {
//   it('should handle all repeating strings', function() {
//     Test.assertEquals(firstNonRepeatingLetter('abba'), '');
//     Test.assertEquals(firstNonRepeatingLetter('aa'), '');
//   });
//   it('should handle odd characters', function() {
//     Test.assertEquals(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');
//     Test.assertEquals(firstNonRepeatingLetter('hello world, eh?'), 'w');
//   });
//   it('should handle letter cases', function() {
//     Test.assertEquals(firstNonRepeatingLetter('sTreSS'), 'T');
//     Test.assertEquals(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!'), ',');
//   });
// });

// describe('Random Tests', function() {
//   var unique = Test.randomToken()[0],
//       rep = new RegExp(unique, 'g'),
//       s = '', temp;
//   while(s.length < 100) {
//     temp = Test.randomToken().replace(rep, '');
//     s += temp + temp;
//   }
//   s += unique;
//   it('should handle random input', function() {
//     Test.assertEquals(firstNonRepeatingLetter(s), unique, console.log('Expecting <code>\''+unique+'\'</code> on input of <pre>'+s+'</pre>'));
//   });
// });