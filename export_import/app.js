import operacion, { sumar, restar } from './ejemplo1.js';

console.log(sumar(4,5));
console.log(restar(4,5));

const a = operacion();

console.log(a.sumar(10, 2));
console.log(a.restar(8, 5));