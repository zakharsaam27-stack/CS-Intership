function sayHi() {
    return 'hello';
}
//def sayHi()

console.log(sayHi())


function multiply(num1, num2) {
    const product = num1 * num2;
}

console.log(multiply(2, 2));
//выйдет андефайнд потому что конст не меняется

function displayEvenNumbers(array) {
    for (const number of array) {
        if (number % 2 === 0)
            console.log(number);
    }
}

displayEvenNumbers([1, 2, 3, 4, 5, 6, 7])

function getDog(name, breed, age, weight) {
    return {
        name,
        breed,
        age,
        weight,
        eat() {
            console.log("chomp");
        },
        bark() {
            console.log("woof")
        }
    }
}

const secondDog = getDog("busya", "maltipu", 3, 10)
console.log(secondDog)

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.eat = function() {
       console.log(this.name + ": chomp");
    }

    this.bark = function() {
        console.log(this.name + ": woof")
    }
}

const anotherDog = new Dog("marley", "shepard", 60);
console.log(anotherDog)

// this встанет на место anotherDog anotherDog.name = name
// то же самое что self в питоне



function add(num1, num2) {
    return num1 + num2;
}

const n = add;

console.log( n(2, 2) );

// function Programmer(name) {
//     this.name = name;
//     this.writeCode = function() {
//         console.log("code in Js")
//     }
// }

const Programmer = new Function("name", `
    this.name = name;
    this.writeCode = function() {
      console.log("coding");
    }
`);

const newProgrammer = new Programmer("steve");

newProgrammer.writeCode();

// const sum = (num1, num2) => {
//     return num1 + num2;
// }

const sum = (num1, num2) => num1 + num2;


const employees = [
    {
        id: 1,
        name: "Jim"
    },
    {
        id: 2,
        name: "Tim"
    },
    {
        id: 3,
        name: "Bim"
    },
];

// const employee = employees.find(function(e) {
//     return e.name === "Jim"
// });

const employee = employees.find((e) => e.name === 'Jim');



let greeting = function salam() {
    console.log('Hi');
};

greeting();



function multiply2(num1, num2) {
    let result = 1;
    for (const num of arguments)
        product *= num;

    return result;
}
console.log(multiply2(2, 2, 4));
// может выполнить даже если параметров будет больше чем заложено


function multiply3(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

function codeWrittenOn(language = 'JS') {
    console.log(`Code written on ${language}`);
}

const video = {
    name: "js for begin",
    duration: '3 hrs',
    get details() {
        return `${this.name} is ${this.duration}`;
    },
    set details(value) {
        if (typeof value !== 'string') {
            throw new Error(`Value, ${value} is not a string`);
        }
        
        let parts = value.split(' ');
        this.name = parts[0];
        this.duration = parts[1];
    }
}

try {
    video.details = 52;
} catch (e) {
    console.log(`Caught an error: ${e.message}`);
}