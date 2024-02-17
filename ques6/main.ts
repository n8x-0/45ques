import { log } from "console";

let name: string = '\t  \n Albert \n  \t';

console.log('whitespaced \n', name);

let strippedName: string = name.trim();

console.log('stripped \n', strippedName);