function make_album(a:string = 'unknown',b:string = 'unknown', c?: number): {a: string, b:string, c?: number}{
    let songObj: {a: string, b:string, c?: number} = {
        a: a,
        b: b,
    }

    if(songObj !== undefined){
        songObj.c = c;
    }
    return songObj;
}

let one = make_album('billieEli', 'album1');
let two = make_album('snoopDoog', 'album2', 2);
let three = make_album('rapDog')

console.log(one);
console.log(two);
console.log(three);