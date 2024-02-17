"use strict";
function describe_city(name, country = 'pakistan') {
    console.log(`${name} is in ${country}`);
}
;
describe_city('karachi');
describe_city('lahore');
describe_city('washington', 'london');
