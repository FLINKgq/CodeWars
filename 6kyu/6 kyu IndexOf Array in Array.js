// JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error


var searchArray = function (arrayToSearch, query) {
  
  
    if(Array.isArray(query)==false || query.length>2 || Array.isArray(arrayToSearch[0])==false){return error}
    
    for(let i = 0; i<arrayToSearch.length; i++){
    if(arrayToSearch[i].length>2){return error}
  }
  
  
  for(let i = 0; i<arrayToSearch.length; i++){
    
    if(query[0] == arrayToSearch[i][0] && query[1] == arrayToSearch[i][1] ){ return i }
  }
  
    return -1;
  }





//   TESTS

//   const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
// var searchFor = [9,20];



// Test.assertEquals(searchArray(bigArray,searchFor), 2);
// searchFor = [1,12];
// Test.assertEquals(searchArray(bigArray,searchFor), -1);
// searchFor = [7,2];
// Test.assertEquals(searchArray(bigArray, searchFor), 1);
// searchFor = [7,87];
// Test.assertEquals(searchArray(bigArray,searchFor), 6);
// searchFor = [45,4];
// Test.assertEquals(searchArray(bigArray,searchFor), 5);

// console.log("// Test input validation");
// searchFor = 7;
// Test.expectError("Should throw error if query is not Array",function() { searchArray(bigArray,searchFor) }); 
// searchFor = [3,4,5];
// Test.expectError("Should throw error if query Array has length other than 2",function() { searchArray(bigArray,searchFor) });

// searchFor = [9,20];
// bigArray = [1,2,3,4,5,6,7];
// Test.expectError("Should throw error if arrayToSearch is not two dimensional",function () { searchArray(bigArray,searchFor) });

// bigArray = [[1,2],[3,4],[5,6,7],[8,9]];
// Test.expectError("Should throw error if a sub-Array of arrayToSearch has length other than 2",function () { searchArray(bigArray,searchFor) });

// console.log("// Test with strings in arrays")
// bigArray = [["Name","Bob"],["Surname", "Smith"],["Occupation", "Builder"]];
// searchFor = ["Occupation","Builder"];
// Test.assertEquals(searchArray(bigArray,searchFor), 2);
// searchFor = ["Name", "Dan"];
// Test.assertEquals(searchArray(bigArray,searchFor), -1);

// console.log("//Test with random arrays")
// bigArray = [];
// var testSearch = function(arrayToSearch, query) {
//   var answer = -1;
//   for (a=0;a<arrayToSearch.length;a++) {
//     if (arrayToSearch[a][0] === query[0] && arrayToSearch[a][1] === query[1]) {
//       answer = a;
//       break;
//     }  
//   }
//   return answer
// }
// var getRandom = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var compileBigArray = function() {
//   for (i=0;i<100;i++) {
//     subArray = [0,0];
//     subArray[0] = getRandom(1,15);
//     subArray[1] = getRandom(1,15);
//     bigArray.push(subArray);
//   }
// }
// compileBigArray();
// for (i=0;i<25;i++) {
//   subArray = [0,0];
//   subArray[0] = getRandom(1,15);
//   subArray[1] = getRandom(1,15);
//   Test.assertEquals(searchArray(bigArray,subArray), testSearch(bigArray,subArray));
// }
//   });
// });