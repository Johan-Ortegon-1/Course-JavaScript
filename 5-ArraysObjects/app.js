/** Arrays */
// ForEach
var array = ['q', 'w', 'e', 'r'];

array.forEach(function(element, index, array) {
    console.log(element + ' ' + index + ' ' + array);
});

// Managean array
array.push('a');
console.log(array);
array.unshift('b');
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);

array.splice(1,3);
console.log(array);

// Multiple types in an array

var mix = ['el pepe', 36];

/** Objects */

var testObject = {
    name: 'pepe',
    surname: 'el',
    tastes: ['rest', 'sleep'],
    isHappy: true,
    yearOfBirthDay: 1998,

    getAge: function() {
        let today = new  Date();
        return today.getFullYear() - this.yearOfBirthDay;
    }
};
console.log(testObject['isHappy']);
console.log(testObject.getAge());

var personObject = new Object();
personObject.name = 'potato';
personObject.age = 13;
personObject.tastes = ['music'];

console.log(personObject);