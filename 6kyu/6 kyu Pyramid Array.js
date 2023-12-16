// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s


// Функция pyramid принимает параметр n, который представляет собой количество уровней пирамиды.
// The pyramid function takes a parameter n, which represents the number of levels in the pyramid.
function pyramid(n) {

    // Создаем пустой массив arr, который будет содержать строки-уровни пирамиды.
    // Create an empty array arr, which will contain the rows representing the levels of the pyramid.
    const arr = [];
  
    // Используем цикл for для создания каждого уровня пирамиды.
    // We use a for loop to create each level of the pyramid.
    for(let i = 1; i <= n; i++) {
      // Для каждого уровня создаем массив с i элементами, заполненными единицами.
      // For each level, create an array with i elements filled with the value 1.
      arr.push(Array(i).fill(1));
    }
  
    // Возвращаем массив, представляющий пирамиду.
    // Return the array representing the pyramid.
    return arr;
  }

  


// Tests
// describe('basic tests', () => {
//     it("Testing for 0", () => assert.deepEqual(pyramid(0), []));
//     it("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
//     it("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
//     it("Testing for 3", () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
//   });
