"use strict";
let a = 2, b = 4;
let c = 'car', d = 'car';
let item = ['apple', 'mango', 'banana'];
//equality and inequality
console.log('string car equal to another string car: ', c == d, '\n');
console.log('string car isnt equal to another string car: ', c != d, '\n');
//lower case check
if (c !== c.toUpperCase()) {
    console.log('`car` is in lower case ? ', true, '\n');
}
else {
    console.log('lower case ? ', false);
}
//nuerical test of comparision operators
console.log('2 is equal to 4 ?', a == b, '\n');
//greater than comp
console.log('2 is greater than 4 ?', a > b, '\n');
//less than comp
console.log('2 is less than 4 ?', a < b, '\n');
//greater and equal to 
console.log('2 is greater than or equal to 4 ?', a >= b, '\n');
//less than and equal to
console.log('2 is less than or equal to 4 ?', a <= b, '\n');
//&& and || operators
console.log('2 is less than or equal to 4 or string car is strictly equal to string car ?', a <= b || c === d, '\n');
console.log('2 is greater than or equal to 4 and string car is strictly equal to string car ?', a >= b && c === d, '\n');
//item in array ?
console.log(item, '\n');
console.log('item contain apple ?', item.includes('apple'), '\n');
console.log('item contain toys ?', item.includes('toys'), '\n');
