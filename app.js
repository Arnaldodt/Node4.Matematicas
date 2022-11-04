const math = require('./mathlib')();

console.log('-- Suma 2 y 3 --');
console.log(math.add(2,3));

console.log('-- Multiplicar 3 y 5 --');
console.log(math.multiply(3,5));

console.log('-- elevar 5 --');
console.log(math.square(5));

console.log('-- radom entre 1 y 35 --');
console.log(math.random(1,35));