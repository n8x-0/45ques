"use strict";
// ques no 14
Object.defineProperty(exports, "__esModule", { value: true });
let guest = ['Allama Iqbal', 'Saddam Hussain', 'Muammar Gaddafi'];
for (let names of guest) {
    console.log(`Sir ${names}, I am delighted to extend my most sincere invitation to you, esteemed individuals, to join me for an exclusive dinner tomorrow. The agenda will revolve around the critical issue of political instability plaguing our society. :) \n`);
}
// question no. 15
console.log(`unfortunately ${guest[0]} cant make it tomorrow \n`);
guest = ['Quaid e Azam', 'Saddam Hussain', 'Muammar Gaddafi'];
for (let names of guest) {
    console.log(`Sir ${names}, I am delighted to extend my most sincere invitation to you, esteemed individuals, to join me for an exclusive dinner tomorrow. The agenda will revolve around the critical issue of political instability plaguing our society. :) \n`);
}
//question no. 16
console.log(`Luckily we are so delightful to announce that we are able to manage a bigger dinner table tomorrow \n`);
guest.unshift('Hirohito');
guest.splice(2, 0, 'Napoleon');
guest.push('lenin');
for (let names of guest) {
    console.log(`${names} I am thrilled to extend an exclusive invitation to you for a dinner discussion tonight at my home. The focus of our gathering will be a crucial conversation surrounding the pressing issue of political instability that our community is facing \n`);
}
// sir many tw itny bary logon ko bulaya th yei dinner tw delay hwa jarha :( ab mera kia hoga :). 
// question no 17
console.log(`we are postponding this meeting for some reasons and we have two special guests for tomorrow \n`);
console.log(guest);
for (let i = 2; i <= guest.length - 1; i++) {
    console.log(`${guest[i]} we are sorry to annouce that we cant invite you for the dinner \n`);
}
let invited = guest.splice(0, 2);
for (let i of invited) {
    console.log(`${i} you are still invited \n`);
}
guest = [];
console.log(guest);
