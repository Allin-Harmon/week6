// 1) create a string variable with the name str1 set the value to hello
let str1 = 'hello';
// console.log(str1);

// 2) append " world" onto str1. optional write to console/document
str1 += ' world'; // or ' ' + 'world';
console.log(str1);

// 3) Create a new string str2 its value should be the concatenation of str1 and an "!" i.e var str2 = "hello world!"
// let str2 = str1 + '!';
let str2 = `${str1}!`; //? Template literal version
// console.log(str2);

// 4) write the length of the string to the document/console
console.log(str2.length);

// 5) Using a string method make str1 all capital letters. Write it to the console/document.
let str1AllCaps = str1.toUpperCase(); //! Missing var, let, const keyword
console.log(str1AllCaps);

// 6) Using square bracket notation get the "e" out of str1. You can additionally write it to the console/document
console.log(str1[1]);

// 7) Using a string method return the index (number) of "!" in str2.
console.log(str2.indexOf(['!'])); //? Great work! I added an example of a round about way to do the same thing without the method. Just to clarify I'd rather you do it with the method but just as a thought exercise.

for (let i = 0; i < str2.length; i++) {
	if (str2[i] === '!') {
		console.log(i);
	}
}

// 8) Using the slice method retrieve "hell" out of str2, store the result in a new variable named str3
const str3 = str2.slice(0, 4);
const foo = str2.substr(0, 4); //? We could use substr() or substring() methods to accomplish this as well. substr() & substring() do the same thing they do NOT modify the original array. substr(startingIndex, number of characters) substring(startingIndex, endingIndexButNotIncluding)
const bar = str2.substring(0, 4);
console.log(foo, bar, str2);
// console.log(str3);

// 9) Using the includes method write to the console/document checking if str2 includes 'ell'
console.log(str2.includes('ell')); //? returns a boolean right, anytime you see a boolean return value, its a great candidate for an if/while conditional stmt

// 10) Create an object with the name of me, it should have two properties name & age. The values should be your name as a string and your age as a number.
//! doesn't hurt to use let, but since it is a reference type it would be best to make it a const. Reference types -> arrays & objects
const me = {
	name: 'Allin',
	// age: '43'
	age: 43 //? Probably better to store this as a number instead of a string
};
// console.log(me);

// 11) Write the name property of the me object to the console/document using dot notation
console.log(me.name);

// 12) Write the name property of the me object to the console/document using square bracket notation
console.log(me['name']);

// 13) Append a canDrink property to your me object with true or false as the value
// me.canDrink = true; // or me['canDrink'] = true; //? Added in an example that determines if you are over 21 in a ternary operation and sets it to true if age is = or greater that 21 and false otherwise.
me.canDrink = me.age >= 21 ? true : false;
// me.canDrink = false; // test answer for step 17
// me.canDrink = ""; // test answer for step 17
console.log(me);

// 14) append a method onto our me object named greet, the value should be an anonymous function that should write `Hello my name is ${this.name}!`
me.greet = function () {
	return `Hello my name is ${this.name}!`;
};

// 15) call your greet method
console.log(me.greet()); //? When we call it like me.greet() we're binding this to me, therefore this === me. I added an example of how we can break this to further demo how this works
const fizz = me.greet; //? Not calling it here, i.e. I omitted the (), so instead of calling the function and receiving the return value we are setting our new variable fizz to the function definition, i.e. const fizz = function () { return `Hello my name is ${this.name}`; }
console.log(fizz()); //? We get "Hello my name is !" b/c we call it like fizz() and not me.fizz() therefore this is bound to the window and the window doesn't have a name property/variable defined.

// 16) write an if statement that checks if me.name includes an "e". If true should write to the console/document "Your name contains an e". If false should write to the console/document "Your name does NOT contain an E" EXAMPLE: my name is harcourt therefore should print "Your name does NOT contain an E" to the console or document. You'll want to use the include string method
//! If statement isn't working properly b/c me.greet.name === '' as there there is not name property of the greet method. We want to check me.name instead, also includes returns a boolean so we don't need to check if true === true, we can simply let includes return true or false. Finally we don't need to do another else if, if includes didn't return true, it must've returned false meaning the name didn't include an "e" I added a new if stmt below that demos this.
me.name = 'Ellie'; //? Just overwriting name for testing
if (me.greet.name.includes('e') === true) {
	console.log('Your name contains an e');
} else if (me.greet.name.includes('e') === false) {
	console.log('Your name does NOT contain an E');
}

if (me.name.includes('e')) {
	console.log('Your name contains an e');
} else {
	console.log('Your name does NOT contain an e');
}
me.name = 'Allin'; //? Setting it back to Allin

// 17) Write an if statement that checks if me has a canDrink property. If true write a nested if statement that checks that the value of canDrink property is true. If true should write to the console/document `${me.name} can drink`. If false (nested) should write to the console document "${me.name} cannot drink" BONUS: Create a method that does the same thing that belongs to the me object and use "this" instead of "me" HINT: hasOwnProperty example of if statement structure below

// if (me.hasOwnProperty('canDrink')) {
//     if(me.canDrink === true) {
//         console.log(`${me.name} can drink.`);
//     } else if (me.canDrink === false) {
//         console.log(`${me.name} cannot drink.`);
//     } else {
//         console.log(`${me.name} hasn't said if he can drink.`);
//     }
// }

me.thisFun = function () {
	//? Nice use of this! We don't really need to the else if here, however the way you've done it will produce the same results so either or is fine. Since hasOwnProperty returns a boolean we don't need to check true === true, which evaluates to true, we can just simply let it evaluate to true or false
	// if (this.hasOwnProperty('canDrink')) {
	// 	if (this.canDrink === true) {
	// 		return `${this.name} can drink.`;
	// 	} else if (this.canDrink === false) {
	// 		return `${this.name} cannot drink.`;
	// 	} else {
	// 		return `${this.name} hasn't said if he can drink.`;
	// 	}
	// }
	if (this.hasOwnProperty('canDrink')) {
		if (this.canDrink) {
			return `${this.name} can drink.`;
		} else {
			return `${this.name} cannot drink.`;
		}
	} else {
		return `${this.name} hasn't said if he can drink.`;
	}
};
console.log(me);
console.log(me.thisFun());
