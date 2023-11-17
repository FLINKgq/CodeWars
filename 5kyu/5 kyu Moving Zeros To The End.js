// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let arrN = arr;
    let count = 0;
    let countX = 0;
    
    for(let i = 0; i<arr.length; i++){
      
      if(arr[i]!==0){
        arrN[count] = arr[i];
        count++;
      }
      else{
        countX++;
      }
      
      
    }
    
    if(countX!== 0){
    for(let x = arr.length-countX; x<arr.length; x++){
      arrN[x] = 0;
    }
  }
    
    return arrN
  }

//Проверка
//   const {assert, config} = require("chai");
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//   });
// });