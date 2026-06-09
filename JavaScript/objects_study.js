let course = {
    name: 'Somthing',
    hours: 3
};

let Zakhar = 'Zakhar';
Zakhar = 100;
Zakhar = true;

let object_example = {
    name: 'JavaScript',
    hours: 3
};
// console.log(object_example);
// console.log(object_example.name);

// object_example.name = 'Python';
console.log(object_example['name']);
// выведет значение нейм  

object_example['name'] = 'JavaScript2';
console.log(object_example['name']);

let property = 'hours';

console.log(object_example[property]);
// выведет три
// не переписывает hours а берет его значение



let colors = ['blue', 'red', 'yellow'];

console.log(colors[0]);
colors[0] = 21;

console.log(colors.lenght);
// print(len(colors))

const dog = {
    name: "zarbazan",
    breed: "malteze",
    age: 5,
    bark: function() {
        console.log("woof");
    }
}

const person = {
    name: "mark"
};
console.log(person);

person.favoriteColor = "green";
console.log(person);

person['favoriteFood'] = 'taco';
console.log(person);

delete person.favoriteColor;
console.log(person);

person.eat = function() {
    console.log("chomp");
}

person.eat();



// let newObjects = {};
new String();
new Boolean();
new Number();



// let a = 10;
// let b = a;
// a = 20
// в этом случае b останется со значением 10

let a = { value: 20 };
let b = a;

a.value = 100

// в этом случае копируется ссылка на а и б перенимает изменения

// объекты ссылаются на ссылкуа примитивы на значение 

let c = { value: 10};
let d = { ...c }; // копирует

// Object.assign(d, c); 

c.value = 20;

// в таком случае изменение не повлияет на значение d



let sentence = "a new sentence";
const doesIncludeNe = sentence.includes("new");
console.log(doesIncludeNe);

// .startsWith() .endsWith() .replace("old", "new") .trim() (removes spaces)

 const wordsInSentence = sentence.split(' ');
 console.log(wordsInSentence)
 // выводит все слова в список

// .toLowerCase() .toUpperCase()

let now = new Date();
// текущая дата и время
let Jan01_1970 = new Date(0)
// отсчет

const numbers = [5, 4, 3, 2 , 1, 3];

numbers.push(7);
// добавить в конец вписанное значение

numbers.unshift(25);
// добавить значение в начало

numbers.splice(1, 0, 3);
// 1 значение после какого индекса хотим добавить 
// 2 какое хотим удалить
// 3 что хотим подставить (можно несколько)

numbers.pop();
// pop как в питоне

numbers.shift();
// первый элемент

const n = numbers.indexOf(3);
// 2

const k = numbers.lastIndexOf(3);
// 5

const exmapleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const combinedArray = exmapleNumbersA.concat(exampleNumbersB);
// or
let combined = [...exmapleNumbersA, ...exampleNumbersB];
// соединит, во втором случае можно вписывать между ними еще что то 

const firstSlice = combinedArray.slice(0, 4); 
// разделит 



const courseName = 'JavaScript for beginners';
const parts = courseName.split(' ');
// строку в массив

const fruits = ["apple", "bananas", "orange"];
const text = fruits.join(',');
// массив в строку



let characters = ['c', 'd', 'b', 'a'];
characters.sort();
// по алфавиту

characters.reverse()
// перевернет строку

let workers = [
    { id: 1, name: 'Len'},
    { id: 2, name: 'Ren'},
    { id: 3, name: 'Miku'},
    { id: 4, name: 'Teto'},
];
workers.sort((a, b) => {
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB = b.name.toLowerCase();

    if (lowerCaseA < lowerCaseB) return -1;
    if (lowerCaseA > lowerCaseB) return 1;
    return 0;
});
// по именaм по алфавиту

const numbers2 = [1, 2, 3, 4, 5, 6];

const areAllEven = numbers2.every(number => {
    return number % 2 === 0
});
// сверяет все данные с условием и дает true если все выполняют условие
// .some() хотя бы один

const evenNumbers = numbers2.filter(number => number % 2 === 0);
// выводит данные выполняющие условия

const squredNumbers = numbers2.map(num => num * num);
// то же что и в пайтон

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
 }, 0);
 // весь массив в одно значение


let course2 = {
    name: 'JS for beginners',
    duration: 3
 };
let newCourse = {
    ...course2,
    name: "JS for pro's"
 };



 {
    const name = "Jumbo";
    console.log(name);
 }
 // нейм работает только в фигурных скобках,
 // использование за ними вызовет ошибку

 function introduce(language) {
    console.log(this.name + ' teaches ' + language);
 }

 const instructor = {name: 'Steven'};
 const introduction = introduce.bind(instructor);
 introduction('JavaScript')