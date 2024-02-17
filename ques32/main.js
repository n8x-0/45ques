"use strict";
let current_users = ['chlorine', 'noreen', 'parveen', 'nasreeen'];
let new_users = ['samrin', 'amrin', 'noreen', 'parveen'];
for (let i of new_users) {
    let nameAvailable = false;
    for (let j of current_users) {
        if (i == j) {
            nameAvailable = true;
            break;
        }
    }
    if (nameAvailable) {
        console.log(`username ${i} is already taken`);
    }
    else {
        console.log('all set');
    }
}
