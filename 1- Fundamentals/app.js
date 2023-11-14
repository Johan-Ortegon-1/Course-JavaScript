var weirdText = 'Helo "My" friend';
console.log('Hello from js file' + weirdText);

// type of operator
console.log(typeof weirdText);
weirdText = 19;
console.log(typeof weirdText);

// Arithcmetic opeartor
var age = 1;
console.log(age++); // does not print the change
console.log(++age);

// List of operator: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators


// Exercise
var weight = 72;
var height = 1.72;


var secondWeight = 89;
var secondHeight = 1.75;

var firstIMC = (weight/(height^2));
var secondIMC = (secondWeight/(secondHeight^2));

console.log('First IMC: ' + firstIMC);
console.log('First IMC: ' + secondIMC);
console.log('First mayor than the second?: ' + firstIMC > secondIMC);

console.log('I already knew the majority of the lesson :(');