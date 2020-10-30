let newVar = 'World of Warcraft'; //step 2
console.log(newVar);

newVar = 'Elder Scrolls Online'; //step 3
console.log(newVar);

const conVar = 'The Online MMORPG'; //step 4
console.log(conVar);

//step 5
if (true) {
	var addVar = "is worth playing if you're a WOW fan."; //? I'll check it out
	//step 6
	// console.log(addVar); //? I think the instructions were misleading I meant for this to be console.log'd outside to show that var can touch global scope from block scope, however let cannot.
}

console.log(addVar);

//step 7
if (true) {
	let addLet = 'It is a really sophisticated game.';
	//step 8
	// console.log(addLet); //? Same deal here
}

// console.log(addLet); //? Commented out b/c causes error.

//step 9
//conVar = 'World of Warcraft';

//step 10
const newCon = [];
console.log(newCon);

//step 11
newCon.push('Conan Exiles');
newCon.push('Horizon: Zero Dawn');
newCon.push("Asgard's Wrath");
console.log(newCon);

//step 12
const conVar2 = [];

//step 13
const allin = {
	name: 'Allin',
	age: '43'
};
console.log(allin);

// step14
console.log(`Hello my name is ${allin.name}.`);

//step 15
//? Close but not exactly destructuring. Take a look at the example below.
// function greet(person) {
//     console.log(`Hello my name is ${person.name},
// and I am ${person.age} years old.`);
// };
// greet(allin);

//? Destructed properties get passed inside of curly brackets. When you call the function it will look for the specified properties in the object you passed inside the curly brackets.
function greet({ name, age }) {
	console.log(`Hello my name is ${name} and I am ${age} years old.`);
}

greet(allin);

//step 16
let { name, age } = allin;
console.log(name, age);

//step 17
const arrow1 = () => {
	// console.log(); //? We can just hard code the 'hello world' here
	console.log('hello world');
};
// console.log('Hello World'); //? We would call our function aas show below.
arrow1();

// step 18
const arrow2 = (str) => {
	console.log(str);
};
arrow2('Hello Solar System'); //? Good

//step 19  ===============  Return to this to try and figure out the bonus
// const arrow3 = (num1, num2) => num1 + num2;
// console.log(arrow3(4, 5)); //? Perfect I added the bonus below
const arrow3 = (num1, num2) => {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		return 'Error, must pass in a valid number.';
	} else {
		return num1 + num2;
	}
};

//step 20
setTimeout(() => {
	console.log(20 * 50 + ' milliseconds');
}, 1000);

//step 21
for (const ele of newCon) {
	console.log(ele);
}

//step 22
for (const key in allin) {
	console.log(`${allin[key]}`);
}

//step 23
// step 23 i
// const getDiv = document.getElementById('main-div');
// // step 23 ii
// const harmon = {
//     // step 23 iii
//     name: 'Allin Harmon',
//     age: 43,
//     birthday: new Date ("1977/02/02"),
//     hobbies: ['Playing Video Games', 'Building Computers', 'Working in Photoshop']
// }

// step 23 iv

//?????????

// step 23 v
// let bio = '';

// step 23 vi
// function greet(person) {
//     console.log(`Hello my name is ${person.name},
// and I am ${person.age} years old.`);
// };

// bio = greet(harmon);

// console.log(bio);

//? Sample Solution
const div = document.querySelector('#main-div');

const harcourt = {
	name: 'Harcourt',
	age: 26,
	birthday: new Date('2/11/2899'), //! This could use more work only works between 1910 - 2899
	hobbies: ['cars', 'computers', 'travel', 'diy projects']
};

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function bio({ name, age, birthday, hobbies }) {
	let bio = `Hello my name is ${name}, I am ${age} years old. `;
	bio += `I was born in ${months[birthday.getMonth()]} of ${
		birthday.getYear() >= 100
			? '2' + birthday.getYear() - 100
			: '19' + birthday.getYear()
	}. `;
	bio += `My hobbies include: `;
	for (const hobby of hobbies) {
		if (hobbies.indexOf(hobby) === hobbies.length - 1) {
			bio += `and ${hobby}.`;
		} else {
			bio += `${hobby}, `;
		}
	}
	div.innerHTML = bio;
}

bio(harcourt);
