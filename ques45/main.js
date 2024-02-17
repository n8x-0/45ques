"use strict";
function cars(manufacturer, model, color, opt) {
    let carsObj = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        opt: opt
    };
    return carsObj;
}
console.log(cars('toyota', '2024', 'black', 'its not too fast'), cars('nissan', '2007', undefined, 'its sucks'), cars('toyota', '2024'));
