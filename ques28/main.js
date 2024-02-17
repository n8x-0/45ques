"use strict";
let age = 21;
if (age < 2) {
    console.log('person is a baby');
}
else if (age > 2 && age < 4) {
    console.log('toddler');
}
else if (age > 4 && age < 13) {
    console.log('kid');
}
else if (age > 13 && age < 20) {
    console.log('teenager');
}
else if (age > 20 && age < 65) {
    console.log('adult');
}
else {
    console.log('elder');
}
;
