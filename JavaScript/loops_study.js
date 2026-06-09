let numbers = [1, 2, 3, 4, 5 , 6]

for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx])
}
// действие перед циклом, до какого момента идет цикл
// действие выполняемое в конце цикла

for (let num = 0; num < 100; num++) {
    console.log(num)
}

let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);

    index++;
}

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);
// сначала выполняет блок потом проверяет условие

const course = {
    name: 'JS',
    duration: 3,
    sections: 7
}

for (const key in course) {
    console.log(course[key])
}

for (let element of numbers) {
    console.log(element);
}
// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log(numbers[idx])
// }

numbers.forEach((number) => {
    console.log(number);
});
// same

const dog = {
    name: "zarbazan",
    age: 5,
    color: "white"
};
// for ( const key in dog ) {
//     console.log(dog[key]);
// }

const keys = Object.keys(dog);
// console.log(keys);

const values = Object.values(dog);
// console.log(values);

const entries = Object.entries(dog);
console.log(entries)