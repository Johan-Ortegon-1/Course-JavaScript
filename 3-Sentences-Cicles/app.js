// Ternary operators
var name = "elpepe";
var age = 21;

age >= 18
  ? console.log(name + " is a little old")
  : console.log(name + " is young");

// Exercise
var notesFirtsStudent = [14, 8, 16];
var notesSecondStudent = [12, 18, 10];

var averageFirst = 0;
var averageSecond = 0;

const approvedValue = 13;

averageFirst = (notesFirtsStudent.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / notesFirtsStudent.length;
averageSecond = (notesSecondStudent.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / notesSecondStudent.length;

console.log('averages: ' + averageFirst + ' ' + averageSecond);

switch (averageFirst > averageSecond) {
    case true:
        console.log('First higher than second');
        break;
    case false:
        console.log('Second higher than first');
        break;
    default:
        console.log('Are even');
}

switch (averageFirst > approvedValue) {
    case true:
        console.log('First approved');
        break;
    case false:
        console.log('First ruling');
        break;
    default:
        console.log('So close, so far');
}

switch (averageSecond > approvedValue) {
    case true:
        console.log('Second approved');
        break;
    case false:
        console.log('Second ruling');
        break;
    default:
        console.log('So close, so far');
}

