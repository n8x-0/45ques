"use strict";
function make_album(a = 'unknown', b = 'unknown', c) {
    let songObj = {
        a: a,
        b: b,
    };
    if (songObj !== undefined) {
        songObj.c = c;
    }
    return songObj;
}
let one = make_album('billieEli', 'album1');
let two = make_album('snoopDoog', 'album2', 2);
let three = make_album('rapDog');
console.log(one);
console.log(two);
console.log(three);
