//! Great work! Just had a few notes for feedback, I hope the review has been beneficial thus far. Your work here looks great!
// 1) declare a variable var1
var var1;

// 2) assign a value to var1 of to the string of 'string'
var1 = 'string';

// 3) declare and assign a new variable named var2 to the "g" from var1 using square bracket notation
// var var2 = var1[5]; // returns 'g'
var var2 = var1[var1.length - 1]; //? Alternate way of doing the same thing here since its the last character

// 4) append the string text "o!" onto var2
var2 += 'o!'; // returns 'go!'

// 5) create a variable named var3 assign it to any value of type number
var var3 = 3;

// 6) create a variable named var4 assign it to a string type the value should be a number character.
var var4 = '3';

// 7) write the result of var3 + var4 to the console or the document. You should see the concatenation of var3 + var4
console.log(var3 + var4); // returns 33

// 8) Write to the console or document using parseFloat || parseInt (depending on whether you are dealing with decimal or an integer) the sum of var3 and var4.
console.log(var3 + parseInt(var4)); // returns 6

// 9) Create a variable named arr with the value of an empty array
var arr = [];
// console.log(arr); // returns[]

// 10) write a for loop that adds 1 - 10 onto the array. The resulting array should be arr = [1,2,3...9, 10]; HINT: you'll start at 1 instead of 0 inside the code block of the for loop we want to use the push method, you can use anything you like the that creates the desired end result;
//! You don't necessarily have to kind of like how I can assign a value to a variable without the var, let, or const keyword EXAMPLE: var1 = 'string'; will work without the keyword b/c of the hoisting, same deal here in our for loop. So you should use one of them, I strongly recommend using let b/c var in block scope, remember our loop is block scope, can penetrate the global scope. Let cannot checkout the examples below.

// for (i = 1; i <= 10; i++) {
// 	// step 10
// 	arr.push(i);
// }

//! Commented out b/c throws error as i doesn't exist outside of our for loop. Uncomment it to check it out.
// for(let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(i);

for (var i = 1; i <= 10; i++) {
	arr.push(i);
}
console.log(i); //? write 11 to the console.
// console.log(arr); // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//11) Add 11 on to the end of our array with an array method.
arr.push(11);
// console.log(arr); // returns (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//12) Remove the last element of the array.
arr.pop();
// console.log(arr);  // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 13) Add 0 onto the front of our array.
arr.unshift(0);
// console.log(arr); // returns (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 14) remove the 0 on the front of our array.
arr.shift();
// console.log(arr); // returns (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 15) use splice to remove the first element of our array.
// HINT: takes three parameters
//  - the first is starting index
//  - the second is how many elements
//  - the following parameters are things to add in after the elements specified to be removed are removed, if any are.
arr.splice(0, 1);
// console.log(arr); // returns (9) [2, 3, 4, 5, 6, 7, 8, 9, 10]

// 16) use splice to remove the last two elements of the array.
// arr.splice(7, 2);
arr.splice(arr.length - 2, 2); //? This will always chop the last elements off an array of any length
console.log(arr); // returns (7) [2, 3, 4, 5, 6, 7, 8]

// 17) use splice to add -1, 0, 1 onto the front of our array.
arr.splice(0, 0, -1, 0, 1);
// console.log(arr); // (10) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// 18) use slice to make a new array called copy, it should have the first 3 elements in copy.
var copy = arr.slice(0, 3);
// console.log(arr, copy) // returns (10) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8] (3) [-1, 0, 1]
