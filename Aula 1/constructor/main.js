const Hello = require('./hello')

const helloInstance1 = new Hello();
console.log(helloInstance1.name);

const helloInstance2 = new Hello();
helloInstance2.name = 'Fulano 2';
console.log(helloInstance2.name);