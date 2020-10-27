let newVar = 'World of Warcraft';  //step 2
console.log(newVar);

newVar = 'Elder Scrolls Online';  //step 3
console.log(newVar);

const conVar = 'The Online MMORPG'; //step 4
console.log(conVar);

//step 5
if (true) {
    var addVar = 'is worth playing if you\'re a WOW fan.'; 
    //step 6
    console.log(addVar); 
}

//step 7
if (true) {
    let addLet = 'It is a really sophisticated game.'; 
    //step 8
    console.log(addLet); 
}

//step 9
//conVar = 'World of Warcraft'; 

//step 10
const newCon = []; 
console.log(newCon);

//step 11
newCon.push ('Conan Exiles'); 
newCon.push ('Horizon: Zero Dawn');
newCon.push ("Asgard's Wrath");
console.log (newCon);

//step 12
const conVar2 = []; 

//step 13
const allin = { 
    name: 'Allin',
    age: '43'
};
console.log (allin);

// step14
console.log (`Hello my name is ${allin.name}.`); 

//step 15
function greet(person) { 
    console.log(`Hello my name is ${person.name},
and I am ${person.age} years old.`);
};
greet(allin);

//step 16
let { name, age } = allin; 
console.log (name, age);

//step 17   
const arrow1 = () => {
    console.log();
};
console.log('Hello World');

// step 18
const arrow2 = str => {
    console.log(str);
}
arrow2('Hello Solar System');

//step 19  ===============  Return to this to try and figure out the bonus
const arrow3 = (num1, num2) => num1 + num2;
console.log (arrow3(4, 5));

//step 20 
setTimeout(() => {
    console.log( 20 * 50 + ' milliseconds' );
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