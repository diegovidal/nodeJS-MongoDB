const hello = require('./hello');
const hello2 = require('./hello');

console.log(hello.name);

hello2.name = 'Fulano 2';

console.log(hello.name);

// const Hello = require('./hello')

// const helloInstance1 = new Hello();
// console.log(helloInstance1.name);

// const helloInstance2 = new Hello();
// helloInstance2.name = 'Fulano 2';
// console.log(helloInstance2.name);