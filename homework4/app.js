// 1) create a string variable with the name str1 set the value to hello
let str1 = 'hello'
// console.log(str1);

// 2) append " world" onto str1. optional write to console/document
str1 += ' world'; // or ' ' + 'world';
console.log(str1);

// 3) Create a new string str2 its value should be the concatenation of str1 and an "!" i.e var str2 = "hello world!"
let str2 = str1 + '!';
// console.log(str2);

// 4) write the length of the string to the document/console
console.log(str2.length);

// 5) Using a string method make str1 all capital letters. Write it to the console/document. 
str1AllCaps = str1.toUpperCase();
console.log(str1AllCaps);

// 6) Using square bracket notation get the "e" out of str1. You can additionally write it to the console/document 
console.log(str1[1]);

// 7) Using a string method return the index (number) of "!" in str2.
console.log(str2.indexOf(['!'])); // study session helped me get the right answer.

// 8) Using the slice method retrieve "hell" out of str2, store the result in a new variable named str3
const str3 = str2.slice(0, 4);
// console.log(str3);

// 9) Using the includes method write to the console/document checking if str2 includes 'ell' 
console.log(str2.includes('ell'));

// 10) Create an object with the name of me, it should have two properties name & age. The values should be your name as a string and your age as a number. 
let me = { 
    name: 'Allin',
    age: '43'
}
// console.log(me);

// 11) Write the name property of the me object to the console/document using dot notation
console.log(me.name);

// 12) Write the name property of the me object to the console/document using square bracket notation
console.log(me['name']);

// 13) Append a canDrink property to your me object with true or false as the value
me.canDrink = true; // or me['canDrink'] = true;
// me.canDrink = false; // test answer for step 17
// me.canDrink = ""; // test answer for step 17
console.log(me);

// 14) append a method onto our me object named greet, the value should be an anonymous function that should write `Hello my name is ${this.name}!`
me.greet = 
function () {
    console.log(`Hello my name is ${this.name}!`); // study session helped me get the right answer.
}

// 15) call your greet method
me.greet(); // study session helped me get the current answer.

// 16) write an if statement that checks if me.name includes an "e". If true should write to the console/document "Your name contains an e". If false should write to the console/document "Your name does NOT contain an E" EXAMPLE: my name is harcourt therefore should print "Your name does NOT contain an E" to the console or document. You'll want to use the include string method
if (me.name.includes('e') === true) {  
    console.log('Your name contains an e');
} else {
    console.log('Your name does NOT contain an E');
}// study session helped me get the current answer.

// 17) Write an if statement that checks if me has a canDrink property. If true write a nested if statement that checks that the value of canDrink property is true. If true should write to the console/document `${me.name} can drink`. If false (nested) should write to the console document "${me.name} cannot drink" BONUS: Create a method that does the same thing that belongs to the me object and use "this" instead of "me" HINT: hasOwnProperty example of if statement structure below

// This answer I got on my own

// if (me.hasOwnProperty('canDrink')) {
//     if(me.canDrink === true) {
//         console.log(`${me.name} can drink.`);
//     } else if (me.canDrink === false) {
//         console.log(`${me.name} cannot drink.`);
//     } else {
//         console.log(`${me.name} hasn't said if he can drink.`); 
//     }
// }

// Kevin helped me get 'this'

me.thisFun = 
function() {
    if (this.hasOwnProperty('canDrink')) {
        if(this.canDrink === true) {
            return `${this.name} can drink.`;
        } else if (this.canDrink === false) {
            return `${this.name} cannot drink.`;
        } else {
            return `${this.name} hasn't said if he can drink.`; 
        }
    }
}
console.log(me)
console.log(me.thisFun());