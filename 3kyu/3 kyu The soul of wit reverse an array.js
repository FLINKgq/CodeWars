

// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require isn't allowed as well.



reverse=a=>[...a].map(a.pop,a)

// a => [...a]: Создается копия массива a с использованием оператора 
// расширения (spread operator), чтобы избежать изменения оригинального массива.

// .map(a.pop, a): Применяется метод map к новому массиву.
// Функция a.pop вызывается для каждого элемента массива, при этом каждый вызов удаляет последний элемент из массива a. 
// Второй аргумент a передается в map в качестве контекста выполнения, таким образом, a.pop вызывается на массиве a.

// Таким образом, для каждого элемента массива a выполняется операция a.pop(), и результат (удаленный элемент) помещается в новый массив.
// Этот процесс повторяется для каждого элемента, и мы получаем новый массив, который является перевернутой версией оригинального массива.



// a => [...a]: A copy of the array 'a' is created using the spread operator to avoid modifying the original array.

// .map(a.pop, a): The map method is applied to the new array. 
// The function 'a.pop' is called for each element of the array, where each call removes the last element from array 'a'. 
// The second argument, 'a', is passed to map as the execution context, so 'a.pop' is invoked on array 'a'.

// Thus, for each element of array 'a', the operation 'a.pop()' is executed, and the result (the removed element) is placed into a new array. 
// This process is repeated for each element, resulting in a new array that is the reversed version of the original array.





//Tests
// const {assert, config, util: {inspect}} = require('chai');
// config.truncateThreshold = 0;

// const codeSize = require('fs').statSync('/workspace/solution.txt').size;
// console.log('<LOG::Code size>', codeSize);

// describe('reverse', () => {
//   it('should reverse arrays', () => {
//     assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
//     assert.deepEqual(reverse([...'01234567890123456789']), [...'98765432109876543210']);
//     assert.deepEqual(reverse([0, undefined]), [undefined, 0]);
//   });
// });

// describe('Code', () => {
//   it('should be short enough', () => {
//     const codeSize = require('fs').statSync('/workspace/solution.txt').size;
//     assert(codeSize <= 30, 'Code is too long');
//   });
//   it('should not use `require`', () => {
//     const code = module.require('fs').readFileSync('/workspace/solution.txt');
//     assert(!code.includes('require'), 'Code uses `require`');
//   });
// });
