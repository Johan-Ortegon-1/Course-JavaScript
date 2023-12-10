// Object reference

let person = {
    name: 'pepe',
    salary: 12222
}

let referencePerson = person;

function riseSalary(worker, amount) {
    worker.salary = worker.salary + amount;
}

riseSalary(person, 1000);

console.log(person);            // Saraly = 13222
console.log(referencePerson);   // Saraly = 13222

// Methods

let complexPerson = {
    name: 'pepe',
    salary: 12222,
    riseSalary: function(amount) {
        this.salary = this.salary + amount;
    }
}
complexPerson.riseSalary(30)
console.log(complexPerson);

// Destructuring objects

let nestedObject = {
    code: 1,
    subObject: {
        name: 'sub',
        id: 1,
        subSubObject: {
            description: 'el pepe'
        }
    }
}

let { code : cod, subObject : {name : nam, subSubObject : doubleSub } } = nestedObject;

console.log(doubleSub);

// Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGeneralInfo() {
        let info = `${this.name} and age: ${this.age}`
        return info;
    }
}

const person1 = new Person('pepe', 34);

console.log(person1.getGeneralInfo());

// Inheritance

class Employee extends Person {
    constructor(name, age, salary, job) {
        super(name, age);
        this.salary = salary;
        this.job = job;
    }

    getGeneralInfo() {
        return super.getGeneralInfo() + ` Salary: ${this.salary} Job: ${this.job}`;
    }
}

const employee1 = new Employee('pepe segundo', 54, 12345, 'Boss pepe');

console.log(employee1.getGeneralInfo());

