// Add, delete and replace en ES6
const mix = ['1', '2', '3'];

console.log(mix.pop());
console.log(mix.shift());
console.log(mix);

mix.push('4');
mix.splice(0, 1, '8');
console.log('Post delete: ' + mix);

// Cycles

mix.forEach(function(item, index){
    console.log(`Index: ${index} Value: ${item}`);
});

// Find objects

const mixOBjects = [
    {
        name: 'pepe',
        age: 11
    },
    {
        name: 'pepe2',
        age: 12
    }
]

function findObjectIndex (array, ageParam) {
    return array.findIndex(function(value) {
        return value.age === ageParam;
    })
}

console.log(findObjectIndex(mixOBjects, 12));

// Filters

console.log(mixOBjects.filter(function(value) {
    return value.name.includes('2');
}));

// Order
mixOBjects.sort(function (a, b) {
    if (a.age > b.age) {
        return -1;
    }
    if (a.age < b.age) {
        return 1;
    }

    return 0;
});

console.log(mixOBjects);