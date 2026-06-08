let age = 16;
const canDrive = age >= 16 ? true : false;

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver'
console.log(customerType)

// if (points > 100) {
//    customerType = 'gold';
// } else {
//    customerType = 'silver';
// }

// || = or , && = and, !== не равняется, ! = not
// ?? = возьми первое значение, если его нет то второе

let job = 'Sales engineer'
switch (job) {
    case 'Software Develover':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Designing')
        break; // IMPORTANT!!!
    case 'Something':
        console.log('Bla Bla Bla');
        break;
    default:
        console.log('Does unknown job')
}
// заменяет писанину иф елс если нужно делать действие с одним объектом
