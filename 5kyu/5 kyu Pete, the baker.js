// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the 
// available ingredients (also an object) and returns the maximum number 
// of cakes Pete can bake (integer). For simplicity there are no units for 
// the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});




function cakes(recipe, available) {
    // Инициализация переменной maxCakes значением бесконечности.
    // Initialization of the maxCakes variable with the value of infinity.
    let maxCakes = Infinity;
  
    // Используем цикл for...in для перебора каждого ингредиента в рецепте.
    // Use a for...in loop to iterate over each ingredient in the recipe.
    for (let ingredient in recipe) {
      // Проверяем, есть ли ингредиент в доступных и его количество достаточно для рецепта.
      // Check if the ingredient is available and if the available quantity is sufficient for the recipe.
      if (!available[ingredient] || available[ingredient] < recipe[ingredient]) {
        // Если ингредиент отсутствует или его количество недостаточно, возвращаем 0 (нельзя приготовить ни одного торта).
        // If the ingredient is missing or its quantity is insufficient, return 0 (cannot make any cake).
        return 0;
      } else {
        // Вычисляем максимальное количество тортов, которое можно приготовить с учетом всех ингредиентов.
        // Calculate the maximum number of cakes that can be made, considering all ingredients.
        maxCakes = Math.min(maxCakes, Math.floor(available[ingredient] / recipe[ingredient]));
      }
    }
  
    // Возвращаем максимальное количество тортов, которое можно приготовить.
    // Return the maximum number of cakes that can be made.
    return maxCakes;
  }
  

//Test
//   const {assert} = require('chai');

// describe('description example', function() {
//   it('pass example tests', function() {
//     let recipe = {flour: 500, sugar: 200, eggs: 1};
//     let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//     assert.equal(cakes(recipe, available), 2);
    
//     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//     available = {sugar: 500, flour: 2000, milk: 2000};
//     assert.equal(cakes(recipe, available), 0);
//   });
// });