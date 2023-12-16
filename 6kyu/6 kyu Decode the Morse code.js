// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

//старое. OLD
decodeMorse = function(morseCode){
    let arrX = morseCode.split("   ");

    let arrY = arrX.map((word) => {
    return word.split(" ");
      
    })

  
  let newarr = arrY.map(function(elem) {
  
  return elem.map((elem) => {
    return MORSE_CODE[elem];
  })
	return elem
    
});
  
    let newarrA = newarr.map(function(elem) {
  return elem.join('')
      
      });
  
  return newarrA.join(' ').trim()
}





//новое. NEW

// Функция decodeMorse принимает строку morseCode, представляющую собой последовательность кода Морзе, и расшифровывает ее.
// The decodeMorse function takes a string morseCode representing a Morse code sequence and decodes it.
decodeMorse = function(morseCode){

    // Внутренняя функция decodeMorseLetter принимает одну букву (символ) в коде Морзе и возвращает соответствующий символ в алфавите.
    // The inner function decodeMorseLetter takes one letter (symbol) in Morse code and returns the corresponding character in the alphabet.
    function decodeMorseLetter(letter) {
      return MORSE_CODE[letter];
    }
  
    // Внутренняя функция decodeMorseWord принимает слово в коде Морзе и возвращает расшифрованное слово, используя функцию decodeMorseLetter.
    // The inner function decodeMorseWord takes a word in Morse code and returns the decoded word using the decodeMorseLetter function.
    function decodeMorseWord(word) {
      return word.split(' ').map(decodeMorseLetter).join('');
    }
  
    // Возвращает строку, полученную расшифровкой каждого слова в morseCode и объединением их пробелами.
    // Returns a string obtained by decoding each word in morseCode and joining them with spaces.
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
  }
  



  //Tests

const { assert } = require('chai');

describe("Sample tests", function(){
  
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });
  
});


// describe("Your own tests", function(){
//   it("Your test case", () => {  
//     assert.strictEqual(decodeMorse(???), ???);
//   });
// });





