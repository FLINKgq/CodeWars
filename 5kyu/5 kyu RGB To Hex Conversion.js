// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


function rgb(r, g, b) {
    // Убеждаюсь, что r находится в диапазоне от 0 до 255
    r = Math.max(0, Math.min(255, r));
    // Убеждаюсь, что g находится в диапазоне от 0 до 255
    g = Math.max(0, Math.min(255, g));
    // Убеждаюсь, что b находится в диапазоне от 0 до 255
    b = Math.max(0, Math.min(255, b));
    // Преобразую r, g и b в 16-ричное число, затем преобразую его в строку и удаляю первый символ
    // (который всегда будет "1" из-за операции сдвига (1 << 24))
    // Наконец, преобразую все буквы в верхний регистр
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}


// Sample Tests

// describe("Tests", () => {

//     const { strictEqual } = require('chai').assert;
  
//     function doTest(r, g, b, expected) {
//         const actual = rgb(r, g, b);
//         const message = `for r = ${r} g = ${g} b = ${b}`;
//         strictEqual(actual, expected, message);
//     }
  
//     it("Sample Tests", () => {
//       doTest(  0,   0,   0, '000000');
//       doTest(  0,   0, -20, '000000');
//       doTest(300, 255, 255, 'FFFFFF');
//       doTest(173, 255,  47, 'ADFF2F');
//     });
//   });
  