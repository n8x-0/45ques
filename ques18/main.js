"use strict";
let locations = ['barcelona', 'gilgit', 'amazon', 'antartica'];
console.log('original: ', locations);
locations.slice().sort();
console.log('original sorted: ', locations);
locations.slice().sort().reverse();
console.log('original reverse sorted: ', locations);
locations.reverse();
console.log('reverse sorted: ', locations);
locations.reverse();
console.log('Re-reverse sorted: ', locations);
locations.sort();
console.log("sorted: ", locations);
//GPT use
locations.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", locations);
