// 1) declare a variable var1
var var1;

// 2) assign a value to var1 of to the string of 'string'
var1 = 'string'; 

// 3) declare and assign a new variable named var2 to the "g" from var1 using square bracket notation
var var2 = var1[5]; // returns 'g'

// 4) append the string text "o!" onto var2 
var2 += 'o!'; // returns 'go!'

// 5) create a variable named var3 assign it to any value of type number
var var3 = 3;

// 6) create a variable named var4 assign it to a string type the value should be a number character.
var var4 = "3";

// 7) write the result of var3 + var4 to the console or the document. You should see the concatenation of var3 + var4
console.log(var3 + var4); // returns 33

// 8) Write to the console or document using parseFloat || parseInt (depending on whether you are dealing with decimal or an integer) the sum of var3 and var4. 
console.log(var3 + parseInt(var4)); // returns 6

// 9) Create a variable named arr with the value of an empty array
var arr = [];
// console.log(arr); // returns[]

// 10) write a for loop that adds 1 - 10 onto the array. The resulting array should be arr = [1,2,3...9, 10]; HINT: you'll start at 1 instead of 0 inside the code block of the for loop we want to use the push method, you can use anything you like the that creates the desired end result;
for(i = 1; i <= 10; i++) { // step 10
    arr.push(i);    
};
// console.log(arr); // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//11) Add 11 on to the end of our array with an array method.
arr.push(11);
// console.log(arr); // returns (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//12) Remove the last element of the array. 
arr.pop();
// console.log(arr);  // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 13) Add 0 onto the front of our array. 
arr.unshift(0);
// console.log(arr);  // returns (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 14) remove the 0 on the front of our array.
arr.shift();
// console.log(arr);  // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 15) use splice to remove the first element of our array. 
// HINT: takes three parameters 
//  - the first is starting index
//  - the second is how many elements
//  - the following parameters are things to add in after the elements specified to be removed are removed, if any are. 
arr.splice(0, 1);
// console.log(arr); // returns (9) [2, 3, 4, 5, 6, 7, 8, 9, 10]

// 16) use splice to remove the last two elements of the array.
arr.splice(7, 2);
// console.log(arr); // returns (7) [2, 3, 4, 5, 6, 7, 8]

// 17) use splice to add -1, 0, 1 onto the front of our array. 
arr.splice(0, 0, -1, 0, 1);
// console.log(arr); // (10) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// 18) use slice to make a new array called copy, it should have the first 3 elements in copy.
var copy = arr.slice(0, 3);
// console.log(arr, copy) // returns (10) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8] (3) [-1, 0, 1]