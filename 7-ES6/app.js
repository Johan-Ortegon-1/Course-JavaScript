// Template string
const name = 'pepe';
const lastName = 'el';

function concat(str1, str2) {
    return `${str1} ${str2}`;
}

console.log(`${name} is its name, ${lastName} is its last name. So: ${concat(name, lastName)}`);

// Arrow functions

const numbers = [1, 2, 3, 4, 5];

let result = numbers.map(item => 20 - item);
console.log(result);

let complexResult = numbers.map((item, index) => {
    return `Operation result: ${20-item} index: ${index}`;
});
console.log(complexResult);

const square = (num) => num * num;
console.log(square(25));

// Arrow functions + filter

const persons = [
    {
        name: 'pepe',
        age: 1
    },
    {
        name: 'el pepe',
        age: 3
    },
    {
        name: 'the old pepe',
        age: 30
    }
]

const oldPeople = persons.filter((person) => person.age >= 25);
console.log(oldPeople);

// Destructuring
const {name : destructuredName, age : destructuredAge} = persons[0];
console.log(`${destructuredName} + ${destructuredAge}`);

//Maps

const mapData = new Map();
mapData.set('name', 'pepe');
mapData.set(2, '2');

console.log(mapData.get('name'));

mapData.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

mapData.clear();
console.log(mapData);

// Spread operator (...)
function sum(number1, number2,number3,number4,number5) {
    return number1+number2+number3+number4+number5;
}
const values = [1,2,3,4,5];

console.log(`Result: ${sum(...values)}`);

const person = { nameSpreaded: 'John', age: 30, country: 'USA' };
let { nameSpreaded, ...rest1 } = person;
console.log(nameSpreaded); // Output: John
console.log(rest1); // Output: { age: 30, country: 'USA' }

const numbers1 = [1, 2, 3];
const [first, ...rest] = numbers1;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3]

