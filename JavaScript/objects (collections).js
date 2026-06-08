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

